import { useState } from "react";

// 커스텀 훅은 함수명 앞에 'use'를 붙여주면 된다.
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
