
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function CheckBalance() {
    const [open, setOpen] = useState(false)

  const popup = (e) => {
    // console.log(e.key);
    if('Enter' === e.key) {
        setOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", popup);

    return () => document.removeEventListener("keypress", popup)
  }, []);

  return (
    <div>
      <h1>Enter UPI</h1>
      <input type="text" />
      <div className="pay_popup" style={open?{display: 'block'}: {display: 'none'}}>
<span>Paid!</span>
<Link to="/">Ok</Link>
            </div>
    </div>
  );
}

export default CheckBalance;
