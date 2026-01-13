import PropTypes from 'prop-types';
import styles from './Student.module.css';

function User(props) {

    const welcomeMessage = <h2 className={styles.intro}> WELCOME {props.name}! CHOOSE YOUR LEVEL</h2>

    const welcomeMessage2 = <h2 className={styles.intro}> WELCOME GUEST! CHOOSE YOUR LEVEL</h2>

    return (
        props.isLoggedIn ? welcomeMessage : welcomeMessage2
    );
}
User.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
}

User.defaultProps = {
    isLoggedIn: false
};

export default User;