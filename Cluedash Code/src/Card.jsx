import easycard from './assets/smiley_emoji.png'
import mediumcard from './assets/thinking_emoji.png'
import hardcard from './assets/demon_emoji.png'

function Card() {
    return(
        <div className="cards_container">
            <a>
            <div className="card" id="easy_card">
                <img className="emoji" src={easycard} alt="easy emoji"></img>
                <h1>EASY</h1>
                <p>Guess Under 6 Minutes</p>
            </div>
            </a>

            <a>
            <div className="card" id="medium_card">
                <img className="emoji" src={mediumcard} alt="medium emoji"></img>
                <h1>MEDIUM</h1>
                <p>Guess Under 4 Minutes</p>
            </div>
            </a>
            
            <a>
            <div className="card" id="hard_card">
                <img className="emoji" src={hardcard} alt="hard emoji"></img>
                <h1>HARD</h1>
                <p>Guess Under 2 Minutes</p>
            </div>
            </a>
        </div>
    );
}

export default Card