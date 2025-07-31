function index1() {
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
    let myNumber = "test";
    if(!isNaN(myNumber)){
        alert("유효한 숫자");
    }else{
        alert("숫자가 아닙니다");
    }
}

function index4() {
    let numberOne = parseInt(prompt("50미만의 숫자를 입력하세요"));
    let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요"));
    if(isNaN(numberOne) || isNaN(numberTwo)){
        alert("숫자가 아닙니다");
    }else{
        if(numberOne < 50 && numberTwo < 50)
            alert("2개의 숫자모두  50미만");
        else
            alert("조건에 맞지 않는 숫자");
    }
}

function index5() {
    let session = prompt("관심 세션을 선택해주세요. 1-마케팅, 2-개발, 3-디자인");
    switch (session) {
        case "1": document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다. </p>");
            break;
        case "2": document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다. </p>");
            break;
        case "3": document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다. </p>");
            break;
        default : alert("잘못된 입력");
    }
}

function index6() {
    document.write("<style>body{text-align: center; border: 1px solid black; width: 300px; margin:auto;}</style>");
    for(let i=1; i<= 9; i++){
        document.writeln(`${i}단 <br>`);
        document.writeln(`--------------------------<br>`);
        for(let j = 1; j <= 9; j++){
            document.writeln(`${i} X ${j}= ${i*j}<br>`);
        }
        document.writeln(`<br>`);
    }
}

function index7() {
    let stars = 5;
    do{
        document.writeln(`*`);
        stars--;
    }while(stars>0);
}

function index8() {
    for(let i= 2; i<10 ;i++){
        if(i==4) continue;
        document.writeln(`<div class="times">`);
        document.writeln(`<h3>${i}단</h3>`);
        document.writeln(`</div>`);
    }
}

function index9() {
    let memNum = parseInt(prompt("입장객은 몇 명인가요?"));  
    let colNum = parseInt(prompt("한 줄에 몇 명씩 앉습니까?"));  
    let seat, rowNum;
    if (memNum % colNum === 0) {  
        rowNum = memNum / colNum;
    } else {
        rowNum = parseInt(memNum / colNum) + 1;
    }
    document.writeln('<table>');
    for (let i = 0; i < rowNum; i++) {
        document.writeln('<tr>');
        for (let j = 1; j <= colNum; j++) {
            seat = i * colNum + j;
            if (seat > memNum) break;
            document.writeln(`<td> 좌석 ${seat} </td>`);
        }
        document.writeln('</tr>');
    }
    document.writeln('</table>');
}
