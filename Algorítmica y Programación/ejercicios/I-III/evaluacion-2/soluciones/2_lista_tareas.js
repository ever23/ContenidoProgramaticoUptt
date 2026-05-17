const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function agregarTareaFinal(tarea) {
    let nuevoNodo = crearNodo(tarea);
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

function mostrarPlanificacion() {
    let actual = head;
    let flujo = "";
    while (actual !== null) {
        flujo += `[${actual.dato}] -> `;
        actual = actual.siguiente;
    }
    flujo += "Fin";
    console.log(`\nFlujo de Tareas: ${flujo}\n`);
}

let salir = false;
while (!salir) {
    console.log("1. Agregar tarea");
    console.log("2. Mostrar planificación");
    console.log("3. Salir");
    let opcion = prompt("Elige una opción: ");
    
    if (opcion === '1') {
        let tarea = prompt("Escribe la tarea: ");
        agregarTareaFinal(tarea);
    } else if (opcion === '2') {
        mostrarPlanificacion();
    } else if (opcion === '3') {
        salir = true;
    }
}
