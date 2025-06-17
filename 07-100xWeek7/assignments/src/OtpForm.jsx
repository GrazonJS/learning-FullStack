import React, { useEffect, useRef, useState } from "react";

const OtpForm = ({ length = 4, number }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  console.log(inputRefs.current);

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleDigit = (e, index) => {
    const newOtp = [...otp];
    const newValue = e.target.value;
    newOtp[index] = newValue.slice(-1);
    setOtp(newOtp);
    if (newValue && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      <p>An OTP has been sent to {number}</p>
      <form>
        {otp.map((value, index) => {
          return (
            <div key={index}>
              <input
                type="number"
                maxLength={1}
                value={value}
                onChange={(e) => {
                  handleDigit(e, index);
                }}
                ref={(e) => (inputRefs.current[index] = e)}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default OtpForm;
