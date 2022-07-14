import React from 'react'
import { useState } from 'react'
// import axios from 'axios'
import {useNavigate} from "react-router-dom"


const LukeForm = () => {
    return (
        <>
        <div>
            <form>
                <label htmlFor="">Search for: </label>
                <select name="" id="">
                    <option value="">Persons</option>
                    <option value="">Planets</option>
                </select>
                <label htmlFor="">ID: </label>
                <input type="text" name="" id="" />
                <button>Sear