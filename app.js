const args = require('./config/yargs').argv;
let comando = args._[0];

//express
const express = require('express');
const app = express();

let cursos = [{
        id: 1,
        nombre: 'Dinámica de Sistemas',
        duracion: 32,
        valor: 350
    }, {
        id: 2,
        nombre: 'Estructura de Datos',
        duracion: 30,
        valor: 450
    },
    {
        id: 3,
        nombre: 'Base de Datos',
        duracion: 45,
        valor: 750
    },
    {
        id: 4,
        nombre: 'Sistemas Complejos',
        duracion: 40,
        valor: 650
    }
];

let listarCursos = () => {
    let i = 0;
    setInterval(function() {
        if (cursos[i]) {
            console.log(`El Curso ${cursos[i].nombre} con Id ${cursos[i].id}, tiene una duración de ${cursos[i].duracion} horas por un valor de $${cursos[i].valor} mil pesos`);
            i++;
        }
    }, 2000);
}

let msgConfirmacion = (id, nombre, cedula) => {
    let curso = cursos.find(function(element) {
        return element.id == id
    });
    texto = `El estudiante ${nombre} con cédula ${cedula} se ha prematriculado al curso ${curso.nombre} con Id ${id},
    el curso tiene una duración de ${curso.duracion} horas por un valor de $${curso.valor} mil pesos.`;

    return texto;
}

switch (comando) {
    case 'inscribir':
        console.log('Inscripcion de curso');
        if (args.id > cursos.length) {
            console.log('Ha ingresado un Id que no corresponde a ningún curso, por favor verifica e intenta nuevamente.');
            listarCursos();
        } else {
            app.get('/', (req, res) => {
                console.log(msgConfirmacion);
                res.send(msgConfirmacion(args.id, args.nombre, args.cedula));
            });
            app.listen(3000, () => {
                console.log('Escuchando peticiones en el puerto 3000');
            });
        }
        break;
    default:
        listarCursos();
        break;
}