const time = 13;
let greeting;

if (time > 0 && time < 12) {
    greeting = "Good morning";
    
}else if (time <= 12 && time < 20) {
    greeting = "Good afternoon";

}else if (time >= 20) {
    greeting = "Good evening";

}else(time < 23){
    greeting = "No existe esa hora";
}

console.log(greeting)