const prompt = require('prompt-sync')();

// Algoritmo de Euclides
function mcd(a, b) {
    // Caso base: si el residuo es 0, el divisor 'a' es el MCD
    if (b === 0) {
        return a;
    }
    // Caso recursivo: (divisor, dividendo % divisor)
    return mcd(b, a % b);
}

console.log("--- ALGORITMO MILENARIO (EUCLIDES) ---");
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    // Asegurarse de que pasamos el mayor primero
    let mayor = Math.max(num1, num2);
    let menor = Math.min(num1, num2);
    
    let resultado = mcd(mayor, menor);
    console.log(`\nEl Máximo Común Divisor de ${num1} y ${num2} es: ${resultado}`);
}
