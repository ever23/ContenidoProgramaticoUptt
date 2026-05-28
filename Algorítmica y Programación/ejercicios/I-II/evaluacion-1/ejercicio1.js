const prompt = require('prompt-sync')();


/**
 * Función que calcula el costo final aplicando descuentos por edad
 * @param {number} precioBase 
 * @param {number} edad 
 * @returns {number}
 */
function calcularCostoFinal(precioBase, edad) {
    let descuento = 0;

    if (edad < 18) {
        descuento = 0.10; // 10%
    } else if (edad >= 65) {
        descuento = 0.20; // 20%
    }

    return precioBase - (precioBase * descuento);
}

// Programa Principal
console.log("--- Sistema de Tarifas Dinámicas ---");
const precio = parseFloat(prompt("Ingrese el precio base de la entrada: "));
const edad = parseInt(prompt("Ingrese su edad: "));

const precioFinal = calcularCostoFinal(precio, edad);
const ahorro = precio - precioFinal;

console.log("\n--- Desglose del Pago ---");
console.log(`Precio Original: $${precio}`);
console.log(`Descuento aplicado: $${ahorro}`);
console.log(`Monto final a pagar: $${precioFinal}`);
