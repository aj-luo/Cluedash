import styles from './Platform.module.css'

function Platform({type}) {
    const className = `${styles.block} ${type === "easy" ? styles.easy : type === "medium" ? styles.medium : styles.hard}`;
    return (
        <div className={className}>
            
        </div>
    );
}

export default Platform