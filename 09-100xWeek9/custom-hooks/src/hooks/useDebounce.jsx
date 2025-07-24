import React, { useEffect, useState } from "react";

const useDebounce = (value, interval) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDebounceValue(value);
    }, interval);

    return () => clearInterval(timerId);
  }, [value, interval]);

  return debounceValue;
};

export default useDebounce;
