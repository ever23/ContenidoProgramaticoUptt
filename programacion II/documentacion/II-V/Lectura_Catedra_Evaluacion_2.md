# Manual de Estudio Profundo: Evaluación 2
## Materia: Programación II (Trayecto II)
### Eje Temático: Programación de Script - Lógica Web Asíncrona

---

## 🧭 Introducción: La Web en Tiempo Real
A principios de los años 2000, si querías ver un comentario nuevo en un foro o darle "Me gusta" a una foto, tenías que recargar la página completa. Esto era lento y consumía muchos datos.

Hoy en día, aplicaciones como Instagram o WhatsApp Web actualizan su interfaz sin recargar la página. ¿Cómo lo logran? Utilizando **Asincronía** y peticiones HTTP en segundo plano. El Frontend se comunica con el Backend "por debajo de la mesa" mientras el usuario sigue usando la aplicación.

---

## 🏛️ CAPÍTULO I: El Ecosistema Asíncrono

### 1.1 Sincronía vs Asincronía
- **Síncrono (Secuencial):** El código se ejecuta línea por línea. Si la línea 5 tarda 10 segundos en terminar, la línea 6 tiene que esperar, "congelando" todo el programa.
- **Asíncrono:** El código inicia una tarea larga (como pedir datos a un servidor en China) pero no se queda esperando. Envía la tarea a un segundo plano y continúa ejecutando el resto del código. Cuando la tarea larga termina, avisa mediante un evento o promesa.

### 1.2 Las Promesas (Promises)
Una Promesa en JavaScript es un objeto que representa el resultado de una operación asíncrona que *aún no ha finalizado*, pero que lo hará en el futuro.
Tiene tres estados:
1. **Pending (Pendiente):** La petición se envió, estamos esperando.
2. **Fulfilled (Resuelta):** El servidor respondió con éxito. ¡Tenemos los datos!
3. **Rejected (Rechazada):** Hubo un error (se cayó el internet, el servidor no existe).

---

## 🧩 CAPÍTULO II: Fetch API y JSON

Para realizar estas peticiones asíncronas desde el navegador (Frontend) hacia nuestro servidor Node.js (Backend), utilizamos una herramienta nativa moderna llamada **Fetch API**.

### 2.1 ¿Qué es JSON?
Cuando el Frontend y el Backend se comunican, no se envían objetos complejos de JavaScript directamente, porque podrían estar escritos en lenguajes distintos. Se envían texto puro.

**JSON (JavaScript Object Notation)** es el formato estándar de intercambio de datos en la web. Es básicamente un objeto JS convertido en una cadena de texto (String) gigante y formateada.
- De JS a Texto: `JSON.stringify()`
- De Texto a JS: `JSON.parse()`

### 2.2 Sintaxis Moderna: async / await
Aunque las Promesas se pueden manejar con la sintaxis clásica `.then()`, la ingeniería moderna prefiere `async/await` por su legibilidad, ya que permite escribir código asíncrono como si fuera síncrono.

---

## 🏗️ CAPÍTULO III: El Ciclo de Vida de una Petición

1. **El Disparador:** El usuario hace clic en "Cargar Usuarios".
2. **Fetch:** El Frontend lanza un `fetch('http://mi-servidor/usuarios')`.
3. **Espera:** JavaScript pausa esa función específica (gracias a `await`) sin congelar la pantalla.
4. **Respuesta:** El Backend envía un texto en formato JSON.
5. **Parseo:** El Frontend recibe el texto, lo convierte de vuelta a Objeto/Arreglo JS usando `.json()`.
6. **Renderizado (DOM):** El Frontend recorre ese arreglo y crea etiquetas HTML al vuelo (`document.createElement`) para mostrar los datos al usuario sin recargar la página.

---

## 💻 Laboratorio: Consumiendo nuestro Backend

Vamos a programar el Frontend (el script en el HTML) para que pida información de forma asíncrona a un servidor.

```javascript
// Agregamos la palabra 'async' a la función para permitirle usar 'await'
async function cargarDatosDelServidor() {
    try {
        // 1. Iniciamos la petición. 'await' detiene la ejecución de ESTA función 
        // hasta que el servidor responda, mientras el resto de la página sigue fluida.
        console.log("Pidiendo datos al servidor...");
        const respuesta = await fetch('/api/usuarios');

        // 2. Verificamos si el servidor dio error (ej. Error 404 No Encontrado)
        if (!respuesta.ok) {
            throw new Error(`Error en la red: ${respuesta.status}`);
        }

        // 3. Extraemos el texto JSON y lo convertimos a un objeto JavaScript utilizable
        const datosUsuarios = await respuesta.json();
        
        // 4. Manipulación del DOM (Actualizamos la interfaz)
        const lista = document.getElementById('listaUsuarios');
        lista.innerHTML = ""; // Limpiamos la lista

        datosUsuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.textContent = `${usuario.nombre} - ${usuario.correo}`;
            lista.appendChild(item); // Lo inyectamos en el HTML
        });

    } catch (error) {
        // Si el internet cae o la promesa es "Rechazada", el catch atrapa el error
        console.error("Fallo la petición:", error);
    }
}

// Vinculamos la función asíncrona a un botón en el HTML
document.getElementById('btnCargar').addEventListener('click', cargarDatosDelServidor);
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Asincronía (Asynchrony):** Paradigma de ejecución no bloqueante donde el flujo de control del programa no espera a la culminación de operaciones I/O (Input/Output), permitiendo la continuidad operacional del hilo principal.
- **Promesa (Promise):** Objeto proxy proxy en JavaScript que representa el estado eventual de finalización o fallo de una operación asíncrona, encapsulando el valor de retorno asíncrono.
- **Fetch API:** Interfaz estándar moderna del navegador que provee métodos globalmente accesibles para la obtención de recursos a través de la red de manera asíncrona.
- **JSON (JavaScript Object Notation):** Formato ligero e independiente del lenguaje para el intercambio de datos, caracterizado por su sintaxis basada en pares clave-valor fácilmente parseable por máquinas y humanos.
- **async / await:** Azúcar sintáctico (Syntactic sugar) construido sobre la arquitectura de Promesas, diseñado para estructurar flujos asíncronos imitando el comportamiento de ejecución secuencial imperativa.
- **CORS (Cross-Origin Resource Sharing):** Mecanismo de seguridad de los navegadores que utiliza cabeceras HTTP adicionales para permitir que un agente de usuario obtenga permisos para acceder a recursos seleccionados desde un servidor en un origen distinto (dominio) al que pertenece actualmente.
