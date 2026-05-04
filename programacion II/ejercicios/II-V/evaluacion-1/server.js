// 1. Importar el framework Express
const express = require('express');
const fs = require("fs")

function leerbd() {
    let textJson = fs.readFileSync("bd.json", "utf8")
    estudiantes = JSON.parse(textJson).estudiantes
    return estudiantes
}
function guardarbd() {
    let obj = JSON.stringify({ estudiantes: estudiantes })
    fs.writeFileSync("bd.json", obj)
}
// 2. Instanciar la aplicación (Crear el servidor)
const app = express();
let estudiantes = [

]
// 3. Configurar Middleware para servir archivos estáticos (Fase 1 de la arquitectura)
// Esto le dice al servidor: "Si alguien pide un archivo HTML o CSS, búscalo en la carpeta 'public'"
app.use(express.static('public'));
// 4. Crear una Ruta Básica (Método GET)

// 4. Crear una Ruta Básica (Método GET)  
app.get('/saludo', (req, res) => {
    // req (Request): Trae la información de quién pide esto.
    // res (Response): Herramienta para responder.
    res.send("¡Hola desde el Backend! Tu servidor está vivo.");
});

//http://localhost:3000/leer?ci=123
app.get('/leer', (req, res) => {

    let ci = Number(req.query.ci)
    leerbd()


    let nombre = estudiantes.find(e => e.ci == ci).nombre
    res.send("¡Hola desde el Backend! Tu servidor está vivo. El nombre es " + nombre);
});

http://localhost:3000/registrar?ci=234&nombre=luis
app.get('/registrar', (req, res) => {
    leerbd()
    let ci = Number(req.query.ci)
    let nombre = req.query.nombre
    estudiantes.push({ ci: ci, nombre: nombre })
    guardarbd()
    res.send("sus datos an sido registrados ci:" + ci + " Nombre:" + nombre);
});
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
