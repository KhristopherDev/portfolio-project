import "./style.css";
import { useMouseMove, useValue, animate, interpolate } from "react-ui-animate"; //react-ui-animate library let us use mouse events easily

const CURSOR_SIZE = 350; //size of cursor blob

function Gradients() {
  //This function returns a blob background. It configures functions and elements
  const curX = useValue(0);
  const curY = useValue(0);

  useMouseMove(({ mouseX, mouseY }) => {
    curX.value = mouseX - CURSOR_SIZE / 2; //get the center of elipse
    curY.value = mouseY - CURSOR_SIZE / 2; //get the center of elipse
  });

  return (
    <>
      <div className="gradient-bg">
        {" "}
        {/* Behind this background there is also another that is the body, but this one cover the body. It also applies the goo filter */}
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              {" "}
              {/* link: https://codepen.io/lenymo/pen/pJzWVy */}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          {" "}
          {/* this container apply the goo filter */}
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="g6"></div>
          <animate.div
            className="interactive"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              background:
                "radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;",
              mixBlendMode: "hard-light",
              filter: "blur(40px)",
              translateX: interpolate(curX.value, [0, 30, 80], [0, 50, 100]), //best attempt of lerp
              translateY: interpolate(curY.value, [0, 30, 80], [0, 50, 100]),
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Gradients;
