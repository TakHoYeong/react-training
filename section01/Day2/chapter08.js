// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1은 undifined고 var2가 10 이므로 값이 있는 var2가 var4에 저장된다.
let var5 = var2 ?? var3; // 둘다 값이 있다면 앞에 있는 var2가 var5에 저장된다.

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // var7의 값이 "hello"이므로 string이 반환된다.

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수면 "짝" 홀수면 "홀"을 저장
let res = var8 % 2 === 0 ? "짝" : "홀";

