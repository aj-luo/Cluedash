import styles from './Easy.module.css';
import Platform from '../Platform/Platform.jsx'

function Easy() {
    return (
        <div className={styles.approot}>
            <Platform type='easy'/>
        </div>
    )
}

export default Easy;