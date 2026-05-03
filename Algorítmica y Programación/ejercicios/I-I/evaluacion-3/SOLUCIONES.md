# 📝 Solucionario: Evaluación 3 (Condicionales Complejos)
## Algorítmica y Programación (I-I)

Este documento contiene la implementación lógica para los ejercicios de toma de decisiones avanzadas.

---

### 1. Control de Acceso (Condiciones Múltiples)
```javascript
const prompt = require('prompt-sync')();

const edad = parseInt(prompt("Ingrese su edad: "));
const tieneEntrada = prompt("¿Tiene entrada? (si/no): ").toLowerCase();

if (edad < 18) {
    console.log("Acceso denegado: Menor de edad.");
} else {
    if (tieneEntrada === "si") {
        if (edad > 60) {
            console.log("¡Bienvenido! Tiene acceso a la zona VIP.");
        } else {
            console.log("¡Bienvenido! Disfrute el evento.");
        }
    } else {
        console.log("Acceso denegado: Debe comprar su entrada en taquilla.");
    }
}
```

---

### 2. Nómina con Bonos y Deducciones
```javascript
const prompt = require('prompt-sync')();

const sueldoBase = parseFloat(prompt("Sueldo base ($): "));
const antiguedad = parseInt(prompt("Años de antigüedad: "));

let bono = 0;
if (antiguedad > 5) {
    bono = sueldoBase * 0.10;
}

const sueldoConBono = sueldoBase + bono;

let retencion = 0;
if (sueldoConBono > 500) {
    retencion = sueldoConBono * 0.04;
}

const sueldoNeto = sueldoConBono - retencion;

console.log("\n--- RECIBO DE PAGO ---");
console.log(`Sueldo Base: $${sueldoBase}`);
console.log(`Bono Antigüedad: $${bono}`);
console.log(`Retención (4%): $${retencion}`);
console.log(`TOTAL NETO: $${sueldoNeto}`);
```

---

### 3. Clasificador de Triángulos
```javascript
const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Lado A: "));
const b = parseFloat(prompt("Lado B: "));
const c = parseFloat(prompt("Lado C: "));

// Verificación de existencia de triángulo
if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("Es un triángulo válido.");
    
    if (a === b && b === c) {
        console.log("Clasificación: Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Clasificación: Isósceles");
    } else {
        console.log("Clasificación: Escaleno");
    }
} else {
    console.log("Error: Los lados ingresados no pueden formar un triángulo.");
}
```

---

### 4. Simulador de Cajero (Lógica Anidada)
```javascript
const prompt = require('prompt-sync')();

const PIN_CORRECTO = "1234";
let saldo = 1000;

const clave = prompt("Ingrese su clave secreta: ");

if (clave === PIN_CORRECTO) {
    console.log("Acceso concedido. Saldo actual: $" + saldo);
    const monto = parseFloat(prompt("¿Cuánto desea retirar?: "));
    
    if (monto > 0 && monto <= saldo) {
        saldo = saldo - monto;
        console.log("Retiro exitoso. Su nuevo saldo es: $" + saldo);
    } else if (monto > saldo) {
        console.log("Error: Fondos insuficientes.");
    } else {
        console.log("Monto inválido.");
    }
} else {
    console.log("Acceso bloqueado: Clave errónea.");
}
```
