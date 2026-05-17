const prompt = require('prompt-sync')();

function invertirCadena(cadena) {
    // Caso base: si la cadena está vacía o tiene 1 carácter, la retornamos tal cual
    if (cadena.length <= 1) {
        return cadena;
    }
    // Caso recursivo: tomamos el último carácter y le sumamos la inversión del resto de la cadena
    return cadena.charAt(cadena.length - 1) + invertirCadena(cadena.substring(0, cadena.length - 1));
}

console.log("--- SISTEMA DE ENCRIPTACIÓN ---");
let contraseña = prompt("Ingrese la contraseña a encriptar: ");

let encriptada = invertirCadena(contraseña);

console.log(`\nContraseña original: ${contraseña}`);
console.log(`Contraseña encriptada: ${encriptada}`);
