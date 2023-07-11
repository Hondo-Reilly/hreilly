import React, { useEffect, useRef, useState } from "react";
import "../css/StaticEffectButton.css";
function StaticEffectButton() {
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(0);

  const fadeInIntervalRef = useRef(0);
  function handleOnMouseEnter() {
    setHovered(true);
    setScale(0);

    fadeInIntervalRef.current = setInterval(() => {
      setScale((currentScale) => {
        if (currentScale + 2 >= 30) {
          clearInterval(fadeInIntervalRef.current);
        }

        return currentScale + 2;
      });
    }, 10);
  }

  return (
    <>
      <div
        id="se-button"
        onMouseDown={handleOnMouseEnter}
        onMouseUp={() => {
          setHovered(false);
        }}
      >
        <p className="label">Test Text</p>
      </div>

      <svg style={{ display: "none" }}>
        <defs>
          <filter id="noise">
            <feTurbulence
              baseFrequency="0.7,0.8"
              seed="0"
              type="fractalNoise"
              result="static"
            >
              {hovered && (
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>

            <feDisplacementMap in="SourceGraphic" in2="static">
              {hovered && (
                <animate
                  attributeName="scale"
                  values={scale}
                  dur="800ms"
                  repeatCount="indefinite"
                  calcMode="paced"
                />
              )}
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default StaticEffectButton;
