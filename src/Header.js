import React, { useState } from "react";
import Switcher from "@material-ui/core/Switch";
import photo from "./img/smile.png";
import bell from "./img/bell.png";
import man1 from "./img/man1.png";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <img src={photo} className="header__image" alt="" />

      <div>
        Hi,Julia
        <br />
        juliasingh@gmail.com
      </div>

      <Switcher />
      <img src={bell} onClick={(e) => setOpen(true)} height="30px" alt="" />

      <div
        className={
          open ? "header__notification__open" : "header__notification__close"
        }
      >
        <h1 onClick={(e) => setOpen(false)}>X</h1>
        <h1>Notifications</h1>
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
        <br /> <br />
        <div className="notification">
          <div className="notification__icon">
            <img src={man1} alt="" width="70px" />
          </div>
          <div className="notification__middle">
            <h1>Chris paid money</h1>
            <h6 className="paid"> Rs. 600</h6>
            <hr />
          </div>
        </div>
        <br /> <br />
        <div className="notification">
          <div className="notification__icon">
            <img src={man1} alt="" width="70px" />
          </div>
          <div className="notification__middle">
            <h1>Sam requests money</h1>
            <h6>Rs. 600</h6>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
