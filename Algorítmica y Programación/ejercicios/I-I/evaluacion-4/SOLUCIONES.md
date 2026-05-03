# 📝 Solucionario: Evaluación 4 (Bucles Complejos)
## Algorítmica y Programación (I-I)

Este documento contiene la resolución de problemas que integran bucles, contadores, acumuladores y condicionales.

---

### 1. Analizador de Ventas Semanales (For + If)
```javascript
const prompt = require('prompt-sync')();

let totalVentas = 0;
let ventasAltas = 0;

for (let i = 1; i <= 7; i++) {
    const monto = parseFloat(prompt(`Día ${i} - Ingrese el monto de venta: `));
    totalVentas += monto;
    
    if (monto > 100) {
        ventasAltas++;
    }
}

const promedio = totalVentas / 7;

console.log("\n--- REPORTE SEMANAL ---");
console.log("Total Ventas: $" + totalVentas);
console.log("Promedio Diario: $" + promedio.toFixed(2));
console.log("Días con Ventas Altas (>100): " + ventasAltas);
```

---

### 2. Control de Inventario (While + If)
```javascript
const prompt = require('prompt-sync')();

let stock = parseInt(prompt("Ingrese el stock inicial: "));

while (stock > 0) {
    console.log(`\nStock actual: ${stock} unidades.`);
    if (stock < 5) {
        console.log("¡ADVERTENCIA: STOCK CRÍTICO!");
    }

    const retiro = parseInt(prompt("Cantidad a retirar (0 para salir): "));
    
    if (retiro === 0) break;

    if (retiro <= stock) {
        stock -= retiro;
        console.log("Retiro exitoso.");
    } else {
        console.log("Error: No hay suficientes unidades en existencia.");
    }
}

console.log("\nProceso finalizado. Stock final: " + stock);
```

---

### 3. Validador de PIN (Intentos Limitados)
```javascript
const prompt = require('prompt-sync')();

const PIN_SECRETO = "9876";
let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && !accesoConcedido) {
    const clave = prompt(`Intento ${intentos + 1}/3 - Ingrese su PIN: `);
    
    if (clave === PIN_SECRETO) {
        accesoConcedido = true;
    } else {
        intentos++;
        if (intentos < 3) {
            console.log("PIN incorrecto. Intente de nuevo.");
        }
    }
}

if (accesoConcedido) {
    console.log("--- ACCESO CONCEDIDO ---");
} else {
    console.log("--- TARJETA BLOQUEADA: Superó el límite de intentos ---");
}
```

---

### 4. Procesador de Notas (Centinela + Contadores)
```javascript
const prompt = require('prompt-sync')();

let sumaNotas = 0;
let totalAlumnos = 0;
let aprobados = 0;
let reprobados = 0;

console.log("Ingrese las notas (ingrese un número negativo para terminar):");

while (true) {
    const nota = parseFloat(prompt("Nota del alumno: "));
    
    if (nota < 0) break; // Centinela

    sumaNotas += nota;
    totalAlumnos++;

    if (nota >= 50) {
        aprobados++;
    } else {
        reprobados++;
    }
}

if (totalAlumnos > 0) {
    const promedioGeneral = sumaNotas / totalAlumnos;
    console.log("\n--- RESULTADOS DEL CURSO ---");
    console.log("Alumnos procesados: " + totalAlumnos);
    console.log("Promedio General: " + promedioGeneral.toFixed(2));
    console.log("Aprobados: " + aprobados);
    console.log("Reprobados: " + reprobados);
} else {
    console.log("No se ingresaron notas.");
}
```
