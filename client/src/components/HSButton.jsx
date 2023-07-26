import React, { useState } from "react";
import "../css/HSButton.css";

function HSButton({ size, children, onClick }) {
  //highlight slide button
  const [runClickAnimation, setRunClickAnimation] = useState(false);

  function handleOnClick() {
    onClick();

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
      <div className="hsbutton--highlight"></div>
    </button>
  );
}

export default HSButton;
