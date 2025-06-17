import { useState } from "react";
import OtpForm from "./OtpForm";

const OtpLoginForm = () => {
  const [number, setNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);

  function validatePhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Check if the result has exactly 10 digits
    if (digitsOnly.length === 10) {
      return true;
    } else {
      false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhoneNumber(number)) {
      setIsValidNumber(true);
    } else {
      alert("enter valid phone number ");
    }
  };
  return (
    <div>
      <h2>Enter your phone number</h2>
      {isValidNumber ? (
        <OtpForm length={4} number={number} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="enter your phone number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
};

export default OtpLoginForm;
