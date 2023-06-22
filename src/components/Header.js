import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

    return (
        <div className="header">
            <div className='wrapper'>
                <h1><FontAwesomeIcon icon={faPaw} /> {props.title} Picker <FontAwesomeIcon icon={faPaw} /></h1>
            </div>
        </div>
    )
}

export default Header;
