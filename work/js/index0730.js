function runIndex1() {
    let text = "";
    let myTxt = "";
    const CARS = ["BMW","볼보","시브","포드","피아트","아우디","BMW","볼보","시브","포드","피아트","아우디"];

    for (let i = 0; i < CARS.length; i++) {
        myTxt += CARS[i] + i;
        console.log(CARS[i]);
    }

    text += CARS[0] +"..";
    text += CARS[1] +"..";
    text += CARS[2] +"..";
    text += CARS[3] +"..";
    text += CARS[4] +"..";
    text += CARS[5] +"..";

    document.getElementById("output1").innerHTML = `myTxt: ${myTxt}<br>text: ${text}`;
}

function runIndex2() {
    let mydate = new Date();
    let myhour = mydate.getHours();
    let greeting = "";
    let time1 = 9;
    let time2 = 18;

    console.log(mydate);
    console.log(myhour);

    if (myhour < time1) {
        greeting = "안녕하세요.";
    } else if (myhour < time2) {
        greeting = "열공";
    } else if (myhour === time2) {
        greeting = "수고하셨습니다";
    } else {
        greeting = "잘들어가셨나요";
    }

    console.log(greeting);
    document.getElementById("output2").innerHTML = `현재 시각:${mydate}<br>인사: ${greeting}`;
}

function runIndex3() {
    let myTxt;
    let myRandom = Math.random();

    console.log(myRandom);

    if (myRandom < 0.5) {
        myTxt = "0.5보다 작다.";
    } else {
        myTxt = "0.5보다 작지않다.";
    }

    document.getElementById("output3").innerHTML = `<h3>결과는 ${myTxt}</h3><small>(랜덤값: ${myRandom})</small>`;
}
