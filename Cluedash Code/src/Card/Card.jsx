import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import easycard from '../assets/smiley_emoji.png'
import mediumcard from '../assets/thinking_emoji.png'
import hardcard from '../assets/demon_emoji.png'
import easysound from '../assets/happy_sound.mp3'
import mediumsound from '../assets/medium_sound.mp3'
import hardsound from '../assets/hard_sound.mp3'
import styles from './Card.module.css'

function Card() {
      const hoverEasy = useRef(null);
      const hoverMedium = useRef(null);
      const hoverHard = useRef(null);
    
      useEffect(() => {
        /*Initialize audio objects in refs and their volumes when Card component first mounts */
        hoverEasy.current = new Audio(easysound);
        hoverMedium.current = new Audio(mediumsound);
        hoverHard.current = new Audio(hardsound);
    
        hoverEasy.current.volume = 0.2;
        hoverMedium.current.volume = 0.2;
        hoverHard.current.volume = 0.2;
    
        /*Cleanup function, only runs when the component unmounts, pauses all audio of the refs and resets the audio back to beginning */
        return () => {
          [hoverEasy, hoverMedium, hoverHard].forEach(ref => {
            if (ref.current) {
              ref.current.pause();
              ref.current.currentTime = 0;
            }
          });
        };
      }, []);
     
      /*The function to play the sound, it starts from beginning (0) */
      const playHoverSound = (soundRef) => {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
      };

      /*The function to pause the sound, it brings the audio back to beginning (0) */
      const stopHoverSound = (soundRef) => {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
      };

    return (
        <div className={styles.card_container}>
            <div className={`${styles.easycard} ${styles.card}`}>
                <img className={styles.emoji} src={easycard} alt="easy emoji" />
                <h1>EASY</h1>
                <p>15 questions</p>
            </div>
            <div className={`${styles.mediumcard} ${styles.card}`}>
                <img className={styles.emoji} src={mediumcard} alt="medium emoji" />
                <h1>MEDIUM</h1>
                <p>10 questions</p>
            </div>
            <div className={`${styles.hardcard} ${styles.card}`}>
                <img className={styles.emoji} src={hardcard} alt="hard emoji" />
                <h1>HARD</h1>
                <p>5 questions</p>
            </div>
        </div>
      );
}

export default Card;