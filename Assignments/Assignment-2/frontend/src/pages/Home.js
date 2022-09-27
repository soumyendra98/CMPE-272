import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home Page!</h1>
            <Link style={{ marginRight: '8px' }} to="/login">Login</Link>
        </>
    );
}

export default Home;

