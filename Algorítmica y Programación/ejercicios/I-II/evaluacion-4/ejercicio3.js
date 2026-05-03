import fs from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();


console.log("--- Creador de Notas de Texto ---");
const contenido = prompt("Escriba su nota personal para guardar: ");

try {
    // fs.writeFileSync(nombreArchivo, contenido)
    fs.writeFileSync('nota.txt', contenido);
    console.log("\n[ÉXITO]: El archivo 'nota.txt' ha sido creado y guardado.");
} catch (error) {
    console.log("Ocurrió un error al guardar el archivo: ", error);
}
