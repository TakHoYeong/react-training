// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "탁호영",
  age: 30,
  hobby: "게임",
  job: "웹개발자",
  extra: {},
  10: 20,
  "like cat": true, // 공백이 포함되는 것을 키값으로 쓰려면 따옴표를 써줘야한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
let age = person["age"]; // 반드시 쌍따옴표를 붙여야 키로 인식한다

// 3.2 새로운 프로퍼티 추가
person.job = "백엔드 개발자";
person["favoriteFood"] = "피자";

// 3.3 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티 존재유무 확인
let result1 = "name" in person; // true 반환
let result2 = "cat" in person; // false 반환
