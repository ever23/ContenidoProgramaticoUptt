# Manual de Lectura de Cátedra: Evaluación 1
## Materia: Algorítmica y Programación (Trayecto I)
### Tema: Fundamentos de Programación, Lógica Algorítmica y Metodología de las 4 Fases

---

## 🧭 Introducción: La Programación como el Arte de Instruir
La **Programación** es, en esencia, el arte de darle instrucciones a una computadora para que realice tareas específicas. Para entenderlo de forma sencilla, es como escribir una **receta de cocina** o un manual de instrucciones: tú defines los pasos exactos que el procesador debe seguir para obtener un resultado, ya sea mostrar una foto, calcular el clima o hacer funcionar un videojuego.

Este proceso requiere una transición fundamental en el estudiante: dejar de ser un usuario pasivo para convertirse en un **arquitecto de soluciones**.

---

## 🏛️ Parte I: El Ecosistema de la Computación (Teoría)

### 1.1 Ontología del Sistema: El Programa y el Hardware
Para entender cómo funciona la informática, usamos la analogía del ser humano:
- **El Hardware (El Cuerpo):** Es la infraestructura física; los circuitos, el procesador y la memoria. Por sí solo, es una estructura inerte.
- **El Programa (La Mente/Instrucciones):** Es una secuencia lógica de instrucciones escritas en un lenguaje específico. Es la parte lógica que la computadora interpreta para resolver un problema. Sin programa, el cuerpo no sabe qué hacer.

### 1.2 El Lenguaje de Programación: El Puente de Comunicación
Las computadoras no entienden el español o el inglés; ellas hablan en **Código Binario** (cadenas de ceros y unos). Como escribir en binario sería imposible para nosotros, utilizamos los **Lenguajes de Programación**, que actúan como un idioma artificial diseñado para expresar procesos.

Clasificamos los lenguajes según su proximidad al hardware (su "nivel"):
- **Lenguaje de Máquina (Nivel más bajo):** Cadenas de ceros y unos. Es el único que la máquina entiende directamente.
- **Lenguaje de Bajo Nivel (Ensamblador):** Usa códigos mnemotécnicos (abreviaturas como `MOV`, `ADD`, `SUB`). Es rápido pero muy difícil de aprender.
- **Lenguajes de Alto Nivel:** Son los que usamos hoy (JavaScript, Python, C++). Utilizan palabras similares al inglés (`if`, `while`, `print`), lo que los hace fáciles de leer y aprender.

### 1.3 La Traducción: Compiladores e Intérpretes
Como nosotros escribimos en "Alto Nivel" y la máquina solo entiende "Binario", necesitamos un **Traductor**. Existen dos tipos principales:
- **Compiladores:** Traducen todo el programa de una sola vez antes de ejecutarlo. Es como **traducir un libro entero** antes de empezar a leerlo (Ej: C++, Rust).
- **Intérpretes:** Traducen y ejecutan el código línea por línea en tiempo real. Es como un **traductor en vivo** en una conferencia (Ej: JavaScript/Node.js, Python).

---

## 🧩 Parte II: La Arquitectura del Pensamiento (Lógica)

### 2.1 Definición de Algoritmo
Un **Algoritmo** es un conjunto finito, ordenado y preciso de pasos o reglas que permiten resolver un problema o procesar datos. Es la "receta" lógica antes de ser código.

Para que un algoritmo sea correcto, debe cumplir con tres características esenciales:
1.  **Preciso:** Debe indicar el orden de realización de cada paso sin ambigüedades.
2.  **Definido:** Si se sigue el algoritmo dos veces con los mismos datos, se debe obtener siempre el mismo resultado.
3.  **Finitud:** Debe tener un inicio y un final claro.

### 2.2 Conceptos Clave de la Lógica
- **Sintaxis:** Son las reglas de ortografía y gramática de cada lenguaje. Si olvidas un punto y coma `;` o un paréntesis `)`, la máquina no entenderá el mensaje (Error de Sintaxis).
- **Pseudocódigo:** Herramienta para describir la lógica del algoritmo usando palabras clave en nuestro propio idioma.

---

## 🏗️ Parte III: La Metodología de las 4 Fases (Estándar de Diseño)
Para resolver cualquier problema de programación, aplicamos estrictamente este orden:

1.  **Declaración:** Identificar y reservar las "cajas" (variables) que necesitaremos en la memoria.
2.  **Entrada:** Capturar los datos o ingredientes necesarios (instrucciones Leer / prompt).
3.  **Cálculo:** Realizar las operaciones matemáticas o transformaciones de los datos.
4.  **Salida:** Mostrar el resultado final al usuario.

---

## 🔢 Parte IV: Entidades Primitivas y Datos

### 4.1 ¿Qué es un Dato?
En programación, un **Dato** es la unidad mínima de información. Por sí solo no tiene sentido, pero procesado dentro de un programa, se convierte en información útil.

### 4.2 Tipos de Datos Primitivos
Son los ladrillos básicos de cualquier programa:
- **Enteros (Integer):** Números sin decimales (5, -10, 100).
- **Reales (Float/Double):** Números con decimales (3.14, -0.5).
- **Caracteres (Char/String):** Letras, palabras o símbolos ('A', "Hola").
- **Booleanos (Boolean):** Valores lógicos que solo pueden ser **Verdadero (True)** o **Falso (False)**.

### 4.3 Contenedores de Memoria: Variables y Constantes
- **Variable:** Espacio de memoria cuyo valor **puede cambiar** durante la ejecución (ej: la puntuación de un juego).
- **Constante:** Espacio de memoria cuyo valor **permanece fijo** (ej: el valor de PI ≈ 3.1416).

### 4.4 Operadores Aritméticos
| Operador | Operación |
| :--- | :--- |
| **+** | Suma |
| **-** | Resta |
| ***** | Multiplicación |
| **/** | División |
| **%** | Módulo (El residuo de una división entera) |

---

## 💡 Guía Pedagógica: La Analogía Maestra
Para que la clase sea dinámica, presenta los conceptos usando la analogía de la cocina:
- **El Algoritmo** es la receta paso a paso.
- **Los Datos** son los ingredientes.
- **El Programa** es el acto de cocinar siguiendo la receta.
- **Las Variables** son los platos o boles donde los ingredientes cambian de estado.

---

---

## 🎯 Conclusión para el Estudiante
Programar no requiere ser un genio de las matemáticas. Requiere, sobre todo, mucha paciencia y capacidad para resolver problemas. **"Primero piensa el problema, luego diseña el algoritmo y solo al final, escribe el código"**.

---

## 📘 Anexo: Definiciones Técnicas Formales
*Para efectos de evaluación académica, se establecen las siguientes definiciones rigurosas:*

- **Algoritmo:** Conjunto finito de instrucciones precisas y no ambiguas que, ejecutadas en un orden lógico, transforman un conjunto de datos de entrada en un resultado de salida en un tiempo finito.
- **Programa:** Implementación de un algoritmo en un lenguaje de programación específico, capaz de ser interpretado o ejecutado por una unidad de procesamiento.
- **Lenguaje de Programación:** Sistema formal de signos y reglas sintácticas/semánticas que permiten la codificación de algoritmos para su ejecución en sistemas computacionales.
- **Variable:** Identificador lógico que representa una dirección de memoria física (RAM) cuyo contenido puede ser modificado durante la ejecución del proceso.
- **Constante:** Identificador que representa un valor inmutable en memoria, cuya asignación es única y no puede ser alterada una vez definida.
- **Sintaxis:** Conjunto de reglas gramaticales que determinan la validez de la estructura de las sentencias en un lenguaje de programación.
- **Semántica:** Conjunto de reglas que determinan la interpretación y el significado de las sentencias válidas de un lenguaje.
- **Dato Primitivo:** Categoría fundamental de información que define el rango de valores, el espacio de almacenamiento y las operaciones válidas para un elemento de datos.
- **Compilador:** Software traductor que transforma el código fuente de alto nivel en un archivo binario ejecutable (código objeto) de manera íntegra y previa a la ejecución.
- **Intérprete:** Software que procesa el código fuente y lo ejecuta instrucción por instrucción en tiempo real, sin generar un archivo ejecutable independiente.
- **Pseudocódigo:** Herramienta de diseño algorítmico que utiliza una sintaxis simplificada de lenguaje natural para describir la lógica de control de un programa.
- **Módulo (%):** Operador binario que devuelve el residuo de la división entera entre dos operandos numéricos.
