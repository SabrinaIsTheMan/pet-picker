import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

function HomeButton() {

    return (
        <Link to="/">
            <button className="homeButton button">
                Back
            </button>
        </Link>

    );
}

export default HomeButton;
