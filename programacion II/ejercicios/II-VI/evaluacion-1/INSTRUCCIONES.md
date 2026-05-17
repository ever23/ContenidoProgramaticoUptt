# Laboratorio 1: Conexión Nativa a Base de Datos

## Objetivo
Entender cómo conectar nuestra aplicación de Node.js a una Base de Datos real usando código muy simple.
Aprenderemos a encender la base de datos usando **Docker** y a mandarle instrucciones en lenguaje SQL ("texto plano").

## Tareas del Alumno

### Paso 1: Levantar la Base de Datos
1. Abre tu terminal en esta misma carpeta (`evaluacion-1`).
2. Escribe el siguiente comando para encender MariaDB:
   ```bash
   docker-compose up -d
   ```
   *(Espera a que descargue e inicie la base de datos)*

### Paso 2: Instalar Dependencias
1. Necesitamos el "driver" de MySQL, el framework Express y EJS para las vistas:
   ```bash
   npm init -y
   npm install mysql2 express ejs
   ```

### Paso 3: Ejecutar el Servidor
1. Abre el archivo `index.js` y lee los comentarios. Verás un pequeño servidor web creado con Express, configurado para renderizar vistas HTML usando EJS.
2. Ejecuta el archivo:
   ```bash
   node index.js
   ```
3. Tu terminal debería decir que el servidor está corriendo en `http://localhost:3000`.

### Paso 4: Tu Reto (Probar el Formulario)
1. Abre tu navegador y visita `http://localhost:3000`. Deberías ver un formulario de registro.
2. Llena el formulario con tus datos (Cédula y Nombre) y haz clic en Guardar.
3. El sistema procesará tu petición `POST` en `/guardar-alumno`, ejecutará la consulta SQL en texto plano para insertar los datos en MariaDB, y te mostrará una vista de éxito (`exito.ejs`).
