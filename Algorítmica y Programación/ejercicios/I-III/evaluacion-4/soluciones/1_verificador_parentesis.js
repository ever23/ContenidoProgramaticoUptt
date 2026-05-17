const prompt = require('prompt-sync')();

function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

let tope = null;

function apilar(dato) {
    let nuevoNodo = crearNodo(dato);
    nuevoNodo.siguiente = tope;
    tope = nuevoNodo;
}

function desapilar() {
    if (tope === null) return null;
    let dato = tope.dato;
    tope = tope.siguiente;
    return dato;
}

function verificarBalance(expresion) {
    tope = null; // resetear pila
    
    for (let i = 0; i < expresion.length; i++) {
        let char = expresion[i];
        
        if (char === '(' || char === '[' || char === '{') {
            apilar(char);
        } else if (char === ')' || char === ']' || char === '}') {
            let extraido = desapilar();
            if (extraido === null) return false; // Hay cierre sin apertura
            
            // Verificar si hacen par
            if (char === ')' && extraido !== '(') return false;
            if (char === ']' && extraido !== '[') return false;
            if (char === '}' && extraido !== '{') return false;
        }
    }
    
    // Si la pila quedó vacía, está todo balanceado
    return tope === null;
}

console.log("--- COMPILADOR BÁSICO (Verificador) ---");
let expresion = prompt("Ingrese expresión matemática: ");

if (verificarBalance(expresion)) {
    console.log("✅ Código válido: Paréntesis balanceados.");
} else {
    console.log("❌ Error de Sintaxis: Paréntesis desbalanceados.");
}
