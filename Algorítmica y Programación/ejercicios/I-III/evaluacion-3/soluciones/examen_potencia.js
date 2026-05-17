const prompt = require('prompt-sync')();

function calcularPotencia(base, exponente) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    
    // Caso recursivo: multiplicamos la base por la potencia de (exponente - 1)
    return base * calcularPotencia(base, exponente - 1);
}

console.log("=========================================");
console.log("  MOTOR DE CÁLCULO MATEMÁTICO UNIVERSITARIO");
console.log("=========================================\n");

let baseStr = prompt("Ingrese el número Base: ");
let expStr = prompt("Ingrese el Exponente (positivo): ");

let base = parseInt(baseStr);
let exponente = parseInt(expStr);

if (isNaN(base) || isNaN(exponente) || exponente < 0) {
    console.log("Error: Ingrese números válidos. El exponente no puede ser negativo.");
} else {
    let resultado = calcularPotencia(base, exponente);
    console.log(`\nEl resultado de ${base} elevado a la ${exponente} es: ${resultado}`);
}
