import React from "react";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
};

const Count = () => {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
};

const CountRender = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom);
  console.log("hello from buttons");

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
};

export default App;
