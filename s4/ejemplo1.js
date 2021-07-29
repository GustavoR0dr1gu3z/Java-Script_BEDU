function calculateAge(birthYear){
    const age = 2021-birthYear
    return (age)
}

function yearsUntilRetirement(year, name) {
    const age = calculateAge(year);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years.`);
}

const gusAGe = yearsUntilRetirement(1999, "Gustavo Calzada")
