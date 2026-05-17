const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function agregarFinal(dato) {
    let nuevoNodo = crearNodo(dato);
    if (!head) {
        head = nuevoNodo;
        return;
    }
    let actual = head;
    while (actual.siguiente) {
        actual = actual.siguiente;
    }
    actual.siguiente = nuevoNodo;
}

function invertirLista() {
    let previo = null;
    let actual = head;
    let siguiente = null;
    
    while (actual !== null) {
        siguiente = actual.siguiente; // Guardamos el resto de la lista
        actual.siguiente = previo;    // Invertimos el puntero actual
        previo = actual;              // Avanzamos el 'previo'
        actual = siguiente;           // Avanzamos el 'actual'
    }
    head = previo; // La nueva cabecera es el que era el último nodo
}

function mostrarLista() {
    let actual = head;
    let str = "";
    while (actual) {
        str += `[${actual.dato}] -> `;
        actual = actual.siguiente;
    }
    console.log(`Lista: ${str}null`);
}

// Inicializar lista con datos para probar
agregarFinal("A"); agregarFinal("B"); agregarFinal("C"); agregarFinal("D");

console.log("--- ANTES DE INVERTIR ---");
mostrarLista();

console.log("\nEjecutando algoritmo de inversión in-place...\n");
invertirLista();

console.log("--- DESPUÉS DE INVERTIR ---");
mostrarLista();
