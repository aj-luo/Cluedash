import easycard from './assets/smiley_emoji.png'
import mediumcard from './assets/thinking_emoji.png'
import hardcard from './assets/demon_emoji.png'
import easysound from './assets/happy_sound.mp3'
import mediumsound from './assets/medium_sound.mp3'
import hardsound from './assets/hard_sound.mp3'
import { Link } from "react-router-dom";

const hoverEasy = new Audio(easysound);
hoverEasy.volume = 0.2;

const hoverMedium = new Audio(mediumsound);
hoverMedium.volume = 0.2;

const hoverHard = new Audio(hardsound);
hoverHard.volume = 0.2;

function playHoverSound(sound) {
    sound.currentTime = 0 // restart sound
    sound.play()
}

function stopHoverSound(sound) {
    sound.pause()
    sound.currentTime = 0
}

function Card() {
    return(
        <div className="cards_container">
            <Link to="/easy">
            <div className="card" id="easy_card" onMouseEnter={() => playHoverSound(hoverEasy)} onMouseLeave={() => stopHoverSound(hoverEasy)}>
                <img className="emoji" src={easycard} alt="easy emoji"></img>
                <h1>EASY</h1>
                <p>Guess Under 6 Minutes</p>
            </div>
            </Link>

            <Link to="/medium">
            <div className="card" id="medium_card" onMouseEnter={() => playHoverSound(hoverMedium)} onMouseLeave={() => stopHoverSound(hoverMedium)}>
                <img className="emoji" src={mediumcard} alt="medium emoji"></img>
                <h1>MEDIUM</h1>
                <p>Guess Under 4 Minutes</p>
            </div>
            </Link>
            
            <Link to="/hard">
            <div className="card" id="hard_card" onMouseEnter={() => playHoverSound(hoverHard)} onMouseLeave={() => stopHoverSound(hoverHard)}>
                <img className="emoji" src={hardcard} alt="hard emoji"></img>
                <h1>HARD</h1>
                <p>Guess Under 2 Minutes</p>
            </div>
            </Link>
        </div>
    );
}

export default Card