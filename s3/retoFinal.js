const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};

const numero = 50;
let primo = []
let noPrimo = []

function F_primo(numero){

    for(i=2; i<numero; i++){
        if (numero%i == 0){
            noPrimo.push(i);
            return false;
        }
    }
    return numero !== 1;    
}

console.log("PRIMO:\n",F_primo(50))