import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const People = () => {

    const [people, setPeoples] = useState()


    const { people_id } = useParams()

    useEffect(() => {

        axios.get(`https://swapi.dev/api/people/${people_id}`)
            .then(response => {
                console.log(response.data)
                setPeoples(response.data)
            })
            .catch(error => console.log(error))
    }, [people_id])

    return (
        <fieldset>
            <legend>People.jsx</legend>
            {
                (people) ?
                    <>
                        <h1>{people.name}</h1>
                        <h1>Height: {people.height}</h1>
                        <h1>Mass: {people.mass}</h1>
                        <h1>Hair Color: {people.hair_color}</h1>
                        <h1>Skin Color: {people.skin_color}</h1>
                        <img src="./" alt="" />
                    </>:<h1>These aren't the droids you are looking for. <img src="./public/kenobi1.jpg" alt="obi wan kenobi" /></h1>
                    
            }
        </fieldset>
    )
}

export default People