let d = document;

// 1 concat  ***고객님 안녕하십니까
let x1 = "***고객님";
let y1 = "안녕하십니까";
let z1 = x1.concat(" ", y1);
d.writeln(z1 + "<br>");

// 2 join  *_*_*_고객님 안녕하십니까!
let x2 = ["*_*_*_고객님", "안녕하십니까!"];
let z2 = x2.join(" "); 
d.writeln(z2 + "<br>");

// 3 push *_*_*_고객님 안녕하십니까, ***고객님 안녕하십니까
let arr3 = ["*_*_*_고객님", "안녕하십니까"];
arr3.push("***고객님 안녕하십니까");
d.writeln(arr3.join(", ") + "<br>");

// 4 unshift 수원역지점 *_*_*_고객님 안녕하십니까 수원역지점
arr3.unshift("수원역지점");
d.writeln(arr3.join(" ") + "<br>");

// 5 pop 수원역지점 *_*_*_고객님 안녕하십니까 수원역지점
let popped = arr3.pop();
d.writeln(popped + "<br>");
d.writeln(arr3.join(" ") + "<br>");

// 6 shift *_*_*_고객님 안녕하십니까, ***고객님 안녕하십니까
let shifted = arr3.shift();
d.writeln(shifted + "<br>");
d.writeln(arr3.join(", ") + "<br>");

// 7 splice *_*_*_고객님 오늘도 좋은하루 안녕하십니까 ***고객님 안녕하십니까
let arr7 = ["*_*_*_고객님", "안녕하십니까", "***고객님 안녕하십니까"];
arr7.splice(1, 0, "오늘도 좋은하루");
d.writeln(arr7.join(" ") + "<br>");

// 8 slice *_*_*_, ***  
let arr8 = ["*_*_*_", "오늘도 좋은하루", "***"];
let sliced = arr8.slice(0, 1).concat(arr8.slice(2));
d.writeln(sliced.join(", ") + "<br>");
