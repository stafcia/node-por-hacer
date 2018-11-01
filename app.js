const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        break;

    case 'listar':

        porHacer.getListado().then(listado => {
            for (let tarea of listado) {
                if (tarea.completado == false) {
                    console.log('==========POR HACER==========='.green);
                    console.log(tarea.descripcion)
                    console.log('Estado: ', tarea.completado);
                    console.log('=============================='.green);
                } else {
                    console.log('==========Terminada==========='.green);
                    console.log(tarea.descripcion)
                    console.log('Estado: ', tarea.completado);
                    console.log('=============================='.green);
                }

            }

        });
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    default:
        console.log('comando no reconoido');
        break;
}