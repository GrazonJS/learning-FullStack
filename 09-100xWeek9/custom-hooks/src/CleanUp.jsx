import React, { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
    console.log("components mounted");

    return () => {
      console.log("components unmounted");
    };
  }, []);
  return <div>CleanUp</div>;
};

export default CleanUp;
