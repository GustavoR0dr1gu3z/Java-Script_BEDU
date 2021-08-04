//Objeto
const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}  

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