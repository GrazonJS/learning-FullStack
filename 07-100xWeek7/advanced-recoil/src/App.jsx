import React from "react";
import { RecoilRoot } from "recoil";
import NotificationBar from "./NotificationBar";
import AsyncNotifications from "./AsyncNotifications";
import Todo from "./Todo";

const App = () => {
  return (
    <RecoilRoot>
      {/* <NotificationBar /> */}
      {/* <AsyncNotifications /> */}
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={1} />
    </RecoilRoot>
  );
};

export default App;
