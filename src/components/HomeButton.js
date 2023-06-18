import '../styles/Buttons.css';
import { Link } from 'react-router-dom';

function HomeButton({ handleTitleChange }) {

    return (
        <div className="wrapper">
            <Link to="/" aria-label="Home Button">
                <button
                    className="homeButton button"
                    value="Pet"
                    onClick={handleTitleChange}
                    aria-label="Home Button"
                >Home
                </button>
            </Link>
        </div>
    );
}

export default HomeButton;
