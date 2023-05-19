import '../styles/Form.css';
import { useState } from 'react';

function Form({handleSubmit}) {

    const [energyValue, setEnergyValue] = useState("3");
    const [energyCheck, setEnergyCheck] = useState(true);

    const handleEnergyChange = (event) => {
        setEnergyValue(event.target.value);
    }

    const handleEnergyCheck = (event) => {
        if (event.target.checked) {
            setEnergyValue(event.target.value);
            setEnergyCheck(false);
        } else {
            setEnergyCheck(true);
        }
    }

    const [shedValue, setShedValue] = useState("3");
    const [shedCheck, setShedCheck] = useState(true);

    const handleShedChange = (event) => {
        setShedValue(event.target.value);
    }

    const handleShedCheck = (event) => {
        if (event.target.checked) {
            setShedValue(event.target.value);
            setShedCheck(false);
        } else {
            setShedCheck(true);
        }
    }

    return (
        <form className="Form" onSubmit={ (event) => { handleSubmit(event, (energyValue, shedValue)) } }>
        {/* <form className="Form"> */}
            {/* Energy */}
            <fieldset>
                <input
                    type="checkbox"
                    name="energyCheck"
                    id="energyCheck"
                    value="null"
                    onClick={handleEnergyCheck}
                />
                <label htmlFor="energyValue">Energy:</label>
                    <input
                        type="range"
                        id="energyValue"
                        name="energyValue"
                        step="1" min="1" max="5"
                        onChange={handleEnergyChange}
                        value={energyValue}
                        disabled={energyCheck}
                    />
            </fieldset>

            {/* Shedding */}
            <fieldset>
                <input
                    type="checkbox"
                    name="shedCheck"
                    id="shedCheck"
                    value="null"
                    onClick={handleShedCheck}
                />
                <label htmlFor="shedValue">Shedding:</label>
                <input
                    type="range"
                    id="shedValue"
                    name="shedValue"
                    step="1" min="1" max="5"
                    onChange={handleShedChange}
                    value={shedValue}
                    disabled={shedCheck}
                />
            </fieldset>

            <button type="Submit">Submit</button>
        </form>

    )
}

export default Form;
