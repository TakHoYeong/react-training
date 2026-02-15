import "./App.css";
import { useState } from "react";

// 리액트는 state의 값이 바뀌었을 때 리렌더링된다.
// 그래서 변수의 값을 바꿔주도록 코드를 짜면 화면엔 변화가 없다.
function App() {
  const [count, setCount] = useState(0);
  // state에는 값이 들어있고 setState에는 함수가 들어있다.
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>
        +
      </button>
    </div>
    </>
  );
}

export default App;
