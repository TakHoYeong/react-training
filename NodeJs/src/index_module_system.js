// CommonJs 모듈
const moduleData = require("./math"); //require를 사용하여 객체 불러오기
// const { add, sub } = require("./math"); << 이렇게 써도 된다.
console.log(moduleData.add(1,2));
console.log(moduleData.sub(1,2));

// ESJs 모듈
import {add , sub} from "./math.js";
import multiply from "./math.js";   // multiply 불러오기(multiply 말고 다른명으로 변수명 설정 가능)

//위의 두개의 import 하나로 합치기
import mul, { add, sub } from "./math.js";

console.log(moduleData.add(1,2));
console.log(moduleData.sub(1,2));


