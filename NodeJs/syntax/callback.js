
function a(){
    console.log('A');
}

//자바스크립트에서는 함수가 값이다. 
var a = function(){
    console.log('A');
}

a();

function slowFunc(callback){
    callback();
}

slowFunc(a);