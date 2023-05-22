import '../styles/Selection.css';
import '../styles/Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';


function Selection() {

    return (
        <div className="selection">
            <div className='wrapper'>
                <h2>Which breed of dog or cat is right for you?</h2>

                <div>
                    <button
                        className="selectionButton dogButton"
                        aria-label='Dog'
                        value='dog'
                    >
                        <FontAwesomeIcon icon={faDog} size="3x" className="buttonIcon" />
                    </button>

                    <button
                        className="selectionButton catButton"
                        aria-label='Cat'
                        value='cat'
                    >
                        <FontAwesomeIcon icon={faCat} size="3x" className="buttonIcon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Selection;