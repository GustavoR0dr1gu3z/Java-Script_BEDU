const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};

const arrayJuntos = [...array1, ...array2, ...calificaciones.array3];

const tamano = arrayJuntos.length;


function F_primo(tamano){

    for(let i=2; i<tamano; i++){
        if (tamano%i === 0){
            return false;
        }
    }
    return tamano !== 1;    
}

for(const num of arrayJuntos){
    if(F_primo(num)){
        console.log(num)
    }
}