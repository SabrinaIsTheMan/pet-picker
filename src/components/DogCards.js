import '../styles/DogCards.css';

function DogCards(props) {
    return (
        <li className="DogCards">
            <h3>{props.name}</h3>
            <img src={props.imgSource} alt={props.altText}></img>
            <div className="DogCardsFacts">

                <div className="DogCardsFactsGroup">
                    <h4>Physical Traits</h4>
                    <p><span>Drooling:</span> {props.drool}/5</p>
                    <p><span>Length:</span> {props.coat}/5</p>
                    <p><span>Grooming Needs:</span> {props.grrom}/5</p>
                    <p><span>Shedding:</span> {props.shed}/5</p>
                </div>

                <div className="DogCardsFactsGroup">
                    <h4>Friendliness</h4>
                    <p><span>Children:</span> {props.kids}/5</p>
                    <p><span>Other Dogs:</span> {props.others}/5</p>
                    <p><span>Strangers:</span> {props.strangers}/5</p>
                </div>

                <div className="DogCardsFactsGroup">
                    <h4>Personality Traits</h4>
                    <p><span>Barking:</span> {props.bark}/5</p>
                    <p><span>Energy:</span> {props.energy}/5</p>
                    <p><span>Playfulness:</span> {props.play}/5</p>
                    <p><span>Protectiveness:</span> {props.protect}/5</p>
                    <p><span>Trainability:</span> {props.train}/5</p>
                </div>

                <div className="DogCardsFactsGroup">
                    <h4>Livelihood</h4>
                    <p><span>Life Expectancy:</span> {props.minYears} ~ {props.maxYears} yrs</p>
                    <p><span>Female Height:</span> {props.minHF}" ~ {props.maxHF}"</p>
                    <p><span>Female Weight:</span> {props.minWF} ~ {props.maxWF} lbs</p>
                    <p><span>Male Height:</span> {props.minHM}" ~ {props.maxHM}"</p>
                    <p><span>Male Weight:</span> {props.minWM} ~ {props.maxWM} lbs</p>
                </div>
            </div>
        </li>
    )
}

export default DogCards;
