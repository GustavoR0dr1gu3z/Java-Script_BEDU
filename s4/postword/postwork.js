function deepEqual(valor1, valor2){
    
    if( (typeof(valor1)=== "object" && typeof(valor2)=== "object")){    
        console.log("OBJETO")
        return true;
    }
    else if(valor1 === valor2){
        console.log("IGUAL INT")
        return true;
        
    }
    else if( Object.keys(valor1) === Object.keys(valor2)  ){
        console.log("KEYS")
        return true;
    }
    else{
        console.log("MALO")
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