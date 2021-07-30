function deepEqual(valor1, valor2){
    if(valor1 === valor2){
        return true;
        
    }
    else if( (Object.keys(valor1).length) !==  (Object.keys(valor2).length) ){
        return false;
    }
    else if( (typeof(valor1) === "object" && typeof(valor2)=== "object")){    
        return true;
    }
    else if( Object.keys(valor1) === Object.keys(valor2)  ){
        return true;
    }
    else{
        return false;
    }

}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

   console.log('Test 1:', deepEqual(1, 1)) // true
   console.log('Test 2:', deepEqual(1, '1')) // false
   console.log('Test 3:', deepEqual(john, john)) // true
   console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
   console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


//---------------------------------------------------------------------------------------------------------------------------------------


function chunk(array, size){
    var data2 = []

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j<size; j++){
            data2.push(array[j][i]);
        }
    }
    return data2;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]