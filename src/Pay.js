import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "./img/back.png";
import "./Pay.css";

const contacts = [
  "Samantha Singh",
  "Subhojit Yadav",
  "Elvish Ganguly",
  "Namuna Singh",
  "Jayanth Pandey",
  "Raj Kapoor",
  "Siddhart Malhotra",
  "Joe Obama"
];

function Pay() {
  const [contact, setContact] = useState("");

  const matchContact = (e) => {
    setContact(e.target.value);
  };

  let contactField = contacts.map((x) => {
    return (
      <Link
        to={{
          pathname: "/upi",
          state: {
            contact: x,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="pay__contact">{x} </div>
      </Link>
    );
  });

  return (
    <div className="pay">
      {/* <h1 className="pay__title">Choose Contact</h1> */}
      <Link to="/">
        <img alt='' src={back} style={{ position: "absolute" }} />
      </Link>
      <div className="pay__outerinput">
        <input
          className="pay__input"
          placeholder="Choose contact"
          type="text"
          onChange={matchContact}
          value={contact}
        />
      </div>
      <br />
      {contact.length < 4 ? (
        <h2 className="pay__warning">Length should be 4</h2>
      ) : (
        ""
      )}
      {contactField}
    </div>
  );
}

export default Pay;
