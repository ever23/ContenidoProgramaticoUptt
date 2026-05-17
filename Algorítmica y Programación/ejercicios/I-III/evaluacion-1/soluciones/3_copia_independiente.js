const prompt = require('prompt-sync')();

let tiendaPrincipal = ["Manzanas", "Peras", "Bananos"];
// Rompiendo la referencia usando el Spread Operator (Shallow Copy)
let tiendaSecundaria = [...tiendaPrincipal]; 

let nuevoProducto = prompt('Ingrese el nuevo producto para la segunda tienda: ');
tiendaSecundaria.push(nuevoProducto);

console.log(`\nInventario Tienda Principal: ${tiendaPrincipal}`);
console.log(`Inventario Tienda Secundaria: ${tiendaSecundaria}`);

// EXPLICACIÓN:
// Al usar [...arreglo], le decimos a JavaScript que cree un arreglo totalmente nuevo en el Heap
// y copie los elementos uno por uno. Ahora cada tienda tiene su propia referencia a arreglos distintos.
