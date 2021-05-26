import React from 'react'
import { useLocation } from 'react-router'

function UPI() {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            {location.state.contact}
            <h1>Enter UPI</h1>
            <input type="text"/>
        </div>
    )
}

export default UPI
