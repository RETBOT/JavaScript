/**
 * Manipulación arreglos
 */

// ForEach
var letras = ['a','b','c','d','e'];
console.log("For");
for(let i=0; i<letras.length; i++){
    const element = letras[i];
    console.log(element);
}
console.log("-----");
console.log("ForEach");
letras.forEach((elemento) => {
    console.log(elemento);
});
console.log("-----");
letras.forEach((elemento)=>console.log(elemento));
/////////////////////////////////////////////////////////////

// Push -- shift -- pop
var letras = ['a','b','c','d','e'];
letras.push('f'); // meter otro elemento en el arreglo 
console.log(letras);
var primero = letras.shift(); // obtener el primer elemento del arreglo 
console.log(primero);
console.log(letras);
var ultimo = letras.pop(); // obtener el ultimo elemento del arreglo 
console.log(ultimo);
console.log(letras);
/////////////////////////////////////////////////////////////
// map 
var estudiantes = ['Robeto','Isaias','Rafael','Ivan','Fatima'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre : nombre,
        asistencia : false
    }
})
var puntoFinal = estudiantes.map((nombre) => `${nombre}.`)

console.log(estudiantes);
console.log(asistencia);
console.log(puntoFinal);
console.log(estudiantes);


var productos = [
    {nombre : 'camisetas', precio : 15},
    {nombre : 'zapatos', precio : 20},
    {nombre : 'pantalon', precio : 25}
]

var productosImpuesto = productos.map((producto) => {
    return {
        ...producto,
        impuesto:0.12
    }
})

var precios = productos.map((producto) => producto.precio)
console.log(precios);
console.log(productos);
console.log(productosImpuesto);
/////////////////////////////////////////////////////////////

// Filter 
var estudiantes = [
    {nombre : 'Robeto', edad: 22, matriculado: true},
    {nombre : 'Isaias', edad: 15, matriculado: false},
    {nombre : 'Rafael', edad: 22, matriculado: true},
    {nombre : 'Ivan', edad: 19, matriculado: false},
    {nombre : 'Fatima', edad: 20, matriculado: false}
]

// var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 20);
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 20 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);

/////////////////////////////////////////////////////////////
// reduce 
var calificaciones = [3,5,6,10,10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador+calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log('Promedio = '+(suma / calificaciones.length));


// reduce 
var edades = [21,21,23,43,21,43,18,18,23,23];

var resultado = edades.reduce((acumulador, edad) => {
    if(!acumulador[edad]){
        acumulador[edad] = 1
    }else {
        acumulador[edad] += 1
    }
    return acumulador 
}, {});

console.log(edades);
console.log(resultado);
/////////////////////////////////////////////////////////////

var ventas = [
    {nombre : 'camiseta', precio : 15, totalVendido : 10},
    {nombre : 'zapatos', precio : 150, totalVendido : 8},
    {nombre : 'pantalon', precio : 20, totalVendido : 30}
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$ ${totalVentas}.00`;
    return acumulador;
}, {})

console.log(ventas);
console.log(resultado);
/////////////////////////////////////////////////////////////

var estudiantes = [
    {nombre : 'Robeto', edad: 22, matriculado: true},
    {nombre : 'Isaias', edad: 15, matriculado: false},
    {nombre : 'Rafael', edad: 22, matriculado: true},
    {nombre : 'Ivan', edad: 19, matriculado: false},
    {nombre : 'Fatima', edad: 20, matriculado: false}
];

var resultado = estudiantes
 .map((estudiante) => estudiante.matriculado)
 .reduce((acumulador, item) => {
    if(item){
        acumulador.matriculado += 1
    }else{
        acumulador.noMatriculado += 1
    }
    return acumulador
 }, {matriculado: 0, noMatriculado:0})

console.log(estudiantes);
console.log(resultado);

/////////////////////////////////////////////////////////////
// some  -- every 

// SOME
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1,3,5,6,9];
var resultado = numeros.some((numero) => numero % 2 === 0 );
console.log(resultado);

// EVERY
//var numeros = [1,2,3,4,5,6,7,8,9,10]; 
var numeros = [2,4,6,8,10]; 
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

/////////////////////////////////////////////////////////////
// find - findIndex 
// FIND 
var clientes = [
    {id: 1, nombre: 'Roberto'},
    {id: 2, nombre: 'Ivan'},
    {id: 3, nombre: 'Rafael'},
    {id: 4, nombre: 'Fatima'},
    {id: 5, nombre: 'Isaias'}
]
var cliente = clientes.find((cliente)=>cliente.id === 1);
var filter = clientes.filter((cliente)=>cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filter);

// FINDINDEX
var clientes = [
    {id: 1, nombre: 'Roberto'},
    {id: 2, nombre: 'Ivan'},
    {id: 3, nombre: 'Rafael'},
    {id: 4, nombre: 'Fatima'},
    {id: 5, nombre: 'Isaias'}
]

var posicion = clientes.findIndex((cliente) => cliente.id === 2 );
console.log(posicion);
console.log(clientes[posicion]);

/////////////////////////////////////////////////////////////
// includes
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('perro');
console.log(resultado);
console.log('RETBOT'.includes('R'));

var buscador = (parametro) => {
    let clientes = [
        {id: 1, nombre: 'Roberto'},
        {id: 2, nombre: 'Ivan'},
        {id: 3, nombre: 'Rafael'},
        {id: 4, nombre: 'Fatima'},
        {id: 5, nombre: 'Isaias'}
    ]
    return clientes.filter((cliente) => cliente.nombre.includes(parametro));
}
console.log(buscador('a'));

/////////////////////////////////////////////////////////////
// Join 
var elementos = ['aire', 'fuego', 'agua', 'tierra'];
var resultado = elementos.join('--');
console.log(resultado);

var clientes = [
    {id: 1, nombre: 'Roberto'},
    {id: 2, nombre: 'Ivan'},
    {id: 3, nombre: 'Rafael'},
    {id: 4, nombre: 'Fatima'},
    {id: 5, nombre: 'Isaias'}
]
// console.log(clientes.join());
var csvGenerator = (array, separator='\t') => {
    let headers = Object.keys(array[0]).join(separator)
    let data = array.map((element) => Object.values(element).join(separator))
    console.log(headers);
    data.forEach(element => console.log(element))
}
csvGenerator(clientes);
// console.log(Object.values({id: 5, nombre: 'Isaias'}));
//console.log(Object.keys({id: 5, nombre: 'Isaias'}));

/////////////////////////////////////////////////////////////
// concat - sort - splice - slice 
// CONCAT 
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];
var array3 = array1.concat(array2);
var array4 = [array1, array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// SORT 
var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ascendentede = array.sort((a,b) => a - b );
console.log(ascendentede);
array = [1, 10000, 21, 30, 4];
var descendente = array.sort((a,b) => b - a );
console.log(descendente);

// SPLICE 
var nombres = ['Roberto','Ivan','Rafael','Fatima','Isaias'];
nombres.splice(1,1,'Ivan 2');
console.log(nombres);

// SLICE 
var nombres = ['Roberto','Ivan','Rafael','Fatima','Isaias'];
var resultado = nombres.slice(1,3);
console.log(resultado);
console.log(nombres);