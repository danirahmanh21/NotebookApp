/* eslint-disable no-unused-vars */
import React from "react";
import { FiArchive, FiHome, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";


function Navigation (){
    return (
        <nav className="navigation">
            <ul>
                <li><Link to = "/"><FiHome /></Link></li>
                <li><Link to = "/add"><FiPlusCircle /></Link></li>
                <li><Link to = "/archived" ><FiArchive /></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;