# Manual de Estudio Profundo: Evaluación 2
## Materia: Algorítmica y Programación (Trayecto I - Trimestre II)
### Eje Temático: Arreglos Unidimensionales (Vectores) y Procesamiento de Lotes

---

## 📦 CAPÍTULO I: La Necesidad de Agrupar Datos

Hasta ahora, hemos trabajado con variables simples (primitivas). Una variable normal (`let edad = 20;`) es como una caja pequeña donde solo cabe un objeto a la vez. Si intentas meter un nuevo número, el anterior se destruye y desaparece para hacerle espacio al nuevo.

Pero, ¿qué sucede si necesitamos registrar las edades de 500 estudiantes para calcular un promedio?
Siguiendo la lógica tradicional que aprendimos en el primer trimestre, tendríamos que declarar 500 variables distintas (`edad1`, `edad2`... `edad500`). Esto es insostenible, propaga el "Código Espagueti" y hace imposible automatizar el cálculo con bucles.

Aquí es donde entra el concepto de **Dato Estructurado**.

### 1.1 ¿Qué son los Datos Estructurados y por qué los necesitamos?
En ingeniería de software, un **Dato Estructurado** (o Estructura de Datos) es un formato especializado para organizar, procesar, recuperar y almacenar información en la memoria de la computadora de manera eficiente. 

Mientras que un dato primitivo (como un número `10` o un texto `"Hola"`) guarda un único valor aislado, un dato estructurado permite **agrupar múltiples valores relacionados bajo una misma entidad lógica**. Los necesitamos por dos razones críticas en la industria:
1. **Escalabilidad de Memoria:** Permiten manejar volúmenes masivos de información (ej. 5.000 notas de estudiantes) sin colapsar el código declarando 5.000 variables independientes.
2. **Automatización de Procesos:** Al estar agrupados bajo una misma estructura geométrica en memoria, permiten que los bucles (ciclos iterativos) recorran y procesen toda la información en lote con apenas 3 líneas de código.

La estructura de datos más fundamental, antigua e importante de la informática para lograr esto es el **Arreglo (Array)**.

### 1.2 Definición Técnica de un Arreglo (Vector)
Un arreglo unidimensional (también llamado vector o lista) es una estructura de datos estática o dinámica que permite agrupar múltiples valores del mismo tipo bajo un **único nombre de variable**, almacenándolos en posiciones de memoria contiguas (una detrás de la otra).

> **💡 La Analogía del Pastillero Semanal:**
> Imagina un pastillero de esos que usan los abuelos. El pastillero entero tiene un solo nombre genérico (ej. `misPastillas`), pero por dentro está dividido en 7 compartimentos separados. No necesitas 7 cajas de pastillas distintas, solo necesitas saber a qué compartimento ir (Lunes, Martes, etc.) para sacar el dato correcto.

---

## 🗄️ CAPÍTULO II: Índices y Acceso a Memoria

Para que la computadora sepa exactamente qué dato quieres guardar o sacar del arreglo, utiliza un sistema de coordenadas espaciales llamado **Índice (Index)**. 

### La Regla del Cero (Indexación Base Cero)
En la ingeniería de software (con muy raras excepciones), **siempre empezamos a contar desde el número CERO, no desde el uno**. El primer elemento de tu arreglo no está en la posición 1, está en la posición 0.

*   Elemento 1 -> Índice `0`
*   Elemento 2 -> Índice `1`
*   Elemento 3 -> Índice `2`

> **⚠️ Advertencia Profesional (Off-By-One Error):** El error lógico más común en el procesamiento de arreglos es intentar acceder a un índice que no existe. Si un arreglo tiene 5 elementos, sus índices van del `0` al `4`. Si intentas acceder a la posición `5`, JavaScript te devolverá `undefined`, rompiendo tus cálculos matemáticos posteriores.

### Sintaxis de Acceso en JavaScript
Para acceder a un "compartimento" específico, usamos **corchetes `[]`** inmediatamente después del nombre del arreglo.

```javascript
// Declaramos un arreglo que contiene 3 textos
let frutas = ["Manzana", "Pera", "Uva"];

// Acceso directo a memoria mediante índices
console.log(frutas[0]); // Salida: "Manzana" (El primer elemento)
console.log(frutas[2]); // Salida: "Uva" (El último elemento)

// Mutación: Cambiando un valor específico usando su índice
frutas[1] = "Fresa"; // Reemplaza "Pera" por "Fresa" en memoria
```

---

## ⚙️ CAPÍTULO III: Procesamiento mediante las 4 Fases

Los arreglos y los **bucles `for`** son almas gemelas en la programación. No tiene sentido tener un arreglo de 1000 elementos si vamos a imprimir cada uno manualmente. Usamos ciclos iterativos para automatizar el llenado y el procesamiento aplicando nuestra Metodología de las 4 Fases.

### Fase 1: Declaración (Reserva de Memoria)
Primero declaramos el arreglo vacío y las variables auxiliares (acumuladores o contadores) que necesitaremos para procesarlo.
```javascript
// 1. DECLARACIÓN
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let notas = []; // Arreglo vacío, listo para recibir datos
let sumaTotal = 0; // Acumulador en 0
let promedio = 0;
let cantidad = 5; // Constante de control para el bucle
```

### Fase 2: Entrada (Llenado Dinámico)
Utilizamos un bucle `for` para pedir datos repetidamente al usuario e inyectarlos secuencialmente en el arreglo usando el contador del bucle (`i`) como si fuera el índice.
```javascript
// 2. ENTRADA (Llenado del vector)
console.log("--- INGRESO DE NOTAS ---");
for (let i = 0; i < cantidad; i++) {
    // Pedimos el dato por consola y lo convertimos a número
    let notaIngresada = parseFloat(prompt(`Ingresa la nota del alumno ${i + 1}: `));
    
    // Guardamos el dato en la posición 'i' del arreglo
    notas[i] = notaIngresada; 
}
```

### Fase 3: Cálculo (Procesamiento de Lotes)
Una vez que el arreglo está lleno de datos en memoria, usamos *otro* bucle `for` para recorrerlo de inicio a fin y procesar matemáticamente su información.
```javascript
// 3. CÁLCULO (Recorrido y sumatoria)
for (let i = 0; i < cantidad; i++) {
    // Sumamos lo que hay en cada "compartimento" al acumulador
    sumaTotal = sumaTotal + notas[i];
}

// Calculamos el promedio fuera del bucle (una sola vez)
promedio = sumaTotal / cantidad;
```

### Fase 4: Salida (Visualización de Resultados)
Finalmente, mostramos los resultados del procesamiento masivo.
```javascript
// 4. SALIDA
console.log("\n--- RESULTADOS ---");
console.log(`El promedio general del salón es: ${promedio}`);

if (promedio >= 10) {
    console.log("El salón está APROBADO.");
} else {
    console.log("El salón está REPROBADO.");
}
```

---

## 🔍 CAPÍTULO IV: Algoritmos Clásicos (Preparación para el Examen)

Dado que la **Evaluación 2** es un Examen Escrito en aula (sin ayuda del computador), debes dominar mentalmente cómo se mueve el índice a través del arreglo. 

### El algoritmo de "Búsqueda Secuencial"
Es el algoritmo de navegación más básico para encontrar si un elemento específico existe dentro del arreglo. Consiste en revisar el arreglo desde la posición `0` hasta el final, uno por uno, buscando una coincidencia mediante una estructura de decisión `if`.

```javascript
let edades = [15, 22, 18, 30, 14];
let buscar = 18;
let encontrado = false; // "Bandera" lógica

// Búsqueda secuencial estándar
for (let i = 0; i < 5; i++) {
    if (edades[i] === buscar) {
        encontrado = true; // Levantamos la bandera
        break; // Optimización: Si ya lo encontramos, destruimos el bucle
    }
}

// Fase de Salida
if (encontrado === true) {
    console.log("La edad sí está en la lista.");
} else {
    console.log("Edad no encontrada.");
}
```

---

## 🧰 CAPÍTULO V: El Tamaño Dinámico del Arreglo (`length`)

En la industria del software, rara vez sabemos de antemano cuántos elementos exactos va a tener un arreglo (por ejemplo, la lista de usuarios de un sistema crece todos los días).

Para no depender de números fijos quemados en el código (como el `5` en `i < 5`), utilizamos la propiedad especial **`.length`**. Ésta le pregunta directamente a la memoria y devuelve el tamaño exacto del arreglo en tiempo real.

```javascript
let colores = ["Rojo", "Azul", "Verde", "Amarillo"];

// Ahora el bucle se adapta automáticamente sin importar cuántos colores haya
for (let i = 0; i < colores.length; i++) { 
    console.log(colores[i]);
}
```

> **📌 Resumen de Cátedra para el Examen:**
> Un arreglo es simplemente una lista de datos en memoria. La clave para dominarlos (y aprobar el examen en papel) es entender que el **Nombre del Arreglo** (`notas`) te da acceso a la lista completa de golpe, mientras que el **Nombre del Arreglo + Corchetes e Índice** (`notas[2]`) te da acceso a un dato individual específico, permitiéndote tratarlo como si fuera una variable normal.
