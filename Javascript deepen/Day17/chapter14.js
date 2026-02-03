// async
// 함수를 비동기 함수로 만들어주는 키워드

async function getData1() {
  return {
    name: "탁호영",
    id: "tacoringo",
  };
}

async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "탁호영",
        id: "tacoringo",
      });
    }, 2000);
  });
}

console.log(getData());

// await
// 비동기 함수가 다 처리되기를 기다리는 역할
// async 함수 내부에서만 사용 가능

async function printData() {
  const data = await getData(); // Promise가 끝날 때 까지 기다렸다가 실행된다
  console.log(data);
}

printData();
