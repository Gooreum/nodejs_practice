var p = {
    v1 :'v1',
    v2 : 'v2',
    f1:function(){
        console.log(this.v1);  //함수가 객체 안아 들어가 있을 때, 그 객체가 자신을 가리킬 수 있도록 this가 있음.
    },

    f2 : function(){
        console.log(this.v2);
    }
}


p.f1();
p.f2();