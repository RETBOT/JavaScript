/**
 * Operadores
 */

/** 
 * Operadores de asignacion 
 */

// Operadores de asignacion 

var x = 2; 
var y = true;

// Operador de asignaciond de adicion (+=)
var x = 2 
var y = 1;
x += y;
console.log(x);

// Operador de asignaciond de resta (-=)
var x = 2 
var y = 1;
x -= y;
console.log(x);

// Operador de asignaciond de multiplicacion (*=)
var x = 2 
var y = 1;
x *= y;
console.log(x);

// Operador de asignaciond de division (/=)
var x = 2 
var y = 3;
x /= y;
console.log(x);

// Operador de asignaciond de resiudo (%=)
var x = 2 
var y = 3;
x %= y;
console.log(x);

// Operador de asignaciond de exponenciacion (**=)
var x = 2 
var y = 3;
x **= y;
console.log(x);

/**
 * Operadores de comparacion
 */

// Operador igual ( == )
console.log(3 == 3);
console.log(3 == '3');

// Operador no es igual ( != )
console.log(3 != 3);

// Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3');


// Operador desigualdad estricta ( === )
console.log(3 !== '3');
console.log(3 != '3');

// Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);

/**
 * Operadores aritmeticos 
 * 
 * +, -, *, /, %, **
 */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

// Operadores de incremento ++ 
var numero = 0;
// console.log(++numero);
console.log(numero++);
console.log(numero);


// Operadores de decremento --
var numero  = 3;
//console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * Operadores logicos
 */

// AND 
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

// OR
console.log(true || true);
console.log(false || false);

// NOT
console.log(!true);
console.log(!false);

// Operador de cadena o concatenacion (+)
var nombre = 'RET';
var apellido = 'BOT';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional (condicion ? val1 : val2)
console.log(2 > 3 ? 'Es mayor':'Es menor');

// Operador de estructuracion 
var persona = {
    nombre : 'RET',
    apellido : 'BOT'
}
console.log(persona);

var {nombre: xyz, apellido} = persona;
console.log(xyz);
console.log(apellido);

// desestructuracion de arreglos 
var arreglo = [1,2,3,4,5]

var [primeraPosicion,segundaPosicion] = arreglo;

console.log(primeraPosicion);
console.log(segundaPosicion);

/**
 * Operador de miembro o acceso de propiedad
 */
// Notacion punto
var persona = {
    nombre : 'RET',
    apellido : 'BOT'
}

console.log(persona.nombre);
console.log(persona.apellido);

// Notacion por corchetes
var persona = {
    nombre : 'RET',
    apellido : 'BOT'
}

console.log(persona['nombre']);

// notacion por corchetes en arreglos
var arreglo = [21,22,23,24,25,26];
console.log(arreglo[0]);

// Operacion de determinacion de tipo (typeof)
console.log(typeof 'RETBOT');
console.log(typeof 22);
console.log(typeof true);