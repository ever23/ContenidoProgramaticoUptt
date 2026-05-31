const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// IMPORTANTE: Este middleware permite que Express lea el cuerpo de las peticiones POST (JSON)
app.use(express.json());
app.use(express.static('public'));

const dataFile = path.join(__dirname, 'proyectos.json');

// --- HELPERS PARA EL ARCHIVO JSON ---
async function leerDatos() {
    try {
        const data = await fs.readFile(dataFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Retorna arreglo vacío si el archivo no existe
    }
}

async function guardarDatos(datos) {
    await fs.writeFile(dataFile, JSON.stringify(datos, null, 2), 'utf-8');
}

// --- RUTAS CRUD ---

// 1. LEER (GET)
app.get('/api/proyectos', async (req, res) => {
    const proyectos = await leerDatos();
    res.json(proyectos);
});

// 2. CREAR (POST)
app.post('/api/proyectos', async (req, res) => {
    const { titulo, autor, trayecto } = req.body;

    // Validación backend
    if (!titulo || titulo.length < 10) {
        return res.status(400).json({ success: false, mensaje: "Error de Seguridad: El título debe tener al menos 10 caracteres." });
    }
    if (!autor) {
        return res.status(400).json({ success: false, mensaje: "Error: El campo Autor es obligatorio." });
    }

    // Generar nuevo proyecto con ID
    const nuevoProyecto = {
        id: Date.now().toString(), // Identificador único
        titulo,
        autor,
        trayecto,
        fecha: new Date().toISOString().split('T')[0] // Fecha actual YYYY-MM-DD
    };

    const proyectos = await leerDatos();
    proyectos.push(nuevoProyecto);
    await guardarDatos(proyectos);

    res.json({ success: true, mensaje: `¡Excelente! El proyecto "${titulo}" ha sido registrado.` });
});

// 3. ACTUALIZAR (PUT)
app.put('/api/proyectos/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, trayecto } = req.body;

    if (!titulo || titulo.length < 10 || !autor) {
        return res.status(400).json({ success: false, mensaje: "Error de validación al editar." });
    }

    const proyectos = await leerDatos();
    const index = proyectos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ success: false, mensaje: "Proyecto no encontrado." });
    }

    proyectos[index] = { ...proyectos[index], titulo, autor, trayecto };
    await guardarDatos(proyectos);

    res.json({ success: true, mensaje: "Proyecto actualizado correctamente." });
});

// 4. ELIMINAR (DELETE)
app.delete('/api/proyectos/:id', async (req, res) => {
    const { id } = req.params;
    let proyectos = await leerDatos();
    
    const index = proyectos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ success: false, mensaje: "Proyecto no encontrado." });
    }

    proyectos.splice(index, 1);
    await guardarDatos(proyectos);

    res.json({ success: true, mensaje: "Proyecto eliminado del sistema." });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Evaluación 3 (Escritura y CRUD) en http://localhost:${PORT}`);
});
