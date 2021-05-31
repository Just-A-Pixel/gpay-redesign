import React from "react";
import { Link } from "react-router-dom";
import smile from "./img/smile.png";

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
        <img src={img} />
      </Link>
    </div>
  );
}

export default PayImage;
