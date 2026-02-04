// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// common 모듈
module.exports = {
  add: add, // key와 value가 같다면 'add'만 써줘도됨
  sub: sub,
};

// ES 모듈
export { add, sub }; // 이렇게 해도되고 함수 앞에 아래와 같이 export를 붙여줘도 된다.

export function add(a, b) {
  return a + b;
}

  // multiply 기능
  export default function multiply(a, b) {
    return a * b;
  }
