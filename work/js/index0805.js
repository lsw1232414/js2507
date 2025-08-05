// 1. DOM 객체 + Forms
const form = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');
const domText = document.getElementById('domText');
const changeColorBtn = document.getElementById('changeColorBtn');

function validateNumForm() {
    let x = document.forms["numForm"]["numInput"].value;
    if (x.trim() === "") {
        alert("숫자를 반드시 입력하세요.");
        return false;
    }
    if (isNaN(x)) {
        alert("숫자만 입력 가능합니다.");
        return false;
    }
    document.getElementById("numResult").innerText = `입력한 숫자: ${x}`;
    return true;
}


// 2. event 예제
document.getElementById('eventBtn').addEventListener('click', () => {
    alert('버튼 클릭 이벤트 발생!');
});

// 3. eventListener 예제
const listenerBtn = document.getElementById('listenerBtn');
const listenerText = document.getElementById('listenerText');

listenerBtn.addEventListener('mouseenter', () => {
    listenerText.innerText = '마우스를 인식중입니다.';
});

listenerBtn.addEventListener('mouseleave', () => {
    listenerText.innerText = '마우스를 올려주세요.';
});

// 4. node 예제
document.getElementById('addNodeBtn').addEventListener('click', () => {
    const ul = document.getElementById('nodeList');
    const newLi = document.createElement('li');

    // 현재 아이템 개수 + 1 을 번호로 붙임
    const itemNumber = ul.children.length + 1;
    newLi.textContent = `항목#${itemNumber}`;

    ul.appendChild(newLi);
});

