/**
 * Ciclos
 */

// while
var contador = 0;
while(contador < 5){
    console.log((contador+1)+ ': Hola mundo!!');
    contador++;
}

// do - while

var contador = 0;
do{
    console.log('Hola mundo!!');
    contador++;
}while(contador<5);

// For 
for(let i = 0; i < 10; i++){
    console.log('Hola mundo!!');
}


// For - in 
var persona = {
    nombre : 'RET',
    apellido : 'BOT',
    edad : 22
}

for(let clave in persona){
    console.log(clave, persona[clave]);
}

// for - of 
var arreglo = [1,2,3,4,5];
for(let valor of arreglo){
    console.log(valor);
}
var nombre = 'RETBOT';
for(let valor of nombre){
    console.log(valor);
}
