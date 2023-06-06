import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

function HomeButton({ handleTitleChange }) {

    return (
        <Link to="/">
            <button
                className="homeButton button"
                value="Pet"
                onClick={handleTitleChange}>
                Home
            </button>
        </Link>

    );
}

export default HomeButton;
