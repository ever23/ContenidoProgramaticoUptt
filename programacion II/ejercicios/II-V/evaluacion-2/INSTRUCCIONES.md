# Evaluación 2 — Lógica Web Asíncrona con Fetch API
## Programación II · Trayecto II · UPTT

**Ponderación:** 25% de la nota del trimestre  
**Eje Temático:** Asincronía, Promesas y Manipulación Dinámica del DOM.

---

## 🎯 Objetivo

Construir un **Sistema de Consulta de Notas en Tiempo Real**. El Frontend debe pedir datos al Backend usando `fetch()` y `async/await`, y mostrar los resultados inyectando elementos en el HTML sin recargar la página.

---

## 🏗️ Estructura del Proyecto

```
apellidos-grupo-eval2/
├── package.json
├── server.js           <-- Backend (API JSON)
└── public/             <-- Frontend
    ├── index.html
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js     <-- Lógica asíncrona (Fetch)
```

---

## 🛣️ Requerimientos del Backend (server.js)

Debes implementar una API que devuelva un arreglo de objetos en formato JSON.

1. **Ruta:** `/api/notas` (Método GET)
2. **Respuesta:** Un JSON con al menos 3 estudiantes, cada uno con:
   - `nombre`: String
   - `materia`: String
   - `nota`: Número (0-20)
   - `estado`: String ("Aprobado" o "Reprobado" basado en la nota)

---

## 💻 Requerimientos del Frontend (public/)

1. **HTML:** Un botón con ID `btnConsultar` y un contenedor `div` con ID `contenedorNotas`.
2. **JS (main.js):** 
   - Debe usar una función `async` vinculada al evento `click` del botón.
   - Debe usar `fetch('/api/notas')` para obtener los datos.
   - Debe recorrer el arreglo recibido (forEach) y crear una "Tarjeta de Nota" para cada estudiante.
   - **Lógica de Color:** Si el estudiante está "Aprobado", la tarjeta debe tener un borde verde. Si está "Reprobado", borde rojo.

---

## ✅ Criterios de Evaluación (100 pts)

1. **Arquitectura Asíncrona (40 pts):** Uso correcto de `async/await` y manejo de errores con `try/catch`.
2. **API JSON (20 pts):** El servidor entrega los datos en el formato correcto y con las cabeceras `application/json`.
3. **Manipulación del DOM (30 pts):** Uso de `document.createElement` para inyectar los datos sin usar `innerHTML` de forma insegura.
4. **Estética y UX (10 pts):** Uso de CSS para que la interfaz se vea profesional y moderna.

---

> 💡 **Tip Pro:** Recuerda configurar `app.use(express.static('public'))` en tu servidor para que el navegador pueda encontrar tus archivos de Frontend.
