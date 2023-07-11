import React from "react";
import "../css/BlackHole.css";
export default function BlackHole() {
  const horizonColor = "url(#horizon-gradient)";
  const runAnimations = true;
  const horizonCount = 5;
  const horizonAngleDifference = 360 / horizonCount;
  const animationTiming = [10, 11, 12, 10, 11];

  let horizonWaves = [];
  for (let i = 0; i < horizonCount; i++) {
    const waveAngle = horizonAngleDifference * i;
    const animationDuration = animationTiming[i];

    horizonWaves.push(
      <g transform={`rotate(${waveAngle}, 500, 500)`}>
        <g filter="url(#gaus-blur)">
          <ellipse
            cx="500"
            cy="500"
            rx="265"
            ry="260"
            fill={horizonColor}
            fillOpacity="0.75"
            transform="translate(-5, 0)"
          ></ellipse>
          {runAnimations && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 500 500"
              to="360 500 500"
              dur={animationDuration + "s"}
              repeatCount="indefinite"
            />
          )}
        </g>
      </g>
    );
  }

  return (
    <div id="black-hole">
      {() => {
        return <p>AA</p>;
      }}

      <svg viewBox="0 0 1000 1000">
        <defs>
          <filter id="gaus-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          <radialGradient id="horizon-gradient">
            <stop offset="85%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(255, 127, 19, 0.3)" />
          </radialGradient>

          <filter>
            <feTurbulence
              baseFrequency="0.5,0.5"
              numOctaves="1"
              seed="1000"
              type="turbulence"
            />
          </filter>
        </defs>

        {horizonWaves}

        {/*
        <g transform="rotate(150, 500, 500)" filter="url(#gaus-blur)">
          <g transform="translate(5, 0)">
            <ellipse
              cx="500"
              cy="500"
              rx="280"
              ry="250"
              fill={horizonColor}
              fillOpacity="0.5"
            >
              {runAnimations && (
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 500 500"
                  to="360 500 500"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          </g>
        </g>

        <g transform="rotate(210, 500, 500)" filter="url(#gaus-blur)">
          <g transform="translate(-5, 0)">
            <ellipse
              cx="500"
              cy="500"
              rx="280"
              ry="250"
              fill={horizonColor}
              fillOpacity="0.5"
            >
              {runAnimations && (
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 500 500"
                  to="360 500 500"
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          </g>
        </g>
        */}
        <circle
          cx="500"
          cy="500"
          r="225"
          fill="black"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

/*
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 500 500"
              to="360 500 500"
              dur="10s"
              repeatCount="indefinite"
            />
 */
