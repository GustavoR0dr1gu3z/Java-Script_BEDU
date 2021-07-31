var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    let arreglo = [];

    for(const elementos of list){
        arreglo.push(elementos[propertyName]);
    }
    return arreglo; 
}

console.log( pluck(singers, 'name') );

console.log( pluck(singers, 'band') );

console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]
