import styles from './Gamescreen.module.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loading_image from '../assets/loading_gif.gif'
import StartButton from '../StartButton/StartButton';
import HomeIcon from '../assets/home.png';
import { Link } from "react-router-dom";

function Gamescreen() {

    //This is the game id we have to pass to the backend api everytime we make a guess
    const { difficulty, gameId } = useParams();

    //sets the questions in an array to display to user
    const [currentQuestion, setcurrentQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [numQuestions, setNumQuestions] = useState(0);
    
    //set the current status of the game, can be one of these 3: active, won, lost
    const [status, setStatus] = useState('active');

    //This is used to display the loading icon
    const [loading, setLoading] = useState(false);

    //This is used to get the final answer
    const [final_answer, setFinalAnswer] = useState('');


    //Set the className of the container depending on difficulty
    let difficulty_class;
    let block_class;
    let highlight_class;

    if (difficulty==="easy") {
        difficulty_class = 'easy_approot'
        block_class = 'easyblock'
        highlight_class = 'easy'
    } else if (difficulty==="medium") {
        difficulty_class = 'medium_approot'
        block_class = 'mediumblock'
        highlight_class = 'medium'
    } else {
        difficulty_class = 'hard_approot'
        block_class = 'hardblock'
        highlight_class = 'hard'
    }


    //We render these depending on what state we are in
    const renderActive = () => 
    
            <div className={styles.question}>
                <h1>GUESS THE WORD! THINK HARD!</h1>
                <input className={styles.input} placeholder='Type your question here' value={currentQuestion}
                        onChange={(e) => setcurrentQuestion(e.target.value)}></input>
                
                <button className={`${styles.submitButton} ${styles[highlight_class]}`} onClick={handleGuessSubmit}>{loading ? (
                    <img src={loading_image} alt="Loading..." style={{ height: '20px' }} />
                    ) : (
                        'SUBMIT!'
                    )}</button>

                <button className={`${styles.forfeitButton} ${styles[highlight_class]}`} onClick={handleForfeit}>GIVE UP</button>

                <div className={styles.row_three}>
                    <div className={styles.questionlist}>
                        <p>Questions remaining: {numQuestions}</p>
                        <div className={styles.questionhistory}>
                            <p>Question history:</p>
                            {questions.length > 0 ? (
                            <ul className={styles.question_list}>
                                {questions.map((question, index) => (
                                    // 'key' is crucial for React performance
                                    <li key={index}>
                                        Q: {question[0]} A: {question[1]}
                                    </li>
                                ))}
                            </ul>
                            ) : 
                            (
                                <p>No guesses made yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>;

    const renderWon = () => <div className={styles.question}>
                <h1>Congrats, you guessed correctly!</h1>
                <StartButton difficulty={difficulty}/>
                <Link to="/en" className={`${styles.homeButton} ${styles[highlight_class]}`}>
                    <img className={styles.shadowed_image} src={HomeIcon} alt="Home" />
                </Link> 
            </div>;

    const renderLost = () => <div className={styles.question}>
                <h1>You Lost!</h1>
                <p>The answer was: {final_answer}</p>
                <StartButton className={styles.startbutton} difficulty={difficulty}/>
                <Link to="/en" className={`${styles.homeButton} ${styles[highlight_class]}`}>
                    <img className={styles.shadowed_image} src={HomeIcon} alt="Home" />
                </Link>
            </div>;

    //Fetch the game data on mount with useEffect
    useEffect(() => {
        const fetchGameData = async () => {
            try {

                setQuestions([]);       // Clear old questions
                setNumQuestions(0);     // Reset count
                setStatus('active');    // Set status to active
                setcurrentQuestion(""); // Clear input

                // Call backend to get details about this gameId
                const response = await fetch(`/api/getgamedata/${gameId}`);
                const data = await response.json();
                
                //set the number of initial questions
                setNumQuestions(data.remaining_questions);

            } catch (error) {
                console.error("Error fetching game:", error);
            }
        }

        //call the above function on mount to populate numQuestions
        fetchGameData();
    }, [gameId])



    //helper to get the final answer, once the user loses to display to them
    const handleGetAnswer = async () => {
        try {
            //we call the api with difficulty and number of guesses
            const response = await fetch(`/api/getfinalanswer/${gameId}`);
            const data = await response.json();

            //get the info from backend
            const final_answer = data.final_answer

            // lets update final_answer if the status is lost
            setFinalAnswer(final_answer)

        } catch (error) {
            console.error('Error:', error);
        }
    }

    //helper to add questions to array we display and to send the question to backend to process
    const handleGuessSubmit = async () => {

        setLoading(true);

        if (currentQuestion.trim() === "") {
            setLoading(false);
            return
        }

        //lets get our answer, remaining_questions, and game_status
        try {
            //we call the api with difficulty and number of guesses
            const response = await fetch(`/api/askquestion/${gameId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    question: currentQuestion
                })
            });

            //get the info from backend
            const data = await response.json()
            const answer = data.answer
            const remaining_questions = data.remaining_questions
            const game_status = data.game_status

            //1. First lets update the current question count
            setNumQuestions(remaining_questions)

            //2. Second lets update the current status as well
            setStatus(game_status)

            //3. If status is lost, then we update the answer
            if (game_status === 'lost') {
                handleGetAnswer()
            }

            setQuestions(prevQuestions => [...prevQuestions, [currentQuestion, answer]])
            setcurrentQuestion("");

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleForfeit = async () => {
        try {
            // Call backend to update the status
            console.log(gameId)
            const response = await fetch(`/api/forfeit/${gameId}`, {
                method: 'PUT'}) 
            // Check if the request was successful
            if (response.ok) {
                setStatus('lost');
                handleGetAnswer()
            } else {
                console.error("Failed to update status on server");
            }
        } catch (error) {
            console.error("Error fetching game:", error);
        }
    }

    return (
        <div className={`${styles[difficulty_class]}`}>
            <div className={`${styles[block_class]}`}>
                <div className={styles.row_two}>
                {status === 'active' && renderActive()}
                {status === 'won' && renderWon()}
                {status === 'lost' && renderLost()}
                </div>
            </div>
        </div>
    )
}

export default Gamescreen