function foo(){

    return new Promise( (resolve) => {
        resolve('holaa');
    } )

}


//console.log(foo())
console.log( foo().then((value) => console.log(value)) )