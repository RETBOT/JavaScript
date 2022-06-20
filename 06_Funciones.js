/**
 * Funciones
 */


// declarativa 
/*
function nombreDeLaFuncion(){
 // Cuerpo de nuestra funcion 
}
*/

function saludar(){
    console.log('Hola soy RETBOT');
}
saludar();

function saludar(nombre){
    console.log(`Hola soy ${nombre}`);
}
saludar('RETBOT');


function saludar(nombre){
    return `Hola soy ${nombre}`;
}
var saludo = saludar('RETBOT');
console.log(saludo);
console.log(saludar('RETBOT'));

// expresion o anonimas
var suma = function(a, b) {
 return a+b;
}
console.log(suma(2,2)); 

// arrow function
var resta = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a - b;
    } else {
        return 'Solo puede restar numeros';
    }

}
console.log(resta(4,'2'));


var multiplicar = (a,b) => a * b;
console.log(multiplicar(4,2));