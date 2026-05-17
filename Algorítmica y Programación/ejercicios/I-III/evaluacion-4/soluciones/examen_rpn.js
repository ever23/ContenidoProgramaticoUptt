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

let salir = false;
console.log("--- MÁQUINA CALCULADORA POSTFIJA (RPN) ---");

while (!salir) {
    console.log("\nEscriba un NÚMERO, un OPERADOR (+, -, *, /) o 'CALCULAR'");
    
    // Imprimir Pila
    let visualPila = "";
    let temp = tope;
    while(temp) { visualPila += `[${temp.dato}] `; temp = temp.siguiente; }
    console.log(`Pila actual: ${visualPila ? visualPila : "(vacía)"}`);
    
    let input = prompt("Entrada: ");
    
    if (input === 'CALCULAR') {
        let res = desapilar();
        console.log(`\n>>> EL RESULTADO FINAL ES: ${res}`);
        salir = true;
    } else if (input === '+' || input === '-' || input === '*' || input === '/') {
        let b = desapilar();
        let a = desapilar();
        
        if (a === null || b === null) {
            console.log("Error: No hay suficientes números en la pila para operar.");
            // Restaurar si hubo error
            if (a !== null) apilar(a);
            if (b !== null) apilar(b);
        } else {
            let resultado = 0;
            if (input === '+') resultado = a + b;
            if (input === '-') resultado = a - b;
            if (input === '*') resultado = a * b;
            if (input === '/') resultado = a / b;
            
            console.log(`Operando: ${a} ${input} ${b} = ${resultado}`);
            apilar(resultado);
        }
    } else {
        let numero = parseFloat(input);
        if (!isNaN(numero)) {
            apilar(numero);
        } else {
            console.log("Entrada no reconocida.");
        }
    }
}
