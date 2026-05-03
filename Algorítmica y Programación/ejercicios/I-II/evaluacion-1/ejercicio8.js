import PromptSync from 'prompt-sync';
const prompt = PromptSync();


// --- Funciones de Operaciones ---

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División entre cero no permitida.";
    }
    return a / b;
}

// --- Programa Principal ---

console.log("--- Calculadora Multifuncional ---");

const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));

console.log("\nOpciones:");
console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");

const opcion = prompt("Seleccione una operación (1-4): ");

let resultado;

switch (opcion) {
    case '1':
        resultado = sumar(num1, num2);
        console.log(`\nResultado de la Suma: ${resultado}`);
        break;
    case '2':
        resultado = restar(num1, num2);
        console.log(`\nResultado de la Resta: ${resultado}`);
        break;
    case '3':
        resultado = multiplicar(num1, num2);
        console.log(`\nResultado de la Multiplicación: ${resultado}`);
        break;
    case '4':
        resultado = dividir(num1, num2);
        console.log(`\nResultado de la División: ${resultado}`);
        break;
    default:
        console.log("\nOpción no válida.");
        break;
}
