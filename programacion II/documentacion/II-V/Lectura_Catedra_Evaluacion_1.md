# Arquitectura Cliente-Servidor y Fundamentos de Express.js: Construyendo la Capa de Red

El desarrollo de software profesional trasciende la escritura de algoritmos aislados en una computadora personal. En el contexto real de la ingeniería, los sistemas deben comunicarse, compartir información y atender a miles de usuarios simultáneamente. Para lograr esto, abandonamos el paradigma de la aplicación de escritorio y adoptamos el modelo arquitectónico más dominante de la era digital: la arquitectura Web basada en Cliente-Servidor.

En esta unidad, nos adentramos en el ecosistema de **Node.js** y **Express.js** no solo como herramientas de programación, sino como plataformas de ingeniería para diseñar infraestructuras de red robustas, separar responsabilidades a través del Modelo de 3 Capas y servir aplicaciones funcionales al mundo exterior.

---

## 🌍 CAPÍTULO I: La Dualidad Cliente-Servidor y el Protocolo HTTP

El internet no es más que un conjunto de reglas (protocolos) que permiten a dos computadoras hablar entre sí. El núcleo de esta comunicación web se rige por el paradigma **Cliente-Servidor**.

1.  **El Cliente (El Solicitante):** Es típicamente un navegador web (Chrome, Firefox) o una aplicación móvil. El cliente no tiene la información ni el poder de procesamiento principal; su trabajo es *pedir* recursos y mostrar la interfaz visual al usuario.
2.  **El Servidor (El Proveedor):** Es una computadora de alto rendimiento, siempre encendida, esperando recibir peticiones. Contiene la base de datos, las reglas de negocio y los archivos fuente de la aplicación.

La conversación entre ambos ocurre estrictamente bajo el protocolo **HTTP (Hypertext Transfer Protocol)**, un ciclo cerrado de:
*   **Petición (Request):** El cliente pide algo (Ej: *"Dame el perfil del usuario Juan"*).
*   **Respuesta (Response):** El servidor procesa la lógica, consulta la base de datos y envía un paquete de datos de vuelta (Ej: *"Aquí están los datos en formato JSON"* o *"Error 404: Usuario no encontrado"*).

---

## 🏛️ CAPÍTULO II: La Arquitectura de 3 Capas

Un error de ingeniería clásico es mezclar el código visual (HTML/CSS), la lógica matemática y las consultas a la base de datos en un solo archivo inmenso. Para sistemas empresariales, esto es insostenible. Aquí entra el patrón arquitectónico de **Separación de Responsabilidades** a través de 3 capas lógicas:

1.  **Capa de Presentación (Frontend):** Lo que ve el usuario. Maneja la interacción, los botones, los colores y la experiencia (UI/UX). Se ejecuta exclusivamente en el navegador del cliente.
2.  **Capa de Negocio (Backend/Controlador):** El cerebro del sistema. Valida contraseñas, realiza cálculos financieros y decide qué debe ocurrir cuando el usuario hace clic. Se ejecuta en el Servidor.
3.  **Capa de Datos (Persistencia):** El almacén seguro de la información a largo plazo (Bases de datos como PostgreSQL o MySQL). El servidor se comunica con esta capa para guardar o extraer registros.

> **Nota de Ingeniería:** Express.js operará en nuestra Capa de Negocio (Backend), actuando como el gran director de orquesta que escucha las peticiones del Frontend y coordina las acciones necesarias.

---

## 🚂 CAPÍTULO III: El Motor del Backend: Express.js

**Node.js** es el entorno que permite a JavaScript salir del navegador y acceder al sistema operativo del servidor (leer archivos, abrir puertos de red). Sin embargo, escribir un servidor HTTP puro en Node.js es tedioso. 

**Express.js** es un marco de trabajo (*framework*) minimalista para Node.js que abstrae la complejidad de la red, permitiéndonos construir servidores robustos con muy pocas líneas de código.

### 3.1. Puertos de Red (Las Puertas del Servidor)
Un servidor físico (la computadora) tiene miles de "puertas" virtuales llamadas Puertos. Cuando levantamos un servidor Express, le decimos que *escuche* por una puerta específica (usualmente el puerto `3000` o `8080`).

### 3.2. Rutas (Endpoints)
Una ruta es una dirección URL específica combinada con un Método HTTP (GET, POST) que el servidor está programado para escuchar y responder.
*   Si el cliente visita `/usuarios`, el servidor ejecuta una función específica.
*   Si visita `/productos`, ejecuta otra.

### 3.3. Servidor de Archivos Estáticos
Una de las responsabilidades más básicas del servidor es alojar los archivos de la **Capa de Presentación** (el HTML, las imágenes, el CSS y los scripts del frontend) para entregárselos al navegador del cliente cuando este entra a la página web. A esto se le llama "Servir archivos estáticos".

### 3.4. Middlewares (Filtros Intermedios)
Los middlewares son el corazón de Express. Son funciones que se interponen en el medio del ciclo Petición-Respuesta. 
Imagina un guardia de seguridad en la puerta de un club:
1. El cliente hace la petición de entrar.
2. El *Middleware de Seguridad* intercepta la petición, pide la identificación.
3. Si todo está bien, pasa la petición a la Ruta final. Si no, devuelve un error inmediatamente bloqueando el acceso.

---

## 💻 CAPÍTULO IV: Implementación de Laboratorio (Código Base)

A continuación, la anatomía técnica de un servidor básico en Express.js sirviendo archivos estáticos y configurando una ruta de prueba.

```javascript
// 1. IMPORTACIÓN DEL MÓDULO (Usamos CommonJS por simplicidad histórica, 
// aunque la industria transiciona a ESM)
const express = require('express');

// 2. INSTANCIACIÓN DEL SERVIDOR
const app = express();
const PUERTO = 3000;

// 3. MIDDLEWARE: SERVICIO DE ARCHIVOS ESTÁTICOS
// Todo lo que coloquemos dentro de la carpeta 'public'
// (nuestro index.html, styles.css) será entregado automáticamente al cliente.
app.use(express.static('public'));

// 4. DEFINICIÓN DE RUTAS (Capa de Negocio)
// Si el cliente entra a "http://localhost:3000/api/estado"
app.get('/api/estado', (req, res) => {
    // req (Request): Trae la información del cliente.
    // res (Response): Nos permite enviar la respuesta.
    
    // Devolvemos un estado en formato JSON puro.
    res.json({
        mensaje: "El servidor de la UPTT está funcionando al 100%",
        status: "OK",
        version: "1.0.0"
    });
});

// 5. ENCENDIDO DEL MOTOR DE RED
// Ponemos a la aplicación a escuchar las peticiones por el puerto 3000
app.listen(PUERTO, () => {
    console.log(`[INGENIERÍA] Servidor activo escuchando en el puerto ${PUERTO}...`);
    console.log(`Visita http://localhost:${PUERTO} en tu navegador.`);
});
```

En este simple archivo reside el poder de sostener la red de un ecosistema de software completo.

---

## 📘 ANEXO: Diccionario Técnico Formal (Trimestre V)

*Para la defensa en el laboratorio, se requiere dominio estricto del siguiente vocabulario:*

- **Node.js:** Entorno de ejecución asíncrono dirigido por eventos que permite interpretar código JavaScript del lado del servidor.
- **Express.js:** Framework minimalista para Node.js, diseñado para construir de forma rápida y robusta aplicaciones web y APIs.
- **Middleware:** Función de software que tiene acceso al objeto de solicitud (`req`), al objeto de respuesta (`res`) y a la siguiente función de middleware en el ciclo de solicitud/respuesta. Sirve para interceptar, transformar o bloquear el flujo de datos.
- **Puerto de Red:** Canal lógico numérico a través del cual el sistema operativo direcciona el tráfico de red a la aplicación específica que lo está escuchando.
- **Ruta (Endpoint):** Definición de un punto de acceso en el servidor, compuesto por un URI (URL) y un método de solicitud HTTP (ej. GET, POST), que ejecuta un controlador específico.
- **Archivo Estático:** Recurso (como HTML, CSS, imágenes o JS de cliente) que el servidor entrega al cliente exactamente como está almacenado, sin ejecutar ningún procesamiento o lógica sobre él antes de enviarlo.
- **JSON (JavaScript Object Notation):** Formato de texto ligero para el intercambio de datos, fácil de leer para humanos y fácil de analizar para las máquinas, estándar *de facto* en APIs modernas.
