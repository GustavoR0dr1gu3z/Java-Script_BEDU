const array1 = ['Hello'];

const mutable = array => {
    const array1 = [...array];
    array1.push('World');
    return array1;
}

console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);
