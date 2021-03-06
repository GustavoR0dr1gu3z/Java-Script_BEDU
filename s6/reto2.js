const Group = function(arreglo) {
    this.array = arreglo;

    this.add = function(valor1) {
        if (this.array.includes(valor1) == false){
            this.array.push(valor1)
        }
    };

    this.has = function(valor1){
        return(this.array.includes(valor1));
    }

}

Group.from = function(arreglo){
    const group = new Group(arreglo);
    return group;
};


const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true