const john = {
    name: 'John',
    birthYear: 1990,
    job: 'Developer'
  }
  

const Persona = function (name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

const johnPersona = new Persona('Gustavo', 1999, 'Web Developer');

console.log(johnPersona);