import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "./img/back.png";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function CheckBalance() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('')

  const popup = (e) => {
    // console.log(e.key);
    if ("Enter" === e.key) {
      setOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", popup);

    return () => document.removeEventListener("keypress", popup);
  }, []);

  const changeText = (e) => {

if(!isNaN(e.target.value)) setText(e.target.value)
  }

  return (
    <div>
      <br />
      <Link to="/">
        <img
          alt=""
          src={back}
          style={{ position: "absolute", marginLeft: "0" }}
        />
      </Link>
      <br />
      <h1 className="upi__title">Enter UPI</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input className="upi__text" type="text" value={text} onChange={changeText} />
      </div>


      {/* Popup */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="pay_popup"
          style={open ? { display: "block" } : { display: "none" }}
        >
          <span>$8674</span> <br /> <br />
          <Link
            to="/"
            className="upi__button"
            style={{ textDecoration: "none" }}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckBalance;
