const argv = 
require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'lista la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 12,
    demandOption: true,
    describe: 'limite de la tabla de multiplicar'
})
.check( (argv, options) =>{
    if(isNaN(argv.b)){ throw 'la "base" debe ser un número';}
    if(isNaN(argv.h)){ throw ' "hasta" debe ser un número';}
    return true;
} )
.argv;

module.exports = argv;