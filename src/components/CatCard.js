import { useState } from 'react';
import '../styles/Card.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function CatCard(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <li>
                <button
                className="card catCard"
                aria-label={`${props.name} Card`}
                onClick={() => setOpen(true)}
                >
                    <div className="breedName">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="imgContainer">
                        <img src={props.imgSource} alt={props.altText}></img>
                    </div>
                </button>
            </li>

            <Modal
                open={open}
                aria-labelledby={`${props.name} Modal`}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
            >
                <div className="cardFactsTitle">
                    <h3>{props.name}</h3>
                    <p>({props.origin})</p>
                </div>

                <div className="cardFacts">
                    <div className="cardFactsGroup">
                        <h4>Care</h4>
                        <div className="cardsData">
                            <p><span>Grooming Needs:</span> {props.groom}/5</p>
                            <p><span>Shedding:</span> {props.shed}/5</p>
                        </div>
                    </div>

                    <div className="cardFactsGroup">
                        <h4>Friendliness</h4>
                        <div className="cardData">
                            <p><span>Children:</span> {props.kids}/5</p>
                            <p><span>Family:</span> {props.fam}/5</p>
                            <p><span>Other Pets:</span> {props.others}/5</p>
                        </div>
                    </div>

                    <div className="cardsFactGroup">
                        <h4>Personality Traits</h4>
                        <div className="cardsData">
                            <p><span>Intelligence:</span> {props.smart}/5</p>
                            <p><span>Playfulness:</span> {props.play}/5</p>
                        </div>

                    </div>

                    <div className="cardsFactGroup">
                        <h4>Health</h4>
                        <div className="cardData">
                            <p><span>General Health:</span> {props.health}/5</p>
                            <p><span>Body Size:</span> {props.length}</p>
                            <p><span>Life Expectancy:</span> {props.minYears} to {props.maxYears} years</p>
                            <p><span>Weight:</span> {props.minWeight} to {props.maxWeight} lbs</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CatCard;
