const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(valorInicial = 1, argListar, argvHasta = 1) => {


    try {

        let salida = '';
        for (let index = 1; index <= argvHasta; index++) {
            let result = valorInicial * index;

            salida += `${valorInicial} ${colors.green('x')} ${index} = ${result}\n`;
            // console.log(`${valorInicial} x ${index} = ${result}`)

        }


        if (argListar) {
            console.log(salida)
        }

        // fs.writeFile(`tabla${valorInicial}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // })

        fs.writeFileSync(`./salida/tabla${valorInicial}.txt`, salida)
        return 'archivo creado'

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo: crearArchivo
}