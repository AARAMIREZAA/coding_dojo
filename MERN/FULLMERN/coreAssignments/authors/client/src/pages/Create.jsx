import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"

const Create = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const cancelNew = (event) => {
        event.preventDefault();
        setName("");
        navigate("/");
    };

    const createRecipe = (event) => {
        event.preventDefault()
        const recipeObj = {
            name
        }
        axios.post("http://localhost:8000/api/recipes/new", recipeObj)
            .then(response => navigate("/") )
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <h1>Favortie Authors</h1>
            <form onSubmit={createRecipe}>
                <Link to={"/"}>HOME</Link>
                <h5>Add a new author:</h5>
                <p>
                    Name:
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <button onClick={cancelNew}>Cancel</button>
                <button>Add</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Create