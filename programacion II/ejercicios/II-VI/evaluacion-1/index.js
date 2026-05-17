const express = require('express');
const mysql = require('mysql2/promise'); // Usamos la versión de promesas (async/await)

const app = express();
const puerto = 3000;

// Configuración para usar vistas HTML con EJS
app.set('view engine', 'ejs');
// Servir archivos estáticos (CSS, JS) desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para entender JSON y datos de Formularios HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variable global para guardar nuestra conexión
let conexion;

// Función para conectar a la base de datos e inicializar la tabla
async function iniciarServidor() {
    try {
        console.log("Intentando conectar a MariaDB...");
        conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'uptt_notas'
        });
        
        console.log("¡Conexión Exitosa a la base de datos!");

        // Creamos la tabla si no existe
        const sqlCrearTabla = `
            CREATE TABLE IF NOT EXISTS alumnos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                ci VARCHAR(20),
                nombre VARCHAR(100)
            )
        `;
        await conexion.query(sqlCrearTabla);
        console.log("Tabla 'alumnos' verificada/creada.");

        // Levantamos el servidor Express solo si la BD conectó bien
        app.listen(puerto, () => {
            console.log(`Servidor Express corriendo en http://localhost:${puerto}`);
        });

    } catch (error) {
        console.error("Error al iniciar:", error.message);
    }
}

// ==========================================
// RUTAS CRUD (Renderizando Vistas HTML/EJS)
// ==========================================

// 1. LEER (READ): Mostrar el formulario
app.get('/', async (req, res) => {
    // Renderizamos el archivo formulario.ejs ubicado en la carpeta views
    res.render('formulario');
});

// 2. CREAR (CREATE): Agregar un nuevo alumno desde el formulario
app.post('/guardar-alumno', async (req, res) => {
    try {
        // Obtenemos los datos del formulario (gracias a urlencoded)
        const ci = req.body.ci;
        const nombre = req.body.nombre;

        // Armamos el SQL en texto plano (Nota: En el mundo real usaríamos prepared statements para evitar inyección)
        const sql = `INSERT INTO alumnos (ci, nombre) VALUES ('${ci}', '${nombre}')`;
        
        await conexion.query(sql);
        
        // Renderizamos una vista de éxito
        res.render('exito', { nombre_registrado: nombre, ci_registrada: ci });
    } catch (error) {
        res.status(500).send("Error guardando el alumno: " + error.message);
    }
});

// Inicializamos todo
iniciarServidor();
