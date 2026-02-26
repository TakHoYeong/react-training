import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect 대신 onClick이벤트에 console 출력하면 안되나?
  // -> setCount가 비동기이기 때문에 함수의 완료가 뒤늦게 되기 때문에
  // 시점이 맞지않아서 오류가 발생할 수도 있다.
  useEffect(() => {
    console.log(`count:${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열(dependency array(deps))

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
