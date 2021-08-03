const Person = function(name) {
    this.name = name;
  }
  
  const Developer = function(name, skills, yearsOfExperience) {
    Person.call(this, name);
  
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
  }
  