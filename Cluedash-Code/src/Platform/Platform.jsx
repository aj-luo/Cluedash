import styles from './Platform.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import User from "../Student/Student.jsx";
import Footer from '../Footer/Footer.jsx';
import Logo from '../assets/favicon.png';
import Language from '../assets/language.webp'
import Card from '../Card/Card.jsx';

function Platform({type}) {
    const className = `${styles.block}`;
    return (
        <div className={className}>
            <div className={styles.container}>
                <div className={styles.item_1}>
                    <DotLottieReact
                    src="https://lottie.host/c289557c-be7a-47d3-bb7c-26e81e1d3ca6/pV2L8Bu4IK.lottie"
                    loop
                    autoplay/>
                </div>
                <div className={styles.item_3}><Card /></div>
                <div className={styles.item_4}><Footer className={styles.footer}/></div>
                <div className={styles.item_5}><a href='https://www.linkedin.com/company/half-dome-studios' target="_blank"><img className={styles.logo} src={Logo} alt="Half-Dome Studios Logo" /></a></div>
            </div>
        </div>
    );
}

export default Platform