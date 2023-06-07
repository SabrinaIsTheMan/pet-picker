import '../styles/Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Pagination( {next, back} ) {
    return(
        <div className="wrapper">
            <div className="pageButtons">
            <button
                className="backButton pageButton button"
                onClick={(event) => { back(event) }} >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <button
                className="nextButton pageButton button"
                onClick={(event) => { next(event) }} >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            </div>
        </div>
    )
}

export default Pagination;

// state to hold offset value (null, 20, 40, 60)
    // resets to null when form is resubmitted

// buttons of value +- 20

// if result of fetching next 20 results in empty array, throw error
