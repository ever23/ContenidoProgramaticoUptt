# Laboratorio 4: Despliegue en Producción (Docker Compose Avanzado)

## Objetivo
Has llegado al final del trayecto II-VI. Tienes una aplicación funcional, conectada a una base de datos mediante un ORM, segura con JWT e interfaces construidas con EJS. El paso final es prepararla para Producción (ej. subirla a un VPS o servidor en la nube).

Aprenderás a:
1. Usar un `Dockerfile` para empaquetar tu propia aplicación de Node.js.
2. Usar `docker-compose.yml` para orquestar (enlazar) tu aplicación con la Base de Datos.
3. Usar **Variables de Entorno** (`process.env`) para que tu aplicación sepa cómo conectarse a la Base de Datos independientemente de si corre en tu laptop o en un servidor en Alemania.
4. Usar scripts Bash (`.sh`) para automatizar el despliegue.

## Tareas del Alumno

### Paso 1: Analiza los archivos de Producción
Abre y estudia los siguientes archivos que preparan la app para la vida real:
- `Dockerfile`: Observa cómo usamos la imagen `node:22-slim`, copiamos los archivos y ejecutamos `npm start`.
- `docker-compose.yml`: Ahora levanta **dos** servicios. `db` (MariaDB) y `app` (Nuestra app Node). Observa cómo usamos la variable `DB_HOST=db` para que el código de Node.js sepa dónde está la base de datos dentro de la red interna de Docker.
- `server.js`: Ve a la configuración de la BD (línea 20 aprox). Nota que usamos `process.env.DB_HOST`.
- `desplegar.sh` y `actualizar.sh`: Son scripts que los Administradores de Servidores usan para actualizar el proyecto con un solo comando.

### Paso 2: Despliegue Completo (¡Magia!)
No necesitas ejecutar `node server.js` manualmente nunca más.

1. Abre tu terminal (Git Bash o WSL si estás en Windows, o Linux nativo).
2. Dale permisos de ejecución a los scripts:
   ```bash
   chmod +x desplegar.sh actualizar.sh
   ```
3. Ejecuta el script de despliegue:
   ```bash
   ./desplegar.sh
   ```
4. El script detendrá versiones viejas, descargará la versión de Linux de Node, instalará los paquetes `npm`, iniciará la base de datos, construirá tu imagen y la lanzará.
5. Entra a `http://localhost:3000`. ¡Tu aplicación está corriendo al 100% dentro de un contenedor Docker!

Si tuvieras un servidor VPS público (ej. DigitalOcean, AWS), podrías acceder usando tu IP pública (ej. `http://192.168.1.50:3000`). ¡Felicidades, eres un desarrollador Full-Stack Backend en progreso!
