import Header from './Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';


function Home() {

    return (
        <div className="Home">
            <Header />
            <h2>Which breed of dog or cat is right for you?</h2>
            <div className="HomeButtons">
                <div className="HomeSelectionButton" aria-label='Dog'><FontAwesomeIcon icon={faDog} /></div>
                <div className="HomeSelectionButton" aria-label='Cat'><FontAwesomeIcon icon={faCat} /></div>
            </div>
        </div>
    );
}

export default Home;
