import logo from './assets/ClueDash_logo.png'

function Header() {
    return(
        <header>
            <img src={logo} alt="ClueDash Logo"/>
            <p>Can you guess in time?</p>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>   
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header