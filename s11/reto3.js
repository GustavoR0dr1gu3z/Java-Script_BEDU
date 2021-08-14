// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}

const triggerActions = (count) => {
    
    let arrPromesa = [];

    // Transformar de callback a promesa
    const promesa = (i) =>{
        return new Promise((resolve)=>{
            processAction(i, resolve);
        });
    }

    // Genero las invocaciones
    for(let i=1; i<=count; i++){
        arrPromesa.push(promesa(i));
    }

    // Invoco a todas las promesas
    Promise.all(arrPromesa)
        .then((frase) => 
            frase.forEach(
                (frase) => console.log(frase)    
            )
        )

}


triggerActions(5)