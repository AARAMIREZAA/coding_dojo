
import './App.css';
import React, { useState } from "react"
import Form from './components/Form';
import ColorDisplay from './components/ColorDisplay';

function App() {
    const [colors, setColors] = useState([])
    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <fieldset>
            <legend>App.js</legend>
            <Form addColor={addColor}  />
            <ColorDisplay allColors={colors} />
        </fieldset>
    );
}

export default App;