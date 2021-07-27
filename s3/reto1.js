const numbers = [5,3,4,7,2,1,9,7,7]
let sum=0, res=0;

for (const number of numbers){
    sum+=number;
}

res = sum/numbers.length;

console.log("Promedio: ",res)