import React, { useState } from 'react';


const UserForm = () => {
    //state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameValid, setfirstNameValid] = useState(true)
    const [lastNameValid, setlastNameValid] = useState(true)
    const [emailValid, setemailValid] = useState(true)
    const [passwordValid, setpasswordValid] = useState(true)
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };


    // Validations for first name, last name, email, password

    const firstNameHandler = (firstName) => {
        setFirstName(firstName)
        if (firstName.length < 2) {
            setfirstNameValid(false)
        }
        else {
            setfirstNameValid(true)
        }
    }

    const lastNameHandler = (lastName) => {
        setLastName(lastName)
        if (lastName.length < 2) {
            setlastNameValid(false)
        }
        else {
            setlastNameValid(true)
        }
    }

    const emailHandler = (email) => {
        setEmail(email)
        if (email.length < 5) {
            setemailValid(false)
        }
        else {
            setemailValid(true)
        }
    }

    const passwordHandler = (password) => {
        setPassword(password)
        if (password.length < 8) {
            setpasswordValid(false)
        }
        else {
            setpasswordValid(true)
        }
    }

    const confirmPasswordHandler = (password, confirmPassword) => {
        setConfirmPassword(confirmPassword)
        if (password !== confirmPassword) {
        // if (confirmPasswordHandler == passwordHandler) {
            setConfirmPasswordValid(false)
        }
        else {
            setConfirmPasswordValid(true)
        }
    }




    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={(e) => firstNameHandler(e.target.value)} name="name" />
                    {
                        (firstNameValid) ? null : <h1>First Name must be at least 2 characters</h1>
                    }
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={(e) => lastNameHandler(e.target.value)} name="name" />
                    {
                        (lastNameValid) ? null : <h1>Last Name must be at least 2 characters</h1>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => emailHandler(e.target.value)} email="email" />
                    {
                        (emailValid) ? null : <h1>Email must be at least 5 characters</h1>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => passwordHandler(e.target.value)} password="password" />
                    {
                        (passwordValid) ? null : <h1>Password must be at least 8 characters</h1>
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={(e) => confirmPasswordHandler(e.target.value)} Password="Password"/>
                    {
                        (confirmPasswordValid) ? null : <h1>Passwords must match</h1>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};

export default UserForm;
