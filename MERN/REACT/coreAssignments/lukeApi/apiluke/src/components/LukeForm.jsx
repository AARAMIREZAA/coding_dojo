import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"


const LukeForm = () => {
    // STATE
    const [category, setCategory] = useState("people")
    const [id, setId] = useState()

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault();
        navigate(`/${category}/${id}`)
    }
    return (
        <fieldset>
            <legend>LukeForm.jsx</legend>
            <form onSubmit={submitHandler}>
                <select onChange={(event) => setCategory(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <input onChange={(event) => setId(event.target.value)} type="number" name="" id="" />
                <button>Search</button>
            </form>
        </fieldset>
    )
}

export default LukeForm