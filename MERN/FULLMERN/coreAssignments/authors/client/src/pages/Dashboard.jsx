import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"


const Dashboard = () => {

    const [recipes, setRecipes] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const refresh = () => {
        setSubmitted(!submitted)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes")
            .then(response => setRecipes(response.data))
            .catch()
    }, [submitted])

    const deleteHandler = (recipe_id) => {
        axios.delete("http://localhost:8000/api/recipes/" + recipe_id)
            .then(response => refresh())
            .catch(error => console.log(error))
    }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h1>Favorite Authors</h1>
            <Link to={"/recipes/new/"}>Add an author</Link>
            <h5>We have quotes by:</h5>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Action available</th>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe) => {
                            return (
                                <> 
                                <tr>
                                    <td><Link to={"/recipes/"+recipe._id}>{recipe.name}</Link></td>
                                    <td>
                                        <Link to={"/recipes/edit/"+recipe._id}>EDIT</Link>
                                        <button onClick={() => deleteHandler(recipe._id)}>DELETE</button>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard