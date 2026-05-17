const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function registrarContacto(nombre) {
    let nuevoNodo = crearNodo(nombre);
    if (!head) {
        head = nuevoNodo;
    } else {
        let actual = head;
        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }
}

function buscarContacto(nombre) {
    let actual = head;
    while (actual !== null) {
        if (actual.dato.toLowerCase() === nombre.toLowerCase()) {
            return true;
        }
        actual = actual.siguiente;
    }
    return false;
}

let salir = false;
while (!salir) {
    console.log("1. Registrar contacto");
    console.log("2. Buscar contacto");
    console.log("3. Salir");
    let opcion = prompt("Elige una opción: ");
    
    if (opcion === '1') {
        let nombre = prompt("Nombre del contacto: ");
        registrarContacto(nombre);
    } else if (opcion === '2') {
        let nombre = prompt("Nombre a buscar: ");
        if (buscarContacto(nombre)) {
            console.log(`✅ El contacto ${nombre} SÍ está en el directorio.\n`);
        } else {
            console.log(`❌ El contacto ${nombre} NO está en el directorio.\n`);
        }
    } else if (opcion === '3') {
        salir = true;
    }
}
