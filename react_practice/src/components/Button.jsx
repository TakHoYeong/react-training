const Button = ({ children, text, color = "black" }) => {
  // 19버전 이후 기본값 설정 구조분해할당 사용
  // 합성이벤트 객체 : 브라우저 별 스펙이 달라서 발생하는 문제(Cross Browsing Issue)
  //                  때문에 생겨난 통합 규격
  
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter = {onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
