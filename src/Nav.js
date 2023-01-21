import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <>
            <h4><Link to="/dogs">Home - Dog List</Link></h4>
        </>
    );
}

export default Nav;