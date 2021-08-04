function compact(array) {
    const newArr = [];

    for (numer of array){
        if (typeof(numer) == "number" && numer != 0){
            newArr.push(numer);
        }
    }
    return newArr;
}

const array = [0, 1, false, 2, '', 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]
