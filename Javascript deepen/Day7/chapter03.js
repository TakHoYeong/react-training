// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 각 arr의 1, 2, 3 이 저장된다.
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "탁호영",
  age: 30,
  hobby: "게임",
};

let { name, age: myAge, hobby, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {};

func(person);
