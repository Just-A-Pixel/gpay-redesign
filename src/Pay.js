import React from 'react'
import { Link } from 'react-router-dom'

function Pay() {
    return (
        <div>
            <h1>Choose Contact</h1>
            <input type="text"/>
            <Link to={{
                pathname: "/upi",
                state: {
                  contact: 'rah',
                }
            }}>dwadawd
                
            </Link>
            <div>Contact 1 </div>
            <div>Contact 2 </div>
            <div>Contact 3 </div>
            <div>Contact 4 </div>
        </div>
    )
}

export default Pay
