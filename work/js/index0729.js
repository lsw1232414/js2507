function runIndex1() {
  const x = 10, y = 20;
  const result = x + y;
  document.getElementById("output").innerHTML =
    `<br>두 수의 합은2: ${result}`;
}

function runIndex2() {
  let num1 = 5, num2 = 10, result = 0;
  let num9 = 10, num99 = 10;

  result = num1 + num2;
  console.log(result);
  result = num1 - num2;
  console.log(result);
  result = num1 * num2;
  console.log(result);
  result = num1 / num2;
  console.log(result);
  result = num1 % num2;
  console.log(result);

  result = ++num9;
  console.log(`선행결과 ${result} 변수값${num9}`);

  result = --num99;
  console.log(`선행결과 ${result} 변수값${num99}`);

  result = num9++;
  console.log(`선행결과 ${result} 변수값${num9}`);

  result = num99--;
  console.log(`선행결과 ${result} 변수값${num99}`);

  document.getElementById("output").innerHTML = `<h3>${num1 + num2}</h3>`;
}

function runIndex3() {
  let num = 5;
  let result = 0, result2 = 0;

  console.log(result = result + num);
  console.log(result2 += num);

  result = 0; result2 = 0;
  console.log(result = result - num);
  console.log(result2 -= num);

  result = 5; result2 = 10;
  console.log(result = result * num);
  console.log(result2 *= num);

  result = 10; result2 = 5;
  console.log(result = result / num);
  console.log(result2 /= num);

  result = 20; result2 = 20;
  console.log(result = result % num);
  console.log(result2 %= num);
}

function runIndex4() {
  let userNumber = parseInt(prompt("숫자를 입력하세요~!"));
  let result;
  if (userNumber % 3 === 0)
    result = "3의 배수";
  else
    result = "3의 배수가 아닙니다.";
  alert(result);
}

function runIndex5() {
  let userNumber = parseInt(prompt("숫자를 입력하세요"));
  if (userNumber > 0)
    userNumber % 3 === 0 ? alert("3의 배수") : alert("3의배수아님");
  else
    alert("입력취소");
}
