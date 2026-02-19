import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();
  // Ref를 사용하지않고 javascript 코드를 쓰면 리렌더링이 되기 때문에 잠재적인 오류가 발생한다.
  // 변수를 렌더링 바깥에 선언해두면 되지않나? 싶지만
  // 그렇게 되면 App.jsx에서 두번 렌더링을 하는경우 치명적이다.
  // 첫번째 input에서 count된 것이 초기화 되지않고 두번째 input까지 영향을 미치기 때문
  let count = 0;

  const onChange = (e) => {
    // countRef.current++;
    count++;
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
