const prompt = require('prompt-sync')();

let tiendaPrincipal = ["Manzanas", "Peras", "Bananos"];
let tiendaSecundaria = tiendaPrincipal; // Asignación por referencia

let nuevoProducto = prompt('Ingrese el nuevo producto para la segunda tienda: ');
tiendaSecundaria.push(nuevoProducto);

console.log(`\nInventario Tienda Principal: ${tiendaPrincipal}`);
console.log(`Inventario Tienda Secundaria: ${tiendaSecundaria}`);

// EXPLICACIÓN:
// Los arreglos son objetos y se guardan en el Heap. Las variables en el Stack
// solo guardan una "referencia" (flecha) apuntando a ese arreglo.
// Al hacer "tiendaSecundaria = tiendaPrincipal", copiamos la flecha, no el arreglo.
// Ambas tiendas apuntan al mismo inventario físico.
