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

const Persons = [
    new Person('Gus', 1998, 'Web Movil'),
    new Person('Gustav', 1997, 'AI'),
    new Person('Tavo', 1996, 'Redes'),
    new Person('Gusi', 1995, 'Electronica')
]



console.log(johnPersona);