import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// 1. Declaración
const notas = [];
let cantAlumnos, suma = 0, notaAlta = 0;

console.log("--- Promedio de Curso ---");
cantAlumnos = parseInt(prompt("¿Cuántos alumnos hay en la sección?: "));

// 2. Entrada (Llenado del Arreglo)
for (let i = 0; i < cantAlumnos; i++) {
    const nota = parseFloat(prompt(`Ingrese nota del alumno #${i + 1}: `));
    notas.push(nota); // Guardamos en el arreglo
}

// 3. Cálculo (Procesamiento del Arreglo)
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    
    if (notas[i] > notaAlta) {
        notaAlta = notas[i];
    }
}

const promedio = suma / cantAlumnos;

// 4. Salida
console.log("\n--- RESULTADOS ---");
console.log("Notas registradas: " + notas.join(", "));
console.log("Promedio General: " + promedio.toFixed(2));
console.log("Nota más alta: " + notaAlta);
