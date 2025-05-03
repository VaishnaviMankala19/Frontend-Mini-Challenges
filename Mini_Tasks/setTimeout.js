//print 1 to 10 numbers with 1 sec gap each

//solution 1: using let
function solution1(){
    for(let i = 1; i <= 10; i++){
        setTimeout(function (){
            console.log(i);
        } , i*1000);
    }
}

//solution 2: using var
function print(n){
    console.log(n);
}
function solution2(){
    for(var i=1;i<=10;i++){
        setTimeout(print,i*1000,i);
    }
}

solution1();
solution2();