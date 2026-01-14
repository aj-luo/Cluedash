import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import User from "./Student/Student.jsx";

function Mainbody() {
    return (
        <div className="Mainbody">
            <Header />
            <User isLoggedIn={false} name="Albert"/>
            <Card />
            <Footer />
        </div>
    );
}

export default Mainbody