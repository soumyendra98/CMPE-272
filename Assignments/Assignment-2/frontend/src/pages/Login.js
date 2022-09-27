import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h1>Login Page!</h1>
            <span> Go Back <Link to='/'>Home</Link></span>
        </>
    );
}

export default Login;
