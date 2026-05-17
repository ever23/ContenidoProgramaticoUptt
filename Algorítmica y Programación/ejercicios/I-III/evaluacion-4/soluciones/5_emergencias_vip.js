const prompt = require('prompt-sync')();

function crearNodo(nombre, esEmergencia) {
    return { nombre: nombre, esEmergencia: esEmergencia, siguiente: null };
}

let frente = null;

function encolar(nombre, esEmergencia) {
    let nuevoNodo = crearNodo(nombre, esEmergencia);
    
    // Si la cola está vacía o es una emergencia y el frente NO es emergencia
    if (!frente || (esEmergencia && !frente.esEmergencia)) {
        nuevoNodo.siguiente = frente;
        frente = nuevoNodo;
        return;
    }
    
    // Buscar la posición correcta
    let actual = frente;
    while (actual.siguiente !== null) {
        // Si es emergencia, debe saltarse a los de rutina
        if (esEmergencia && !actual.siguiente.esEmergencia) {
            break;
        }
        actual = actual.siguiente;
    }
    
    nuevoNodo.siguiente = actual.siguiente;
    actual.siguiente = nuevoNodo;
}

function desencolar() {
    if (!frente) return null;
    let dato = frente;
    frente = frente.siguiente;
    return dato;
}

let salir = false;
while (!salir) {
    console.log("\n--- HOSPITAL - SALA DE TRIAGE ---");
    console.log("1. Ingresar paciente de Rutina");
    console.log("2. Ingresar paciente en EMERGENCIA");
    console.log("3. Atender siguiente paciente");
    console.log("4. Salir");
    
    let opcion = prompt("Opción: ");
    
    if (opcion === '1') {
        let nombre = prompt("Nombre paciente rutina: ");
        encolar(nombre, false);
    } else if (opcion === '2') {
        let nombre = prompt("Nombre paciente EMERGENCIA: ");
        encolar(nombre, true);
        console.log("¡Prioridad alta asignada!");
    } else if (opcion === '3') {
        let atendido = desencolar();
        if (atendido) {
            console.log(`🩺 Atendiendo a: ${atendido.nombre} [${atendido.esEmergencia ? "URGENTE" : "RUTINA"}]`);
        } else {
            console.log("No hay pacientes.");
        }
    } else if (opcion === '4') {
        salir = true;
    }
}
