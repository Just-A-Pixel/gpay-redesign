import React from "react";
import "./PurpleBox.css";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'


const PurpleBox = () => {
  return (
    <motion.div
      className="slider-box"
      initial={{ y: 0, opacity: 0.3 }}
      animate={{ y: -250, opacity: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <Link to="/check" style={{textDecoration: 'none'}}><div className="slider-box__button"> Check Balance</div></Link>
        <div className="slider-box__button"> Switch Account</div>
      </div>
    </motion.div>
  );
};

export default PurpleBox;
