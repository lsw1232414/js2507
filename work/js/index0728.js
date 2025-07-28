        var d = document
        let num1= 3; let num2 = 5; let result4;

        result4 = num1 + num2;
        d.getElementById("result5").innerHTML = `<b>덧셈: ${result4}</b>`

        
        result4 = num1 - num2;
        d.getElementById("result6").innerHTML = `<b>뺄셈: ${result4}</b>`

        
        result4 = num1 * num2;
        d.getElementById("result7").innerHTML = `<b>곱셈: ${result4}</b>`

        
        result4 = num1 / num2;
        d.getElementById("result8").innerHTML = `<b>나눗셈: ${result4}</b>`

        
        result4 = num1 % num2;
        d.getElementById("result9").innerHTML = `<b>나머지: ${result4}</b>`

        let num01= 10; let num02 = 10; let num03 =10; let num04 = 10;
        // ++선행
        result4 = ++num01
        d.getElementById("result10").innerHTML = `<b>결과는 ${result4}</b>, 변수는 <i>${num01}</i>`
        // --선행
        result4 = --num02
        d.getElementById("result11").innerHTML = `<b>결과는 ${result4}</b>, 변수는 <i>${num02}</i>`
        // 후행++
        result4 = num03++
        d.getElementById("result12").innerHTML = `<b>결과는 ${result4}</b>, 변수는 <i>${num03}</i>`
        // 후행--
        result4 = num04--
        d.getElementById("result13").innerHTML = `<b>결과는 ${result4}</b>, 변수는 <i>${num04}</i>`
        
        