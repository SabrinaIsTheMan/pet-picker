import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
    <div className="Footer">
        <p><FontAwesomeIcon icon={faPaw} /> Created by <a href="https://github.com/SabrinaIsTheMan" target="_blank" rel="noopener noreferrer">Sabrina</a> at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a> <FontAwesomeIcon icon={faPaw} /></p>
    </div>
    )
}

export default Footer;

