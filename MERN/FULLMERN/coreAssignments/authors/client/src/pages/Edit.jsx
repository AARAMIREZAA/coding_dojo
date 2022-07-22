import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



const Edit = (props) => {

    const navigate = useNavigate()

    const [name, setName] = useState()

    const { edit } = props;

    let submitValue = edit ? "Update" : "Submit";

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const { recipe_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes/" + recipe_id)
            .then(response => {
                setName(response.data.name)
            })
            .catch(error => console.log(error))
    }, [])

    const updateRecipe = (event) => {
        event.preventDefault()
        const recipeObj = {
            name
        }
        axios.put("http://localhost:8000/api/recipes/" + recipe_id, recipeObj)
            .then(response => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    const cancelNew = (event) => {
        event.preventDefault();
        setName("");
        navigate("/");
    };

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <h1>Favorite Authors</h1>
            <form onSubmit={updateRecipe} >
                <Link to={"/"}>HOME</Link>
                <h5>Edit this author</h5>
                <p>
                    Name:
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <button onClick={cancelNew}>Cancel</button>
                
                <button>Update</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Edit