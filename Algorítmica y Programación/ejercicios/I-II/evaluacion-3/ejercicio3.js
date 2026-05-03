import PromptSync from 'prompt-sync';
const prompt = PromptSync();


console.log("--- Analizador de Texto ---");
const texto = prompt("Ingrese una oración: ");

// 1. Longitud
console.log(`\nLongitud total: ${texto.length} caracteres.`);

// 2. Mayúsculas
console.log(`En mayúsculas: ${texto.toUpperCase()}`);

// 3. Conteo de letras 'a'
let contadorA = 0;
for (let i = 0; i < texto.length; i++) {
    // Verificamos si el caracter en la posición i es 'a' o 'A'
    if (texto[i].toLowerCase() === 'a') {
        contadorA++;
    }
}

console.log(`La letra 'a' aparece ${contadorA} veces.`);
