import React from "react";
import { useCallback } from "react";
import { useState } from "react";

// Create a component with a text input field and a button.
// The goal is to display an alert with the text entered when the button is clicked.
// Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

const Assignment2 = () => {
  const [inputText, setInputText] = useState("");

  const handleAlert = useCallback(() => {
    alert(inputText);
  }, [inputText]);
  return (
    <div>
      <input
        type="text"
        placeholder="enter the text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleAlert}>alert</button>
    </div>
  );
};

export default Assignment2;
