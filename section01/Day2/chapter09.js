// 1. if 조건문
let num = 10;
let cfm = "";

if(num > 10){
    cfm = "num은 10보다 크다.";
}else if(num < 10){
    cfm = "num은 10보다 작다.";
}else{
    cfm = "num은 10이다.";
}

// 2. switch 조건문
// 다수 조건 처리 시 if문보다 직관적이다.

let animal = "cat";

switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    case "lion":{
        console.log("사자");
        break;
    }
    default:{   // if문의 else 같은 기능
        console.log("등록되지 않은 동물입니다.");
    }
}