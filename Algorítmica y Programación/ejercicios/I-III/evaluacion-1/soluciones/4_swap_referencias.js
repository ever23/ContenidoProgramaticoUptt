const prompt = require('prompt-sync')();

function intercambiarRoles(perfil1, perfil2) {
    // Usamos una variable temporal primitiva para el swap
    let rolTemporal = perfil1.rol;
    perfil1.rol = perfil2.rol;
    perfil2.rol = rolTemporal;
    // No hay 'return'. Modificamos los objetos directamente en el Heap.
}

let usuarioA = { nombre: prompt("Ingrese nombre del usuario A: "), rol: prompt("Ingrese rol del usuario A: ") };
let usuarioB = { nombre: prompt("Ingrese nombre del usuario B: "), rol: prompt("Ingrese rol del usuario B: ") };

console.log("\n--- ANTES DEL INTERCAMBIO ---");
console.log(`${usuarioA.nombre}: ${usuarioA.rol}`);
console.log(`${usuarioB.nombre}: ${usuarioB.rol}`);

console.log("\nEjecutando intercambio de roles por referencia...");
intercambiarRoles(usuarioA, usuarioB);

console.log("\n--- DESPUÉS DEL INTERCAMBIO ---");
console.log(`${usuarioA.nombre}: ${usuarioA.rol}`);
console.log(`${usuarioB.nombre}: ${usuarioB.rol}`);
