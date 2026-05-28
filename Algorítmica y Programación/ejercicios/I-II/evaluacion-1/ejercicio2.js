const prompt = require('prompt-sync')();


/**
 * Calcula el promedio aritmético
 * @param {number} sumaTotal 
 * @param {number} cantidad 
 * @returns {number}
 */
function calcularPromedio(sumaTotal, cantidad) {
    if (cantidad === 0) return 0;
    return sumaTotal / cantidad;
}

/**
 * Determina si el estudiante aprobó o reprobó
 * @param {number} promedio 
 * @returns {string}
 */
function determinarEstado(promedio) {
    return promedio >= 70 ? "Aprobado" : "Reprobado";
}

// Programa Principal
console.log("--- Acumulador de Rendimiento Académico ---");
const cantidadNotas = parseInt(prompt("¿Cuántas notas desea ingresar?: "));

let acumuladorSuma = 0;

for (let i = 1; i <= cantidadNotas; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
    acumuladorSuma += nota;
}

const promedioFinal = calcularPromedio(acumuladorSuma, cantidadNotas);
const estado = determinarEstado(promedioFinal);

console.log("\n--- Resultado Final ---");
console.log(`Promedio Total: ${promedioFinal.toFixed(2)}`);
console.log(`Estado del Estudiante: ${estado}`);
