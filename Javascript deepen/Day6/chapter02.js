// 1. 단락평가
/* 두개의 조건 중에 앞의 하나만으로도 평가를 단정지을 수 있다면
    그 뒤의 조건은 접근조차 하지않는 것
    예를 들어, AND연산자 같은 경우 둘다 참이어야만 참을 반환하므로
    앞에 온 조건식이 거짓이라면 뒤의 조건문은 볼 필요도없이 False를 반환하면 되기 때문에
    뒤의 식에는 접근 조차 하지않는다.
*/
function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse() && returnTrue());
// 앞이 False 이므로 returnFalse() 함수만 실행하고
// returnTrue() 함수는 실행조차 하지 않는다. console에는 'False' 'False 함수' 가 차례로 찍힌다.

console.log(returnFalse() || returnTrue());

// 2. 단락평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "탁호영" });
