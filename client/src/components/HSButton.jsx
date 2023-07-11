import React, { useState } from "react";
import "../css/HSButton.css";

function HSButton({ size, children }) {
  //highlight slide button

  const [runClickAnimation, setRunClickAnimation] = useState(false);

  function handleOnClick() {
    setRunClickAnimation(true);

    setTimeout(() => {
      setRunClickAnimation(false);
    }, 1300);
  }

  return (
    <button
      className={
        "hsbutton " + size + (runClickAnimation ? " hsbutton-clicked" : "")
      }
      onClick={handleOnClick}
    >
      <p className="hsbutton--label">{children}</p>
      <div className="hsbutton--highlight">
        <div className="hsbutton--sub-highlight"></div>
        <div className="hsbutton--sub-highlight"></div>
        <div className="hsbutton--sub-highlight"></div>
        <div className="hsbutton--sub-highlight"></div>
      </div>
    </button>
  );
}

export default HSButton;
