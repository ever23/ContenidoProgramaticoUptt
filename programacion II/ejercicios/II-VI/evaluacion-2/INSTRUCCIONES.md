# Laboratorio 2: Mapeo Objeto-Relacional (ORM) y Active Record

## Objetivo
Dejar de escribir código SQL en texto plano (como hicimos en la Evaluación 1) y pasar a utilizar un **ORM**. 
Usaremos las herramientas oficiales de la cátedra: `mysql-tab` y `tabla-model`. Verás cómo el ORM te ahorra trabajo, creando la base de datos y las tablas automáticamente, y permitiéndote guardar datos con una sola línea de código orientada a objetos.

## Tareas del Alumno

### Paso 1: Levantar la Base de Datos
1. Abre tu terminal en la carpeta `evaluacion-2`.
2. Escribe el siguiente comando para encender MariaDB:
   ```bash
   docker-compose up -d
   ```

### Paso 2: Instalar Dependencias
1. Ahora instalaremos Express, EJS y los paquetes ORM de la cátedra:
   ```bash
   npm init -y
   npm install express ejs mysql-tab tabla-model
   ```

### Paso 3: Ejecutar y Analizar el Código
1. Abre el archivo `server.js` y analiza cómo definimos el modelo `ModeloEstudiante`.
2. Nota que en la ruta `POST /guardar-alumno` ya no hay un `INSERT INTO`. Usamos `tablaAlumnos.insert(req.body)`.
3. Ejecuta el servidor:
   ```bash
   node server.js
   ```

### Paso 4: Probar el CRUD Completo (Active Record en Acción)
1. Entra a `http://localhost:3000` y guarda un par de alumnos.
2. Usa una herramienta como **Postman** o **Thunder Client** para hacer un `GET` a `http://localhost:3000/api/alumnos`. Anota el `id` de uno de los alumnos.
3. Haz una petición `PUT` a `http://localhost:3000/api/alumnos/TUID` mandando un JSON con un nuevo nombre. Fíjate cómo el servidor usa `estudiante.update()` para aplicar los cambios en la BD.
4. Haz una petición `DELETE` a la misma URL para eliminar el alumno usando `estudiante.delete()`.

**Reto:** Abre el código fuente (`server.js`) y maravíllate de cómo lograste hacer un CRUD completo (Crear, Leer, Actualizar, Borrar) **sin escribir ni una sola línea de SQL (`SELECT`, `INSERT`, `UPDATE`, `DELETE`)**. ¡Eso es la magia del ORM y el Active Record!
