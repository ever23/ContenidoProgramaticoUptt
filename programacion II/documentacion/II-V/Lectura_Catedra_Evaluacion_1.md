# Manual de Estudio Profundo: Evaluación 1
## Materia: Programación II (Trayecto II)
### Eje Temático: Arquitectura Cliente-Servidor con Express.js

---

## 🧭 Introducción: Saliendo del Navegador
Hasta el trimestre pasado, todo tu código JavaScript vivía y moría dentro del navegador web (Frontend). Sin embargo, una aplicación real (como Facebook o un banco) no puede guardar todos sus datos en tu computadora local; necesita centralizar la información.

Aquí es donde entra el **Backend** y la **Arquitectura Cliente-Servidor**. Aprenderemos a usar JavaScript *fuera* del navegador usando **Node.js** para construir el cerebro central de nuestra aplicación: el Servidor.

---

## 🏛️ CAPÍTULO I: La Arquitectura de 3 Capas

La ingeniería de software moderna separa las responsabilidades de una aplicación en capas lógicas para que el sistema sea escalable y seguro.

1. **Capa de Presentación (Frontend / Cliente):** Lo que ve el usuario (HTML, CSS, JS del DOM). Se ejecuta en el navegador (Chrome, Safari). Su única responsabilidad es mostrar la interfaz y capturar las acciones del usuario.
2. **Capa de Negocio (Backend / Servidor):** El cerebro de la operación. Aquí vivirá nuestro servidor Node.js. Recibe peticiones del cliente, aplica reglas lógicas (ej: "verificar si tiene saldo"), y envía respuestas.
3. **Capa de Datos (Base de Datos):** El disco duro de la operación (MySQL/PostgreSQL). Donde la información se guarda de forma permanente.

### El Protocolo HTTP (El Idioma de la Web)
El Cliente y el Servidor hablan un idioma estricto: **HTTP**. 
- El Cliente hace un **Request (Petición)**. Ej: "Oye servidor, envíame la página de inicio".
- El Servidor responde con un **Response (Respuesta)**. Ej: "Claro, aquí tienes el HTML, código de estado 200 (OK)".

---

## 🧩 CAPÍTULO II: Introducción a Node.js y Express

### 2.1 ¿Qué es Node.js?
Node.js no es un lenguaje de programación. Es un **entorno de ejecución (Runtime)**. Alguien tomó el motor V8 de Google Chrome (el que lee JS), lo sacó del navegador y le dio la capacidad de interactuar con el sistema operativo (leer archivos, abrir puertos de red). Esto nos permite escribir servidores usando JavaScript.

### 2.2 ¿Qué es Express.js?
Escribir un servidor web desde cero con Node.js puro es tedioso. **Express.js** es un *Framework* (un marco de trabajo) minimalista que nos simplifica la vida. Nos da herramientas pre-hechas para crear rutas, recibir datos y enviar respuestas con pocas líneas de código.

---

## 🏗️ CAPÍTULO III: El Concepto de Enrutamiento (Routing) y Middlewares

### 3.1 Rutas (Endpoints)
Un servidor no hace solo una cosa. Tiene "puertas" lógicas llamadas rutas.
Si el usuario va a `www.miapp.com/usuarios`, el servidor ejecuta una función. Si va a `www.miapp.com/productos`, ejecuta otra.
Express nos permite definir estas rutas fácilmente usando los "Verbos HTTP":
- `GET`: Para *pedir* información (leer).
- `POST`: Para *enviar* información nueva (crear).

### 3.2 Middlewares (Los Guardias de Seguridad)
Un middleware es una función que se ejecuta *en el medio* de una petición. Antes de que tu ruta principal procese la petición, el middleware puede revisarla.
Por ejemplo, un middleware de autenticación: verifica si el usuario está logueado. Si no lo está, bloquea la petición antes de que llegue a la ruta de "Ver Perfil".

### 3.3 Servir Archivos Estáticos (Static Files)
En la arquitectura clásica web, el Backend es el responsable de entregarle al navegador web los archivos base del Frontend (HTML, CSS, imágenes y scripts del DOM). A esta acción se le llama "Servir contenido estático".
Express simplifica enormemente esto usando un middleware nativo llamado `express.static()`. Al indicarle a Express una carpeta física (por ejemplo, `public/`), automáticamente expone todos los archivos de esa carpeta para que el navegador los descargue sin necesidad de programar una ruta manualmente para cada imagen o archivo HTML.

### 3.4 Renderizado de HTML en el Servidor (SSR)
Además de enviar HTML estático puro, Express tiene la capacidad de **Construir HTML Dinámicamente** en el servidor antes de enviarlo al cliente. A este patrón arquitectónico se le conoce como *Server-Side Rendering (SSR)*.
En lugar de enviar un HTML vacío y hacer que el navegador tenga que pedir los datos después con JavaScript, el Backend (Node.js) procesa los datos, los "inyecta" directamente dentro de una plantilla HTML y le envía al navegador la página web ya ensamblada y lista para ser mostrada al usuario. Esto se logra acoplando Express con "Motores de Plantillas" (Template Engines) como **EJS**, **Pug** o enviando HTML puro ensamblado mediante el método `res.sendFile()`.

---

## 💻 Laboratorio: Tu Primer Servidor Web en 10 Líneas

Veamos cómo crear un servidor profesional básico.
*Nota: Debes haber instalado Node.js y ejecutado `npm init -y` y `npm install express` en tu terminal.*

```javascript
// 1. Importar el framework Express
const express = require('express');

// 2. Instanciar la aplicación (Crear el servidor)
const app = express();

// 3. Configurar Middleware para servir archivos estáticos (Fase 1 de la arquitectura)
// Esto le dice al servidor: "Si alguien pide un archivo HTML o CSS, búscalo en la carpeta 'public'"
app.use(express.static('public'));

// 4. Crear una Ruta Básica (Método GET)
app.get('/saludo', (req, res) => {
    // req (Request): Trae la información de quién pide esto.
    // res (Response): Herramienta para responder.
    res.send("¡Hola desde el Backend! Tu servidor está vivo.");
});

// 5. Ejemplo de SSR Profesional usando un Motor de Plantillas (EJS)
// Pre-configuración necesaria: app.set('view engine', 'ejs');
app.get('/perfil', (req, res) => {
    // Simulamos un dato que nació en el servidor (ej. de una Base de Datos)
    const nombreUsuario = "Estudiante de Ingeniería";
    const horaServidor = new Date().toLocaleTimeString();

    // res.render busca automáticamente el archivo 'perfil.ejs' en la carpeta '/views'
    // Inyecta el objeto de variables en la plantilla, lo compila a HTML y lo envía al navegador
    res.render('perfil', { 
        nombre: nombreUsuario, 
        hora: horaServidor 
    });
    // 6. Encender el servidor y ponerlo a escuchar en un puerto de red
    const PUERTO = 3000;
    app.listen(PUERTO, () => {
        console.log(`Servidor de la UPTT corriendo en http://localhost:${PUERTO}`);
    });
});
```

*(Para que el código anterior funcione, debes crear un archivo llamado `perfil.ejs` dentro de una carpeta llamada `views` en la raíz de tu proyecto, con este contenido:)*

```html
<!-- Archivo: views/perfil.ejs -->
<!DOCTYPE html>
<html lang="es">
<head><title>Perfil SSR</title></head>
<body>
    <h1>¡Hola Mundo!</h1>
    <h2>Bienvenido, <strong><%= nombre %></strong></h2>
    <p>Este HTML fue renderizado en el servidor. La hora es: <%= hora %></p>
</body>
</html>


```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Arquitectura Cliente-Servidor:** Modelo de diseño de software distribuido que separa las cargas de trabajo entre proveedores de recursos (servidores) y demandantes (clientes) sobre una red computacional.
- **Node.js:** Entorno de ejecución de servidor asíncrono y dirigido por eventos basado en el motor V8 de Google, diseñado para construir aplicaciones de red escalables en JavaScript.
- **Express.js:** Framework web transaccional para Node.js que proporciona una infraestructura robusta para aplicaciones web y APIs, simplificando el enrutamiento y manejo de peticiones.
- **HTTP (Hypertext Transfer Protocol):** Protocolo de comunicación de la capa de aplicación sin estado, estándar fundamental para la transferencia de hipertexto en la World Wide Web.
- **Enrutamiento (Routing):** Proceso de definición de los puntos finales de una aplicación (URIs) y cómo responden a las peticiones de los clientes mediante los distintos métodos HTTP.
- **Middleware:** Capa de software subyacente que intercepta peticiones HTTP para ejecutar lógicas intermedias (parseo, autorización, logging) antes de transferir el control al manejador de ruta final.
