import React from 'react'
import './ContactBox.css'
import { motion } from "framer-motion"

function ContactBox() {
    return (
        <motion.div className="white-box"
        initial = {{height: 0, opacity: 0.3}}
        animate = {{height: 250, opacity: 1}}
        transition = {{duration: 0.3, ease: "backOut"}}>
            
        </motion.div>
    )
}

export default ContactBox
