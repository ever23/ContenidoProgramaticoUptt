import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const codigos = ["A100", "B200", "C300", "D400", "E500"];
let encontrado = false;
let posicion = -1;

console.log("--- Buscador de Inventario ---");
const buscado = prompt("Ingrese el código a buscar: ").toUpperCase();

// 2. Cálculo (Búsqueda secuencial)
for (let i = 0; i < codigos.length; i++) {
    if (codigos[i] === buscado) {
        encontrado = true;
        posicion = i;
        break; // Detener búsqueda al encontrar
    }
}

// 4. Salida
if (encontrado) {
    console.log(`¡Producto encontrado! Se encuentra en el índice: ${posicion}`);
} else {
    console.log("Error: El código no existe en el sistema.");
}
