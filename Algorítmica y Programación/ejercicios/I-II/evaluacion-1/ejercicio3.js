const prompt = require('prompt-sync')();

/**
 * Recorre números e imprime pares, retornando el total encontrado
 * @param {number} limite 
 * @returns {number}
 */
function contarYMostrarPares(limite) {
    let contadorPares = 0;
    
    console.log(`\nNúmeros pares entre 1 y ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contadorPares++;
        }
    }
    
    return contadorPares;
}

// Programa Principal
console.log("--- Análisis de Rangos y Divisibilidad ---");
const numIngresado = parseInt(prompt("Ingrese un número entero positivo: "));

if (numIngresado > 0) {
    const totalPares = contarYMostrarPares(numIngresado);
    console.log(`\nReporte Final: Se encontraron ${totalPares} números pares.`);
} else {
    console.log("Por favor, ingrese un número válido mayor a cero.");
}
