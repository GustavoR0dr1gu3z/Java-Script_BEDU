function flatten(arrays) {

    const newArray  = arrays.flat();
    
return newArray;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]
