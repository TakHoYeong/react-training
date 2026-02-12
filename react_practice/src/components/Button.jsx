const Button = ({ children, text, color = "black" }) => {
  // 19버전 이후 기본값 설정 구조분해할당 사용

  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
