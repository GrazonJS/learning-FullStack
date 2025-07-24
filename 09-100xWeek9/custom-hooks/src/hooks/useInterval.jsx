import React, { useEffect, useState } from "react";

const useInterval = (callback, interval) => {
  useEffect(() => {
    const intervalId = setInterval(callback, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [callback, interval]);
};

export default useInterval;
