import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar({dark}) {
    console.log(dark)
    return (
        <div className="navbar"  style={dark?{background:'black', color:'white'}:{}}>
            <li>
                Home
            </li>
            <li>
            <Link to="passbook" style={{ textDecoration: 'none' }} ><li style={{ textDecoration: 'none' }} >Passbook</li></Link>
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
