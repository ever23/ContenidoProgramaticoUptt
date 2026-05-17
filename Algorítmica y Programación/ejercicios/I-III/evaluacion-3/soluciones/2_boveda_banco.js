const prompt = require('prompt-sync')();

function calcularSumatoria(n) {
    // Caso base: si llegamos a 1, retornamos 1
    if (n === 1) {
        return 1;
    }
    // Caso recursivo: sumamos N más la sumatoria de (N-1)
    return n + calcularSumatoria(n - 1);
}

console.log("--- BÓVEDA ANTIGUA ---");
let input = prompt("Ingrese el número secreto N: ");
let n = parseInt(input);

if (isNaN(n) || n < 1) {
    console.log("Debe ingresar un número entero positivo mayor a 0.");
} else {
    let claveSecreta = calcularSumatoria(n);
    console.log(`La clave de apertura resultante es: ${claveSecreta}`);
}
