
 function multiply(first, second) {

    var total = first.length + second.length;
    var arr = [], plus = 0;
    var aArr = first.split('').reverse();
    var bArr = second.split('').reverse();
    for (var i = 0; i < total; i++) {
        arr[i] = plus;
        for (var j = 0; j <= Math.min(i, aArr.length - 1); j++) {
            if (i - j < bArr.length) {
                arr[i] += parseInt(aArr[j]) * parseInt(bArr[i - j]);
            }
        }
        plus = Math.floor(arr[i] / 10);
        arr[i] = arr[i] % 10;
    }
    return arr.reverse().join('').replace(/^0*/,'') || '0';


    // your solution
}

module.exports = function zeros(expression) {

    var str = "";
    var strx = "";
    var answer = "";
    answer += 1;
    var mass = [];
    var stranswer = "";

    for( var x = 0; x < expression.length; x++)
    {
        if(expression[x] >= '0' && expression[x] <= '9')
        {
            str += expression[x];
        }
        if (expression[x] == '!')
        {
            if(x == expression.length - 1)
            {
                for(var a = parseInt(str); a > 0; a--)
                {
                    strx += a;
                    stranswer = answer;
                    answer = "";
                    answer += multiply(stranswer,strx);
                    strx = "";
                    stranswer = "";
                }
                mass.push(answer);
            }
            else
            {
                if(expression[x+1] == '!')
                {
                    for(var b = parseInt(str); b > 0; b --)
                    {
                        strx += b;
                        stranswer = answer;
                        answer = "";
                        answer += multiply(stranswer,strx);
                        strx = "";
                        stranswer = "";
                        b--;
                    }
                    if(x+1 == expression.length -1) mass.push(answer);
                    x++;
                }
                else
                {
                    for (var c = parseInt(str); c > 0; c--)
                    {
                        strx += c;
                        stranswer = answer;
                        answer = "";
                        answer += multiply(stranswer,strx);
                        strx = "";
                        stranswer = "";
                    }
                }
            }
            str = "";
        }

        if(expression[x] == '*')
        {
            mass.push(answer);
            answer ="1";
        }

    }

  //  console.log(mass);
    answer = "";
    answer += 1;
    stranswer = "";
    strx = "";

 for( var y = 0; y < mass.length; y ++)
 {
     stranswer += answer;
     answer = "";
     strx += mass[y];
     answer += multiply(stranswer,strx);
     stranswer = "";
     strx = "";
 }

 console.log(answer);
  var test = 0;
  for(var z = answer.length -1; z > 0; z--)
  {
      if(answer[z] == '0') test++;
      else break;
  }
return test;


  // your solution
}

