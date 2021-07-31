const array1 = ['Hello'];


const mutable = array => {
    array.push('World');
    return array;
}



console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);
