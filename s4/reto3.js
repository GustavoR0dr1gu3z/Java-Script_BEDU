fibonacci = [1]

function fibonacciSequence(limit){
    var a = 0;
    var b = 1;

    for(let i = 0; i<limit-1; i++){
        if(limit == 1){
            break;
        }else{
            c = a+b;
            a = b;
            b = c;
            fibonacci.push(b);
        }
    }
    console.log(fibonacci)
}

fibonacciSequence(1);
fibonacciSequence(5);


