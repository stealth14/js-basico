//variables
var mivar = '';

mivar = 10;

mivar = ['hola', 'mundo'];

mivar = {
    nombre: 'ronny',
    age: 13,
    array: ['asd', 'hjbhb'],
    object: {
        atributo1: 'atr1'
    }
};

//funcion de flecha
mivar = (index) => {
    console.log('hola');
}


//constantes
const myconst = ' ';

//arrays (iterables)
let nombres = ['sada', 'asdas'];
var otroarray = ['hello', 22, nombres, {}];

// console.log(otroarray);

//métodos para iterar
// forEach
var ronny = ['uno', 'dos', 'tres', 'cuatro'];
var arr = [1, 2, 3, 4];

let mifuncion = (elemento) => { console.log(elemento); }

// ronny.forEach(mifuncion);

//map

var nuevoRonny = arr.map(
    (elemento) => { return elemento + 0.5; }
)
console.log(nuevoRonny);

//funciones normales

function funcionNormal(mensaje) {
    console.log(mensaje);
}

//jquery manipulación del DOM

var names = ['ronny', 'ander', 'jaela'];

names = names.map(
    (name) => {
        return $(
        `
        <button class="btn btn-primary">${name}</button>
        `
        )
    }
)

$('body').append(names);
