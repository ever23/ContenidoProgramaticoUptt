# Evaluación 3 — Gestión de Datos y Formularios Asíncronos
## Programación II · Trayecto II · UPTT

**Ponderación:** 25% de la nota del trimestre  
**Eje Temático:** Método POST, FormData, preventDefault() y Validación de 3 Capas.

---

## 🎯 Objetivo

Construir un **Formulario de Registro de Proyectos Socio-Tecnológicos**. El sistema debe capturar los datos, validarlos en el cliente para dar feedback inmediato, y enviarlos al servidor mediante una petición POST asíncrona para una validación final de seguridad.

---

## 🏗️ Estructura del Proyecto

```
apellidos-grupo-eval3/
├── package.json
├── server.js           <-- Backend (Validación y Procesamiento)
└── public/             <-- Frontend
    ├── index.html      <-- Formulario con IDs y Names
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js     <-- Captura de evento 'submit' y Fetch POST
```

---

## 🛣️ Requerimientos del Backend (server.js)

1. **Middleware:** Debes configurar `app.use(express.json())` para que el servidor pueda entender los paquetes JSON que llegan en el cuerpo (body) de la petición.
2. **Ruta:** `/api/proyectos` (Método **POST**)
3. **Validación de Capa 3:** Si el título del proyecto es menor a 10 caracteres o el autor está vacío, el servidor debe responder con un código de error (400) y un mensaje JSON.
4. **Respuesta Exitosa:** Si los datos son válidos, responder con un JSON que diga: `"Proyecto [nombre] registrado con éxito"`.

---

## 💻 Requerimientos del Frontend (public/)

1. **HTML:** Un formulario con campos: `titulo`, `autor`, `descripcion` y un `select` para el `trayecto`.
2. **JS (main.js):** 
   - Capturar el evento `submit` del formulario.
   - Usar `e.preventDefault()` para evitar que la página se recargue.
   - Usar `new FormData(formulario)` para recoger los datos.
   - **Validación de Capa 2:** Mostrar una alerta roja si el campo descripción está vacío antes de enviar nada al servidor.
   - Realizar el `fetch()` configurando el `method: 'POST'` y enviando los datos en el `body`.

---

## ✅ Criterios de Evaluación (100 pts)

1. **Manejo de Eventos (20 pts):** Uso correcto de `submit` y `preventDefault`.
2. **Captura de Datos (20 pts):** Uso de `FormData` y transformación a objeto JSON.
3. **Petición Asíncrona POST (30 pts):** Configuración correcta de headers y body en el fetch.
4. **Validación de 3 Capas (30 pts):** Implementación de reglas tanto en HTML, JS (cliente) y Node.js (servidor).

---

> ⚠️ **IMPORTANTE:** Sin la validación en el Servidor (Backend), la nota máxima es de 70 puntos, ya que la seguridad es el eje central de esta evaluación.
