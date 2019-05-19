var arr = [1,2,3,4,5,6,7];

var i = 0;
var total = 0;
while(i<arr.length){
    console.log(arr[i]);
    total = total + arr[i];
    i++;
}

console.log(`total = ${total}`);