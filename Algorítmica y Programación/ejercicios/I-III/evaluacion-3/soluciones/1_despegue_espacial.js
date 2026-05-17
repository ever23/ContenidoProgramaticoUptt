const prompt = require('prompt-sync')();

function conteoRegresivo(segundos) {
    if (segundos === 0) {
        console.log("¡Despegue!");
        return;
    }
    console.log(`Tiempo restante: ${segundos} segundos`);
    // Llamada recursiva disminuyendo 1 segundo
    conteoRegresivo(segundos - 1);
}

console.log("--- AGENCIA ESPACIAL ---");
let input = prompt("Ingrese los segundos para el conteo regresivo: ");
let segundosIniciales = parseInt(input);

if (isNaN(segundosIniciales) || segundosIniciales < 0) {
    console.log("Número inválido.");
} else {
    conteoRegresivo(segundosIniciales);
}
