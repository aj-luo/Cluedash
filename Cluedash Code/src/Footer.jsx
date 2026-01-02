import xIcon from './assets/x_logo.png'
import discordIcon from './assets/discord_logo.png'
import youtubeIcon from './assets/youtube_logo.png'
import instagramIcon from './assets/instagram_logo.png'
import halfdomeIcon from './assets/favicon.png'

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <span className="social_media_icons">
                    <a><img className="company_logos" src={xIcon} alt="x_logo"></img></a>
                    <a><img className="company_logos" src={discordIcon} alt="discord_logo"></img></a>
                    <a><img className="company_logos" src={youtubeIcon} alt="youtube_logo"></img></a>
                    <a><img className="company_logos" src={instagramIcon} alt="instagram_logo"></img></a>
                </span>
                <ul>
                    <li><a href="#">Home</a></li>   
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a><img className="halfdome-logo" src={halfdomeIcon} alt="halfdome_logo"></img></a>
            </div>

                <p>&copy; {new Date().getFullYear()} Half-Dome Studios. All rights reserved.</p>
                
        </footer>
    );
}

export default Footer