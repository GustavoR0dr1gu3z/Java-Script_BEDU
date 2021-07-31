
function findMissingNumbers(numeros){

    let numOrdenados = numeros.sort(function(a,b){return a-b});
    let arreglo = [];

    for(let i=1; i<=numeros[numOrdenados.length-1]; i++){
        if(!numOrdenados.includes(i)){
            arreglo.push(i)
        }
    }

    return arreglo;
}




console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10])) // [4, 6, 8]
