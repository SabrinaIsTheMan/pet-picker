import { useState } from 'react';
import '../styles/Cards.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function DogCards(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <li className="cards dogCards">
                <div className="cardFace" onClick={() => setOpen(true)}>
                    <div className="breedName">
                        <h2>{props.name}</h2>
                        </div>
                    <div className="imgContainer">
                        <img src={props.imgSource} alt={props.altText}></img>
                    </div>
                </div>
            </li>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal'
                }}
            >
                <div className="cardsFactsTitle">
                    <h3>{props.name}</h3>
                </div>

                <div className="cardsFacts">
                    <div className="cardsFactsGroup">
                        <h4>Physical Traits</h4>
                        <div className="cardsData">
                            <p><span>Drooling:</span> {props.drool}/5</p>
                            <p><span>Coat Length:</span> {props.coat}/5</p>
                            <p><span>Grooming Needs:</span> {props.groom}/5</p>
                            <p><span>Shedding:</span> {props.shed}/5</p>
                        </div>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Friendliness</h4>
                        <div className="cardsData">
                            <p><span>Children:</span> {props.kids}/5</p>
                            <p><span>Other Dogs:</span> {props.others}/5</p>
                            <p><span>Strangers:</span> {props.strangers}/5</p>
                        </div>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Personality Traits</h4>
                        <div className="cardsData">
                            <p><span>Barking:</span> {props.bark}/5</p>
                            <p><span>Energy:</span> {props.energy}/5</p>
                            <p><span>Playfulness:</span> {props.play}/5</p>
                            <p><span>Protectiveness:</span> {props.protect}/5</p>
                            <p><span>Trainability:</span> {props.train}/5</p>
                        </div>
                    </div>

                    <div className="cardsFactsGroup">
                        <h4>Health</h4>
                        <div className="cardsData">
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

export default DogCards;
