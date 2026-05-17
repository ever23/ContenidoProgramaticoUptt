const express = require('express');
// Importamos las librerías ORM de la cátedra
const dbTabla = require('mysql-tab');
const Model = require('tabla-model');

const app = express();
const puerto = 3000;

// Configuración de Vistas (EJS) y Archivos Estáticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Middleware para entender JSON y datos de Formularios HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// 1. CONFIGURACIÓN DEL ORM (Active Record)
// ==========================================

// Inicializamos la conexión. ¡Ojo! El ORM creará la base de datos si no existe.
const poolBD = new dbTabla({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'uptt_notas_orm'
});

// 2. Definición del Modelo (Creará la tabla automáticamente)
// Usamos los mismos campos que pide nuestro formulario HTML: ci y nombre
const ModeloEstudiante = new Model("Alumnos", [
    { name: "id", type: "int", primary: true, autoincrement: true },
    { name: "ci", type: "varchar(20)" },
    { name: "nombre", type: "varchar(100)" }
]);

// Registramos el modelo en el pool
poolBD.addModel(ModeloEstudiante);

// Extraemos el controlador de la tabla para usarlo más adelante
const tablaAlumnos = poolBD.tabla("Alumnos");

// ==========================================
// RUTAS CRUD (Usando el ORM)
// ==========================================

// Mostrar el formulario y la lista (Renderiza la vista EJS)
app.get('/', async (req, res) => {
    try {
        const lista = await tablaAlumnos.select();
        res.render('formulario', { alumnos: lista });
    } catch (error) {
        res.status(500).send("Error cargando la página: " + error.message);
    }
});

// 🟢 C (Create): Inserción Directa con Objetos
app.post('/guardar-alumno', async (req, res) => {
    try {
        // En la eval-1 hacíamos: INSERT INTO alumnos (ci, nombre) VALUES...
        // ¡Ahora el ORM lo hace por nosotros! Solo le pasamos el objeto req.body
        // req.body contiene { ci: '123', nombre: 'Juan' }

        await tablaAlumnos.insert(req.body.ci, req.body.nombre);

        // Redirigir al inicio para ver la tabla actualizada
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Error guardando el alumno con ORM: " + error.message);
    }
});

// ==========================================
// RUTAS PARA FORMULARIOS HTML (Nativas)
// ==========================================

// Mostrar formulario para editar un alumno
app.get('/editar-alumno/:id', async (req, res) => {
    try {
        let alumno = await tablaAlumnos.selectById(req.params.id);
        if (!alumno) return res.status(404).send("Alumno no encontrado");
        res.render('editar', { alumno: alumno });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Guardar cambios del formulario de edición
app.post('/actualizar-alumno/:id', async (req, res) => {
    try {
        let alumno = await tablaAlumnos.selectById(req.params.id);
        if (!alumno) return res.status(404).send("Alumno no encontrado");

        alumno.nombre = req.body.nombre;
        alumno.ci = req.body.ci;
        
        await alumno.update();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar desde un botón HTML (que hace POST)
app.post('/eliminar-alumno/:id', async (req, res) => {
    try {
        let alumno = await tablaAlumnos.selectById(req.params.id);
        if (alumno) await alumno.delete();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// 🔵 R (Read): Búsqueda Limpia para ver los datos guardados
app.get('/api/alumnos', async (req, res) => {
    try {
        // En lugar de SELECT * FROM alumnos, usamos el método select()
        const lista = await tablaAlumnos.select();
        res.json(lista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🟠 U (Update): Modificar un alumno usando Active Record
app.put('/api/alumnos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // 1. Buscamos al alumno por su ID (Devuelve un objeto inteligente "dbRow")
        let alumno = await tablaAlumnos.selectById(id);
        
        if (!alumno) return res.status(404).json({ error: "Alumno no encontrado" });

        // 2. Modificamos el objeto en memoria con los datos nuevos
        if (req.body.nombre) alumno.nombre = req.body.nombre;
        if (req.body.ci) alumno.ci = req.body.ci;
        
        // 3. El objeto se sincroniza a sí mismo con la base de datos
        await alumno.update();
        
        res.json({ mensaje: "Alumno actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🔴 D (Delete): Eliminar un alumno
app.delete('/api/alumnos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // Usamos el patrón Active Record: Buscamos y luego eliminamos
        let alumno = await tablaAlumnos.selectById(id);
        
        if (!alumno) return res.status(404).json({ error: "Alumno no encontrado" });

        await alumno.delete(); // El objeto se auto-elimina de la BD
        
        res.json({ mensaje: "Alumno eliminado del sistema" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Levantamos el servidor
app.listen(puerto, () => {
    console.log(`Servidor ORM corriendo en http://localhost:${puerto}`);
});
