import React from "react";
import "../css/HSButton.css";

function HSButton({ size, children }) {
  //highlight slide button

  return (
    <button className={"hspbutton " + size}>
      <p className="hspbutton--label">{children}</p>
      <div className="hspbutton--highlight"></div>
    </button>
  );
}

export default HSButton;
