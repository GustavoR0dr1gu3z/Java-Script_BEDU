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

