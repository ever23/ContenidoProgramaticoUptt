const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
const PORT = 3000;

// Definir la ruta de la carpeta temporal en la raíz del proyecto
const uploadDir = path.join(__dirname, '..', '.temp_fotos');

// Crear la carpeta si no existe
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configurar multer para el renombrado de fotos
let counter = 0;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const student = req.body.studentName 
            ? req.body.studentName.trim().replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_\-]/g, '_') 
            : 'Anonimo';
        
        const now = new Date();
        const dateStr = now.getFullYear() +
            '-' + String(now.getMonth() + 1).padStart(2, '0') +
            '-' + String(now.getDate()).padStart(2, '0') +
            '_' + String(now.getHours()).padStart(2, '0') +
            '-' + String(now.getMinutes()).padStart(2, '0') +
            '-' + String(now.getSeconds()).padStart(2, '0');
        
        counter++;
        const ext = path.extname(file.originalname) || '.jpg';
        cb(null, `${student}_${dateStr}_pag${counter}${ext}`);
    }
});

const upload = multer({ storage: storage });

// Servir archivos estáticos de la interfaz web
app.use(express.static(path.join(__dirname, 'public')));
// Servir las fotos subidas para previsualizarlas desde la PC
app.use('/fotos', express.static(uploadDir));

// Endpoint para recibir múltiples fotos
app.post('/upload', upload.array('photos', 10), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: 'No se subieron fotos.' });
        }
        
        console.log(`[Carga] Recibidas ${req.files.length} fotos del estudiante: ${req.body.studentName || 'Anónimo'}`);
        res.json({ 
            success: true, 
            message: `¡Se subieron ${req.files.length} fotos con éxito!`,
            files: req.files.map(f => f.filename)
        });
    } catch (error) {
        console.error('Error al subir fotos:', error);
        res.status(500).json({ success: false, message: 'Error interno al guardar las fotos.' });
    }
});

// Endpoint para listar archivos subidos en el panel de control de la PC
app.get('/files', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudo leer la carpeta de fotos.' });
        }
        
        const fileList = files
            .filter(file => !file.startsWith('.')) // ignorar archivos ocultos
            .map(file => {
                const filePath = path.join(uploadDir, file);
                try {
                    const stats = fs.statSync(filePath);
                    return {
                        name: file,
                        size: stats.size,
                        mtime: stats.mtime,
                        url: `/fotos/${encodeURIComponent(file)}`
                    };
                } catch (e) {
                    return null;
                }
            })
            .filter(Boolean);
            
        // Ordenar por más recientes primero
        fileList.sort((a, b) => b.mtime - a.mtime);
        res.json(fileList);
    });
});

// Endpoint para obtener la IP del servidor
app.get('/ip', (req, res) => {
    res.json({ ip: localIP });
});

// Obtener la dirección IP local de la PC en la red local
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

const localIP = getLocalIP();

app.listen(PORT, '0.0.0.0', () => {
    console.log('\n==================================================');
    console.log('   🚀 SERVIDOR DE CAPTURA DE EXÁMENES INICIADO 🚀');
    console.log('==================================================');
    console.log(`💻 Panel de Control en PC:  http://localhost:${PORT}`);
    console.log(`📱 Enlace en el Teléfono:   http://${localIP}:${PORT}/mobile.html`);
    console.log('==================================================\n');
});
