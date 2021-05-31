import React from 'react'
import './Switch.css';
import back from "./img/back.png";
import { Link } from "react-router-dom";
 

const bank = {
    pnb: "https://iconape.com/wp-content/files/ek/208557/svg/208557.svg",
    hdfc: "https://logos-download.com/wp-content/uploads/2016/10/HDFC_Bank_logo.png",
    sbi: "https://lh3.googleusercontent.com/proxy/vRcQKGokgY7p1bn8nbRThmjTTQty7Z4c1mf4jnm9thUH1_Zgp3FlcF2UtloXfubfFekoDvkSRUFvGVXoaFlFldz21tK49-2xOhf6jxhvgdKiFeDWU-y53_DKwJE",
    ind: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/indian_bank_logo.png",
}

function SwitchAccount({setBank}) {
    return (
        <>
        <br />
      <Link to="/">
        <img
          alt=""
          src={back}
          style={{ position: "absolute", marginLeft: "0" }}
        />
      </Link>
      <div className="switch">
        <Link to="/"> <img className="switch__img" src={bank.pnb} onClick={e => setBank(bank.pnb)}/></Link>
           
        <Link to="/"> <img className="switch__img" src={bank.hdfc} onClick={e => setBank(bank.hdfc)}/></Link>
        <Link to="/"> <img className="switch__img" src={bank.sbi} onClick={e => setBank(bank.sbi)}/></Link>
        <Link to="/"> <img className="switch__img" src={bank.ind} onClick={e => setBank(bank.ind)}/></Link>
        </div>
      <br />
        </>

        
    )
}

export default SwitchAccount
