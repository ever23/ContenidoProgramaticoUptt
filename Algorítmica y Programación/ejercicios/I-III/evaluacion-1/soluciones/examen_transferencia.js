const prompt = require('prompt-sync')();

let cuentaA = { titular: "Alicia", saldo: 1000 };
let cuentaB = { titular: "Bob", saldo: 500 };

function procesarTransferencia(origen, destino, monto) {
    origen.saldo -= monto;
    destino.saldo += monto;
}

console.log("--- SALDOS INICIALES ---");
console.log(`${cuentaA.titular}: $${cuentaA.saldo}`);
console.log(`${cuentaB.titular}: $${cuentaB.saldo}\n`);

let montoStr = prompt('Monto a transferir de Alicia a Bob: $');
let monto = parseFloat(montoStr);

procesarTransferencia(cuentaA, cuentaB, monto);

console.log("\n--- SALDOS ACTUALIZADOS ---");
console.log(`${cuentaA.titular}: $${cuentaA.saldo}`);
console.log(`${cuentaB.titular}: $${cuentaB.saldo}`);

// JUSTIFICACIÓN TEÓRICA:
// Al pasar 'cuentaA' y 'cuentaB' a la función, no pasamos copias de los objetos,
// sino copias de las referencias (punteros). La función usó esas referencias
// para acceder directamente a los objetos en el Heap y alterar sus propiedades.
// Por eso no hizo falta retornar nada.
