import PromptSync from 'prompt-sync';
const prompt = PromptSync();


/**
 * Compara el intento con el número secreto y devuelve una pista
 * @param {number} secreto 
 * @param {number} intento 
 * @returns {string}
 */
function darPista(secreto, intento) {
    if (intento === secreto) {
        return "acertaste";
    } else if (secreto > intento) {
        return "mayor";
    } else {
        return "menor";
    }
}

// Programa Principal
console.log("--- Juego de Adivinanza ---");
const NUMERO_SECRETO = Math.floor(Math.random() * 20) + 1; // Número entre 1 y 20
let intentosRestantes = 5;
let gano = false;

console.log("He pensado un número entre 1 y 20. Tienes 5 intentos.");

while (intentosRestantes > 0 && !gano) {
    const apuesta = parseInt(prompt(`Intento #${6 - intentosRestantes}. ¿Cuál es el número?: `));
    const resultado = darPista(NUMERO_SECRETO, apuesta);

    if (resultado === "acertaste") {
        console.log("¡Felicidades! Has acertado el número.");
        gano = true;
    } else {
        console.log(`Incorrecto. El número secreto es ${resultado} al ingresado.`);
        intentosRestantes--;
        if (intentosRestantes > 0) {
            console.log(`Te quedan ${intentosRestantes} intentos.`);
        }
    }
}

if (!gano) {
    console.log(`\nGame Over. El número secreto era: ${NUMERO_SECRETO}`);
}
