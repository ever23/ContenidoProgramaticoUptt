const prompt = require('prompt-sync')();

function crearNodo(proceso, tiempoRestante) {
    return { proceso: proceso, tiempoRestante: tiempoRestante, siguiente: null };
}

let frente = null;
let final = null;

function encolar(proceso, tiempo) {
    let nuevoNodo = crearNodo(proceso, tiempo);
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
    let nodo = frente;
    frente = frente.siguiente;
    if (frente === null) final = null;
    nodo.siguiente = null;
    return nodo;
}

// Cargar procesos iniciales
encolar("Word", 5);
encolar("Chrome", 3);
encolar("Spotify", 6);

console.log("--- PLANIFICADOR DE CPU (Round Robin) ---");
console.log("Quantum de tiempo: 2 segundos por proceso");

while (frente !== null) {
    let actual = desencolar();
    console.log(`\nProcesando: ${actual.proceso} (Tiempo requerido: ${actual.tiempoRestante}s)`);
    
    actual.tiempoRestante -= 2;
    
    if (actual.tiempoRestante > 0) {
        console.log(`   -> Ejecutado 2s. Falta ${actual.tiempoRestante}s. Volviendo a la cola...`);
        encolar(actual.proceso, actual.tiempoRestante);
    } else {
        console.log(`   ✅ Proceso ${actual.proceso} finalizado y eliminado de RAM.`);
    }
    
    prompt("Presione Enter para el siguiente ciclo CPU...");
}

console.log("Todos los procesos han terminado.");
