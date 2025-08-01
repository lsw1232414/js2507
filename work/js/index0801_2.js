function example1() {
  const result = 4 * 3;
  show(`The result is: ${result}`);
}

function example2() {
  function toCelsius(f) {
    return (5/9) * (f - 32);
  }
  show(toCelsius(77));
}

function example3() {
  function toCelsius(f) {
    return (5/9) * (f - 32);
  }
  let value = toCelsius(); // undefined → NaN
  show(value);
}

function example4() {
  function toCelsius(f) {
    return (5/9) * (f - 32);
  }
  let value = toCelsius;
  show(value); // 함수 자체 출력
}

function example5() {
  let myFunction = function(a, b) { return a * b; };
  let result = myFunction(4, 3);
  show(result);
}

function example6() {
  let myFunction = (a, b) => a * b;
  let result = myFunction(4, 5);
  show(result);
}

function example7() {
  let text1 = "Outside: " + typeof carName;
  function myFunction() {
    let carName = "Volvo";
    let text2 = "Inside: " + typeof carName + " " + carName;
    show(`${text1}<br>${text2}`);
  }
  myFunction();
}

function example8() {
  function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old.";
  }
  show(greet("John", 21));
}

function example9() {
  function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old.";
  }
  show(greet("John", 21));
}

function example10() {
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
  }
  let text = "The temperature is " + toCelsius(77) + " Celsius.";
  show(text);
}

function show(msg) {
  document.getElementById("output").innerHTML = msg;
}
