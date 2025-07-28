var d = document;
let num1 = 3; num2 = "3"
let num3 = 4;
// boolean타입: 0과 1을 표한하는 2진수의 결과를 준다.
var result = true

// 같다
result = (num1 == num2)
d.getElementById("result1").innerHTML = `== 같다: ${result}`;
// === 타입도 같다
result = (num1 === num2); // false (타입 다름)
d.getElementById("result2").innerHTML = `=== 타입도 같다: ${result}`;

// != 같지 않다
result = (num1 != num2); // false
d.getElementById("result3").innerHTML = `!= 같지 않다: ${result}`;

// !== 타입도 다르다
result = (num1 !== num2); // true
d.getElementById("result4").innerHTML = `!== 타입도 다르다: ${result}`;

// < 왼쪽이 작다
result = (num1 < num3); // true
d.getElementById("result5").innerHTML = `< 왼쪽이 작다: ${result}`;

// <= 왼쪽이 작거나 같다
result = (num1 <= num3); // true
d.getElementById("result6").innerHTML = `<= 왼쪽이 작거나 같다: ${result}`;

// > 오른쪽이 작다
result = (num1 > num3); // false
d.getElementById("result7").innerHTML = `> 오른쪽이 작다: ${result}`;

// >= 오른쪽이 작거나 같다
result = (num1 >= num3); // false
d.getElementById("result8").innerHTML = `>= 오른쪽이 작거나 같다: ${result}`;