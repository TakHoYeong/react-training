// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "탁호영", hobby: "게임" },
  { name: "홍해성", hobby: "테니스" },
  { name: "서기륜", hobby: "헬스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople); // 결과 값 : [{hobby:"테니스" name:"홍해성"}]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // 결과값 : [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ["a", "b", "c"]

let arr4 = [10, 3, 5]; // 숫자 값은 정렬이 제대로 안된다
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 와라
    return 1; // -> b, a 배치
  } else if (a < b) {
    // a가 b앞에 와라
    return -1; // -> a, b 배치
  }
});

// 4. toSorted
// sort와 유사하지만 원본배열을 바꾸지 않고 새로운 배열을 반환한다.

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "taco"];
const joined = arr6.join(); // 괄호안에 "|", "-" 등을 넣으면 단어와 단어사이에 삽입된 채로 반환
console.log(joined); // 결과값 : hi,im,taco
