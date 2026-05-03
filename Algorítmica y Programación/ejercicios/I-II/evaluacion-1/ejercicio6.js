const prompt = require('prompt-sync')();

/**
 * Calcula el precio neto aplicando un porcentaje de descuento
 * @param {number} precioBruto 
 * @param {number} porcentajeDescuento 
 * @returns {number}
 */
function calcularPrecioNeto(precioBruto, porcentajeDescuento) {
    const descuento = precioBruto * (porcentajeDescuento / 100);
    return precioBruto - descuento;
}

// Programa Principal
console.log("--- Comparativa de Ofertas ---");

console.log("\nDatos del Producto A:");
const precioA = parseFloat(prompt("Precio bruto: "));
const descA = parseFloat(prompt("% Descuento: "));
const netoA = calcularPrecioNeto(precioA, descA);

console.log("\nDatos del Producto B:");
const precioB = parseFloat(prompt("Precio bruto: "));
const descB = parseFloat(prompt("% Descuento: "));
const netoB = calcularPrecioNeto(precioB, descB);

console.log("\n--- Resultados ---");
console.log(`Producto A: $${netoA}`);
console.log(`Producto B: $${netoB}`);

if (netoA < netoB) {
    console.log("Veredicto: La oferta del Producto A es más conveniente.");
} else if (netoB < netoA) {
    console.log("Veredicto: La oferta del Producto B es más conveniente.");
} else {
    console.log("Veredicto: Ambas ofertas tienen el mismo costo final.");
}
