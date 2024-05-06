import React from "react";
import './signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="header">
            <div className="signupElements">
                <Link to="/login"><button className="backButton">&larr; Back &nbsp;</button></Link>
                <input type="text" placeholder="Username" className="inputUsername"/>
                <input type="mail" placeholder="Email" className="inputEmail"/>
                <input type="password" placeholder="Password" className="inputPassword"/>
                <button className="signupButton">Signup</button> 
            </div>
        </div>
    )
}

export default Signup;