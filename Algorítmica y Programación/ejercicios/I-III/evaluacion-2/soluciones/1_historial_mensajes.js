const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function agregarMensaje(mensaje) {
    let nuevoNodo = crearNodo(mensaje);
    nuevoNodo.siguiente = head;
    head = nuevoNodo;
}

function listarMensajes() {
    let actual = head;
    console.log("\n--- HISTORIAL DE MENSAJES ---");
    if (!actual) console.log("No hay mensajes.");
    while (actual !== null) {
        console.log(`> ${actual.dato}`);
        actual = actual.siguiente;
    }
    console.log("-----------------------------\n");
}

let salir = false;
while (!salir) {
    console.log("1. Nuevo mensaje");
    console.log("2. Ver historial");
    console.log("3. Salir");
    let opcion = prompt("Elige una opción: ");
    
    if (opcion === '1') {
        let msg = prompt("Escribe tu mensaje: ");
        agregarMensaje(msg);
        console.log("Mensaje guardado en el tope.\n");
    } else if (opcion === '2') {
        listarMensajes();
    } else if (opcion === '3') {
        salir = true;
    } else {
        console.log("Opción inválida.\n");
    }
}
