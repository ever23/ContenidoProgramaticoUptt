import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const temps = [];
let suma = 0, diasCalor = 0;

console.log("--- Analizador de Clima Semanal ---");

// 2. Entrada
for (let i = 0; i < 7; i++) {
    const t = parseFloat(prompt(`Día ${i + 1} - Temperatura: `));
    temps.push(t);
}

// 3. Cálculo
let tempBaja = temps[0]; // Inicializar con el primer valor

for (let i = 0; i < temps.length; i++) {
    suma += temps[i];
    
    if (temps[i] > 30) {
        diasCalor++;
    }
    
    if (temps[i] < tempBaja) {
        tempBaja = temps[i];
    }
}

const promedio = suma / 7;

// 4. Salida
console.log("\n--- RESULTADOS ---");
console.log(`Temperatura Media: ${promedio.toFixed(1)}°C`);
console.log(`Días con más de 30°C: ${diasCalor}`);
console.log(`Temperatura más baja: ${tempBaja}°C`);
