import xIcon from './assets/x_logo.png'
import discordIcon from './assets/discord_logo.png'
import youtubeIcon from './assets/youtube_logo.png'
import instagramIcon from './assets/instagram_logo.png'
import halfdomeIcon from './assets/favicon.png'

function Footer() {
    return(
        <footer>
        <div className="footer-container">
            
            <div className="footer-left"></div>
            
            <div className="footer-center">
            <span className="social_media_icons">
                <a href="#"><img className="company_logos" src={xIcon} alt="x_logo" /></a>
                <a href="#"><img className="company_logos" src={discordIcon} alt="discord_logo" /></a>
                <a href="#"><img className="company_logos" src={youtubeIcon} alt="youtube_logo" /></a>
                <a href="#"><img className="company_logos" src={instagramIcon} alt="instagram_logo" /></a>
            </span>
            <p>&copy; {new Date().getFullYear()} Half-Dome Studios. All rights reserved.</p>
            </div>

            <div className="footer-right">
                <a href="#"><img className="halfdome-logo" src={halfdomeIcon} alt="Logo" /></a>
                <a href="#"><p>Half-Dome Studios</p></a>
            </div>

        </div>
        </footer>
    );
}

export default Footer