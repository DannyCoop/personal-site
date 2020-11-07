import React from 'react'
import './Navbar.css'

function Navbar (props) {
    return(
        <nav>
            <h1>logo</h1>
            <ul>
                <li className="navItems">Home</li>
                <li className="navItems">Blog</li>
                <li className="navItems">Github</li>
            </ul>
        </nav>
    )
}


export default Navbar