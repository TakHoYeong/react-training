// Promise
// 비동기 작업을 효율적으로 처리하도록 도와주는 자바스크립트 내장 객체
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // resolve:성공, reject:실패
    // 비동기 작업 실행하는 함수(executor)
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // 프로미스 객체의 상태를 성공상태(full로 변경
        // 괄호안의 값은 PromiseResult에 줄 값
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드
promise.then((value) => {
  // promise 성공 시에 실행되는 함수
  console.log(value);
});

// catch 메서드
promise.catch((error) => {
  // promise 실패 시에 실행되는 함수
  console.log(error);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
