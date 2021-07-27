const numbers = [1,2,3,4,5,6,7,8,9,0]
const doubled = []
/*
for(let i=0; i<numbers.length; i++){
    doubled.push(numbers[i]*2)
}
*/

for(const number of numbers){
    if(number==1) continue;
    doubled.push(number*2)
}

console.log(numbers)
console.log(doubled)


const car  = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const keys = Object.keys(car)
const pairs = []

//Version larga
for(let i=0; i<keys.length; i++){
    pairs.push(keys[i], car[keys[i]])
}
console.log(pairs)