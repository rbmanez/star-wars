import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to='/characters' className="nav-link">Characters</Link>
                </li>
                <li>
                    <Link to='/films' className="nav-link">Films</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;