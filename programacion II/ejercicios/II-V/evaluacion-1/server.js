// 1. Importar el framework Express
const express = require('express');
const fs = require("fs")
const { Estudiantes } = require("./Estudiantes.js")


// 2. Instanciar la aplicación (Crear el servidor)
const app = express();

// 3. Configurar Middleware para servir archivos estáticos (Fase 1 de la arquitectura)
// Esto le dice al servidor: "Si alguien pide un archivo HTML o CSS, búscalo en la carpeta 'public'"
app.use(express.static('public'));

// Middleware para leer los datos que vienen de un formulario HTML (req.body)
app.use(express.urlencoded({ extended: true }));
// 4. Crear una Ruta Básica (Método GET)

/** req.query 
 * En caso de una ruta como: 
 * /login?usuario=admin&password=123
 * req.query seria: { usuario: "admin", password: "123" }
 * req.params 
 * En caso de una ruta como: 
 * /estudiante/12345678
 * req.params seria: { id: "12345678" }
 */
// 5. Ejemplo de SSR Profesional usando un Motor de Plantillas (EJS)
// Pre-configuración necesaria:
app.set('view engine', 'ejs');

// --- NUEVO: FORMULARIO ---

// 1. Ruta para MOSTRAR el formulario HTML
app.get('/insertar', (req, res) => {
    res.render('formulario');
});

// 2. Ruta (Endpoint POST) para RECIBIR y guardar los datos
app.post('/insertar', (req, res) => {
    const baseDatos = new Estudiantes("bd.json");

    // Extraemos los datos que el usuario escribió en el formulario
    let ci = Number(req.body.ci);
    let nombre = req.body.nombre;
    baseDatos.registrarAlumno(ci, nombre)
    baseDatos.guardar()
    // Renderizamos la nueva vista de éxito
    res.render('exito', { ci: ci, nombre: nombre });
});
app.get('/estudiantes', (req, res) => {
    const baseDatos = new Estudiantes("bd.json");


    // Renderizamos la nueva vista de éxito
    res.render('estudiantes', { estudiantes: baseDatos.todasLasNotas() });
});
app.get('/eliminar', (req, res) => {
    leerbd(); // Leemos la base de datos actual
    estudiantes.find(e => e == req.body.ci)
    // Renderizamos la nueva vista de éxito
    res.render('estudiantes', estudiantes);
});




app.get('/perfil', (req, res) => {
    // Simulamos un dato que nació en el servidor (ej. de una Base de Datos)
    const nombreUsuario = "Estudiante de Ingeniería II-V";
    const horaServidor = new Date().toLocaleTimeString();

    // res.render busca automáticamente el archivo 'perfil.ejs' en la carpeta '/views'
    // Inyecta el objeto de variables en la plantilla, lo compila a HTML y lo envía al navegador
    res.render('perfil', {
        nombre: nombreUsuario,
        hora: horaServidor
    });

});
// 6. Encender el servidor y ponerlo a escuchar en un puerto de red
const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log(`Servidor de la UPTT corriendo en http://localhost:${PUERTO}`);
});
