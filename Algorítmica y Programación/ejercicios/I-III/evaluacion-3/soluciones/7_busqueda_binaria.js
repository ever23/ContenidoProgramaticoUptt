const prompt = require('prompt-sync')();

function busquedaBinaria(arreglo, objetivo, inicio, fin) {
    // Caso base negativo: Si el inicio supera al fin, no está en el arreglo
    if (inicio > fin) {
        return -1;
    }

    // Calcular el punto medio
    let medio = Math.floor((inicio + fin) / 2);

    // Caso base positivo: Lo encontramos en la mitad
    if (arreglo[medio] === objetivo) {
        return medio;
    }

    // Caso recursivo 1: El número es menor, buscar en la mitad izquierda
    if (arreglo[medio] > objetivo) {
        return busquedaBinaria(arreglo, objetivo, inicio, medio - 1);
    }
    
    // Caso recursivo 2: El número es mayor, buscar en la mitad derecha
    return busquedaBinaria(arreglo, objetivo, medio + 1, fin);
}

// Crear un arreglo ordenado del 1 al 100
let baseDatos = [];
for(let i=1; i<=100; i++) {
    baseDatos.push(i);
}

console.log("--- ADIVINA MI NÚMERO (Búsqueda Binaria) ---");
console.log("La base de datos contiene números del 1 al 100.");
let input = parseInt(prompt("¿Qué número desea buscar?: "));

if (isNaN(input)) {
    console.log("Entrada inválida.");
} else {
    let indice = busquedaBinaria(baseDatos, input, 0, baseDatos.length - 1);
    
    if (indice !== -1) {
        console.log(`\n✅ ¡Encontrado! El número ${input} está en el índice [${indice}]`);
    } else {
        console.log(`\n❌ El número ${input} NO existe en la base de datos.`);
    }
}
