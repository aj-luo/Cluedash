import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import easycard from './assets/smiley_emoji.png'
import mediumcard from './assets/thinking_emoji.png'
import hardcard from './assets/demon_emoji.png'
import easysound from './assets/happy_sound.mp3'
import mediumsound from './assets/medium_sound.mp3'
import hardsound from './assets/hard_sound.mp3'

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
    <div className="cards_container">
      <Link to="/easy">
        <div
          className="card"
          id="easy_card"
          onMouseEnter={() => playHoverSound(hoverEasy)}
          onMouseLeave={() => stopHoverSound(hoverEasy)}
        >
          <img className="emoji" src={easycard} alt="easy emoji" />
          <h1>EASY</h1>
          <p>Guess Under 6 Minutes</p>
        </div>
      </Link>

      <Link to="/medium">
        <div
          className="card"
          id="medium_card"
          onMouseEnter={() => playHoverSound(hoverMedium)}
          onMouseLeave={() => stopHoverSound(hoverMedium)}
        >
          <img className="emoji" src={mediumcard} alt="medium emoji" />
          <h1>MEDIUM</h1>
          <p>Guess Under 4 Minutes</p>
        </div>
      </Link>

      <Link to="/hard">
        <div
          className="card"
          id="hard_card"
          onMouseEnter={() => playHoverSound(hoverHard)}
          onMouseLeave={() => stopHoverSound(hoverHard)}
        >
          <img className="emoji" src={hardcard} alt="hard emoji" />
          <h1>HARD</h1>
          <p>Guess Under 2 Minutes</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;