import React from "react";
import "./signin.css";

function SignIn(){
    return(
        <div className="SignIn">
            <h2 className="SignInH2">Lorem Ipsum Dolor</h2>
            <p className="SignInP"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="SignInButton">
                <div className="googleLogo">
                    <img src="../assets/googlelogo.png" alt="Google logo" />
                </div>    
                <p className="SignInGoogle">Sign in with Google</p>
            </div>
            <p className="VersionP">© 2020 Devs_United - <span className="SignInSpan">BETA</span> </p>
        </div>
    )
}

export default SignIn;