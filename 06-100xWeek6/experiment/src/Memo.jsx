import React, { useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  const handleIncreament = () => {
    console.log("button hello");
    setCounter((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
    });
  };

  const calculateFunction = useMemo(() => {
    let count = 0;
    for (let i = 0; i < number; i++) {
      console.log("hello");

      count = count + i;
    }
    return count;
  }, [number]);

  return (
    <div>
      <input
        type="number "
        placeholder="enter a number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <p>the sum is {calculateFunction}</p>
      <button onClick={handleIncreament}>Counter ({counter}) </button>
    </div>
  );
};

export default Memo;
