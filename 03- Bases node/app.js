const argv = require('./config/yargs');
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

//const [, , ,arg3 = 'n=5'] = process.argv;
//const[ ,n = 5] = arg3.split('=');



crearArchivo(argv.b, argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));