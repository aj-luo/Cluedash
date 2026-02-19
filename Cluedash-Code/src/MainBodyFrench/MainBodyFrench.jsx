import styles from './MainBodyFrench.module.css';
import Header from '../Header';
import User from '../Student/Student';
import Card from '../Card';
import Footer from '../Footer';

function MainbodyFrench() {
    return (
        <div className={styles.app-root}>
            <div className={styles.Mainbody}>
                <Header />
                <User isLoggedIn={false} name="Albert"/>
                <Card />
                <Footer />
            </div>
        </div>
    )
}

export default MainbodyFrench;