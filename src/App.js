import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import PurpleBox from "./PurpleBox";
import ContactBox from "./ContactBox";

const App = () => {
  return (
    <div className="app">
      <PurpleBox />
      <ContactBox />
      <Navbar />
    </div>
  );
};

export default App;
