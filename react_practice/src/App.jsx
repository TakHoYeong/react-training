import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    //스프레드 연산 사용
    text: "카페",
    color: "red",
    a: "1",
    b: "2",
    c: 3,
  };

  // div 자식요소는 props에 children이라는 키값으로 전달해준다.
  return (
    <>
      <Button text={"메일"} color={"yellow"} a={1} />
      <Button {...buttonProps} />
      <Button text={"블로그"} />
      <div>자식 요소</div>
    </>
  );
}

export default App;
