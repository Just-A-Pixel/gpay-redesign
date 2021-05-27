import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import PurpleBox from "./PurpleBox";
import ContactBox from "./ContactBox";
// import Switcher from "@material-ui/core/Switch";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
import Pay from "./Pay";
import UPI from "./UPI";
import Header from "./Header";
import CheckBalance from "./CheckBalance";
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/pay">
        <Pay/>
        </Route>
        <Route path="/upi">
          <UPI />
        </Route>
        <Route path="/check">
          <CheckBalance/>
        </Route>
        <Route path="/">
          <Header />
          {/* <Switcher /> */}
          <PurpleBox />
          <ContactBox />
          <Navbar />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
