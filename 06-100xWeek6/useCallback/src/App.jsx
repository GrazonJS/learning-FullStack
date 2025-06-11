import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Assignment1 /> */}
      <Assignment2 />
    </>
  );
}

export default App;
