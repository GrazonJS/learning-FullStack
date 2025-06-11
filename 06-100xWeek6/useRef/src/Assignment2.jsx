import React from "react";
import { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

const Assignment2 = () => {
  const [count, setCount] = useState(0);

  let renderRef = useRef(0);

  const handleRender = () => {
    setCount(count + 1);
  };
  renderRef.current += 1;
  console.log(renderRef.current);

  return (
    <div>
      <p>This component has rendered {renderRef.current} times</p>
      <button onClick={handleRender}>ForceRender</button>
    </div>
  );
};

export default Assignment2;
