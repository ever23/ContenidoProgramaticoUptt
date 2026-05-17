const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function eliminarDuplicadosConsecutivos() {
    let actual = head;
    while (actual !== null && actual.siguiente !== null) {
        if (actual.dato === actual.siguiente.dato) {
            // El dato actual es igual al siguiente, lo "saltamos"
            actual.siguiente = actual.siguiente.siguiente;
        } else {
            // Solo avanzamos si no hubo duplicado
            actual = actual.siguiente;
        }
    }
}

function mostrarLista() {
    let actual = head;
    let str = "";
    while (actual) {
        str += `[${actual.dato}] -> `;
        actual = actual.siguiente;
    }
    console.log(`Directorio: ${str}null`);
}

// Inicializar lista con datos duplicados
head = crearNodo("Ana");
head.siguiente = crearNodo("Ana"); // duplicado
head.siguiente.siguiente = crearNodo("Carlos");
head.siguiente.siguiente.siguiente = crearNodo("Daniel");
head.siguiente.siguiente.siguiente.siguiente = crearNodo("Daniel"); // duplicado

console.log("--- ANTES DE LA DEPURACIÓN ---");
mostrarLista();

console.log("\nEjecutando depuración de duplicados...\n");
eliminarDuplicadosConsecutivos();

console.log("--- DESPUÉS DE LA DEPURACIÓN ---");
mostrarLista();
