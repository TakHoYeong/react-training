// 1. 함수 표현식
function funcA(){
    console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수
let varB = function(){
    console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => 1; 

// function을 제거하고 소괄호 뒤에 '=>'를 붙여준다
// 중괄호를 제거하고 반환값을 return을 제거하고 화살표 뒤에 붙여준다.
