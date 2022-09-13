import React from "react";
import './Login.css';
function Login(){
    return(
        <div class="Login">
            <h2 class="lgh">Login Page</h2>
            
            <div class="form">
                <label for="email"><b>E-MAIL</b></label><br></br>
                <input type="email" placeholder="Enter Email" required></input><br></br><br></br>

                <label for="Pwd"><b>PASSWORD</b></label><br></br>
                <input type="password" placeholder="Enter Password" required></input><br></br><br></br>

                <button type="submit" class="btn">Login</button><br></br>
                <button  class="btn"><a href="#" class="sig">Sign-up</a></button><br></br>
                </div>

            
        </div>

    )
}

export default Login;