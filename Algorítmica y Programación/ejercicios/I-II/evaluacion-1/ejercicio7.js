import PromptSync from 'prompt-sync';
const prompt = PromptSync();


/**
 * Calcula el sueldo neto aplicando una retención del 5%
 * @param {number} sueldoBase 
 * @returns {number}
 */
function calcularSueldoNeto(sueldoBase) {
    const retencion = sueldoBase * 0.05;
    return sueldoBase - retencion;
}

// Programa Principal
console.log("--- Procesador de Nómina ---");
const cantEmpleados = parseInt(prompt("¿Cuántos empleados desea procesar?: "));

for (let i = 1; i <= cantEmpleados; i++) {
    console.log(`\nEmpleado #${i}:`);
    const base = parseFloat(prompt("Ingrese el sueldo base: "));
    const neto = calcularSueldoNeto(base);
    console.log(`Pago correspondiente: $${neto}`);
}

console.log("\nProceso finalizado.");
