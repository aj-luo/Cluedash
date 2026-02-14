import styles from './Float.module.css';
import StartButton from '../StartButton/StartButton';
import React, { useEffect } from 'react';

function Float({type}) {
const className = `${styles.block} ${type === "easy" ? styles.easy : type === "medium" ? styles.medium : styles.hard}`;


let title_text;
let guesses;
let button_color;

    switch (type) {
        case "easy":
            title_text = "Easy";
            guesses = 20;
            button_color = styles.easybutton;
            break;
        case "medium":
            title_text = "Medium";
            guesses = 15;
            button_color = styles.mediumbutton;
            break;
        case "hard":
            title_text = "Hard";
            guesses = 10;
            button_color = styles.hardbutton;
            break;
        default:
            title_text = "Easy";
            guesses = 20;
            button_color = styles.easybutton;
    }   

 return (
    <div className={className}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.title_text}>{title_text} Mode</h1>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>Guess the object in {guesses} questions!</li>
                    <li>Your questions must be a yes/no question!</li>
                    <li>You are allowed unlimited guesses before last question!</li>
                    <li>If you dont get the answer after {guesses} questions, you lose!</li>
                    <li>There is one final guess after last question!</li>
                    <li>If you are ready, press start below!</li>
                </ul>
            </div>
            <div className={styles.startButton}>
            <StartButton difficulty={type}/>
            </div>
        </div>
    </div>
 );
}

export default Float;