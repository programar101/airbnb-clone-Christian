import React from "react"
import "../style.css"
import airbnblogo from "../components/images/airbnblogo.png"; 

export default function Navbar() {
    return (
        <nav>
            <img src={airbnblogo} className="nav--logo" alt=""/>
            
        </nav>
    )
}