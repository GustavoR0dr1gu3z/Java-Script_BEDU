const diametro = 1.5;
const grosor = 0.2;
let mensaje;

if ( (diametro>1.4 && grosor<0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor > 0.25) ){
    mensaje ="El grosor para esta rueda es inferior al recomendado";
}else if(diametro <= 1.4 && diametro > 0.8){
    mensaje = "La rueda es para un vehiculo mediano";
}else if(diametro>1.4){
    mensaje = "La rueda es para un vehiculo grande";
}else{
    mensaje="La rueda es para un vehiculo pequeño";    
}


console.log(mensaje);