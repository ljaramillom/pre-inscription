# pre-inscription

To show results in the browser of the pre-inscription of a student's courses.

- **Estructura de la aplicación**
```
pre-inscription
|--config
    |--yargs
|--app.js
|--package.json
|--node_modules
|--README.md
```

- **Ejecución de la aplicación**

1. Realizar ```npm install``` para descargar las librerías
2. Ejecutar el siguiente comando para visualizar el listado de los cursos en consola
```
node app
```
3. Ejecutar el siguiente comando para realizar la inscripcion a un curso (Ejemplo)
```
node app inscribir -i=2 -n=Lizet -c=98332322
```
4. Abrir el navegador con la siguiente dirección **http://localhost:3000**
