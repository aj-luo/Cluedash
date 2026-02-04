import styles from './Easy.module.css';
import Float from '../Float/Float.jsx'

function Easy() {
    return (
        <div className={styles.approot}>
            <Float type="easy"/>
        </div>
    )
}

export default Easy;