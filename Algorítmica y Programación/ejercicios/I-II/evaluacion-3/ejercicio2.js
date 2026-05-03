import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// Matriz de 3 alumnos x 2 notas
const notas = [[], [], []];

console.log("--- Registro de Notas (3 Alumnos) ---");

// Llenado
for (let i = 0; i < 3; i++) {
    console.log(`\nAlumno #${i + 1}:`);
    for (let j = 0; j < 2; j++) {
        const n = parseFloat(prompt(`  Nota ${j + 1}: `));
        notas[i].push(n);
    }
}

// Cálculo y Salida
console.log("\n--- REPORTES FINALES ---");
for (let i = 0; i < 3; i++) {
    let sumaFila = 0;
    for (let j = 0; j < 2; j++) {
        sumaFila += notas[i][j];
    }
    const promedio = sumaFila / 2;
    console.log(`Alumno #${i + 1} - Promedio: ${promedio.toFixed(2)}`);
}
