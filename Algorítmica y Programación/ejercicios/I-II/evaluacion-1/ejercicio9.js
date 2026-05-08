import PromptSync from 'prompt-sync';
const prompt = PromptSync();

/**
 * Ejercicio 9: Conversor de Medidas de Longitud
 * Diseñe un programa que permita convertir una cantidad en metros a otras unidades mediante un menú de selección.
 */

// --- Funciones de Conversión ---

function metrosAKilometros(metros) {
    return metros / 1000;
}

function metrosACentimetros(metros) {
    return metros * 100;
}

function metrosAMilimetros(metros) {
    return metros * 1000;
}

// --- Programa Principal ---

console.log("--- Conversor de Medidas (Metros) ---");

const metros = parseFloat(prompt("Ingrese la cantidad en metros: "));

if (isNaN(metros)) {
    console.log("Error: Debe ingresar un número válido.");
} else {
    console.log("\nOpciones de conversión:");
    console.log("1. Kilómetros");
    console.log("2. Centímetros");
    console.log("3. Milímetros");

    const opcion = prompt("Seleccione una opción (1-3): ");

    let resultado;
    let unidad;

    switch (opcion) {
        case '1':
            resultado = metrosAKilometros(metros);
            unidad = "km";
            break;
        case '2':
            resultado = metrosACentimetros(metros);
            unidad = "cm";
            break;
        case '3':
            resultado = metrosAMilimetros(metros);
            unidad = "mm";
            break;
        default:
            console.log("\nOpción no válida.");
            break;
    }

    if (resultado !== undefined) {
        console.log(`\nResultado: ${metros} m equivale a ${resultado} ${unidad}`);
    }
}
