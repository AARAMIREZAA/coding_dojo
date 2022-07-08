import React, { useState } from 'react';


const UserForm = () => {
    //state
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    // const nameHandler = (firstName) =>{
    //     if(firstName.length < 4){

    //     }
    // }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h1>Name: {firstname}</h1>
            <h1>Last Name: {lastname}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
            <h1>Confimr Password: {confirmpassword}</h1>
        </div>
    );
};

export default UserForm;
