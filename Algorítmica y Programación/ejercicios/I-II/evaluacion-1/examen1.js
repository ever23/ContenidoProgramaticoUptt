const prompt = require('prompt-sync')();

/**
 * Calcula la tarifa a cobrar por vehículo
 * @param {number} tipoVehiculo 1=Moto, 2=Auto, 3=Camión
 * @param {number} esHoraPico 1=Sí, 2=No
 * @returns {number} Tarifa a cobrar (0 si el tipo es inválido)
 */
function calcularTarifa(tipoVehiculo, esHoraPico) {
    let tarifaBase = 0;
    
    if (tipoVehiculo === 1) {
        tarifaBase = 5;
    } else if (tipoVehiculo === 2) {
        tarifaBase = 10;
    } else if (tipoVehiculo === 3) {
        tarifaBase = 20;
    } else {
        return 0; // Tipo inválido
    }
    
    let recargo = 0;
    if (esHoraPico === 1) {
        recargo = tarifaBase * 0.5;
    }
    
    return tarifaBase + recargo;
}

// Programa Principal
console.log("--- Sistema de Peaje Automatizado ---");
let continuar = 1;
let totalRecaudado = 0;

while (continuar === 1) {
    console.log("\nRegistro de nuevo vehículo:");
    console.log("Tipos: 1=Moto, 2=Auto, 3=Camión");
    let tipo = parseInt(prompt("Ingrese el tipo de vehículo: "));
    
    let horaPico = parseInt(prompt("¿Es hora pico? (1=Sí, 2=No): "));
    
    let costoFinal = calcularTarifa(tipo, horaPico);
    
    if (costoFinal > 0) {
        console.log(`El costo a cobrar es: $${costoFinal}`);
        totalRecaudado += costoFinal;
    } else {
        console.log("Error: Tipo de vehículo inválido.");
    }
    
    continuar = parseInt(prompt("\n¿Desea registrar otro vehículo? (1=Sí, 2=Cerrar Turno): "));
}

console.log("\n--- Cierre de Turno ---");
console.log(`El monto total recaudado en el día es: $${totalRecaudado}`);
