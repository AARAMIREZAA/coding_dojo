import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {

    const [planets, setPlanets] = useState()

    const { planets_id } = useParams()

    useEffect(() => {

        axios.get(`https://swapi.dev/api/planets/${planets_id}`)
            .then(response => {
                console.log(response.data)
                setPlanets(response.data)
            })
            .catch(error => console.log(error))
    }, [planets_id])
    return (
        <fieldset>
            <legend>Planets.jsx</legend>
            {
                (planets) ?
                    <>
                        <h1>{planets.name}</h1>
                        <h1>Climate: {planets.climate}</h1>
                        <h1>Terrain: {planets.terrain}</h1>
                        <h1>Surface Water: {planets.surface_water}</h1>
                        <h1>Population: {planets.population}</h1>
                        
                    </> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Planets