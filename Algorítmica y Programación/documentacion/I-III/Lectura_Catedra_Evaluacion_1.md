# Manual de Estudio Profundo: Evaluación 1
## Materia: Algorítmica y Programación
### Eje Temático: Punteros y Gestión de Memoria

---

## 🧭 Introducción: Las Coordenadas de la Memoria
Imagina la memoria RAM de tu computadora como una ciudad gigante llena de casilleros (direcciones de memoria), cada uno capaz de almacenar un dato. Hasta ahora, hemos usado variables nombradas (como `let x = 5;`) para guardar información. Pero, ¿qué ocurre debajo del capó? ¿Cómo gestiona el procesador y el lenguaje esos casilleros? 

Entender la memoria es el primer paso para dominar estructuras de datos avanzadas. En lenguajes de bajo nivel como C o C++, el programador manipula directamente las direcciones físicas usando **punteros**. En lenguajes de alto nivel como JavaScript, el motor (como V8 en Chrome) oculta esta complejidad, pero el concepto de **referencia** sigue siendo vital para evitar bugs catastróficos.

---

## 🏛️ CAPÍTULO I: Stack vs Heap (Pila y Montículo)

La memoria RAM asignada a nuestro programa no es un bloque homogéneo. Se divide principalmente en dos regiones con propósitos muy distintos:

### 1.1 El Stack (La Pila de Ejecución)
Es una memoria rápida, ordenada y estática. Funciona como una pila de platos: el último en entrar es el primero en salir (LIFO).
- **Propósito:** Almacena variables locales, argumentos de funciones y el contexto de ejecución.
- **Tamaño:** Fijo y limitado. Si haces demasiados llamados recursivos infinitos, desbordarás el Stack (el famoso *Stack Overflow*).
- **Datos almacenados:** Guarda **Tipos Primitivos** (Números, Strings, Booleanos) porque su tamaño en bytes se conoce de antemano.

### 1.2 El Heap (El Montículo)
Es una memoria grande, desordenada y dinámica. Es como un gran almacén donde puedes pedir espacio a voluntad, pero debes buscarlo usando una "dirección" o referencia.
- **Propósito:** Almacenar estructuras cuyo tamaño puede crecer o encogerse dinámicamente en tiempo de ejecución.
- **Tamaño:** Muy grande (limitado por la RAM física de tu PC).
- **Datos almacenados:** Guarda **Objetos, Arreglos y Funciones** (Tipos por Referencia).

---

## 🧩 CAPÍTULO II: Punteros Clásicos vs Referencias en JavaScript

### 2.1 El Puntero (C/C++)
Un puntero es, simplemente, una variable cuyo valor no es un dato (como '5' o 'Hola'), sino la **dirección física de memoria** de otra variable.
*Ejemplo conceptual:* Si la variable `A` vive en la dirección `0x1A4`, un puntero `P` guardará el valor `0x1A4`. A través de `P`, puedes modificar a `A`.

### 2.2 Las Referencias en JavaScript
JavaScript no tiene punteros directos a memoria física por razones de seguridad. En su lugar, usa **Referencias**. 
Cuando creas un tipo primitivo, JS guarda el valor directamente en el Stack. Pero cuando creas un Objeto o Arreglo, JS guarda los datos en el Heap, y en el Stack guarda una "Referencia" (una flecha invisible) que apunta a esa ubicación en el Heap.

> [!WARNING]
> **El Error del Clonador Novato:**
> En JavaScript, si haces `let a = [1, 2, 3];` y luego `let b = a;`, **no estás copiando el arreglo**. Estás copiando la *referencia*. Ambos apuntan al mismo arreglo en el Heap. Si haces `b.push(4)`, ¡`a` también se verá afectado porque son el mismo objeto!

---

## 🏗️ CAPÍTULO III: Gestión del Ciclo de Vida de la Memoria

En lenguajes de alto nivel, el ciclo de vida de la memoria consta de tres pasos:

1. **Reserva (Allocation):** El motor (ej. V8) reserva espacio en el Heap cuando creas un objeto o arreglo.
2. **Uso:** Lees o escribes datos en esa memoria usando las referencias.
3. **Liberación (Garbage Collection):** A diferencia de C++ donde debes hacer `free()` o `delete` manualmente (lo que causa "fugas de memoria" si se te olvida), JavaScript tiene un **Recolector de Basura** automático.

### 3.1 El Recolector de Basura (Garbage Collector)
El algoritmo principal que usa JS es el de "Marcar y Barrer" (*Mark and Sweep*). Periódicamente, el motor revisa desde la "raíz" (el objeto global `window` o las variables globales) todas las referencias activas. Si encuentra un objeto en el Heap al que *nadie* apunta (todas sus referencias fueron borradas o reasignadas a `null`), lo considera "basura" y libera esa memoria para que pueda ser reutilizada.

---

## 💻 Laboratorio: Simulando Punteros con Objetos en JS

Aunque no tenemos punteros reales, podemos entender el concepto "pasando objetos por referencia".

```javascript
// Los primitivos se pasan por VALOR (una copia exacta)
let x = 10;
let y = x; // Se copia el '10'
y = 20;
console.log(x); // x sigue siendo 10. ¡Son independientes!

// Los objetos se pasan por REFERENCIA (simulando un puntero)
let punteroA = { valor: 10 };
let punteroB = punteroA; // Se copia la dirección de memoria, no el contenido

punteroB.valor = 20;
console.log(punteroA.valor); // ¡Imprime 20! Ambos apuntan a la misma casa.
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Stack (Pila):** Región de memoria rápida y de tamaño fijo utilizada para almacenar variables locales y el contexto de ejecución de funciones bajo un modelo LIFO.
- **Heap (Montículo):** Región de memoria dinámica y desordenada usada para almacenar estructuras de tamaño variable en tiempo de ejecución.
- **Puntero:** Variable que almacena la dirección de memoria física de otro dato en el sistema.
- **Referencia:** Abstracción segura de un puntero utilizada en lenguajes de alto nivel para apuntar a objetos en el Heap sin exponer direcciones de memoria reales.
- **Paso por Valor:** Mecanismo donde se copia el contenido exacto de una variable a otra. Las modificaciones en una no afectan a la otra.
- **Paso por Referencia:** Mecanismo donde se comparte la dirección de memoria de un dato. Modificar el dato a través de una variable afecta a todas las demás que posean la referencia.
- **Garbage Collector (Recolector de Basura):** Proceso automático del motor de ejecución que identifica y libera los bloques de memoria del Heap que ya no están referenciados por ninguna variable activa.
