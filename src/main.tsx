import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import MyNav from "./myNav";
import Body_bg from "./body";
import Gradients from "./gradients";
import Computer3D from "./centerGrad";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Body_bg />
    <Gradients />
    <MyNav />
    <Computer3D />
  </StrictMode>
);
