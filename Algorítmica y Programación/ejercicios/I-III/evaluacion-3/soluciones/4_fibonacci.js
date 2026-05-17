const prompt = require('prompt-sync')();

function fibonacci(n) {
    // Casos base: mes 0 es 0, mes 1 es 1
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursividad múltiple: La suma de los dos meses anteriores
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("--- SIMULADOR BIOLÓGICO DE FIBONACCI ---");
let input = prompt("Ingrese el mes a simular (ej. 5, 10, 20): ");
let mes = parseInt(input);

if (isNaN(mes) || mes < 0) {
    console.log("Por favor, ingrese un número de mes válido.");
} else {
    // Advertencia académica: Números grandes (ej > 40) bloquearán JS 
    // porque se repiten subproblemas sin 'Memoization'.
    console.log(`\nCalculando el crecimiento poblacional...`);
    let poblacion = fibonacci(mes);
    console.log(`Población en el mes ${mes}: ${poblacion} pares de conejos`);
}
