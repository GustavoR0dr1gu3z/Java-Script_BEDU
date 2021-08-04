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

