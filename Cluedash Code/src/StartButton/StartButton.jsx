import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Startbutton.module.css';

//the aws backend
const API_BASE_URL = import.meta.env.NEXT_PUBLIC_API_URL;

function StartButton({ difficulty }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // String to classify the class of button based on difficulty level
    const difficultyClass = styles[difficulty];

    //we set the number of guesses based of difficulty
    let numberGuesses;

    if (difficulty==="easy") {
        numberGuesses = 20;
    } else if (difficulty==="medium") {
        numberGuesses = 15;
    }
    else {
        numberGuesses = 10;
    }

    const handleStartGame = async () => {
        setLoading(true);

        try {
            //we call the api with difficulty and number of guesses
            const response = await fetch(`/api/startgame`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    difficulty: difficulty,
                    numberOfQuestions: numberGuesses
                })
            });

            //get the game id
            const data = await response.json();
            const gameId = data.game_id

            //if we get the game id, we navigate to the game session
            if (gameId) {
                navigate(`/game/${difficulty}/${gameId}`);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleStartGame} disabled={loading} className={`${styles.button} ${difficultyClass}`}>
            {loading ? 'Starting...' : 'new game!'}
        </button>
    )
}

export default StartButton;