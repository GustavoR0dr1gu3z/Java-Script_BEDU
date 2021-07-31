// SCOPE GLOBAL
const name = "John Doe";

console.log(name); // "John Doe"

function foo() {
  console.log(name); 
}

foo(); // "John Doe"


//SCOPE LOCAL
function foo() {
    const bar = "John Doe";
    console.log(bar); 
  }
  
  foo(); // "John Doe"
  
  console.log(bar); // Uncaught ReferenceError: name is not defined
  