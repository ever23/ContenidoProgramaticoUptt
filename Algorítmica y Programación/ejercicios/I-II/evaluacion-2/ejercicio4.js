import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const original = [];
const filtrados = [];

console.log("--- Filtro de Números (>50) ---");

// 2. Entrada
for (let i = 0; i < 10; i++) {
    const num = parseFloat(prompt(`Ingrese número ${i + 1}/10: `));
    original.push(num);
}

// 3. Cálculo (Filtrado)
for (let i = 0; i < original.length; i++) {
    if (original[i] > 50) {
        filtrados.push(original[i]);
    }
}

// 4. Salida
console.log("\n--- RESULTADOS ---");
console.log("Arreglo Original: " + original.join(" | "));
console.log("Arreglo Filtrado (>50): " + filtrados.join(" | "));
console.log(`Total de números filtrados: ${filtrados.length}`);
