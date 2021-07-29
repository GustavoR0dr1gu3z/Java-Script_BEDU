function getLergerInt(number1, number2){
    if(number1>number2){
        return number1;
    }else{
        return number2;
    }
}

const numMayor = getLergerInt(5,8);
console.log(numMayor);
