import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import back from "./img/back.png";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./UPI.css";

function UPI() {
  const location = useLocation();
  const [pay, setPay] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [upi, setUpi] = useState("");
  const [amount, setAmount] = useState("");

  const checkUpi = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length <= 4)
      setUpi(e.target.value);
  };

  const checkAmount = (e) => {
    console.log(e.target.value.length);
    if (
      !isNaN(e.target.value) &&
      e.target.value[e.target.value.length - 1] !== "."
    )
      setAmount(e.target.value);
  };
  return (
    <div className="upi">
      <br />
      <Link to="/">
        <img
          alt=""
          src={back}
          style={{ position: "absolute", marginLeft: "0" }}
        />
      </Link>
      <br />
      <h1>Paying to: {location.state.contact} </h1>

      <h1 className="upi__title">Enter UPI</h1>
      <input
        className="upi__text"
        type="text"
        onChange={checkUpi}
        value={upi}
      />
      {upi.length < 4 ? (
        <h1 className="upi__warning">Length should be 4</h1>
      ) : (
        ""
      )}

      <h1 className="upi__title">Enter Amount</h1>
      <input
        className="upi__text"
        type="text"
        onChange={checkAmount}
        value={amount}
      />
      {amount < 5 ? (
        <h1 className="upi__warning">Amount should be atleast 5</h1>
      ) : (
        ""
      )}
      <h2 className="upi__button" onClick={(e) => setPay(true)}>
        Pay
      </h2>

      {/* Pay popup */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="pay_popup"
          style={pay ? { display: "block" } : { display: "none" }}
        >
          <CheckCircleIcon style={{ fontSize: "40px", color: "green" }} />{" "}
          <br />
          <span>Paid!</span>
          <br /> <br />
          <Link
            to="/"
            className="upi__button"
            style={{ textDecoration: "none" }}
          >
            Okay
          </Link>
        </div>
      </div>

      {/* Pay later */}
      <h2 className="upi__button" onClick={(e) => setSchedule(true)}>
        Pay Later
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="pay_popup"
          style={
            schedule ? { display: "block", width: "55%" } : { display: "none" }
          }
        >
          <TextField
            id="datetime-local"
            label="Schedule Payment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <Link
            to="/"
            className="upi__button"
            style={{
              textDecoration: "none",
              position: "relative",
              top: "20px",
            }}
          >
            Okay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UPI;
