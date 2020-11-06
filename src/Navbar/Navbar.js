import React from 'react'
import './Navbar.css'

function Navbar (props) {
    return(
        <div>
            <ul>
                <li className="navItems">Home</li>
                <li className="navItems">Blog</li>
                <li className="navItems">Github</li>
            </ul>
        </div>
    )
}


export default Navbar