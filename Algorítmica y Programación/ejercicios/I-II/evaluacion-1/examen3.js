const prompt = require('prompt-sync')();

/**
 * Calcula el sueldo neto de un empleado tras sumar horas extras y restar impuestos
 * @param {number} sueldoBase 
 * @param {number} horasExtras 
 * @returns {number} Sueldo neto final
 */
function calcularSueldoNeto(sueldoBase, horasExtras) {
    let pagoHorasExtras = horasExtras * 15;
    let sueldoBruto = sueldoBase + pagoHorasExtras;
    let deduccionImpuestos = sueldoBruto * 0.10;
    
    return sueldoBruto - deduccionImpuestos;
}

// Programa Principal
console.log("--- Procesador de Nómina ---");
let cantidadEmpleados = parseInt(prompt("¿Cuántos empleados va a procesar hoy?: "));
let totalDesembolso = 0;

for (let i = 1; i <= cantidadEmpleados; i++) {
    console.log(`\nEmpleado #${i}:`);
    let base = parseFloat(prompt("Ingrese el Sueldo Base: $"));
    let extras = parseFloat(prompt("Ingrese las Horas Extras trabajadas: "));
    
    let neto = calcularSueldoNeto(base, extras);
    
    console.log(`El salario neto a pagar es: $${neto}`);
    
    totalDesembolso += neto;
}

console.log("\n--- Resumen de Jornada ---");
console.log(`Monto total global que la empresa desembolsará: $${totalDesembolso}`);
