var member = ['egoing','k8805','hoya'];

console.log(member[1]);
var i = 0;
while(i<member.length){
    console.log('array : ' , member[i]);
    i++;
}

var roles = {
    'programmer' : 'egoing',
    '백수' : 'k8805', 
    '놀부' : 'hoya'
};

console.log(roles.백수);

for(var name in roles){
    console.log('object : ' , name, ', value : ' , roles[name]);
}