

var createPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // "(123) 456-7890"


function numeroTelefono(arr){

    let cadena = '(';


    for(let i = 0; i<arr.length; i++){
        cadena += arr[i]
        if(i == 2){
            cadena += ') ';
        }else if(i == 5){
            cadena += '-';
        }        
    }


    return cadena;
}

console.log( numeroTelefono(createPhoneNumber) )