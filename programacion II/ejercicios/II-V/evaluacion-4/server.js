const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Ruta específica para servir las fotos bajo demanda (sin exponer toda la carpeta públicamente)
app.get('/fotos/:nombreArchivo', (req, res) => {
    const nombreArchivo = req.params.nombreArchivo;
    const rutaAbsoluta = path.join(__dirname, 'uploads', nombreArchivo);

    res.sendFile(rutaAbsoluta, (err) => {
        if (err) {
            res.status(404).json({ success: false, mensaje: "Foto no encontrada." });
        }
    });
});

// --- CONFIGURACIÓN DE MULTER ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán
    },
    filename: (req, file, cb) => {
        // Renombramos: ID-Fecha-NombreOriginal
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const DB_FILE = path.join(__dirname, 'estudiantes.json');

// 1. RUTA: Leer estudiantes del disco
app.get('/api/estudiantes', async (req, res) => {
    try {
        const data = await fs.readFile(DB_FILE, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.json([]);
    }
});

// 2. RUTA: Registrar estudiante y guardar foto (PERSISTENCIA REAL)
app.post('/api/estudiantes', upload.single('foto'), async (req, res) => {
    try {
        const { nombre, cedula } = req.body;
        const fotoPath = req.file ? `/fotos/${req.file.filename}` : null;

        // A. Leer lo que ya existe
        let estudiantes = [];
        try {
            const data = await fs.readFile(DB_FILE, 'utf-8');
            estudiantes = JSON.parse(data);
        } catch (e) { /* Archivo nuevo */ }

        // B. Agregar el nuevo
        const nuevoEstudiante = {
            id: Date.now(),
            nombre,
            cedula,
            foto: fotoPath
        };
        estudiantes.push(nuevoEstudiante);

        // C. Escribir de vuelta al disco
        await fs.writeFile(DB_FILE, JSON.stringify(estudiantes, null, 2));

        res.status(201).json({ success: true, mensaje: "Estudiante guardado permanentemente." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, mensaje: "Error al escribir en el disco duro." });
    }
});

// 3. RUTA: Eliminar estudiante (DELETE)
app.get('/api/estudiantes/eliminar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = await fs.readFile(DB_FILE, 'utf-8');
        let estudiantes = JSON.parse(data);

        // Filtramos para quitar el que tiene ese ID
        const nuevaLista = estudiantes.filter(e => e.id !== id);

        await fs.writeFile(DB_FILE, JSON.stringify(nuevaLista, null, 2));
        res.json({ success: true, mensaje: "Estudiante eliminado del disco." });
    } catch (error) {
        res.status(500).json({ success: false, mensaje: "Error al eliminar." });
    }
});

// 4. RUTA: Actualizar nombre (PUT/POST simulación)
app.post('/api/estudiantes/editar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nuevoNombre } = req.body;

        const data = await fs.readFile(DB_FILE, 'utf-8');
        let estudiantes = JSON.parse(data);

        const index = estudiantes.findIndex(e => e.id === id);
        if (index !== -1) {
            estudiantes[index].nombre = nuevoNombre;
            await fs.writeFile(DB_FILE, JSON.stringify(estudiantes, null, 2));
            res.json({ success: true, mensaje: "Nombre actualizado con éxito." });
        } else {
            res.status(404).json({ success: false, mensaje: "No encontrado." });
        }
    } catch (error) {
        res.status(500).json({ success: false, mensaje: "Error al editar." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proyecto Final (Persistencia) corriendo en http://localhost:${PORT}`);
});
