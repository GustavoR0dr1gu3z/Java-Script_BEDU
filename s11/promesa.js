function foo(){

    return new Promise( (resolve) => {
        resolve('holaa');
    } )

}


//console.log(foo())
// resolve: Cumple con la promesa
console.log( foo().then((value) => console.log(value)) )