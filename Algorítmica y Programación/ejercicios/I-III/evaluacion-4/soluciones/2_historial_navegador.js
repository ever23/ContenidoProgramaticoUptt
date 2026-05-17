const prompt = require('prompt-sync')();

function crearNodo(url) {
    return { url: url, siguiente: null };
}

let pilaAtras = null;
let pilaAdelante = null;

function apilar(pilaOriginal, url) {
    let nuevoNodo = crearNodo(url);
    nuevoNodo.siguiente = pilaOriginal;
    return nuevoNodo; // Retorna el nuevo tope
}

function desapilar(pilaOriginal) {
    if (pilaOriginal === null) return { tope: null, dato: null };
    let dato = pilaOriginal.url;
    let nuevoTope = pilaOriginal.siguiente;
    return { tope: nuevoTope, dato: dato };
}

let paginaActual = "home.com";
let salir = false;

while (!salir) {
    console.log(`\n🌐 URL Actual: [ ${paginaActual} ]`);
    console.log("1. Visitar nueva URL");
    console.log("2. Atrás");
    console.log("3. Adelante");
    console.log("4. Salir");
    
    let opcion = prompt("Opción: ");
    
    if (opcion === '1') {
        pilaAtras = apilar(pilaAtras, paginaActual); // Guardamos la actual en historial atrás
        pilaAdelante = null; // Se borra el futuro
        paginaActual = prompt("Ingrese nueva URL: ");
    } else if (opcion === '2') {
        let res = desapilar(pilaAtras);
        if (res.dato) {
            pilaAdelante = apilar(pilaAdelante, paginaActual);
            paginaActual = res.dato;
            pilaAtras = res.tope;
        } else {
            console.log("No hay historial hacia atrás.");
        }
    } else if (opcion === '3') {
        let res = desapilar(pilaAdelante);
        if (res.dato) {
            pilaAtras = apilar(pilaAtras, paginaActual);
            paginaActual = res.dato;
            pilaAdelante = res.tope;
        } else {
            console.log("No hay historial hacia adelante.");
        }
    } else if (opcion === '4') {
        salir = true;
    }
}
