const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function insertarFinal(paciente) {
    let nuevoNodo = crearNodo(paciente);
    if (head === null) {
        head = nuevoNodo;
    } else {
        let actual = head;
        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }
}

function buscarPaciente(nombre) {
    let actual = head;
    while (actual !== null) {
        if (actual.dato.toLowerCase() === nombre.toLowerCase()) {
            return true;
        }
        actual = actual.siguiente;
    }
    return false;
}

function imprimirFila() {
    let actual = head;
    let visual = "";
    while (actual !== null) {
        visual += `[ ${actual.dato} ] -> `;
        actual = actual.siguiente;
    }
    visual += "null";
    console.log(`\nFila actual: ${visual}\n`);
}

let salir = false;
while (!salir) {
    console.log("============= SISTEMA DEL HOSPITAL =============");
    console.log("1. Registrar nuevo paciente al final de la fila");
    console.log("2. Buscar paciente por nombre");
    console.log("3. Mostrar fila completa de pacientes");
    console.log("4. Salir");
    console.log("================================================");
    
    let opcion = prompt("Seleccione una opción: ");
    
    if (opcion === '1') {
        let nombre = prompt("Nombre del paciente: ");
        insertarFinal(nombre);
        console.log("Paciente registrado.\n");
    } else if (opcion === '2') {
        let nombre = prompt("¿Qué paciente desea buscar?: ");
        if (buscarPaciente(nombre)) {
            console.log(`✅ El paciente ${nombre} SÍ está en la fila\n`);
        } else {
            console.log(`❌ El paciente ${nombre} NO está en la fila\n`);
        }
    } else if (opcion === '3') {
        imprimirFila();
    } else if (opcion === '4') {
        salir = true;
        console.log("Cerrando sistema...");
    } else {
        console.log("Opción inválida.\n");
    }
}
