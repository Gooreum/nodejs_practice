var fs = require('fs'); //nodejs에 있는 fileSystem 모듈에 접근할 수 있다.

fs.readFile('sample.txt','utf8',function(err,data){
    console.log(data);
});
