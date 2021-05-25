import React from 'react'
import "./PurpleBox.css"
import { motion } from "framer-motion"

const PurpleBox = () => {
    return (
        <motion.div className="slider-box"
        initial = {{y: 0, opacity: 0.3}}
        animate = {{y:-250, opacity: 1}}
        transition = {{duration: 0.5, ease: "backOut"}}>
        </motion.div>
    )
}

export default PurpleBox
