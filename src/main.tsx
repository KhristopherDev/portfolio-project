import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyNav from "./myNav";
import Body_bg from "./body";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Body_bg />
    <MyNav />
  </StrictMode>
);
