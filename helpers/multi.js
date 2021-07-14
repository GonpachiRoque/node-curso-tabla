const fs = require('fs');
const colors = require('colors');
//CLASE: BASES NODE
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const crearArchivo = async (base = 1, listar, hasta = 10) => {
    try {
        //TAREA
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            const resultado = base * index;
            consola += `${base} ${'X'.verbose} ${index} = `+ `${resultado}\n`.green ;
            salida += `${base} X ${index} = ${resultado}\n`;
        } 

        if(listar === true){
            console.log(`===================\n TABLA DEL ${base}\n===================`.silly)
            console.log(consola);    
        }
        else if (listar === false){
            console.log('LISTAR: FALSE'.info);
        }
        else{ console.log('LISTAR NO ES UN BOOLEAN');}

        //writeFileSync
        fs.writeFileSync(`./salida/archivo-creado-${base}.txt`, salida);
        return `archivo ${base} creado`;
    } catch (error) {
        throw 'error try catch';
    }
}
module.exports = { crearArchivo };

//writeFile
    // fs.writeFile(`archivo-creado-${n}.txt`,salida, (err)=>{
    //     if(err) throw console.log(err);
    //     console.log(`archivo ${n} creado`);
    // })