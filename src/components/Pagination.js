import '../styles/Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Pagination( {next, back, backDisabled, nextDisabled } ) {
    return(
        <div className="wrapper">
            <div className="pageButtons">
            <button
                className="backButton pageButton button"
                disabled={ backDisabled }
                onClick={ (event) => { back(event) } } >
                <FontAwesomeIcon icon={ faAngleLeft } />
            </button>

            <button
                className="nextButton pageButton button"
                    disabled={ nextDisabled }
                onClick={ (event) => { next(event) } } >
                <FontAwesomeIcon icon={ faAngleRight } />
            </button>
            </div>
        </div>
    )
}

export default Pagination;
