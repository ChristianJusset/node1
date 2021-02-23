// const valorInicial = 40;

const { crearArchivo } = require('./helpers/multiplicar')

const { argv } = require('./config/yargs');


var colors = require('colors/safe');



// console.log(process.argv)
// console.log(argv)

// console.log(argv.base)

/*
const [, , arg = 'base=5'] = process.argv;
const [, base = 'base=5'] = arg.split('=')

console.log(base)
crearArchivo(base)
    .then(archivo => console.log(archivo))
    .catch(err => console.log(err));
*/

console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo))
    .catch(err => console.log(err));