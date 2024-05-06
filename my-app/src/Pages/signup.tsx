import React, { useState } from "react";
import './signup.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem(username , JSON.stringify({ email, password}));
        navigate('/');
    }

    return (
        <div className="header">
            <div className="signupElements">
                <Link to="/login"><button className="backButton">&larr; Back &nbsp;</button></Link>
                <input type="text" placeholder="Username" className="inputUsername" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="email" placeholder="Email" className="inputEmail" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" className="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="signupButton" onClick={handleSignup}>Signup</button> 
            </div>
        </div>
    )
}

export default Signup;