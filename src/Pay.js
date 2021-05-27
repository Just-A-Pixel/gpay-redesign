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
                  contact: 'Contact 1',
                }
            }}><div>Contact 1 </div></Link>
            
            
            <Link to={{
                pathname: "/upi",
                state: {
                  contact: 'Contact 2',
                }
            }}><div>Contact 2 </div></Link>
            <Link to={{
                pathname: "/upi",
                state: {
                  contact: 'Contact 3',
                }
            }}><div>Contact 3 </div></Link>
            <Link to={{
                pathname: "/upi",
                state: {
                  contact: 'Contact 4',
                }
            }}><div>Contact 4 </div></Link>
        </div>
    )
}

export default Pay
