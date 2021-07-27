const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
const objeto = {}

for(const keyObjeto of car){
    objeto[keyObjeto[0]] = keyObjeto[1]
}

console.log(objeto)