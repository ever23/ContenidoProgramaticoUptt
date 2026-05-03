# 📝 Solucionario: Evaluación 2 (Transición: Pseudocódigo y JavaScript)
## Algorítmica y Programación (I-I)

Este documento muestra la transición de la lógica pura (Pseudocódigo) a la implementación real (JavaScript).

---

### 1. Gestión de Proyectos (CLI)
```bash
mkdir evaluacion2-scripts
cd evaluacion2-scripts
echo > solucion.js
dir
```

---

### 2. Calculadora de Edad (Nombre + Edad)

**Pseudocódigo:**
```text
Algoritmo SaludoYEdad
Inicio
    Variable nombre: Cadena
    Variable edad, dias: Entero
    
    Escribir "Ingrese su nombre:"
    nombre = Leer()
    Escribir "Ingrese su edad:"
    edad = Leer()
    
    dias = edad * 365
    
    Escribir "Hola ", nombre, ", has vivido ", dias, " días."
Fin
```

**JavaScript:**
```javascript
const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let dias = edad * 365;

console.log(`Hola ${nombre}, has vivido aproximadamente ${dias} días.`);
```

---

### 3. Cálculo de Nómina (Horas + Pago)

**Pseudocódigo:**
```text
Algoritmo NominaBasica
Inicio
    Variable trabajador: Cadena
    Variable horas, pagoHora, sueldo: Real
    
    Escribir "Nombre del trabajador:"
    trabajador = Leer()
    Escribir "Horas trabajadas:"
    horas = Leer()
    Escribir "Pago por hora:"
    pagoHora = Leer()
    
    sueldo = horas * pagoHora
    
    Escribir "Empleado: ", trabajador
    Escribir "Total a pagar: ", sueldo
Fin
```

**JavaScript:**
```javascript
const prompt = require('prompt-sync')();

let trabajador = prompt("Nombre del trabajador: ");
let horas = parseFloat(prompt("Horas trabajadas: "));
let pagoHora = parseFloat(prompt("Pago por hora ($): "));

let sueldo = horas * pagoHora;

console.log(`\n--- RESUMEN ---\nEmpleado: ${trabajador}\nTotal a pagar: $${sueldo}`);
```

---

### 4. Conversor de Unidades (Metros -> CM y MM)

**Pseudocódigo:**
```text
Algoritmo ConversorMetros
Inicio
    Variable metros, cm, mm: Real
    
    Escribir "Ingrese la medida en metros:"
    metros = Leer()
    
    cm = metros * 100
    mm = metros * 1000
    
    Escribir metros, " metros equivalen a ", cm, " cm y ", mm, " mm."
Fin
```

**JavaScript:**
```javascript
const prompt = require('prompt-sync')();

let metros = parseFloat(prompt("Ingrese la medida en metros: "));
let cm = metros * 100;
let mm = metros * 1000;

console.log(`${metros}m equivalen a: ${cm}cm y ${mm}mm.`);
```

---

### 5. Promedio Ponderado (40% / 60%)

**Pseudocódigo:**
```text
Algoritmo PromedioPonderado
Inicio
    Variable nota1, nota2, final: Real
    
    Escribir "Nota 1 (40%):"
    nota1 = Leer()
    Escribir "Nota 2 (60%):"
    nota2 = Leer()
    
    final = (nota1 * 0.4) + (nota2 * 0.6)
    
    Escribir "La calificación final es: ", final
Fin
```

**JavaScript:**
```javascript
const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Nota 1 (40%): "));
let nota2 = parseFloat(prompt("Nota 2 (60%): "));
let final = (nota1 * 0.4) + (nota2 * 0.6);

console.log("Calificación final: " + final.toFixed(2));
```

---

### 6. Repartición de Cuenta (Factura + Personas + Propina)

**Pseudocódigo:**
```text
Algoritmo RepartirCuenta
Inicio
    Variable monto, personas, porcPropina, propinaTotal, totalConPropina, pagoCadaUno: Real
    
    Escribir "Monto total factura:"
    monto = Leer()
    Escribir "Número de personas:"
    personas = Leer()
    Escribir "Porcentaje propina:"
    porcPropina = Leer()
    
    propinaTotal = monto * (porcPropina / 100)
    totalConPropina = monto + propinaTotal
    pagoCadaUno = totalConPropina / personas
    
    Escribir "Total con propina: ", totalConPropina
    Escribir "Cada uno paga: ", pagoCadaUno
Fin
```

**JavaScript:**
```javascript
const prompt = require('prompt-sync')();

let monto = parseFloat(prompt("Total factura ($): "));
let personas = parseInt(prompt("Personas: "));
let porcPropina = parseFloat(prompt("Propina (%): "));

let propinaTotal = monto * (porcPropina / 100);
let totalConPropina = monto + propinaTotal;
let pagoCadaUno = totalConPropina / personas;

console.log(`\nTotal con propina: $${totalConPropina}`);
console.log(`Cada uno paga: $${pagoCadaUno.toFixed(2)}`);
```
