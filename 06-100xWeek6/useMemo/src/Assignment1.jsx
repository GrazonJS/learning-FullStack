import React from "react";
import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

const Assignment1 = () => {
  const [input, setInput] = useState(0);

  const factorial = useMemo(() => {
    console.log("getting into the factorial function for render");
    let expensiveValue = 1;
    for (let i = 1; i <= input; i++) {
      expensiveValue *= i;
    }

    return expensiveValue;
  }, [input]);
  return (
    <div>
      <input
        type="number"
        placeholder="enter a number"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      />
      <p>The Factorial is {factorial}</p>
    </div>
  );
};

export default Assignment1;
