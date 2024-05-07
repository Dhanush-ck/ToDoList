import React, {FC} from "react";
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { ITask } from "../interface";
import ToDo from "./todo";

 const Login: FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        const user = localStorage.getItem(username);
        if (!user){
            alert('User Not Found');
        }
        else if (JSON.parse(user).password === password) {
            localStorage.setItem("loggedUser", JSON.stringify(user));
            // setUser(user);
            navigate('/');
        }
        else {
            alert('Wrong Password');
        }
    }

    return(
        <div className="header">
            <div className="elements">
                <Link to="/"><button className="backButton">&larr; Back &nbsp;</button></Link>
                <input type="text" placeholder="Username" className="inputUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin}>Login</button>
                <span>Don't have an account? <Link to="/signup" className="signupLink"> Signup </Link></span>
            </div>
        </div>
    )
 } 

 export default Login;