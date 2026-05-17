# Laboratorio 3: Seguridad, Login y JWT

## Objetivo
Implementar un sistema de Autenticación seguro. A partir de ahora, nuestra base de datos no guarda información abierta (como Estudiantes), sino **Usuarios** del sistema que tienen una contraseña.
Aprenderás a:
1. Encriptar las contraseñas usando `bcrypt` (NUNCA guardar contraseñas en texto plano).
2. Generar un **JWT (JSON Web Token)** cuando el usuario haga login correctamente.
3. Usar **Middlewares** para proteger rutas; si alguien intenta entrar al directorio de usuarios sin haberse logueado, el servidor lo bloqueará.

## Tareas del Alumno

### Paso 1: Levantar Docker
1. Asegúrate de estar en la carpeta `evaluacion-3`.
2. Enciende el contenedor (este levanta una base de datos nueva para este ejercicio llamada `uptt_seguridad`):
   ```bash
   docker-compose up -d
   ```

### Paso 2: Nuevas Dependencias
1. Como nuestro servidor ahora necesita encriptar y manejar Tokens y Cookies, debemos instalar paquetes adicionales:
   ```bash
   npm init -y
   npm install express ejs mysql-tab tabla-model bcrypt jsonwebtoken cookie-parser
   ```

### Paso 3: Analiza y Prueba el Código
1. Ejecuta el servidor: `node server.js`
2. Si te fijas en la consola, el servidor notará que la tabla está vacía y **creará un usuario administrador automáticamente** (admin@uptt.edu.ve / 1234) para que puedas entrar.
3. Abre `http://localhost:3000`. Como **no tienes un token**, el *middleware* de seguridad te pateará y te redirigirá a la pantalla de Login (`/login`).
4. Inicia sesión con:
   - **Correo:** admin@uptt.edu.ve
   - **Clave:** 1234
5. ¡Bienvenido al panel privado! Agrega nuevos usuarios. Fíjate en la tabla cómo las contraseñas que introduces se transforman en *hashes* criptográficos (garabatos).

### Paso 4: El Reto de Seguridad
Abre tu navegador en "Modo Incógnito" e intenta ingresar directamente a `http://localhost:3000`. Verás que el sistema te rechaza porque esa ventana de incógnito no tiene la *Cookie* con el Token JWT. ¡Acabas de crear un sistema web totalmente seguro y moderno!
