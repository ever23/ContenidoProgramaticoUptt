# Manual de Estudio Profundo: Evaluación 4
## Materia: Programación II (Trayecto II)
### Eje Temático: Programación de Script - Interactividad (DOM y Eventos)

---

## 🧭 Introducción: Dando Vida a la Estructura
Hasta ahora tenemos HTML (el esqueleto) y CSS (la piel y el estilo). Pero nuestra página está "muerta", es estática como una revista impresa. Si haces clic en un botón de "Comprar", no ocurre absolutamente nada porque la página no tiene un "cerebro" que procese la acción.

Aquí es donde nuestro conocimiento de Algorítmica converge con la web. **JavaScript** se inyecta en el navegador para dotar a la página de lógica, memoria y capacidad de reacción en tiempo real. 

---

## 🏛️ CAPÍTULO I: El Árbol DOM (Document Object Model)

¿Recuerdas la estructura de "Árboles" que vimos en Algorítmica III? El navegador utiliza exactamente ese concepto para entender el HTML.

Cuando Chrome o Firefox leen tu archivo `index.html`, no lo ven como texto plano. Lo parsean y construyen en la memoria RAM un **Árbol de Objetos** gigante llamado **DOM**.
- El nodo "Raíz" es el objeto global `document`.
- Sus hijos son `<html>`, el cual tiene dos hijos: `<head>` y `<body>`.
- Cada etiqueta, párrafo y botón se convierte en un Objeto individual dentro de ese árbol.

JavaScript no lee el archivo HTML físico; **JavaScript manipula el DOM en memoria**. Si JavaScript cambia el color de un nodo en el árbol DOM, el navegador re-dibuja la pantalla instantáneamente para reflejar ese cambio.

---

## 🧩 CAPÍTULO II: Selección y Manipulación

Para modificar un elemento, la Fase 1 es "Seleccionarlo" (Buscar el nodo en el árbol).

### 2.1 Métodos Modernos de Selección
JavaScript provee métodos poderosos dentro del objeto global `document`:
- `document.getElementById('miLogo')`: Busca un nodo específico por su ID. Rápido y único.
- `document.querySelector('.btn-rojo')`: El método más versátil. Usa la misma sintaxis de selectores de CSS para encontrar el *primer* elemento que coincida.
- `document.querySelectorAll('p')`: Devuelve una lista (NodeList) con *todos* los párrafos de la página.

### 2.2 Manipulación de Nodos
Una vez que atrapas el nodo en una variable, puedes modificar sus propiedades como cualquier otro objeto de POO:
```javascript
// Seleccionamos un título
const titulo = document.querySelector('#tituloPrincipal');

// Cambiamos su contenido textual
titulo.textContent = "Bienvenido al Sistema";

// Cambiamos sus estilos CSS directamente (JavaScript en línea)
titulo.style.color = "#00f2ff";
titulo.style.fontSize = "32px";

// Agregamos o quitamos clases CSS (Muy útil para animaciones)
titulo.classList.add("animacion-brillo");
```

---

## 🏗️ CAPÍTULO III: Manejo de Eventos (Event Listeners)

El código JavaScript no se ejecuta solo de arriba hacia abajo y termina. Se queda esperando pacientemente (como un guardia) a que ocurran **Eventos** en la interfaz.
Un evento puede ser un clic, pulsar la tecla Enter, mover el mouse, o que la página termine de cargar.

### 3.1 El Escuchador de Eventos (addEventListener)
El método estándar para atrapar acciones es `addEventListener()`. Recibe dos parámetros críticos:
1. El tipo de evento (ej: `"click"`, `"keyup"`, `"mouseenter"`).
2. Una **Función Callback**: La función que se va a disparar en el futuro *solo cuando* el evento ocurra.

```javascript
// 1. Seleccionamos el botón
const botonComprar = document.querySelector('#btnComprar');

// 2. Le asignamos el guardia (Escuchador)
botonComprar.addEventListener("click", function() {
    // Este código está congelado. Solo se ejecuta al hacer clic.
    alert("¡Producto añadido al carrito!");
    botonComprar.style.backgroundColor = "green";
    botonComprar.textContent = "Añadido";
});
```

### 3.2 El Objeto Event (e)
Cuando ocurre un evento, el navegador a menudo te envía un "reporte" detallado de lo que pasó, a través de un objeto invisible que solemos atrapar con la variable `e` o `event`.
Esto es vital para formularios: si alguien teclea en un input, puedes atrapar qué tecla exacta presionó usando `e.key`.

---

## 💻 Laboratorio: Validando un Formulario Dinámico

Uniremos todo. Atraparemos el evento de un botón para leer lo que el usuario escribió, lo validaremos algorítmicamente y modificaremos el DOM para mostrar un mensaje.

```html
<!-- HTML -->
<input type="text" id="campoEdad" placeholder="Ingresa tu edad">
<button id="btnVerificar">Verificar Acceso</button>
<p id="mensajeSalida"></p>
```

```javascript
// JavaScript
const inputEdad = document.querySelector('#campoEdad');
const boton = document.querySelector('#btnVerificar');
const mensaje = document.querySelector('#mensajeSalida');

boton.addEventListener('click', () => {
    // 1. Fase de Entrada (Atrapamos el valor del input)
    // Nota: todo lo que viene de un input es texto (String), lo parseamos a número
    const edad = parseInt(inputEdad.value);

    // 2. Fase de Cálculo (Validación Algorítmica)
    if (isNaN(edad)) {
        mensaje.textContent = "❌ Error: Debes ingresar un número válido.";
        mensaje.style.color = "red";
    } else if (edad >= 18) {
        mensaje.textContent = "✅ Acceso concedido. Redirigiendo...";
        mensaje.style.color = "#39ff14"; // Verde neón
    } else {
        mensaje.textContent = "🛑 Acceso denegado. Eres menor de edad.";
        mensaje.style.color = "orange";
    }
});
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **DOM (Document Object Model):** API de programación que representa y mapea la estructura de un documento HTML/XML como un árbol lógico de objetos nodales jerárquicos en memoria RAM.
- **Nodo (Node):** Unidad estructural atómica del DOM. Cada etiqueta, atributo y segmento de texto puro constituye un nodo independiente dentro del árbol.
- **Evento (Event):** Señal asíncrona emitida por el sistema cliente o la interfaz gráfica indicando que ha ocurrido una mutación de estado o una interacción específica (ej. clic, teclado, temporizador).
- **Event Listener (Escuchador de Eventos):** Interfaz procedimental que asigna una rutina de respuesta a un evento disparado por el usuario o el sistema sobre un nodo específico.
- **Callback (Función de Retorno):** Subrutina o función que se pasa como argumento a otra función, con la expectativa explícita de que sea invocada de vuelta en un momento posterior (generalmente como respuesta a un evento).
- **Selector DOM:** Método procedimental utilizado para consultar el árbol DOM e iterar sobre los nodos para localizar y retornar una referencia en memoria de los elementos deseados.
