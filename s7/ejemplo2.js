const n = 12345;

// Pasando a string
nsToStr = n.toString();

// Separando cada digito
nsToStr.split('')


// mapeando y conviertiendo a entero cada elemento
nsToStr.split('').map( n => Number(n) )