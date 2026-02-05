import styles from './List.module.css';
import { Link } from "react-router-dom";

function List() {
    /*

    THIS IS AN EXAMPLE OF HOW TO MAP THROUGH AN ARRAY TO RENDER A LIST IN REACT

    const fruits = ["TERMS OF SERVICE", "PRIVACY", "ASSETS", "BLOG", "CONTACT"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (
        <ul className={styles.list}>{listItems}</ul>
    );  
    */

    return (
        <ul className={styles.list}>
            <a href="#"><li>T.O.S.</li></a>
            <li>|</li>
            <a href="#"><li>PRIVACY</li></a>
            <li>|</li>
            <a href="#"><li>ASSETS</li></a>
            <li>|</li>
            <Link to="/instructions"><li>INSTRUCTIONS</li></Link>
            <li>|</li>
            <a href="#"><li>CONTACT</li></a>
        </ul>
    )
}

export default List;