import easycard from './assets/easy_mode.png'
import mediumcard from './assets/medium_mode.png'
import hardcard from './assets/hard_mode.png'

function Card() {
    return(
        <div className="cards_container">
            <a>
            <div className="card" id="easy_card">
                <img className="card_image" src={easycard}  alt="easy picture"></img>
                <h2>EASY</h2>
                <p>Guess in Under 6 Minutes</p>
            </div>
            </a>

            <a>
            <div className="card" id="medium_card">
                <img className="card_image" src={mediumcard}  alt="medium picture"></img>
                <h2>MEDIUM</h2>
                <p>Guess in Under 4 Minutes</p>
            </div>
            </a>
            
            <a>
            <div className="card" id="hard_card">
                <img className="card_image" src={hardcard}  alt="hard picture"></img>
                <h2>HARD</h2>
                <p>Guess in Under 2 Minutes</p>
            </div>
            </a>
        </div>
    );
}

export default Card