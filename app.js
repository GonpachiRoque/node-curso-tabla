//Dobri Next -c05- Electron
const argv = require('./config/yargs');
const {crearArchivo} = require('./helpers/multi');

console.clear();//limpiar consola
console.log(argv);

crearArchivo(argv.base , argv.listar, argv.hasta)
.then( (result) => {console.log('OK!'.warn); console.log(result);} )
.catch( (err) => {console.log('ERROR!'); console.log(err);} );


//obtener argv NO RECOMENDADO
//const base = 3;
// const [ , , arg3] = process.argv;
// const [ ,base] = arg3.split('=');
//console.log(process.argv);
//console.log(base);