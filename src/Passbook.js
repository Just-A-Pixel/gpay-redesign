import React from "react";
import man1 from "./img/man1.png";
import { Link } from "react-router-dom";
import back from "./img/back.png";

function Passbook() {
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
      <br /> <br /> <br />
      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>

      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>

      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>

      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>

      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>

      <div className="notification">
        <div className="notification__icon">
          <img src={man1} alt="" width="70px" />
        </div>
        <div className="notification__middle">
          <h1>Chris requests money</h1>
          <h6>Rs. 600</h6>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Passbook;
