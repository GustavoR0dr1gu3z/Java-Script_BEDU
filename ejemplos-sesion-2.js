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

console.log(greeting) // Good afternoon