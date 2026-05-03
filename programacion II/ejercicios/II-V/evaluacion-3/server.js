const express = require('express');
const app = express();

// IMPORTANTE: Este middleware permite que Express lea el cuerpo de las peticiones POST (JSON)
app.use(express.json());
app.use(express.static('public'));

// Ruta para procesar el registro de proyectos
app.post('/api/proyectos', (req, res) => {
    // Los datos llegan en req.body gracias al middleware express.json()
    const { titulo, autor, trayecto } = req.body;

    console.log("Datos recibidos:", req.body);

    // --- VALIDACIÓN DE CAPA 3 (BACKEND) ---
    // La seguridad absoluta ocurre aquí, donde el usuario no puede alterar el código
    if (!titulo || titulo.length < 10) {
        return res.status(400).json({ 
            success: false, 
            mensaje: "Error de Seguridad: El título debe tener al menos 10 caracteres." 
        });
    }

    if (!autor) {
        return res.status(400).json({ 
            success: false, 
            mensaje: "Error: El campo Autor es obligatorio." 
        });
    }

    // Si pasa las validaciones, simulamos el guardado
    res.json({
        success: true,
        mensaje: `¡Excelente! El proyecto "${titulo}" de ${autor} ha sido pre-registrado en el sistema.`
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Evaluación 3 (Escritura) en http://localhost:${PORT}`);
});
