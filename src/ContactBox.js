import React, {useState} from 'react'
import smile from './img/smile.png';
import man1 from './img/man1.png';
import './ContactBox.css'
// import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import PayImage from './PayImage';

function ContactBox({dark}) {
    const [active, setActive] = useState(true)
    return (
        <motion.div className="white-box"
        initial = {{height: 0, opacity: 0.3}}
        animate = {{height: 250, opacity: 1}}
        transition = {{duration: 0.3, ease: "backOut"}}
        style={dark?{background:'black', color:'white'}:{}}
        >
            

        <div className="white-box__headers">
            <span class="white-box__recents" onClick={e => setActive(true)} style={active?{background:'red'}:{background:'none'}}>Recents</span>
            <span class="white-box__favourites" onClick={e => setActive(false)} style={active?{background:'none'}:{background:'red'}}>Favourites</span>
        </div>

        <div style={active? {display: 'flex'}: {display:'none'}}>
            <PayImage img = {smile} x='Samantha Singh' />
            <PayImage img = {smile} x='Samantha Singh' />
            <PayImage img = {smile} x='Samantha Singh' />
            <PayImage img = {smile} x='Samantha Singh' />
        </div>

        <div style={active? {display:'none'}:{display: 'flex'}}>
            <PayImage img = {man1} x='Subhojit yadav' />
            <PayImage img = {man1} x='Subhojit yadav' />
            <PayImage img = {man1} x='Subhojit yadav' />
        </div>
        </motion.div>
    )
}

export default ContactBox
