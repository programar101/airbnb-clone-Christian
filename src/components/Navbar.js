import React from "react"
import "../style.css"
import airbnblogo from "../components/images/airbnblogo.png"; 

export default function Navbar() {
    return (
        <nav>

            <image src={airbnblogo} className="nav--logo" alt=""/>
            <h2>Hola</h2>
        </nav>
    )
}