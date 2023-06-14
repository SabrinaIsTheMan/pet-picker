import { useState } from 'react';
import '../styles/Card.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function DogCard(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <li>
                <button
                className="card dogCard"
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
                </div>

                <div className="cardFacts">
                    <div className="cardFactsGroup">
                        <h4>Physical Traits</h4>
                        <div className="cardData">
                            <p><span>Drooling:</span> {props.drool}/5</p>
                            <p><span>Coat Length:</span> {props.coat}/5</p>
                            <p><span>Grooming Needs:</span> {props.groom}/5</p>
                            <p><span>Shedding:</span> {props.shed}/5</p>
                        </div>
                    </div>

                    <div className="cardFactsGroup">
                        <h4>Friendliness</h4>
                        <div className="cardData">
                            <p><span>Children:</span> {props.kids}/5</p>
                            <p><span>Other Dogs:</span> {props.others}/5</p>
                            <p><span>Strangers:</span> {props.strangers}/5</p>
                        </div>
                    </div>

                    <div className="cardFactsGroup">
                        <h4>Personality Traits</h4>
                        <div className="cardData">
                            <p><span>Barking:</span> {props.bark}/5</p>
                            <p><span>Energy:</span> {props.energy}/5</p>
                            <p><span>Playfulness:</span> {props.play}/5</p>
                            <p><span>Protectiveness:</span> {props.protect}/5</p>
                            <p><span>Trainability:</span> {props.train}/5</p>
                        </div>
                    </div>

                    <div className="cardFactsGroup">
                        <h4>Health</h4>
                        <div className="cardData">
                            <p><span>Life Expectancy:</span> {props.minYears} ~ {props.maxYears} yrs</p>
                            <p><span>Female Height:</span> {props.minHF}" ~ {props.maxHF}"</p>
                            <p><span>Female Weight:</span> {props.minWF} ~ {props.maxWF} lbs</p>
                            <p><span>Male Height:</span> {props.minHM}" ~ {props.maxHM}"</p>
                            <p><span>Male Weight:</span> {props.minWM} ~ {props.maxWM} lbs</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DogCard;
