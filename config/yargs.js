const args = {
    id: {
        demand: true,
        alias: 'i',
        desc: 'Debe ingresar el id del curso'
    },
    nombre: {
        demand: true,
        alias: 'n',
        desc: 'Debe ingresar nombre del estudiente'
    },
    cedula: {
        demand: true,
        alias: 'c',
        desc: 'Debe ingresar cedula del estudiante'
    }
}

const argv = require('yargs')
    .command('inscribir', 'Inscripcion de curso', args)
    .argv;


module.exports = {
    argv
}