import React, {useState} from 'react'
import smile from './img/smile.png';
import man1 from './img/man1.png';
import man2 from './img/man2.png';
import man3 from './img/man3.png';
import man4 from './img/man4.png';
import man5 from './img/man5.png';
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
            <span class="white-box__recents" onClick={e => setActive(true)} style={active?{background:'#6057f0', color:'white', boxShadow:'0 0 5px 0 rgba(36, 36, 36, 0.185)'}:{background:'none'}}>Recents</span>
            <span class="white-box__favourites" onClick={e => setActive(false)} style={active?{background:'none'}:{background:'#6057f0', color:'white', boxShadow: '0 0 5px 0 rgba(36, 36, 36, 0.185)'}}>Favourites</span>
        </div>
<hr/> <br/>
        <div style={active? {display: 'flex', justifyContent:'space-evenly'}: {display:'none'}}>
            <PayImage img = {smile} x='Samantha Singh' />
            <PayImage img = {man1} x='Subhojit Yadav' />
            <PayImage img = {man4} x='Elvish Ganguly' />
            <PayImage img = {man5} x='Jayanth Pandey' />
        </div>

        <div style={active? {display:'none'}:{display: 'flex', justifyContent:'space-evenly'}}>
            <PayImage img = {man1} x='Raj Kapoor' />
            <PayImage img = {man2} x='Siddhart Malhotra' />
            <PayImage img = {man3} x='Obama Singh' />
        </div>

        {/* <hr/> */}
        </motion.div>
    )
}

export default ContactBox
