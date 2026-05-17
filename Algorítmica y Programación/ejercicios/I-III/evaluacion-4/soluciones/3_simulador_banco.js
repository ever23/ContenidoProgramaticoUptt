const prompt = require('prompt-sync')();

function crearNodo(nombre) {
    return { nombre: nombre, siguiente: null };
}

let frente = null;
let final = null;

function encolar(nombre) {
    let nuevoNodo = crearNodo(nombre);
    if (final === null) {
        frente = nuevoNodo;
        final = nuevoNodo;
    } else {
        final.siguiente = nuevoNodo;
        final = nuevoNodo;
    }
}

function desencolar() {
    if (frente === null) return null;
    let dato = frente.nombre;
    frente = frente.siguiente;
    if (frente === null) {
        final = null;
    }
    return dato;
}

let salir = false;
while (!salir) {
    console.log("\n--- CAJERO DEL BANCO ---");
    console.log("1. Llegada de cliente");
    console.log("2. Atender cliente");
    console.log("3. Salir");
    
    let opcion = prompt("Opción: ");
    
    if (opcion === '1') {
        let nombre = prompt("Nombre del cliente: ");
        encolar(nombre);
        console.log(`Cliente ${nombre} ingresó a la fila.`);
    } else if (opcion === '2') {
        let atendido = desencolar();
        if (atendido) {
            console.log(`🎟️ Atendiendo a: ${atendido}`);
        } else {
            console.log("La cola está vacía.");
        }
    } else if (opcion === '3') {
        salir = true;
    }
}
