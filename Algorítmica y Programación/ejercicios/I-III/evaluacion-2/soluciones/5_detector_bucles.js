const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let head = null;

function detectarCiclo() {
    if (!head || !head.siguiente) return false;
    
    let tortuga = head; // Avanza 1 paso
    let liebre = head;  // Avanza 2 pasos
    
    while (liebre !== null && liebre.siguiente !== null) {
        tortuga = tortuga.siguiente;
        liebre = liebre.siguiente.siguiente;
        
        if (tortuga === liebre) {
            return true; // Se encontraron, hay un bucle
        }
    }
    return false; // Llegó al final (null), no hay bucle
}

// Simulamos una lista normal
let n1 = crearNodo("Contacto 1");
let n2 = crearNodo("Contacto 2");
let n3 = crearNodo("Contacto 3");
let n4 = crearNodo("Contacto 4");

head = n1;
n1.siguiente = n2;
n2.siguiente = n3;
n3.siguiente = n4;

console.log("Comprobando lista normal...");
console.log("¿Tiene ciclo infinito?: ", detectarCiclo());

// Forzamos un bucle: El último apunta al segundo nodo
console.log("\nSimulando un error de memoria (n4 apunta a n2)...");
n4.siguiente = n2;

console.log("Comprobando lista corrupta...");
console.log("¿Tiene ciclo infinito?: ", detectarCiclo());
