import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Memo from "./Memo.jsx";
import WithoutMemo from "./WithoutMemo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WithoutMemo />
  </StrictMode>
);
