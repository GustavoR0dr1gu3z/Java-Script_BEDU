// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}

const triggerActions = (count) => {
    
    let arrPromesa = [];

    const promesa = (i) =>{
        return new Promise((resolve)=>{
            processAction(i, resolve);
        });
    }

    for(let i=1; i<=count; i++){
        arrPromesa.push(promesa(i));
    }

    Promise.all(arrPromesa)
        .then((frase) => 
            frase.forEach(
                (frase) => console.log(frase)    
            )
        )

}


triggerActions(5)