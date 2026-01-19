// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수를 사용하여 직접 형 변환

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // 결과값 : 10

let str2 = "10개";
let strToNum2 = parseInt(str2); // 결과값 : 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
