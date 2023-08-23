const regexNombres = /\b[Aa]\w*/g;

const texto = "Ana, Juan, Antonio, María, andrea, Pedro";

const coincidencias = texto.match(regexNombres);

console.log(coincidencias);
