const prompt = require('prompt-sync')();

/**
 * Procesa un retiro de dinero validando los fondos
 * @param {number} saldoActual 
 * @param {number} montoRetirar 
 * @returns {number} Nuevo saldo (o -1 si hay fondos insuficientes)
 */
function procesarRetiro(saldoActual, montoRetirar) {
    if (montoRetirar > saldoActual) {
        return -1; // Fondos insuficientes
    }
    return saldoActual - montoRetirar;
}

/**
 * Procesa un depósito de dinero
 * @param {number} saldoActual 
 * @param {number} montoDepositar 
 * @returns {number} Nuevo saldo
 */
function procesarDeposito(saldoActual, montoDepositar) {
    if (montoDepositar <= 0) {
        return saldoActual;
    }
    return saldoActual + montoDepositar;
}

// Programa Principal
console.log("--- Simulador de Cajero Automático ---");
let saldo = 500;
let opcion = 0;

while (opcion !== 4) {
    console.log("\nMenú Principal:");
    console.log("1. Consultar Saldo");
    console.log("2. Retirar Dinero");
    console.log("3. Depositar Dinero");
    console.log("4. Salir");
    
    opcion = parseInt(prompt("Seleccione una opción: "));
    
    if (opcion === 1) {
        console.log(`Su saldo actual es: $${saldo}`);
    } else if (opcion === 2) {
        let retiro = parseFloat(prompt("Ingrese el monto a retirar: $"));
        let resultado = procesarRetiro(saldo, retiro);
        
        if (resultado === -1) {
            console.log("Error: Fondos Insuficientes.");
        } else {
            saldo = resultado;
            console.log("Retiro exitoso.");
        }
    } else if (opcion === 3) {
        let deposito = parseFloat(prompt("Ingrese el monto a depositar: $"));
        saldo = procesarDeposito(saldo, deposito);
        console.log("Depósito exitoso.");
    } else if (opcion === 4) {
        console.log("Gracias por utilizar nuestro cajero. ¡Hasta pronto!");
    } else {
        console.log("Opción inválida. Intente de nuevo.");
    }
}
