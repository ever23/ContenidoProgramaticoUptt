# Manual de Estudio Profundo: Evaluación 1
## Materia: Algorítmica y Programación (Trayecto I)
### Eje Temático: Fundamentos de Programación, Lógica Algorítmica y Metodología de las 4 Fases

---

## 🧭 Introducción: La Programación como el Arte de la Abstracción
La **Programación** es, en su esencia más pura, el arte de darle instrucciones a una computadora para que realice tareas específicas. Sin embargo, para un estudiante de ingeniería, esta definición debe ir un paso más allá: programar es el proceso de **modelar la realidad**. Es tomar un problema del mundo real, abstraer sus componentes fundamentales y diseñar una solución sistemática que una máquina pueda ejecutar a velocidades sobrehumanas.

Para entenderlo de forma sencilla, solemos usar la analogía de escribir una **receta de cocina** o un manual de instrucciones: tú (el programador) defines los pasos exactos y secuenciales que el procesador (el cocinero) debe seguir para obtener un resultado. Ya sea mostrar una foto en Instagram, calcular el clima de mañana o simular la física de un videojuego, todo se reduce a instrucciones lógicas.

Este proceso requiere una transición cognitiva fundamental en el estudiante: debes dejar de pensar como un usuario pasivo de la tecnología para empezar a razonar como un **arquitecto de soluciones**.

---

## 🏛️ CAPÍTULO I: El Ecosistema de la Computación (Teoría de Sistemas)

### 1.1 Ontología del Sistema: El Programa y el Hardware
Para entender cómo funciona la informática, es imperativo separar la máquina en dos dimensiones interactuantes. Usaremos la analogía de la biología humana:

- **El Hardware (El Cuerpo Físico):** Es la infraestructura tangible. Incluye los circuitos, el procesador (CPU), la memoria RAM y el disco duro. Por sí solo, el hardware es una estructura inerte; es solo un conjunto de metales y silicio por donde viajan pulsos eléctricos. No tiene iniciativa ni capacidad de decisión autónoma.
- **El Programa (La Mente y las Instrucciones):** Es una secuencia lógica de instrucciones escritas en un lenguaje específico. Representa el "conocimiento" y la "voluntad" del sistema. Es la parte lógica que la computadora interpreta para resolver un problema. Sin un programa que le dicte qué hacer, el cuerpo (hardware) no sabe cómo reaccionar. 

### 1.2 La Torre de Babel Tecnológica: Niveles de Lenguaje
Las computadoras no entienden el español, el inglés ni ningún lenguaje humano. Su "cerebro" (el procesador) opera abriendo y cerrando millones de micro-interruptores (transistores). Por lo tanto, ellas solo hablan en **Código Binario** (cadenas de ceros y unos, que representan ausencia o presencia de voltaje).

Como escribir un programa complejo dictando ceros y unos sería una pesadilla logística para la mente humana, la ingeniería de software inventó los **Lenguajes de Programación**. Estos actúan como un idioma artificial, un puente que nos permite comunicar procesos complejos. Se clasifican según su "nivel" de proximidad al hardware:

1. **Lenguaje de Máquina (Nivel más bajo):** El código binario puro. Es el único que la máquina entiende de forma nativa. Es completamente ilegible para un humano de forma eficiente.
2. **Lenguaje de Bajo Nivel (Ensamblador):** Creado para aliviar la carga del binario. Utiliza códigos mnemotécnicos (abreviaturas en inglés como `MOV` para mover, `ADD` para sumar, `SUB` para restar). Aunque es más legible, está atado a la arquitectura física del procesador específico.
3. **Lenguajes de Alto Nivel:** El estándar de la industria actual (JavaScript, Python, C++, Java). Utilizan palabras similares al lenguaje humano (generalmente en inglés, como `if`, `while`, `print`). Permiten al programador abstraerse de los circuitos y concentrarse netamente en la **lógica del problema**. 

### 1.3 La Traducción: Compiladores e Intérpretes
Dado que escribimos en "Alto Nivel" y la máquina exige "Binario", el sistema requiere de un **Traductor** intermediario. Existen dos filosofías principales para realizar esta traducción:

- **Compiladores (Ej. C++, Rust):** Toman el código fuente completo escrito por el programador y lo traducen de una sola vez antes de que el programa pueda ser ejecutado. Generan un archivo nuevo (como un `.exe` en Windows). **Analogía:** Es como entregarle un libro escrito en ruso a un traductor; él se lleva el libro, lo traduce completo al español y te entrega un libro nuevo impreso. Es un proceso más lento inicialmente, pero la ejecución final es extremadamente rápida.
- **Intérpretes (Ej. JavaScript, Python):** No generan un archivo nuevo. Traducen y ejecutan el código instrucción por instrucción, línea por línea, en tiempo real. **Analogía:** Es como un traductor en vivo durante una conferencia en la ONU; a medida que el orador habla, el intérprete traduce inmediatamente. Si hay un error en la línea 50, el programa se ejecuta perfectamente hasta la línea 49 y luego se detiene abruptamente.

---

## 🧩 CAPÍTULO II: La Arquitectura del Pensamiento (Lógica Computacional)

### 2.1 Definición y Anatomía del Algoritmo
Antes de escribir una sola línea de código, el ingeniero debe diseñar la solución. Un **Algoritmo** es un conjunto finito, ordenado y preciso de pasos o reglas que permiten resolver un problema o procesar datos. Es el "plano arquitectónico" de la solución.

Para que un proceso sea formalmente considerado un algoritmo válido, debe cumplir con tres características esenciales:
1. **Preciso:** Debe indicar el orden estricto de realización de cada paso. No puede haber ambigüedades. La computadora no tiene "sentido común" para deducir lo que quisiste decir.
2. **Definido (Determinista):** Si se ejecuta el algoritmo dos veces introduciendo exactamente los mismos datos de entrada, se debe obtener invariablemente el mismo resultado de salida.
3. **Finito:** Debe tener un inicio y un final lógicos y delimitados. Un algoritmo que se queda atascado en un ciclo infinito es un fallo catastrófico de diseño.

### 2.2 Conceptos Clave: Sintaxis vs Semántica
Al momento de traducir nuestro algoritmo a un lenguaje de programación, nos enfrentamos a dos dimensiones críticas:
- **Sintaxis (La Ortografía):** Son las reglas formales de gramática del lenguaje. Si olvidas un punto y coma `;`, abres un paréntesis `(` pero no lo cierras, o escribes mal una palabra reservada, el traductor (compilador/intérprete) se detendrá y lanzará un **Error de Sintaxis**. La máquina se niega a intentar entender un mensaje mal escrito.
- **Semántica (El Significado):** Se refiere a la lógica de la instrucción. Un programa puede tener una sintaxis perfecta (sin errores de ortografía), pero tener un **Error Semántico** terrible. Por ejemplo: programar un cajero automático para que *sume* el dinero retirado a tu cuenta en lugar de *restarlo*. El programa corre, pero hace algo lógicamente incorrecto. El verdadero trabajo del ingeniero está en la semántica.

### 2.3 El Pseudocódigo
Es la herramienta puente entre el pensamiento humano y el código. Consiste en describir la lógica del algoritmo usando palabras clave en nuestro propio idioma (Inicio, Fin, Si, Entonces, Leer, Escribir) pero con una estructura estructurada. Permite depurar la lógica sin distraerse con las reglas estrictas (sintaxis) de un lenguaje como JavaScript.

---

## 🏗️ CAPÍTULO III: La Metodología de las 4 Fases (Estándar UPTT)

Para resolver cualquier problema computacional de manera estructurada y evitar el "síndrome de la hoja en blanco", esta cátedra exige la aplicación estricta de la **Metodología de las 4 Fases**. Todo algoritmo debe estructurarse en este orden cronológico:

### 1. FASE DE DECLARACIÓN (Inventario de Recursos)
Antes de procesar información, necesitamos dónde guardarla. En esta fase identificamos y "reservamos" los espacios necesarios en la memoria RAM (las variables). Es como preparar los recipientes (boles, sartenes) antes de empezar a cocinar. Si tu programa calculará la edad de alguien, necesitas declarar un espacio para el "año de nacimiento" y otro para el "año actual".

### 2. FASE DE ENTRADA (Adquisición de Insumos)
La computadora no es adivina; necesita que el mundo exterior le provea los datos. En esta fase, capturamos la información necesaria a través del teclado. Para que tu transición al lenguaje JavaScript sea natural y sin choques lógicos, utilizaremos una sintaxis de asignación funcional en nuestro pseudocódigo: `variable = Leer()`. Esto preparará tu cerebro para cuando uses instrucciones reales como `variable = prompt()`.

### 3. FASE DE CÁLCULO (Transformación)
Es el núcleo del algoritmo. Aquí interviene la Unidad Aritmético Lógica (ALU) del procesador. Los datos capturados en la entrada se someten a operaciones matemáticas (sumas, multiplicaciones) o lógicas (comparaciones) para transformarlos en nueva información. Es el acto de cocinar los ingredientes.

### 4. FASE DE SALIDA (Retroalimentación)
Un algoritmo que calcula un resultado y se lo guarda en su memoria es inútil. La fase final consiste en devolver el resultado procesado al usuario o al sistema que lo solicitó. Usamos instrucciones como `Escribir` o `console.log` para mostrar el plato terminado.

> **Ejemplo Aplicado (Caso de Estudio): Calculadora de Masas para Arepas**
> **Problema:** Queremos saber cuántas tazas de harina y agua necesitamos según el número de personas.

```text
Algoritmo CalcularMasaArepas
Inicio

  // Fase 1: Declaración de Variables
  Variable personas Entero;
  Variable tazas_harina, tazas_agua Real;

  // Fase 2: Entrada
  Escribir "Ingresa la cantidad de personas:";
   personas = Leer();

  // Fase 3: Proceso (Cálculo)
  tazas_harina = personas * 0.5;
  tazas_agua = personas * 0.6;

  // Fase 4: Salida
  Escribir "Necesitas ", tazas_harina, " tazas de harina.";
  Escribir "Necesitas ", tazas_agua, " tazas de agua.";

Fin
```

---

## 🔢 CAPÍTULO IV: Teoría de la Información y Gestión de Datos

### 4.1 La Unidad Fundamental: El Dato
En programación, un **Dato** es la unidad mínima de información aislada. Un "5" o una "A" por sí solos no tienen significado. Sin embargo, cuando esos datos se procesan y contextualizan dentro de un algoritmo, se convierten en **Información** útil.

### 4.2 Tipos de Datos Primitivos
Para que la memoria de la computadora se gestione eficientemente, los lenguajes obligan a clasificar los datos. Son los ladrillos básicos de cualquier programa:
- **Enteros (Integer):** Números completos sin fraccionamiento (5, -10, 1024). Ideales para contar elementos (ej. cantidad de alumnos).
- **Reales (Float/Double):** Números con precisión decimal (3.1416, -0.5, 9.99). Usados para medidas de peso, distancia, finanzas.
- **Caracteres (Char/String):** Representación de texto. Puede ser un solo símbolo ('A', '$') o cadenas completas ("Hola Mundo").
- **Booleanos (Boolean):** La base de la toma de decisiones algorítmica. Solo admiten dos estados lógicos: **Verdadero (True)** o **Falso (False)**.

### 4.3 Contenedores de Memoria: Variables y Constantes
Los datos deben almacenarse en espacios de memoria etiquetados con un identificador (nombre). 
- **La Variable:** Es un espacio de memoria cuyo contenido **puede mutar o cambiar** durante la vida del programa. Si haces un videojuego, la `puntuacion` es una variable porque empieza en 0 y sube a medida que el jugador acierta.
- **La Constante:** Es un espacio de memoria blindado. Su valor **permanece fijo e inalterable** durante toda la ejecución. Se usan para valores universales (ej: `PI = 3.1416`, `TASA_IVA = 0.16`). Intentar cambiar el valor de una constante generará un error crítico en el sistema.

### 4.4 Herramientas de Transformación: Operadores Aritméticos
Permiten la manipulación algebraica de los datos primitivos numéricos:

| Operador | Símbolo | Operación | Ejemplo Práctico |
| :---: | :---: | :--- | :--- |
| **Suma** | `+` | Adición matemática o concatenación de textos. | `total = precio + impuesto` |
| **Resta** | `-` | Sustracción matemática. | `vuelto = pago - costo` |
| **Multiplicación** | `*` | Producto matemático. | `area = base * altura` |
| **División** | `/` | Cociente matemático. | `mitad = total / 2` |
| **Módulo** | `%` | **El residuo de una división entera.** | `resto = 10 % 3` (El resultado es 1) |

*Nota sobre el Módulo (%):* Aunque parezca un operador secundario, es vital en programación avanzada. Se usa constantemente para determinar si un número es par o impar (si `numero % 2 == 0`, es par), para crear ciclos que se repiten, y en algoritmos de criptografía.

---

## 📘 ANEXO: Diccionario Técnico Formal
*Para efectos de evaluación académica rigurosa, se establecen las siguientes definiciones formales que el estudiante debe dominar:*

- **Algoritmo:** Conjunto finito de instrucciones precisas y no ambiguas que, ejecutadas en un orden lógico, transforman un conjunto de datos de entrada en un resultado de salida en un tiempo finito.
- **Programa:** Implementación tangible de un algoritmo en un lenguaje de programación específico, capaz de ser interpretado o ejecutado por una unidad de procesamiento (CPU).
- **Lenguaje de Programación:** Sistema formal de signos y reglas sintácticas/semánticas que permiten la codificación de algoritmos para su ejecución en sistemas computacionales.
- **Variable:** Identificador lógico que representa una dirección de memoria física (RAM) cuyo contenido puede ser modificado y reasignado durante la ejecución del proceso.
- **Constante:** Identificador que representa un valor inmutable en memoria, cuya asignación es única en el código y no puede ser alterada en tiempo de ejecución.
- **Sintaxis:** Conjunto de reglas gramaticales estrictas que determinan la validez de la estructura formal de las sentencias en un lenguaje de programación.
- **Semántica:** Conjunto de reglas conceptuales que determinan la interpretación lógica y el significado real de las sentencias válidas de un lenguaje.
- **Dato Primitivo:** Categoría fundamental de información provista por el lenguaje que define el rango de valores posibles, el espacio de almacenamiento asignado en RAM y las operaciones válidas para un elemento.
- **Compilador:** Software traductor especializado que transforma el código fuente de alto nivel en un archivo binario ejecutable (código objeto) de manera integral antes del inicio de su ejecución.
- **Intérprete:** Software traductor que procesa el código fuente y lo traduce a instrucciones de máquina instrucción por instrucción en tiempo real durante la ejecución, sin generar un archivo binario independiente.
- **Pseudocódigo:** Herramienta estructurada de diseño algorítmico que utiliza una sintaxis simplificada y flexible del lenguaje natural para modelar la lógica de control de un programa de forma agnóstica al lenguaje final.
- **Módulo (%):** Operador binario aritmético que evalúa una división entera entre dos operandos y devuelve exclusivamente el valor del residuo de dicha operación.
