import Header from './Header.js';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';


function Home() {

    return (
        <div className="home">
            <Header />
            <h2>Which breed of dog or cat is right for you?</h2>

            <div>
                <button
                    className="button dogButton"
                    aria-label='Dog'
                    value='dog'
                >
                    <FontAwesomeIcon icon={faDog} size="3x" className="buttonIcon" />
                </button>

                <button
                    className="button catButton"
                    aria-label='Cat'
                    value='cat'
                >
                    <FontAwesomeIcon icon={faCat} size="3x" className="buttonIcon" />
                </button>
            </div>
        </div>
    );
}

export default Home;
