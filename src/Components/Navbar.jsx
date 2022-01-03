import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  // you can use the state through useSelector
  const amount = useSelector(state => state.amount)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#dcd9d9",
        padding: "10px",
      }}
    >
      <div>
        <h3>State Bank of Hassan</h3>
      </div>
      <div>
        <button
          disabled={true}
          style={{
            backgroundColor: "#1d93e0",
            color: "white",
            padding: "5px",
          }}
        >
          Your Balance: {amount}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
