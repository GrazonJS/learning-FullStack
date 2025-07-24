import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    // Define the event handlers
    const handleOnline = () => {
      console.log("became online");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("became offline");
      setIsOnline(false);
    };

    // Add event listeners once
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up by removing event listeners when component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array means this runs once on mount

  return isOnline; // Return the boolean directly, not an object
};

export default useIsOnline;
