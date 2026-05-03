import fs from 'fs';


console.log("--- Lector de Base de Datos JSON ---");

try {
    // 1. Leer el archivo (retorna un String)
    const contenidoString = fs.readFileSync('datos.json', 'utf-8');
    
    // 2. Parsear (Convertir String a Objeto de JS)
    const datos = JSON.parse(contenidoString);
    
    console.log("Datos cargados con éxito.");
    console.log(`Usuario: ${datos.usuario} | Nivel Actual: ${datos.nivel}`);
    
    // 3. Modificar el objeto
    console.log("\nActualizando nivel...");
    datos.nivel = datos.nivel + 1;
    
    // 4. Mostrar resultado
    console.log("Nuevo Estado del Objeto:");
    console.log(datos);
    
} catch (error) {
    console.log("Error al procesar el archivo JSON: ", error.message);
}
