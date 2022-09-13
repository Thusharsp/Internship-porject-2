import React from "react";
import './Register.css';

function Register(){
    return(
        <div class="Register">
            <h2>Register Page</h2>
            <div class="form">
                <label for="name"><b>NAME</b></label><br></br>
                <input type="text" placeholder="Enter Name" required></input><br></br><br></br>

                <label for="uname"><b>USER NAME</b></label><br></br>
                <input type="text" placeholder="Enter User Name" required></input><br></br><br></br>

                <label for="Pwd"><b>PASSWORD</b></label><br></br>
                <input type="password" placeholder="Enter Password" required></input><br></br><br></br>

                <label for="email"><b>E-MAIL</b></label><br></br>
                <input type="email" placeholder="Enter Email" required></input><br></br><br></br>

                <label for="phno"><b>PHONE NUMBER</b></label><br></br>
                <input type="tel" placeholder="Enter Phone Number" required></input><br></br><br></br>

                <button type="submit" class="btn">Register</button><br></br>
                </div>

            
        </div>

    )
}

export default Register;