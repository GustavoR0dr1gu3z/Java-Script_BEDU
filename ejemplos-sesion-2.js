const time = 13;
let greeting;

if (time < 12) {
    greeting = "Good morning";
}

if (time < 20) {
    greeting = "Good afternoon";
}

if (time >= 20) {
    greeting = "Good evening";
}

if (time < 1 && time > 23){
    greeting = "No existe esa hora"
}

console.log(greeting)