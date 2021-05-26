import React, {useState} from 'react'
import './ContactBox.css'
import { motion } from "framer-motion"

function ContactBox() {
    const [active, setActive] = useState(true)
    return (
        <motion.div className="white-box"
        initial = {{height: 0, opacity: 0.3}}
        animate = {{height: 250, opacity: 1}}
        transition = {{duration: 0.3, ease: "backOut"}}>
            

        <div className="white-box__headers">
            <span class="white-box__recents">Recents</span>
            <span class="white-box__favourites">Favourites</span>
        </div>
        </motion.div>
    )
}

export default ContactBox
