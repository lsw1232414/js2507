function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = "";
}

function index1() {
    clearOutput();
    let userNumber = prompt("숫자를 입력하시오");
    if (userNumber === null) {
        alert('입력취소');
    } else if (parseInt(userNumber) % 3 === 0) {
        alert('3의 배수');
    } else {
        alert('3의 배수X');
    }
}

function index2() {
    clearOutput();
    let userNumber = prompt("숫자를 입력하세요");
    if (userNumber === "") {
        alert("공백이 입력되었습니다");
    } else if (userNumber !== null && parseInt(userNumber) % 3 === 0) {
        alert("3의 배수입니다");
    } else if (userNumber !== null) {
        alert("3의 배수가 아닙니다");
    } else {
        alert("입력이 취소됐습니다");
    }
}

function index3() {
    clearOutput();
    let myNumber = "test";
    const output = document.getElementById('output');
    if (!isNaN(myNumber)) {
        output.textContent = "유효한 숫자";
    } else {
        output.textContent = "숫자가 아닙니다";
    }
}

function index4() {
    clearOutput();
    let numberOne = parseInt(prompt("50미만의 숫자를 입력하세요"));
    let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요"));
    const output = document.getElementById('output');
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        output.textContent = "숫자가 아닙니다";
    } else {
        if (numberOne < 50 && numberTwo < 50)
            output.textContent = "2개의 숫자 모두 50미만";
        else
            output.textContent = "조건에 맞지 않는 숫자";
    }
}

function index5() {
    clearOutput();
    let session = prompt("관심 세션을 선택해주세요. 1-마케팅, 2-개발, 3-디자인");
    const output = document.getElementById('output');
    switch (session) {
        case "1":
            output.innerHTML = "<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>";
            break;
        case "2":
            output.innerHTML = "<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>";
            break;
        case "3":
            output.innerHTML = "<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>";
            break;
        default:
            alert("잘못된 입력");
    }
}

function index6() {
    clearOutput();
    const output = document.getElementById('output');
    let html = "<div style='text-align: center;'>";
    for (let i = 1; i <= 9; i++) {
        html += `<strong>${i}단</strong><br>--------------------------<br>`;
        for (let j = 1; j <= 9; j++) {
            html += `${i} × ${j} = ${i * j}<br>`;
        }
        html += `<br>`;
    }
    html += "</div>";
    output.innerHTML = html;
}

function index7() {
    clearOutput();
    const output = document.getElementById('output');
    let stars = 5;
    let result = "";
    do {
        result += "*";
        stars--;
    } while (stars > 0);
    output.textContent = result;
}

function index8() {
    clearOutput();
    const output = document.getElementById('output');
    let html = "";
    for (let i = 2; i < 10; i++) {
        if (i == 4) continue;
        html += `<div class="times"><h3>${i}단</h3></div>`;
    }
    output.innerHTML = html;
}

function index9() {
    clearOutput();
    const output = document.getElementById('output');
    let memNum = parseInt(prompt("입장객은 몇 명인가요?"));
    let colNum = parseInt(prompt("한 줄에 몇 명씩 앉습니까?"));

    if (isNaN(memNum) || isNaN(colNum) || colNum === 0) {
        output.textContent = "올바른 숫자를 입력하세요.";
        return;
    }

    let rowNum = Math.ceil(memNum / colNum);
    let table = "<table>";

    for (let i = 0; i < rowNum; i++) {
        table += "<tr>";
        for (let j = 1; j <= colNum; j++) {
            let seat = i * colNum + j;
            if (seat > memNum) break;
            table += `<td>좌석 ${seat}</td>`;
        }
        table += "</tr>";
    }

    table += "</table>";
    output.innerHTML = table;
}
