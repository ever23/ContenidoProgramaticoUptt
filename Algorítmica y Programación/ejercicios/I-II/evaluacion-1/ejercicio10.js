import PromptSync from 'prompt-sync';
const prompt = PromptSync();

/**
 * Ejercicio 10: Sistema de Control de Inventario Simple
 * Desarrolle un programa que gestione el stock de un único producto mediante un menú interactivo.
 */

// --- Funciones de Gestión ---

/**
 * Procesa la actualización del stock
 * @param {number} actual - Stock actual
 * @param {number} cantidad - Cantidad a sumar o restar
 * @returns {number} Nuevo stock
 */
function actualizarStock(actual, cantidad) {
    const nuevoStock = actual + cantidad;
    if (nuevoStock < 0) {
        console.log("\n[!] Error: No hay suficiente stock para realizar esta salida.");
        return actual;
    }
    return nuevoStock;
}

// --- Programa Principal ---

console.log("--- Sistema de Inventario Simple ---");

let stock = parseInt(prompt("Ingrese el stock inicial del producto: "));
if (isNaN(stock) || stock < 0) stock = 0;

let continuar = true;

while (continuar) {
    console.log(`\nStock Actual: ${stock}`);
    console.log("1. Ver Stock");
    console.log("2. Agregar Mercancía (Entrada)");
    console.log("3. Retirar Mercancía (Salida)");
    console.log("4. Salir");

    const opcion = prompt("Seleccione una opción (1-4): ");

    switch (opcion) {
        case '1':
            console.log(`\nEl stock disponible es de ${stock} unidades.`);
            break;
        case '2':
            const entrada = parseInt(prompt("Cantidad a ingresar: "));
            if (!isNaN(entrada) && entrada > 0) {
                stock = actualizarStock(stock, entrada);
                console.log("Entrada procesada exitosamente.");
            } else {
                console.log("Cantidad inválida.");
            }
            break;
        case '3':
            const salida = parseInt(prompt("Cantidad a retirar: "));
            if (!isNaN(salida) && salida > 0) {
                stock = actualizarStock(stock, -salida);
            } else {
                console.log("Cantidad inválida.");
            }
            break;
        case '4':
            console.log("\nSaliendo del sistema...");
            continuar = false;
            break;
        default:
            console.log("\nOpción no válida.");
            break;
    }
}
