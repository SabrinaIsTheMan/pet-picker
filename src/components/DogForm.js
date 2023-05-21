import '../styles/Form.css';
import '../styles/Home.css';
import { useState } from 'react';

function DogForm({handleSubmit}) {

    const [barkValue, setBarkValue] = useState(3);
    const [barkCheck, setBarkCheck] = useState(true);

    const handleBarkChange = (event) => {
        setBarkValue(event.target.value);
    }

    const handleBarkCheck = (event) => {
        setBarkCheck(!barkCheck);

        if (event.target.checked === false) {
            setBarkValue(null); //console will warn that we should be not passing null as props, but this is a null for an api param so we need it
        } else {
            setBarkValue(3); //back to default when checked
        }
    }

    const [energyValue, setEnergyValue] = useState(3);
    const [energyCheck, setEnergyCheck] = useState(true);

    const handleEnergyChange = (event) => {
        setEnergyValue(event.target.value);
    }

    const handleEnergyCheck = (event) => {
        setEnergyCheck(!energyCheck);

        if (event.target.checked === false) {
            setEnergyValue(null);
        } else {
            setEnergyValue(3);
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

    const [trainValue, setTrainValue] = useState(3);
    const [trainCheck, setTrainCheck] = useState(true);

    const handleTrainChange = (event) => {
        setTrainValue(event.target.value);
    }

    const handleTrainCheck = (event) => {
        setTrainCheck(!trainCheck);

        if (event.target.checked === false) {
            setTrainValue(null);
        } else {
            setTrainValue(3);
        }
    }

    return (
        <form className="form dogForm" onSubmit={ (event) => { handleSubmit(event, [barkValue, energyValue, shedValue, trainValue]) } }>
            <legend>Please select as least one trait to filter dog breeds by:</legend>

            {/* Barking */}
            <fieldset>
                <input
                    type="checkbox"
                    name="barkCheck"
                    id="barkCheck"
                    checked={barkCheck}
                    onChange={handleBarkCheck}
                />
                <label htmlFor="barkValue">Barking:</label>
                <input
                    type="range"
                    id="barkValue"
                    name="barkValue"
                    step="1" min="1" max="5"
                    onChange={handleBarkChange}
                    value={barkValue}
                    disabled={!barkCheck}
                />
            </fieldset>

            {/* Energy */}
            <fieldset>
                <input
                    type="checkbox"
                    name="energyCheck"
                    id="energyCheck"
                    checked={energyCheck}
                    onChange={handleEnergyCheck}
                />
                <label htmlFor="energyValue">Energy:</label>
                <input
                    type="range"
                    id="energyValue"
                    name="energyValue"
                    step="1" min="1" max="5"
                    onChange={handleEnergyChange}
                    value={energyValue}
                    disabled={!energyCheck}
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

            {/* Trainability */}
            <fieldset>
                <input
                    type="checkbox"
                    name="trainCheck"
                    id="trainCheck"
                    checked={trainCheck}
                    onChange={handleTrainCheck}
                />
                <label htmlFor="trainValue">Trainability:</label>
                <input
                    type="range"
                    id="trainValue"
                    name="trainValue"
                    step="1" min="1" max="5"
                    onChange={handleTrainChange}
                    value={trainValue}
                    disabled={!trainCheck}
                />
            </fieldset>

            <button type="Submit" className="dogButton">Submit</button>
        </form>
    )
}

export default DogForm;
