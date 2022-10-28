const argv = require('yargs')
                .option('b',{
                    alias:'n',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar.'

                })
                .option('l',{
                    alias: 'listar',
                    type:'boolean',
                    demandOption: true,
                    default: false,
                    
                })
                .option('h',{
                    alias: 'hasta',
                    type:'number',
                    demandOption: true
                    
                })

                .check( (argv, Options) => {
                    if (isNaN(argv.b)){
                        throw'La base tiene que ser un número';
                    }
                    return true;

                })
                .argv;


module.exports = argv;
