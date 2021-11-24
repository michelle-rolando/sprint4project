import React from "react";
import "./register.css";

function Register(){
    return(
        <div className="Register">
            <h2 className="RegisterH2">Welcome {user.displayName}!</h2>
            <form>
                <label for="username"></label>
                <input type="text" id="user" name="username" placeholder="Type your username">
            </form>
            <div>
                <div className="red" onClick={()=> updateColor("red") }></div>
                <div className="orange" onClick={()=> updateColor("orange") }></div>
                <div className="yellow" onClick={()=> updateColor("yellow") }></div>
                <div className="green" onClick={()=> updateColor("green") }></div>
                <div className="blue" onClick={()=> updateColor("blue") }></div>
                <div className="purple" onClick={()=> updateColor("purple") }></div>
            </div>
        </div>
    )
}

export default Register;