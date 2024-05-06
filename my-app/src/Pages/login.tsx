import React, {FC} from "react";
import './login.css'
import { Link } from 'react-router-dom';

 const Login: FC = () => {
    return(
        <div className="header">
            <div className="elements">
                <Link to="/"><button className="backButton">&larr; Back &nbsp;</button></Link>
                <input type="text" placeholder="Username" className="inputUsername" />
                <input type="password" placeholder="Password" className="inputPassword"/>
                <button className="loginButton">Login</button>
                <span>Don't have an account? <Link to="/signup" className="signupLink"> Signup </Link></span>
            </div>
        </div>
    )
 } 

 export default Login;