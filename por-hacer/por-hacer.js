const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    return new Promise((resolve, reject) => {
        fs.writeFile('./db/data.json', data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('data.json Writed');
            }
        })
    });


}
const getListado = () => {
    return new Promise((resolve, reject) => {
        cargarDB();
        resolve(listadoPorHacer);
    })
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const actualizar = (descripcion, completa = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completa;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};