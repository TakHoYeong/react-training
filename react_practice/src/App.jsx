import "./App.css";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
// 리액트는 state의 값이 바뀌었을 때 리렌더링된다.
// 그래서 변수의 값을 바꿔주도록 코드를 짜면 화면엔 변화가 없다.
// 그 외에도 props의 값이 바뀌거나 부모 컴포넌트의 값이 바뀌면 자식 컴포넌트를 리렌더링한다.

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
