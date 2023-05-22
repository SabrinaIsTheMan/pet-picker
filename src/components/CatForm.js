import '../styles/Form.css';
import '../styles/Buttons.css';
import { useState } from 'react';

function CatForm({ handleSubmit }) {

    const [smartValue, setSmartValue] = useState(3);
    const [smartCheck, setSmartCheck] = useState(true);

    const handleSmartChange = (event) => {
        setSmartValue(event.target.value);
    }

    const handleSmartCheck = (event) => {
        setSmartCheck(!smartCheck);

        if (event.target.checked === false) {
            setSmartValue(null); //console will warn that we should be not passing null as props, but this is a null for an api param so we need it
        } else {
            setSmartValue(3); //back to default when checked
        }
    }

    const [playValue, setPlayValue] = useState(3);
    const [playCheck, setPlayCheck] = useState(true);

    const handlePlayChange = (event) => {
        setPlayValue(event.target.value);
    }

    const handlePlayCheck = (event) => {
        setPlayCheck(!playCheck);

        if (event.target.checked === false) {
            setPlayValue(null);
        } else {
            setPlayValue(3);
        }
    }

    const [shedValue, setShedValue] = useState(3);
    const [shedCheck, setShedCheck] = useState(true);

    const handleShedChange = (event) => {
        setShedValue(event.target.value);
    }

    const handleShedCheck = (event) => {
        setShedCheck(!shedCheck);

        if (event.target.checked === false) {
            setShedValue(null);
        } else {
            setShedValue(3);
        }
    }

    return (
        <div className='wrapper'>
            <form className="form catForm" onSubmit={(event) => { handleSubmit(event, [smartValue, playValue, shedValue]) }}>
                <legend>Filter cat breeds by:</legend>

                {/* Intelligence */}
                <fieldset>
                    <input
                        type="checkbox"
                        name="smartCheck"
                        id="smartCheck"
                        checked={smartCheck}
                        onChange={handleSmartCheck}
                    />
                    <label htmlFor="smartValue">Intelligence:</label>
                    <input
                        type="range"
                        id="smartValue"
                        name="smartValue"
                        step="1" min="1" max="5"
                        onChange={handleSmartChange}
                        value={smartValue}
                        disabled={!smartCheck}
                    />
                </fieldset>

                {/* Playfulness */}
                <fieldset>
                    <input
                        type="checkbox"
                        name="playCheck"
                        id="playCheck"
                        checked={playCheck}
                        onChange={handlePlayCheck}
                    />
                    <label htmlFor="playValue">Playfulness:</label>
                    <input
                        type="range"
                        id="playValue"
                        name="playValue"
                        step="1" min="1" max="5"
                        onChange={handlePlayChange}
                        value={playValue}
                        disabled={!playCheck}
                    />
                </fieldset>

                {/* Shedding */}
                <fieldset>
                    <input
                        type="checkbox"
                        name="shedCheck"
                        id="shedCheck"
                        checked={shedCheck}
                        onChange={handleShedCheck}
                    />
                    <label htmlFor="shedValue">Shedding:</label>
                    <input
                        type="range"
                        id="shedValue"
                        name="shedValue"
                        step="1" min="1" max="5"
                        onChange={handleShedChange}
                        value={shedValue}
                        disabled={!shedCheck}
                    />
                </fieldset>

                <div>
                    <button type="Submit" className="catButton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CatForm;
