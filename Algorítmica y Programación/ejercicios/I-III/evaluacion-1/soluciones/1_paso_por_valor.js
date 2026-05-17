const prompt = require('prompt-sync')();

let edadStr = prompt('Ingrese la edad del primer gemelo: ');
let gemelo1 = parseInt(edadStr);
let gemelo2 = gemelo1; // Asignación por valor

gemelo2 = gemelo2 + 1; // Pasa un año para el gemelo 2

console.log(`\nEdad del gemelo 1: ${gemelo1}`);
console.log(`Edad del gemelo 2: ${gemelo2}`);

// EXPLICACIÓN:
// Los tipos primitivos (como los números) se guardan directamente en el Stack.
// Al hacer "gemelo2 = gemelo1", se crea una copia exacta del valor en otro espacio de memoria.
// Modificar uno no afecta al otro.
