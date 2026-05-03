const express = require('express');
const app = express();
const notas = [
    { nombre: "Enyerber Franco", materia: "Programación II", nota: 19, estado: "Aprobado" },
    { nombre: "Maria Perez", materia: "Redes", nota: 15, estado: "Aprobado" },
    { nombre: "Jose Rodriguez", materia: "Matemática", nota: 8, estado: "Reprobado" },
    { nombre: "Ana Garcia", materia: "Inglés", nota: 20, estado: "Aprobado" }
];

app.use(express.static('public'));

// API que simula una base de datos de notas
app.get('/api/notas', (req, res) => {

    // res.json() automáticamente convierte el objeto a JSON y envía las cabeceras correctas
    res.json(notas);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Evaluación 2 corriendo en http://localhost:${PORT}`);
});
