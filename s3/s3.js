const numbers = [1,2,3,4,5,6,7,8,9,0]
const doubled = []
/*
for(let i=0; i<numbers.length; i++){
    doubled.push(numbers[i]*2)
}
*/

for(const number of numbers){
    doubled.push(number*2)
}

console.log(numbers)
console.log(doubled)