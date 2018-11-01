const opcionescrea = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const opcionesact = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
};


const argv = require('yargs')
    .command(
        'crear', 'crea tarea con una descripcion', opcionescrea
    )
    .command(
        'actualizar', 'actualiza tarea con descripción X', opcionesact
    ).command(
        'borrar', 'actualiza tarea con descripción X', opcionescrea
    )
    .help().argv;

module.exports = {
    argv
}