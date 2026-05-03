import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const matriz = [
    [0, 0],
    [0, 0]
];
let suma = 0;

console.log("--- Llenado de Matriz 2x2 ---");

// 2. Entrada (Bucles anidados)
for (let i = 0; i < 2; i++) { // Filas
    for (let j = 0; j < 2; j++) { // Columnas
        matriz[i][j] = parseFloat(prompt(`Valor en [Fila ${i}, Col ${j}]: `));
        suma += matriz[i][j];
    }
}

// 4. Salida (Formato tabla)
console.log("\n--- MATRIZ RESULTANTE ---");
console.log(`[ ${matriz[0][0]} | ${matriz[0][1]} ]`);
console.log(`[ ${matriz[1][0]} | ${matriz[1][1]} ]`);
console.log("\nLa suma total es: " + suma);
