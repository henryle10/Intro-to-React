import React, { useState } from "react";
import styles from './UserForm.module.css';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpasswordError, setCpasswordError] = useState("");
    const [matchingError, setMatchingError] = useState("");

    const createUser = (event) => {
        event.preventDefault();
        const newUser = { firstname, lastname, email, password, cpassword };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (event) => {
        setFirstname(event.target.value);
        if (event.target.value.length < 1) {
            setFirstnameError("Field is required");
        }
        else if (event.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters");
        }
        else {
            setFirstnameError("");
        }
    }
    const handleLastname = (event) => {
        setLastname(event.target.value);
        if (event.target.value.length < 1) {
            setLastnameError("Field is required");
        }
        else if (event.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        }
        else {
            setLastnameError("");
        }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        if (event.target.value.length < 1) {
            setEmailError("Field is required");
        }
        else if (event.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 1) {
            setPasswordError("Field is required");
        }
        else if (event.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }
    const handleCpassword = (event) => {
        setCpassword(event.target.value);
        if (event.target.value.length < 1) {
            setCpasswordError("Field is required");
        }
        else if (event.target.value.length < 8) {
            setCpasswordError("Field must be at least 8 characters");
        }
        else {
            setCpasswordError("");
        }
        if (password !== cpassword) {
            setMatchingError("Passwords Must match");
        }
        else {
            setMatchingError("match");
        }
    };



    return (
        <div>
            <form className={styles.myForm} onSubmit={createUser}>
                <div>
                    <label className={styles.myLabel}>First name:</label>
                    <input type="text" onChange={handleFirstName} />
                    {firstnameError ? (<p style={{ color: "red" }}>{firstnameError}</p>) : (" ")}
                </div>
                <div>
                    <label className={styles.myLabel}>Last name:</label>
                    <input type="text" onChange={handleLastname} />
                    {lastnameError ? (<p style={{ color: "red" }}>{lastnameError}</p>) : (" ")}
                </div>
                <div>
                    <label className={styles.myLabel}>Email:</label>
                    <input type="text" onChange={handleEmail} />
                    {emailError ? (<p style={{ color: "red" }}>{emailError}</p>) : (" ")}
                </div>
                <div>
                    <label className={styles.myLabel}>Password:</label>
                    <input type="text" onChange={handlePassword} />
                    {passwordError ? (<p style={{ color: "red" }}>{passwordError}</p>) : (" ")}
                </div>
                <div>
                    <label className={styles.myLabel}>Confirm Password:</label>
                    <input type="text" onChange={handleCpassword} />
                    {cpasswordError ? (<p style={{ color: "red" }}>{cpasswordError}</p>) : (" ")}
                    {matchingError ? (<p style={{ color: "red" }}>{matchingError}</p>) : (" ")}
                </div>
            </form>
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {cpassword}</p>
            </div>
        </div>
    )
};

export default UserForm;