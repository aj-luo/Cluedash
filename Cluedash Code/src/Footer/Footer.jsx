import styles from './Footer.module.css';
import xIcon from '../assets/x_logo.png'
import discordIcon from '../assets/discord_logo.png'
import youtubeIcon from '../assets/youtube_logo.png'
import instagramIcon from '../assets/instagram_logo.png'
import List from '../List/List.jsx'

function Footer() {
    return(
        <footer>
            <div className={styles.footer_container}>
                <List />
                <span className={styles.social_media_icons}>
                    <a href="#"><img className={styles.company_logos} src={xIcon} alt="x_logo" /></a>
                    <a href="#"><img className={styles.company_logos} src={discordIcon} alt="discord_logo" /></a>
                    <a href="#"><img className={styles.company_logos} src={youtubeIcon} alt="youtube_logo" /></a>
                    <a href="#"><img className={styles.company_logos} src={instagramIcon} alt="instagram_logo" /></a>
                </span>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Half-Dome Studios. All rights reserved.</p>
            </div>
        </footer> 
    );
}

export default Footer