import React from 'react'
import './Navbar.css'

function Navbar (props) {
    return(
        <div>
            <nav className = "navBar">
                <h1>Coop's Place</h1>
                <ul>
                    <li>
                        <a className="navItems" href="https://www.linkedin.com/notifications/">Home</a>
                    </li>
                    <li>
                        <a className="navItems" href="https://cooperdaniel5141.medium.com/">Blog</a>
                    </li>
                    <li>
                        <a className="navItems" href="https://github.com/DannyCoop">Github</a>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}


export default Navbar