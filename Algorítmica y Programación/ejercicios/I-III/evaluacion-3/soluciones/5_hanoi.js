const prompt = require('prompt-sync')();

// 'n' es el numero de discos
// 'origen', 'auxiliar', 'destino' son los nombres de las torres
function resolverHanoi(n, origen, auxiliar, destino) {
    // Caso base: Si solo hay 1 disco, simplemente muévelo al destino
    if (n === 1) {
        console.log(`Mover disco 1 de Torre ${origen} a Torre ${destino}`);
        return;
    }
    
    // Paso 1: Mover (n-1) discos del Origen al Auxiliar (usando el Destino como soporte)
    resolverHanoi(n - 1, origen, destino, auxiliar);
    
    // Paso 2: Mover el disco grande restante directamente al Destino
    console.log(`Mover disco ${n} de Torre ${origen} a Torre ${destino}`);
    
    // Paso 3: Mover los (n-1) discos del Auxiliar al Destino (usando el Origen como soporte)
    resolverHanoi(n - 1, auxiliar, origen, destino);
}

console.log("--- SIMULADOR DE LAS TORRES DE HANÓI ---");
let input = prompt("Ingrese el número inicial de discos (ej. 3 o 4): ");
let discos = parseInt(input);

if (isNaN(discos) || discos < 1) {
    console.log("Debe ingresar al menos 1 disco.");
} else {
    console.log(`\nSolución óptima para ${discos} discos:\n`);
    resolverHanoi(discos, "A", "B", "C");
    // Matemáticamente siempre toma (2^n) - 1 movimientos.
}
