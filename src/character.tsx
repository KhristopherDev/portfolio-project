import React, { useState, useEffect, useRef } from "react";

const EyeTracker = () => {
  const eyeRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  let eSizeX = 10;
  let eSizeY = 10;
  let pupilSize = 2.5;
  const pupilSizeCalcY = `Math.round(eSizeY / pupilSize) < Math.round(eSizeX / pupilSize)
      ? Math.round(eSizeX / pupilSize)
      : Math.round(eSizeY / pupilSize);`;
  const pupilSizeCalcX = `Math.round(eSizeX / pupilSize) < Math.round(eSizeY / pupilSize)
      ? Math.round(eSizeY / pupilSize)
      : Math.round(eSizeX / pupilSize);`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Normalizando dentro de uma elipse
      const rx = rect.width / 2 - Math.round(eSizeX / 4); // 10 é margem para o tamanho da pupila
      const ry = rect.height / 2 - Math.round(eSizeY / 4);

      let nx = dx / rx;
      let ny = dy / ry;
      const length = Math.sqrt(nx * nx + ny * ny);

      if (length > 1) {
        nx /= length;
        ny /= length;
      }

      setPupilPos({
        x: nx * rx,
        y: ny * ry,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          gap: `${Math.round(eSizeX / 4) / 2}px`,
        }}
      >
        <div
          ref={eyeRef}
          className="eye"
          style={{
            width: `${eSizeX}px`,
            height: `${eSizeY}px`,
            borderRadius: "50%",
            border: `${Math.round(eSizeX / 4) / 3}px solid black`,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <div
            className="pupil"
            style={{
              width: `${eval(pupilSizeCalcX)}px`,
              height: `${eval(pupilSizeCalcY)}px`,
              borderRadius: "50%",
              background: "black",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${pupilPos.x}px, ${pupilPos.y}px) translate(-50%, -50%)`,
              transition: "transform 0.1s linear",
            }}
          ></div>
        </div>
        <div
          ref={eyeRef}
          className="eye"
          style={{
            width: `${eSizeX}px`,
            height: `${eSizeY}px`,
            borderRadius: "50%",
            border: `${Math.round(eSizeX / 4) / 3}px solid black`,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <div
            className="pupil"
            style={{
              width: `${eval(pupilSizeCalcX)}px`,
              height: `${eval(pupilSizeCalcY)}px`,
              borderRadius: "50%",
              background: "black",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${pupilPos.x}px, ${pupilPos.y}px) translate(-50%, -50%)`,
              transition: "transform 0.1s linear",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default EyeTracker;
