// IF ELSE 
/*
const time = 28;
let greeting;

if (time > 0 && time < 12) {
    greeting = "Good morning";
}

else if (time >= 12 && time < 20) {
    greeting = "Good afternoon";
}

else if (time >= 20 && time < 24) {
    greeting = "Good evening";
}

else{
    greeting = "No existe esa hora";
}

console.log(greeting)




// SWITCH
const day = 2;
let text;

switch (day) {
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    default:
        text = "Error";
}

console.log(text); // Tuesday


// SWITCH CON EJEMPLO DEL TIEMPO

switch(time){
    case (time<12):
        greeting = "Good Morning";
        break;
    case (time<20):
        greeting = "Good Afternoon";
        break;
    case (time>=20):
        greeting = "Good Night";
        break;
    default:
        greeting = "No existe esa hora"
}
console.log(greeting);

*/
var rango1 = 0;
const rango2 = 20;


for(rango1 = 0; rango1<=rango2; rango1++){
    if (rango1%2 == 0){
        /*NUMERO PAR*/
        console.log(rango1);
    }
}