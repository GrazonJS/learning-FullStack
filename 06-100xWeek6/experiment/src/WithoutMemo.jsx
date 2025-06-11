import React, { useEffect, useState } from "react";

const WithoutMemo = () => {
  const [inputValue, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const handleIncreament = () => {
    console.log("button hello");
    setCounter((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
    });
  };
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < inputValue; i++) {
      console.log("hello");
      count = count + i;
    }
    setFinalValue(count);
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        placeholder="enter a number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>the sum is {finalValue}</p>
      <button onClick={handleIncreament}>Counter ({counter}) </button>
    </div>
  );
};

export default WithoutMemo;
