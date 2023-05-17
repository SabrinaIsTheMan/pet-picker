import '../styles/Form.css';

function Form() {
    return (
        <form className="Form">
            {/* <input type="checkbox" name="energy" value="off" />
                <label for="name">Energy Level</label> */}

            <fieldset name="energyRange">
                <label>Energy levels:</label>
                <input type="range" step="1" min="1" max="5" value="1" />
            </fieldset>

            <button type="Submit">Submit</button>
        </form>

    )
}

export default Form;

{ /* https://codepen.io/daidensacha/pen/OJWxmvP
The disabled attribute can be set to keep a user from using the fields until some other condition has been met(like
selecting a checkbox, etc.).Then, a JavaScript could remove the disabled value, and make the fieldset usable again */}
