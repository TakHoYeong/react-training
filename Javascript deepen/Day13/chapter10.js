// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997-11-26");
let date3 = new Date("1997/11/26/10:10:10");
let date4 = new Date(1997, 11, 26, 8, 9, 59);
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // date1에 해당하는 UTC 값 반환
let date5 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월은 0으로 표시가 된다 그래서 +1을 해준다.
let date = date1.getSeconds();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 2를 넣으면 3월이다.
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); // 출력값 : Thu Mar 30 2023
console.log(date1.toLocaleString()); // 각 지역에 맞게 출력 : 2023. 3. 30. 오후 11:59:59
