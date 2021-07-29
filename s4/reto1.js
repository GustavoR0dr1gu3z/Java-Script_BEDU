

function power(base, exponente){
    let resultado = base;
    for(let i=1; i<exponente; i++){
        resultado *= base;
    }

    return resultado;
}

const exponente = power(8,3);
console.log(exponente)