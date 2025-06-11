import React from "react";
import { useRef } from "react";

const Assignment1 = () => {
  const buttonRef = useRef();
  console.log(buttonRef.current);

  const handleClick = () => {
    buttonRef.current.focus();
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <br />
      <input type="text" ref={buttonRef} placeholder="enter the text" />
    </div>
  );
};

export default Assignment1;
