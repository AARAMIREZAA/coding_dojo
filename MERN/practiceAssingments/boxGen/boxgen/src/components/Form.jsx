import React, { useState } from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");
    
    function submitHandler(event) {
        event.preventDefault();
        props.addColor(color);

    
        setColor("");
    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Color:
                    <input onChange={(e) => setColor(e.target.value)} type="text" />
                </p>
                <button type='submit'>Add</button>
            </form>
        </fieldset>
    )
}

export default Form