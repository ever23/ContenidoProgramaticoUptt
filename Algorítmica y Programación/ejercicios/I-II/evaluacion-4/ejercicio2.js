import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// Arreglo para guardar objetos
const inventario = [];

console.log("--- Registro de Inventario (3 Productos) ---");

for (let i = 0; i < 3; i++) {
    console.log(`\nProducto #${i + 1}:`);
    const nombre = prompt("  Nombre: ");
    const precio = parseFloat(prompt("  Precio ($): "));
    
    // Creamos el objeto y lo metemos al arreglo
    inventario.push({ nombre: nombre, precio: precio });
}

// Búsqueda del más costoso
let masCostoso = inventario[0];

for (let i = 1; i < inventario.length; i++) {
    if (inventario[i].precio > masCostoso.precio) {
        masCostoso = inventario[i];
    }
}

console.log("\n--- RESULTADO ---");
console.log(`El producto más caro es "${masCostoso.nombre}" con un precio de $${masCostoso.precio}`);
