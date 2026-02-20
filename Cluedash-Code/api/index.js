import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import OpenAI from "openai";
import { supabase, words } from './db.js';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express()
//CORS middleware
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash-8b",
    systemInstruction: `Respond with "Yes", "No", nothing more. If this is not a yes or no question, say "not a proper yes/no question". If the question is a bit ambiguous, not yes or no, explain why saying "This is ambiguous: " along with the reason in 1 short sentence, DO NOT DO NOT mention the answer at all, at all in your response!!! If the user guesses the answer correctly, then respond "Correct". Also if the guess is close enough (almost synonymous) you can also reply "Correct"`
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

//Middleware, tells express to parse incoming data from frontend, otherwise req.body will be undefined
app.use(express.json());

//helper to get the word
async function fetchWord() {
    const { data, error } = await words
        .from('cluedash_words')
        .select('word');
    
    if (error) {
        console.error('Database Error:', error);
        return null;
    }

    if (!data || data.length === 0) {
        console.log('No words found!');
        return null;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex].word;
}

//helper to get the answer from the ai api
async function fetchAnswerFromAI(question) {
    const result = await model.generateContent(question);
    const response = await result.response;

    // Safety check: if the model blocked the response, text() throws an error.
    try {
        return response.text().trim();
    } catch (e) {
        console.error("AI response was blocked or empty:", e);
        return "This question cannot be answered for safety reasons.";
    }
}

//This initializes the game (when you click 'start game' or 'play again'), in the DB the game session starts and we pass the difficulty and # of questions allowed

app.post('/api/startgame', async (req, res) => {
    const { difficulty, numberOfQuestions } = req.body

    if (!difficulty || !numberOfQuestions) {
        return res.status(400).json({ error: 'Missing the difficulty'})
    }

    //also we need to call the ai api to generate a random word to put in the db
    const word = await fetchWord();

    //send the difficulty and number of Questions to the db
    const { data, error } = await supabase
        .from('Cluedash_game')
        .insert([{difficulty: difficulty, remaining_questions: numberOfQuestions, answer: word}])
        .select();
    
    //error handling if adding to db is unsuccessful
    if (error) return res.status(500).json({ error: error.message })

    //get game id
    const gameId = data[0].game_id;
    
    //send back json in the response, this sends back entire row data, which we need to get the id of the game session
    res.json({ message: 'Game started', game_id: gameId })
})

//This gets the answer for a question, it will return the answer to frontend (yes, no, or explanation that this is not valid question and why), it also updates the db in meantime to reduce the remaining questions by 1
app.post('/api/askquestion/:id', async (req, res) => {
    const { question } = req.body

    const game_id = req.params.id

    if (!question) {
        return res.status(400).json({ error: 'Please ask a question!'})
    }

    //we need to get the word from the db with the unique id of the game in the db
    const { data, error } = await supabase
        .from('Cluedash_game')
        .select('answer, remaining_questions, status')
        .eq('game_id', game_id)
        .single();
    
    if (error) {
        return res.status(500).json({ error: error.message })
    }
    
    //Get the answer for this game session
    const answer = data.answer;

    //Get the remaining questions for this game session
    const new_remaining = data.remaining_questions - 1

    //Current status
    let status = data.status;

    //Current answer, this will be shrouded for now before the user loses
    let final_answer = '';
    
    //The prompt to send to the AI
    const question_send = `The user of a game asked "${question}", the word/answer is "${answer}"`

    try {
        //Send question/prompt to the AI
        const api_response = await fetchAnswerFromAI(question_send)

        //boolean to check if the response is Correct
        const won = api_response.toLowerCase().includes("correct");

        //if won is true, then change the status
        if (won) {
            status = "won"
        }

        //check if you lost
        if (new_remaining === 0 && status === "active") {
            status = "lost"
            final_answer = answer;
        }

        //Update the remaining questions in db
        const { error: updateError } = await supabase
            .from('Cluedash_game')
            .update({remaining_questions: new_remaining, status: status})
            .eq('game_id', game_id)
        
        //check if there were any errors during update
        if (updateError) {
            return res.status(500).json({error: updateError.message})
        }

        //Send the answer back to user
        res.status(200).json({
            answer: api_response,
            remaining_questions: new_remaining,
            game_status: status,
            final_answer: final_answer
        })

        } 
    catch (aiError) {
            res.status(500).json({ error: "AI service failed" });
        }
})

//separate method just to get game data when gamescreen first mounts
app.get('/api/getgamedata/:id', async (req, res) => {

    const game_id = req.params.id

    //we need to get the initial question count from the db with the unique id of the game in the db
    const { data, error } = await supabase
        .from('Cluedash_game')
        .select('remaining_questions, status')
        .eq('game_id', game_id)
        .single();
    
    if (error) {
        return res.status(500).json({ error: error.message })
    }

    //Get the remaining questions and the answer for this game session
    const remaining = data.remaining_questions
    const status = data.status

    try {
        //Send the num questions back to user
        res.status(200).json({
            remaining_questions: remaining,
            status: status
        })

        } 
    catch (Error) {
            res.status(500).json({ error: "Database query failed" });
        }
})

//separate method to get the final answer once user loses the game
app.get('/api/getfinalanswer/:id', async (req, res) => {
    const game_id = req.params.id

    //we need to get the answer from the db with the unique id of the game in the db
    const { data, error } = await supabase
        .from('Cluedash_game')
        .select('answer')
        .eq('game_id', game_id)
        .single();
    
    if (error) {
        return res.status(500).json({ error: error.message })
    }

    //Get the remaining questions and the answer for this game session
    const final_answer = data.answer


    try {
        //Send the num questions back to user
        res.status(200).json({
            final_answer: final_answer
        })

        } 
    catch (Error) {
            res.status(500).json({ error: "Database query failed" });
        }
})

//separate method to update the status to lost if the user forfeits/gives up
app.put('/api/forfeit/:id', async (req, res) => {

    const game_id = req.params.id

    //Update the db with the status of lost
    const { error: updateError } = await supabase
        .from('Cluedash_game')
        .update({status: 'lost'})
        .eq('game_id', game_id)
    
    //check if there were any errors during update
    if (updateError) {
        return res.status(500).json({error: updateError.message})
    }

    //if successful just return 200
    res.sendStatus(200)
})

//goes at very bottom of code, listen to incoming request at the IP address + PORT
//app.listen(PORT, () => console.log(`Server started on ${PORT}`))

export default app;