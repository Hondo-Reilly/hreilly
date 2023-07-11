import React from "react";
import wave from "../assets/RedWave-01.png";
import "../css/Ocean.css";
function Ocean() {
  return (
    <div className="ocean">
      <div
        className="wave"
        style={{
          backgroundImage: `url(${wave})`,
        }}
      ></div>

      <div
        className="wave wave-2"
        style={{
          backgroundImage: `url(${wave})`,
        }}
      ></div>

      <div
        className="wave wave-3"
        style={{
          backgroundImage: `url(${wave})`,
        }}
      ></div>
    </div>
  );
}

export default Ocean;
