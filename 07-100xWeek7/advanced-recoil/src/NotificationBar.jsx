import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms";

function NotificationBar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);
  return (
    <>
      <div>
        <button>Home</button>
        <button>
          My network (
          {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
        </button>
        <button>Jobs({jobAtomCount})</button>
        <button>Messaging({messagingCount})</button>
        <button>Notifications({notificationCount})</button>
        <button
          onClick={() => {
            setNotificationCount((c) => c + 1);
          }}
        >
          Me
        </button>
      </div>
    </>
  );
}

export default NotificationBar;
