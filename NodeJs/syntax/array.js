var arr = ['a','b','c','d'];

var i = 0;
while(i<arr.length){

    console.log(arr[i]);

    i = i+1;
}

arr[2] = 3;

console.log(arr);

arr.push('e');

console.log(arr);