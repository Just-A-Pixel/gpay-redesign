import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import PurpleBox from "./PurpleBox";
import ContactBox from "./ContactBox";
import ContactlessIcon from "@material-ui/icons/Contactless";
import SwitchAccount from "./SwitchAccount";
import Switcher from "@material-ui/core/Switch";
import { Switch, Route, Link } from "react-router-dom";
import Pay from "./Pay";
import UPI from "./UPI";
import Header from "./Header";
import CheckBalance from "./CheckBalance";
import Passbook from "./Passbook";

const App = () => {
  const [dark, setDark] = useState(false);
  const [bank, setBank] = useState(
    "https://iconape.com/wp-content/files/ek/208557/svg/208557.svg"
  );
  return (
    <div
      className="app"
      style={dark ? { background: "black", color: "white" } : {}}
    >
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/upi">
          <UPI />
        </Route>
        <Route path="/check">
          <CheckBalance />
        </Route>
        <Route path="/switch">
          <SwitchAccount setBank={setBank} />
        </Route>
        <Route path="/passbook">
          <Passbook />
          <Navbar dark={dark} />

        </Route>
        <Route path="/">
          <Header dark={dark} />

          <br />
          <img src={bank} alt='' className="show__bank" />
          <div style={{ position: "absolute", right:'0', top: '0' }}>
            <Switcher onClick={(e) => setDark(!dark)} />
          </div>

          <Link
            to={{
              pathname: "/upi",
              state: {
                contact: "Nearby User",
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <ContactlessIcon style={{ fontSize: 200, color: "#6057f0" }} />
            </div>
          </Link>

          <PurpleBox />
          <ContactBox dark={dark} />
          <Navbar dark={dark} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
