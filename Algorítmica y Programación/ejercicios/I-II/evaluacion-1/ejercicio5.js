import PromptSync from 'prompt-sync';
const prompt = PromptSync();


/**
 * Evalúa si el consumo es de riesgo o normal
 * @param {number} totalKwh 
 * @returns {string}
 */
function evaluarRiesgoConsumo(totalKwh) {
    if (totalKwh > 300) {
        return "Alerta de Alto Consumo";
    } else {
        return "Consumo dentro del Rango Normal";
    }
}

// Programa Principal
console.log("--- Monitor de Consumo Eléctrico ---");
const cantEquipos = parseInt(prompt("¿Cuántos electrodomésticos hay en el hogar?: "));

let consumoAcumulado = 0;

for (let i = 1; i <= cantEquipos; i++) {
    const kwh = parseFloat(prompt(`Ingrese el consumo (kWh) del equipo ${i}: `));
    consumoAcumulado += kwh;
}

const veredicto = evaluarRiesgoConsumo(consumoAcumulado);

console.log("\n--- Reporte de Consumo ---");
console.log(`Consumo Total: ${consumoAcumulado} kWh`);
console.log(`Veredicto: ${veredicto}`);
