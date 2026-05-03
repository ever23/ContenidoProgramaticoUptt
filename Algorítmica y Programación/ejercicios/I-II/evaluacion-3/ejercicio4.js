import PromptSync from 'prompt-sync';
const prompt = PromptSync();


console.log("--- Buscador de Palabras ---");
const frase = prompt("Ingrese una frase completa: ");
const clave = prompt("Ingrese la palabra que desea buscar: ");

// Uso de .indexOf()
const posicion = frase.indexOf(clave);

if (posicion !== -1) {
    console.log(`\n¡Palabra encontrada!`);
    console.log(`La palabra "${clave}" comienza en el índice: ${posicion}`);
} else {
    console.log(`\nLa palabra "${clave}" no se encuentra en la frase.`);
}

// Ejemplo de .includes() para verificación booleana simple
if (frase.toLowerCase().includes(clave.toLowerCase())) {
    console.log("(Confirmado con búsqueda insensible a mayúsculas)");
}
