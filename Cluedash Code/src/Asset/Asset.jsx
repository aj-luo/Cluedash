import styles from './Asset.module.css';
import home from '../assets/home.png';
import { Link } from "react-router-dom";
import monogram from '../assets/background_monogram.png';
import download from '../assets/download.png';
import logo from '../assets/logo.png'


function Asset() {
    return (
        <div className= {styles.approot}>
            <div className={styles.block}>
                <div className={styles.container}>
                    <div className={styles.homeButton}><Link to="/en"><button className={styles.Buttons}><img src={home} width="30" height="30"></img> <h4>Home</h4> </button></Link></div>
                    <div className={styles.title}>
                        <h1>Assets</h1>
                    </div>
                    <div className={styles.asset1}>
                        <h2>Asset 1: ClueDash wallpaper (png file)</h2>
                        <img className={styles.monogram}width="300" height="200" src={monogram}></img>
                        <a href={monogram} download><button className={styles.downloadButton}><img src={download} width="30" height="30"></img></button></a>
                    </div>
                    <div className={styles.asset2}>
                        <h2>Asset 2: ClueDash logo (.lottie file)</h2>
                        <img className={styles.logo}width="500" height="200" src={logo}></img>
                        <a href={"/logo.lottie"} download><button className={styles.downloadButton}><img src={download} width="30" height="30"></img></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asset;