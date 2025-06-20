import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";

const AsyncNotifications = () => {
  const [notificationCounter, setNotificationCouner] =
    useRecoilState(notifications);

  const totalNotificationCounter = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      setNotificationCouner(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <button>network {notificationCounter.network}</button>
      <button>job {notificationCounter.job}</button>
      <button>notification {notificationCounter.notifications}</button>
      <button>messaging {notificationCounter.messaging}</button>
      <button>me {totalNotificationCounter}</button>
    </div>
  );
};

export default AsyncNotifications;
