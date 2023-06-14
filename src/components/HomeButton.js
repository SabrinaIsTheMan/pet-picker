import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

function HomeButton({ handleTitleChange }) {

    return (
        <Link to="/" aria-label="Home">
            <button
                className="homeButton button"
                value="Pet"
                onClick={handleTitleChange}
                aria-label="Home Button"
            >Home
            </button>
        </Link>

    );
}

export default HomeButton;
