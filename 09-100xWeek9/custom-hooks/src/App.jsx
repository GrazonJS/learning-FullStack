import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponents";
import CleanUp from "./CleanUp";

const App = () => {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 3000);
  }, []);
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <ClassComponent /> */}
      {render ? <CleanUp /> : <div></div>}
    </div>
  );
};

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increaseCount}>increase</button>
    </div>
  );
};

export default App;
