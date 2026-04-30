# Manual de Estudio Profundo: Evaluación 3
## Materia: Programación II (Trayecto II)
### Eje Temático: Gestión de Datos y Formularios

---

## 🧭 Introducción: La Puerta de Entrada del Usuario
En la evaluación pasada aprendimos a "Leer" datos del servidor usando el método `GET`. Pero una aplicación debe ser bidireccional. Si queremos registrar un nuevo alumno en la universidad, necesitamos capturar información compleja del usuario, empaquetarla, enviarla de forma segura al Backend y asegurarnos de que la información no esté corrupta.

Esta unidad se centra en el pilar del ingreso de información: **Los Formularios Interactivos y la Validación**.

---

## 🏛️ CAPÍTULO I: Captura Reactiva de Formularios

Históricamente, los formularios HTML usaban el atributo `action="/ruta"` y recargaban toda la página al darle al botón "Submit". En el desarrollo web moderno (SPA - Single Page Applications), bloqueamos este comportamiento predeterminado. Queremos que JavaScript tome el control total del envío para evitar "pantallazos en blanco" y recargas innecesarias.

### 1.1 El Evento 'Submit' y `preventDefault()`
En lugar de escuchar el "click" de un botón, las buenas prácticas dictan que escuchemos el evento `submit` del formulario entero (esto permite enviar el formulario presionando la tecla Enter en el teclado).
El método vital aquí es `e.preventDefault()`, que le dice al navegador: *"Detente, no recargues la página, yo (JavaScript) me encargo del envío asíncrono"*.

### 1.2 FormData: Empaquetado Automático
Extraer el valor de 10 inputs uno por uno usando `document.getElementById().value` es engorroso. La API moderna `FormData` actúa como una "caja" que recoge automáticamente todos los valores de los inputs de un formulario, siempre y cuando estos tengan el atributo HTML `name=""`.

---

## 🧩 CAPÍTULO II: Validaciones (Defensa en Profundidad)

Los usuarios cometen errores. Intentarán registrar correos sin `@` o edades negativas. Si estos datos llegan a la Base de Datos, el sistema colapsará. Para evitarlo, aplicamos el principio militar de **Defensa en Profundidad** (múltiples capas de seguridad).

1. **Capa 1: Validación HTML (Frontend Pasivo):**
   Usar atributos como `required`, `type="email"`, `min="18"`. Es rápido, pero un usuario avanzado puede borrar estas reglas usando el inspector del navegador.
2. **Capa 2: Validación JavaScript (Frontend Activo):**
   Antes de hacer el `fetch`, interceptamos los datos y aplicamos Algoritmia. Verificamos longitudes, expresiones regulares (Regex) y mostramos alertas amigables al usuario en tiempo real.
3. **Capa 3: Validación Backend (La Fortaleza Inquebrantable):**
   El Frontend **nunca es confiable**. Cuando los datos llegan al servidor Node.js, DEBEN volver a validarse antes de ser procesados o guardados.

---

## 🏗️ CAPÍTULO III: Peticiones POST con Fetch

Cuando queremos enviar datos *nuevos* al servidor para que los procese o los guarde, dejamos de usar el método `GET` (que es solo lectura) y empezamos a usar el método `POST`.

Una petición POST con Fetch requiere una configuración especial:
- Indicar que el `method` es `'POST'`.
- Configurar los `Headers` para decirle al servidor qué tipo de idioma le estamos enviando (ej. "Te envío un JSON").
- Incluir el `body`, que es la carga útil (los datos convertidos a texto JSON).

---

## 💻 Laboratorio: Envío Seguro de Datos Asíncronos

```html
<!-- HTML -->
<form id="formRegistro">
    <!-- El atributo 'name' es vital para el FormData -->
    <input type="text" name="usuario" placeholder="Nombre de usuario" required>
    <input type="number" name="edad" placeholder="Edad" required>
    <button type="submit">Registrar</button>
</form>
<p id="feedback"></p>
```

```javascript
// JavaScript (Frontend)
const formulario = document.getElementById('formRegistro');
const feedback = document.getElementById('feedback');

formulario.addEventListener('submit', async (e) => {
    // 1. Bloqueamos la recarga de página obligatoria del navegador
    e.preventDefault();

    // 2. Extraemos todos los datos usando la caja mágica FormData
    const cajaDatos = new FormData(formulario);
    
    // Lo convertimos a un objeto literal genérico útil de JS
    const datosObj = Object.fromEntries(cajaDatos.entries());

    // 3. Validación de Capa 2 (JavaScript Frontend)
    if (datosObj.usuario.length < 3) {
        feedback.textContent = "Error: El nombre debe tener al menos 3 letras.";
        feedback.style.color = "red";
        return; // Abortamos la misión, no contactamos al servidor
    }

    try {
        // 4. Petición POST al servidor
        feedback.textContent = "Enviando datos al servidor...";
        
        const respuesta = await fetch('/api/registrar', {
            method: 'POST', // Queremos "crear/enviar"
            headers: {
                'Content-Type': 'application/json' // Avisamos que el paquete es JSON
            },
            body: JSON.stringify(datosObj) // Convertimos el objeto a texto puro JSON
        });

        const respuestaServidor = await respuesta.json();

        if (respuesta.ok) {
            feedback.textContent = `Éxito: ${respuestaServidor.mensaje}`;
            feedback.style.color = "#39ff14";
            formulario.reset(); // Limpiamos las cajas de texto
        } else {
            feedback.textContent = `Error del Servidor: ${respuestaServidor.error}`;
        }
    } catch (error) {
        console.error("Fallo de conexión", error);
    }
});
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Single Page Application (SPA):** Arquitectura de aplicación web que interactúa con el usuario reescribiendo dinámicamente la página web actual en lugar de cargar páginas enteras desde el servidor, ofreciendo fluidez similar a una app de escritorio.
- **e.preventDefault():** Método nativo de la interfaz Event que cancela la acción predeterminada transaccional asociada al evento por el navegador, vital para tomar control manual del flujo de datos en formularios.
- **FormData:** Interfaz web API que proporciona una forma estructural de representar pares clave/valor de campos de formulario para ser construidos y enviados dinámicamente en peticiones asíncronas.
- **Validación Backend / Defensa en Profundidad:** Filosofía de seguridad arquitectónica que asume que el entorno del cliente (Frontend) está inherentemente comprometido o es manipulable, requiriendo re-validación estricta de todo flujo de datos entrante a nivel de servidor.
- **Petición POST:** Método fundamental del protocolo HTTP empleado para enviar entidades y datos encapsulados en el cuerpo de la petición (body) al servidor especificado, usualmente resultando en un cambio de estado o efectos secundarios (ej. crear un registro).
- **Headers (Cabeceras HTTP):** Metadatos clave-valor incluidos en peticiones o respuestas HTTP que transfieren información esencial sobre la transacción (ej. formato del cuerpo, credenciales de autorización, tipo de cliente).
