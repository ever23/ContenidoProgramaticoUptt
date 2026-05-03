import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración del objeto con estructura base
const estudiante = {
    nombre: "",
    cedula: "",
    notas: []
};

console.log("--- Registro de Estudiante ---");

// 2. Entrada
estudiante.nombre = prompt("Nombre completo: ");
estudiante.cedula = prompt("Cédula: ");

for (let i = 0; i < 3; i++) {
    const n = parseFloat(prompt(`Nota #${i + 1}: `));
    estudiante.notas.push(n);
}

// 3. Cálculo de promedio
let suma = 0;
for (let i = 0; i < estudiante.notas.length; i++) {
    suma += estudiante.notas[i];
}
const promedio = suma / estudiante.notas.length;

// 4. Salida
console.log("\n--- PERFIL GENERADO ---");
console.log(`Nombre: ${estudiante.nombre}`);
console.log(`Cédula: ${estudiante.cedula}`);
console.log(`Notas: ${estudiante.notas.join(" | ")}`);
console.log(`Promedio Final: ${promedio.toFixed(2)}`);
