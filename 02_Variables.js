/**
 * Variables 
 * 
 * 3 formas de definir variables 
 * 
 * var 
 * let 
 * const 
 */

// variables con VAR 

var nombre  = 'RET';
console.log(nombre);

var edad = 30; 
console.log(edad);

var persona = {
    nombre: 'RET',
    apellido: 'BOT',
    edad: 22, 
    direccion: {
        calle: 'Calle',
        numeroDeCasa: 123
    },
    cuidadesVisitadas: [
        'Monterrey',
        'Ciudad de México',
        'Puebla'
    ]
}
console.log(persona.nombre);

var ciudad;
ciudad = 'Torreon';
console.log(ciudad);


// variables con let 
let nombre = 'RETBOT';
console.log(nombre);

// No funciona porque let, no es una variable global como var 
{
    let saludo = 'Hola';
    console.log(saludo);
}
console.log(saludo);// No funciona


{
    var saludo = 'Hola';
    console.log(saludo);
}
console.log(saludo);


// variables con CONST
const PI = 3.14;
console.log(PI);

var nombre = 'RETBOT';
var saludo = `Hola soy ${nombre}
Como estas?`;
 console.log(saludo);