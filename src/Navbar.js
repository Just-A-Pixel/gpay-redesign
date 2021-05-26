import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <li>
                Home
            </li>
            <li>
                Passbook
            </li>
            <li>
                Offer
            </li>
            <Link to="/pay" style={{ textDecoration: 'none' }}><li className='navbar__pay'>Pay</li></Link>
            <li>Rewards</li>
            <li>Profile</li>
            <li>More</li>
        </div>
    )
}

export default Navbar
