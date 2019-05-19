var fs = require('fs');

/*
//readFileSync 동기
 console.log('A');
 var result = fs.readFileSync('syntax/sample.txt','utf8');
 console.log(result);
 console.log('C');

//readFileSync는 return값을 줌.
*/

//readFileAsync 비동기
console.log('A');
    fs.readFile('syntax/sample.txt','utf8',function(err,result){
        console.log(result);
});

//readFile은 return 값을 주는게 아님

console.log('C');