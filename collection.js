var CA = ['a', 'b', 'c'];
var CB = ['a', 'd', 'e'];
var CC = ['b','d','f','g'];

var bigcup =(a,b)=>{
    return a.length+b.length-bigcap(a,b);
}

var bigcap =(a,b)=>{
    var num=0;
    for(var i of a){
        if(b.indexOf(i)!=-1){
            num++;
        }
    }
return num;
}

var bigmore=(arr)=>{
    var temp=arr[0];
    for(var i=1;i<arr.length;i++){
            temp=bigcup(temp,arr[i]);
    }
}
console.log(bigcup(CA,CB))
console.log(bigmore(CA,CB,CC))