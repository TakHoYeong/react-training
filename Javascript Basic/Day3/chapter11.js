// 함수선언

function greeting(){
    console.log("안녕하세요!");
}

greeting(); // 함수 호출 시 무조건 소괄호를 붙여줘야한다.

// 함수
function getArea(width, height){
    let area = width * height;

    console.log(area);

    return area;
    console.log("출력 안됨"); // return문 다음으로 작성한 것은 실행되지 않는다
}

let area1 = getArea(10, 20);

/* 
※ 자바스크립트는 자바와 다르게 함수가 호출하는 코드보다 밑에 있어도
    자바스크립트의 호이스팅 기능 때문에 문제없이 실행이 된다.
*/