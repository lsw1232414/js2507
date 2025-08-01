// index1.js
function addNum() {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    console.log(`결과값: ${sum}`);
}
addNum();

// index2.js
function doIT() {
    let x = 1;
    console.log(x);
    x = 2;
    console.log(x);
}
const user = "Kim";
console.log(`MY name is ${user}`);
// user = "Lee"; // const 재할당 불가
doIT();

let x = 10;
function display() {
    console.log(x);
    // console.log(y); // 오류 발생: Cannot access 'y' before initialization
    let y = 20;
}
display();

// index3.js
(function () {
    let userName = prompt("이름을 입력하세요");
    document.writeln(`<p>안녕하세요 <span class="accent">${userName}</span>님!</p>`);
})();

// index4.js
(function (a, b) {
    sum = a + b;
})(100, 200);
document.writeln(`<p>함수 실행 결과 : ${sum}</p>`);

// index5.js
const hi = function () {
    return "안녕";
};
console.log(hi);
console.log(typeof hi); // hi2 → 정의되지 않았으므로 오류 방지 위해 제거

const hi3 = () => "안녕3";
console.log(hi3);
console.log(typeof hi3);

const hi4 = user => `${user}님 안녕하세요`; // return 빠졌던 부분 수정
console.log(hi4("철수"));
console.log(typeof hi4);

let hi5 = user2 => {
    document.writeln(`<p>${user2}님, 안녕하세요?</p>`);
};
hi5("지영");

let sumFunc = function (a, b) {
    return a + b;
};

let myFunction = (a, b) => a * b;
let result = myFunction(4, 5);
console.log(`결과는 ${result}`);
