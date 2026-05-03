# Evaluación 4 — Persistencia de Datos y Gestión de Archivos
## Programación II · Trayecto II · UPTT

**Ponderación:** 25% de la nota del trimestre  
**Eje Temático:** Módulo `fs` (File System), Persistencia JSON y Multer (File Uploads).

---

## 🎯 Objetivo

Construir un **CRUD Completo de Identidad Estudiantil** (Create, Read, Update, Delete). El sistema debe permitir registrar, listar, editar el nombre y eliminar a un estudiante del disco duro, incluyendo la gestión de su foto de carnet. Los datos deben guardarse permanentemente en un archivo `estudiantes.json` y las fotos en una carpeta física `/uploads`.

---

## 🏗️ Estructura del Proyecto

```
apellidos-grupo-eval4/
├── server.js           <-- Lógica de disco y Multer
├── estudiantes.json    <-- Nuestra "Base de Datos" física
├── uploads/            <-- Carpeta donde vivirán las fotos
└── public/             
    ├── index.html      <-- Formulario con enctype="multipart/form-data"
    └── js/
        └── main.js     <-- Envío de FormData (sin JSON.stringify)
```

---

## 🛣️ Requerimientos del Backend (server.js)

1. **Persistencia (fs):** Debes usar `fs.readFile` y `fs.writeFile` (versión promises) para gestionar el archivo `estudiantes.json`.
2. **Gestión de Archivos (Multer):** 
   - Configurar un destino de guardado en la carpeta `uploads/`.
   - Renombrar los archivos subidos para que incluyan la fecha (evitar colisiones de nombres).
3. **Ruta POST `/api/estudiantes`:**
   - Debe recibir el campo de texto `nombre` y el archivo de imagen `foto`.
   - Debe guardar el objeto completo (nombre + ruta de la foto) en el JSON.

---

## 💻 Requerimientos del Frontend (public/)

1. **HTML:** Un formulario con un `<input type="file" name="foto">`. **Vital:** El formulario debe tener el atributo `enctype="multipart/form-data"`.
2. **JS (main.js):** 
   - Al usar archivos, **NO** puedes convertir los datos a JSON con `JSON.stringify`.
   - Debes enviar el objeto `FormData` directamente en el `body` del fetch.
   - El navegador detectará automáticamente que es un envío "Multipart".

---

## ✅ Criterios de Evaluación (100 pts)

1. **Configuración de Multer (30 pts):** Almacenamiento correcto de archivos con nombres únicos.
2. **Persistencia Real (30 pts):** Los datos se escriben y leen correctamente del archivo `estudiantes.json`.
3. **Integridad de Datos (20 pts):** El sistema no borra los datos anteriores al agregar uno nuevo (Lectura -> Push -> Escritura).
4. **Visualización (20 pts):** Una vez registrado, mostrar en la página la lista de estudiantes con su foto (usando archivos estáticos).

---

> 🚀 **RETO PRO:** Configura el servidor para que los archivos en la carpeta `uploads/` sean públicos usando `express.static('uploads')`, así podrás mostrar las fotos en el HTML.
