import React from "react";
import { useCallback, useState, memo } from "react";

// Create a counter component with increment and decrement functions.
// Pass these functions to a child component which has buttons to perform the increment and decrement actions.
//  Use useCallback to ensure that these functions are not recreated on every render.

const Assignment1 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    console.log("hi from +");
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }, []);

  const decreaseCount = useCallback(() => {
    console.log("hi from -");
    setCount((currentCount) => {
      return currentCount - 1;
    });
  }, []);
  return (
    <div>
      <p>Count : {count}</p>
      <ChildComponent
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </div>
  );
};

export default Assignment1;

const ChildComponent = memo(({ increaseCount, decreaseCount }) => {
  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <br />
      <button onClick={decreaseCount}>-</button>
    </div>
  );
});
