import styles from './Easygame.module.css'
import React, { useState, useEffect } from 'react';

function Easygame() {

    const [currentQuestion, setcurrentQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [guesscount, setQuestionCount] = useState(20);

    const handleGuessSubmit = () => {
        if (currentQuestion.trim() === "") return;

        setQuestions(prevQuestions => [...prevQuestions, currentQuestion])

        setQuestionCount(guesscount - 1)
        setcurrentQuestion("");
    }

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <h1>Ask me a yes/no question</h1>
                <input placeholder='Type your question here' value={currentQuestion}
                        onChange={(e) => setcurrentQuestion(e.target.value)}></input>
                <button onClick={handleGuessSubmit}>SUBMIT</button>
                <button>GIVE UP</button>
            </div>

            <div className={styles.questionlist}>
                <p>Questions remaining: {guesscount}</p>
                <div className={styles.questionhistory}>
                    <p>Question history:</p>
                    {questions.length > 0 ? (
                    <ul>
                        {questions.map((question, index) => (
                            // 'key' is crucial for React performance
                            <li key={index}>
                                {question}
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
    )
}

export default Easygame