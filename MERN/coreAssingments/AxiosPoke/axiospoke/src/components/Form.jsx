import React, {useState} from 'react'
import axios from 'axios'


const Form = () => {

    // STATE FOR API
    const [pokemons, setPokemons] = useState([])


    const buttonHandler = (e) => {
        e.preventDefault()
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(finalResponse => setPokemons(finalResponse.data.results)) // SUCCESSFUL
            .catch(error => console.log(error)) // UNSUCESSFUL
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>

            <div>
                <button onClick={buttonHandler} className='pkBtn'>Fetch Pokemon</button>
            </div>

            //Conditional rendering, ternary
            <div>
            {
                pokemons.map((pokemon) => {
                    return (
                        (pokemon) ?
                        <>  
                            <p>{pokemon.name}</p>
                        </> : <h1>Loading.....</h1>
                    )
                })
            }
            </div>
        </fieldset>
    )
}

export default Form