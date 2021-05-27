import React, {useState} from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './UPI.css'
function UPI() {
    const location = useLocation()
    // console.log(location.state)
    const [pay, setPay] = useState(false);
    return (
        <div>
            {location.state.contact}
            <h1>Enter UPI</h1>
            <input type="text"/>
            <h1>Enter Amount</h1>
            <input type="text"/>
            {/* <Link */}
            <h2 onClick={e => setPay(true)}>Pay</h2>

            <div className="pay_popup" style={pay?{display: 'block'}: {display: 'none'}}>
<span>Paid!</span>
<Link to="/">Okay</Link>
            </div>
            {/* <Link to="/"> <h2>Pay</h2></Link> */}
        </div>
    )
}

export default UPI
