const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        // default: '/etc/passwd',
        describe: 'valor base',
        type: 'number'

    })
    .check((argv, options) => {

        if (isNaN(argv.base)) {
            throw 'la base debe ser numero'
        }
        if (isNaN(argv.hasta)) {
            throw 'la base debe ser numero'
        }
        return true;


    })
    .option('l', {
        alias: 'listar',
        // demandOption: true,
        default: false,
        describe: 'valor lista',
        type: 'boolean'

    })
    .option('h', {
        alias: 'hasta',
        demandOption: true,
        describe: 'valor hasta',
        type: 'number'

    })
    .argv


module.exports = { argv };