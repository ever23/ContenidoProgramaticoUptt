import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const lista = [];
let n, pares = 0, impares = 0;

console.log("--- Contador de Paridad ---");
n = parseInt(prompt("¿Cuántos números desea ingresar?: "));

// 2. Entrada
for (let i = 0; i < n; i++) {
    const num = parseInt(prompt(`Número #${i + 1}: `));
    lista.push(num);
}

// 3. Cálculo
for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// 4. Salida
console.log("\n--- RESULTADOS ---");
console.log("Lista ingresada: " + lista.join(", "));
console.log("Cantidad de Pares: " + pares);
console.log("Cantidad de Impares: " + impares);
