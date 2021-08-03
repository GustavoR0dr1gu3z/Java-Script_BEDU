const Person = function(name) {
    this.name = name;
    this.school = 'Bedu';
  }
  
  const Developer = function(name, skills, yearsOfExperience) {
    Person.call(this, name);
  
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
  }
  

  const gus = new Developer('Gustavo', "Python", "5");

  console.log(gus)