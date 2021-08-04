

//Objeto
const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}  

/*
//Funcion que agregará una propiedad a car
function addColor(carro){
    carro.color = 'Black';
    return carro;
}

//Imprimir car con 3 propiedades
console.log("ANTES DE AGREGAR COLOR: ", car);

//Mandando a llamar la función de color y pasar como argumento addColor
const sameCar = addColor(car);

//Imprimir car con 4 propiedades
console.log("DESPUES DE AGREGAR COLOR: ", car);

//Imprimiendo caracteristicas iguales
console.log('¿CARACTERISTICAS IGUALES?: ', car === sameCar); // true
*/

// INMUTABILIDAD
function addColor2(car) {
    const nuevoCarro = Object.assign({}, car, {
        color: "Rojoo"
    });

    return nuevoCarro;
}

//Imprimir car con 3 propiedades
console.log("\n\n\nANTES DE AGREGAR COLOR: ", car);

//Mandando a llamar la función de color y pasar como argumento addColor
const sameCar2 = addColor2(car);

//Imprimir car con 4 propiedades
console.log("DESPUES DE AGREGAR COLOR: ", sameCar2);

//Imprimiendo caracteristicas iguales
console.log('¿CARACTERISTICAS IGUALES?: ', car === sameCar2); // false