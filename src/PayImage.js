import React from "react";
import { Link } from "react-router-dom";
// import smile from "./img/smile.png";

function PayImage({img, x}) {
  return (
    <div>
      <Link
        to={{
          pathname: "/upi",
          state: {
            contact: x,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <img src={img} alt=''/>
        <h6 style={{marginTop:0, position:'relative', left: '-10px', color: 'black', fontWeight:'300', fontSize: '12px'}}>{x}</h6>
      </Link>
    </div>
  );
}

export default PayImage;
