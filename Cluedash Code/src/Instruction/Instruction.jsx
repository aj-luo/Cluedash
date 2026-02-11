import styles from './Instruction.module.css';
import infinite from '../assets/infinite.png';
import sad from '../assets/sad_face.png';
import home from '../assets/home.png'
import youtube from '../assets/youtube_logo.png';
import question from '../assets/question.png';
import yes_no from '../assets/yes_or_no.png';
import link from '../assets/link.png'
import { Link } from "react-router-dom";


function Instruction() {
    return (
        <div className= {styles.approot}>
            <div className={styles.block}>
                <div className={styles.container}>
                    <div className={styles.homeButton}><Link to="/en"><button className={styles.Buttons}><img src={home} width="30" height="30"></img> <h4>Home</h4> </button></Link></div>
                    <div className={styles.title}>
                        <h1>Instructions</h1>
                    </div>
                    <div className={styles.videoButton}><a href="https://www.youtube.com/watch?v=ujriV3vkC9w&list=RDujriV3vkC9w&start_radio=1" target="_blank"><button className={styles.Buttons}> <img src={youtube} width="40" height="30"></img> <h4>Tutorial</h4></button></a></div>
                    <div className={styles.content}>
                        <div className={styles.steps}>
                            <div className={styles.instruction_box}>
                                <p>Guess the object with certain number of questions!</p>
                                <img width="60" height="50" src={question}></img>
                            </div>
                            <div className={styles.instruction_box}>
                                <p>Your questions must be a yes/no question!</p>
                                <img width="60" height="50" src={yes_no}></img>
                            </div>
                            <div className={styles.instruction_box}>
                                <p>Take all the time you need!</p>
                                <img width="60" height="50" src={infinite}></img>
                            </div>
                            <div className={styles.instruction_box}>
                                <p>If you dont get the answer after all your questions, you lose!</p>
                                <img width="60" height="50" src={sad}></img>
                            </div>
                            <div className={styles.instruction_box}>
                                <p>If you are still unsure on instructions, go to the link at the top!</p>
                                <img width="60" height="50" src={link}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instruction;