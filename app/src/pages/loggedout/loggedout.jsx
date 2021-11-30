import React from 'react'
import './loggedout.css'
import SignIn from '../../components/signin/signin';

function LoggedOut() {
    return (
        <>
            <div className="logo">
                <img src="../assets/logo.png" alt="logo" />
            </div>
            <SignIn />
        </>
    )
}

export default LoggedOut;