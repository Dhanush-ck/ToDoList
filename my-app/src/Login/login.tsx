import React, {FC} from "react";

 const Login: FC = () => {
    return(
        <div className="header">
            <div className="inputElements">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </div>
            <button>Login</button>
        </div>
    )
 } 

 export default Login;