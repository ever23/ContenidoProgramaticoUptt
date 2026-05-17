const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

function fusionarListas(headA, headB) {
    // Si una de las listas está vacía, devolvemos la otra
    if (!headA) return headB;
    if (!headB) return headA;

    let nuevaCabecera = null;
    
    // Decidimos cuál será el primer nodo
    if (headA.dato <= headB.dato) {
        nuevaCabecera = headA;
        nuevaCabecera.siguiente = fusionarListas(headA.siguiente, headB);
    } else {
        nuevaCabecera = headB;
        nuevaCabecera.siguiente = fusionarListas(headA, headB.siguiente);
    }
    
    return nuevaCabecera;
}

function mostrarLista(head) {
    let actual = head;
    let str = "";
    while (actual) {
        str += `[${actual.dato}] -> `;
        actual = actual.siguiente;
    }
    console.log(`Lista: ${str}null`);
}

// Lista A: 1 -> 3 -> 5
let headA = crearNodo(1);
headA.siguiente = crearNodo(3);
headA.siguiente.siguiente = crearNodo(5);

// Lista B: 2 -> 4 -> 6
let headB = crearNodo(2);
headB.siguiente = crearNodo(4);
headB.siguiente.siguiente = crearNodo(6);

console.log("--- SECCIÓN A ---");
mostrarLista(headA);
console.log("--- SECCIÓN B ---");
mostrarLista(headB);

console.log("\nEjecutando Fusión...\n");
let listaUnificada = fusionarListas(headA, headB);

console.log("--- LISTA UNIFICADA ---");
mostrarLista(listaUnificada);
