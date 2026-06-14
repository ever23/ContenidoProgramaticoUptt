# Manual de Estudio Profundo: Evaluación 4
## Materia: Programación II (Trayecto II)
### Eje Temático: Almacenamiento y Gestión de Archivos
#### Unidades Curriculares: Unidades 8, 9 y 10

--- 

## 🧭 Introducción: El Problema de la Memoria Volátil
En el estado actual de nuestra aplicación, hemos logrado que el Frontend envíe datos (como un nuevo usuario registrado) a nuestro servidor Backend en Node.js, y que el servidor los reciba e incluso los procese.

¿Pero dónde se guardan? Si el servidor Node.js almacena los usuarios en un simple Arreglo `const usuarios = []`, esos datos viven en la **Memoria RAM** del servidor. La RAM es *volátil*. Si apagas la computadora, si hay un fallo eléctrico o si reinicias el servidor, todos los usuarios registrados desaparecen para siempre.

Para convertir nuestra aplicación en un sistema real, necesitamos **Persistencia de Datos**. La información debe escribirse permanentemente en el disco duro. En esta etapa, antes de aprender sobre Motores de Bases de Datos pesados, aprenderemos a dominar la persistencia base: el Sistema de Archivos (File System).

---

## 🏛️ CAPÍTULO I: El Módulo "fs" de Node.js

Node.js es poderoso porque puede interactuar con el disco duro del sistema operativo (Windows, Linux, Mac). Lo hace a través de un módulo nativo llamado `fs` (File System).

El módulo `fs` permite leer, crear, actualizar y borrar archivos físicos en el disco duro. Al trabajar en servidores, todas estas operaciones de disco deben realizarse de forma **Asíncrona** (`fs.promises`). Si usas funciones síncronas (`fs.writeFileSync`), mientras el disco duro físico gira para guardar un texto pesado, tu servidor web se congelará por completo y rechazará a otros miles de usuarios que intenten entrar a la página en ese milisegundo.

### 1.1 Persistencia usando Archivos JSON
Ya dominamos el formato JSON como idioma de transferencia de red. Ahora lo usaremos como nuestro "Mini-motor de Base de Datos".
El flujo de persistencia básica es:
1. Leer el archivo `database.json` del disco duro.
2. Convertir ese texto JSON a un Arreglo real de JavaScript.
3. Hacerle `.push()` al nuevo dato (el nuevo usuario).
4. Convertir el Arreglo de vuelta a texto JSON.
5. Sobrescribir el archivo `database.json` en el disco duro.

---

## 🧩 CAPÍTULO II: Subida de Archivos (File Uploads)

Las aplicaciones modernas no solo manejan texto; manejan contenido multimedia (imágenes de perfil, PDFs, audios).
Subir un archivo requiere que entendamos cómo viajan los datos pesados en la web.

### 2.1 El Formato Multipart
Hasta ahora, hemos enviado peticiones `POST` en formato JSON (`application/json`). Sin embargo, JSON es pésimo para enviar imágenes binarias pesadas.
Para enviar archivos, el estándar de la web dicta que debemos enviar el formulario codificado como `multipart/form-data`.
Este formato toma el archivo (ej. `foto.jpg`), lo corta en múltiples pedazos (partes) y los envía a través de la red como un flujo continuo de datos binarios (Stream).

### 2.2 Multer (El Middleware de Archivos)
En Express.js, recibir estos "pedazos" binarios y volver a ensamblarlos para guardarlos en el disco duro requiere un middleware especializado. El estándar de la industria en Node.js es la librería **Multer**.

Multer se encarga automáticamente de interceptar las peticiones `multipart`, agarrar el archivo subido y guardarlo en una carpeta física de nuestro servidor (ej. `/uploads/`), dejando un registro en el objeto request (`req.file`) con la información (nombre original, peso, ruta final) para que nosotros podamos guardarlo lógicamente.

### 2.3 Implementación del Cliente (Frontend con Fetch y FormData)
Para enviar un archivo desde el navegador al servidor, no usamos JSON. Usamos la interfaz nativa `FormData`, la cual construye automáticamente un cuerpo de petición en formato `multipart/form-data`.

```html
<!-- index.html -->
<form id="formularioRegistro">
    <input type="text" id="nombre" placeholder="Tu Nombre" required>
    <input type="file" id="fotoPerfil" accept="image/*" required>
    <button type="submit">Registrar y Subir Foto</button>
</form>

<script>
document.getElementById('formularioRegistro').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitamos que la página se recargue

    // 1. Obtenemos el archivo seleccionado
    const inputFoto = document.getElementById('fotoPerfil');
    const archivo = inputFoto.files[0];
    const nombre = document.getElementById('nombre').value;

    // 2. Construimos el FormData
    const formData = new FormData();
    formData.append('nombreUsuario', nombre); // Dato de texto
    formData.append('foto', archivo);         // Dato binario (el archivo)

    // 3. Enviamos mediante Fetch
    try {
        const respuesta = await fetch('/api/subir-perfil', {
            method: 'POST',
            // IMPORTANTE: NO configuramos 'Content-Type'. 
            // Fetch establece automáticamente 'multipart/form-data' al enviar un objeto FormData.
            body: formData
        });

        const resultado = await respuesta.json();
        console.log("Respuesta del servidor:", resultado);
    } catch (error) {
        console.error("Error al enviar:", error);
    }
});
</script>
```

### 2.4 Recepción y Envío de Archivos (Backend)
En el servidor, usaremos `multer` para interceptar el archivo y guardarlo físicamente en disco. Luego, crearemos una ruta específica que tome ese archivo y lo envíe al cliente de forma controlada.

```javascript
// Servidor Node.js (Backend con Multer)
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// 1. Configurar Multer: Dónde y cómo guardar los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Carpeta donde se guardarán (debe existir o Node lanzará error)
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        // Renombramos el archivo para evitar colisiones (ej. usando un número aleatorio)
        const sufijoUnico = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + sufijoUnico + extension);
    }
});

const upload = multer({ storage: storage });

// 3. Ruta POST que recibe el FormData
// upload.single('foto') intercepta el archivo que vino con el nombre 'foto'
app.post('/api/subir-perfil', upload.single('foto'), (req, res) => {
    
    // req.file contiene la información del archivo guardado físicamente
    // req.body contiene los campos de texto normales (nombreUsuario)
    
    if (!req.file) {
        return res.status(400).json({ error: "No se subió ninguna imagen" });
    }

    const nombreUsuario = req.body.nombreUsuario;
    const rutaImagen = `/uploads/${req.file.filename}`;

    // ¡Aquí se combinaría con el módulo 'fs' para guardar estos datos en un JSON!

    res.status(201).json({ 
        mensaje: "Perfil creado exitosamente",
        usuario: nombreUsuario,
        rutaFoto: rutaImagen
    });
});

// 4. Ruta GET para servir el archivo bajo demanda
// No exponemos toda la carpeta públicamente, servimos un archivo específico
app.get('/uploads/:nombreArchivo', (req, res) => {
    const nombreArchivo = req.params.nombreArchivo;
    
    // Construimos la ruta absoluta al archivo
    const rutaAbsoluta = path.join(__dirname, 'uploads', nombreArchivo);

    // Enviamos el archivo al cliente
    res.sendFile(rutaAbsoluta, (err) => {
        if (err) {
            res.status(404).json({ error: "Archivo no encontrado" });
        }
    });
});

app.listen(3000, () => console.log('Servidor de Archivos Inicializado.'));
```

---

## 💻 Laboratorio: Servidor Node con Persistencia Base JSON

Vamos a programar una ruta POST en el backend que reciba datos de un formulario y los guarde permanentemente en un archivo JSON en el disco duro, garantizando que sobrevivan a reinicios del sistema.

```javascript
// Servidor Node.js (Backend)
const express = require('express');
const fs = require('fs/promises'); // Importamos módulo de Archivos versión Asíncrona
const path = require('path');

const app = express();
app.use(express.json()); // Middleware para entender JSON

// Ruta de nuestro "Disco Duro"
const rutaBD = path.join(__dirname, 'usuarios.json');

app.post('/api/registrar', async (req, res) => {
    try {
        const nuevoUsuario = req.body; // Los datos que envió el Frontend

        // 1. LEER EL DISCO DURO (Extraer datos antiguos)
        // Leemos el archivo físico. Si no existe, usamos un arreglo vacío en texto '[]'
        let contenidoArchivo;
        try {
            contenidoArchivo = await fs.readFile(rutaBD, 'utf-8');
        } catch (e) {
            contenidoArchivo = '[]'; 
        }

        // 2. PARSEO: Convertimos el texto del disco a un Arreglo JS
        const listaUsuarios = JSON.parse(contenidoArchivo);

        // 3. TRANSFORMACIÓN: Agregamos el nuevo objeto al arreglo
        listaUsuarios.push(nuevoUsuario);

        // 4. ESCRITURA EN DISCO (Persistencia Real)
        // Convertimos el arreglo modificado de vuelta a texto JSON
        await fs.writeFile(rutaBD, JSON.stringify(listaUsuarios, null, 2));

        // 5. Respondemos al Cliente que todo fue un éxito
        res.status(201).json({ mensaje: "Usuario guardado en el disco duro con éxito." });

    } catch (error) {
        console.error("Error en disco:", error);
        res.status(500).json({ error: "Fallo interno de I/O en el servidor." });
    }
});

app.listen(3000, () => console.log('Servidor con Persistencia Inicializado.'));
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Persistencia de Datos (Data Persistence):** Característica de los sistemas informáticos referida a la retención permanente de los datos mutables generados durante la ejecución de un programa, sobreviviendo al ciclo de vida del proceso de origen a través de memoria no volátil.
- **Módulo `fs` (File System):** Biblioteca central de Node.js que proporciona un conjunto de envoltorios (wrappers) de la API POSIX para interactuar directamente con el sistema de archivos del SO subyacente.
- **Operaciones I/O (Entrada/Salida):** Transacciones de datos entre el núcleo central del procesador/memoria y componentes periféricos (como discos duros físicos o interfaces de red).
- **Bloqueo del Hilo Principal (Thread Blocking):** Anti-patrón severo en entornos asíncronos monohilo (como Node.js) donde el uso de funciones síncronas de I/O de disco (`writeFileSync`) detiene la ejecución completa del servidor, causando degradación extrema de la concurrencia.
- **Multipart/form-data:** Encodificación estándar de tipo de medio (MIME) utilizada en HTTP para envíos complejos que amalgaman datos de texto plano con contenido de formato binario (como archivos pesados o imágenes) en una única transacción multipartita.
- **Stream (Flujo de Datos):** Abstracción de programación para secuencias continuas y asíncronas de datos, procesados progresivamente en fragmentos (chunks) en lugar de cargarse enteramente en memoria RAM, vital para la manipulación eficiente de archivos grandes.
- **FormData:** Interfaz nativa de JavaScript que permite construir un conjunto de pares clave/valor que representan los campos de un formulario y sus valores, ideal para enviar datos binarios vía Fetch.
- **Envío de Archivos (`res.sendFile`):** Método de Express que transfiere un archivo físico desde la ruta especificada en el servidor hacia la conexión HTTP del cliente, permitiendo servir contenido multimedia de forma controlada sin exponer carpetas completas.
