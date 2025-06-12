import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <Count count={count} />
      <Button setcount={setcount} />
    </>
  );
};

const Count = ({ count }) => {
  return <div>{count}</div>;
};

const Button = ({ setcount }) => {
  const handleIncrease = () => {
    setcount((currentCount) => {
      return currentCount + 1;
    });
  };
  const handleDecrease = () => {
    setcount((currentCount) => {
      return currentCount - 1;
    });
  };
  return (
    <div>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
};

export default App;
