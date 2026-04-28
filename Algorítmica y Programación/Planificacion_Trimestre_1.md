# Planificación Académica: Algorítmica y Programación (Trayecto I)

Este documento detalla la planificación del Trimestre 1, dividido en 4 evaluaciones principales.

---

## 📅 Trimestre 1: Fundamentos y Lógica con JavaScript
**Periodo:** 26/01/2026 al 25/04/2026

### 📝 Evaluación 1: Fundamentos de Programación y Lógica Básica
## Examen escrito 
**Objetivo:** Comprender qué es la programación, cómo se comunica el humano con la máquina y los componentes básicos de un algoritmo.

#### 1. Conceptos Teóricos
- **¿Qué es la programación?:** El arte de dar instrucciones (receta de cocina).
- **El Programa vs Hardware:** Secuencia lógica (mente) vs parte física (cuerpo).
- **Lenguajes de Programación:**
    - **Nivel Bajo:** Binario y Ensamblador (proximidad al hardware).
    - **Nivel Alto:** JavaScript, Python, C++ (palabras similares al inglés).
- **Traducción del Código:**
    - **Compiladores:** Traducen todo el bloque antes de ejecutar.
    - **Intérpretes:** Traducción línea por línea (Ej: JavaScript/Node.js).

#### 2. Lógica y Algoritmos
- **Definición de Algoritmo:** Conjunto finito, ordenado y preciso de pasos.
- **Características:** Preciso (orden), Definido (mismo resultado), Finito (tiene fin).
- **Representación (Pseudocódigo):** Uso de palabras clave para describir la lógica.
#### 3. Metodología de las 4 Fases (Estándar del Profesor)
Para todo ejercicio de lógica y código, se debe seguir estrictamente este orden:
1.  **Declaración:** Identificar y crear las etiquetas/variables necesarias para guardar datos.
2.  **Entrada:** Solicitar y capturar los datos (instrucciones Leer / prompt).
3.  **Cálculo:** Realizar las operaciones matemáticas o lógicas.
4.  **Salida:** Mostrar los resultados obtenidos.

**Ejemplo A: Saludo Personalizado**
```text
Inicio
    // 1. Declaración
    nombre: Cadena

    // 2. Entrada
    Escribir "Por favor, ingresa tu nombre:"
    Leer nombre

    // 3. Cálculo (N/A en este ejemplo)

    // 4. Salida
    Escribir "Hola, " + nombre + ". ¡Bienvenido a Algorítmica!"
Fin
```

**Ejemplo B: Suma de dos números**
```text
Inicio
    // 1. Declaración
    num1, num2, resultado: Entero

    // 2. Entrada
    Escribir "Ingresa el primer número:"
    Leer num1
    Escribir "Ingresa el segundo número:"
    Leer num2

    // 3. Cálculo
    resultado = num1 + num2

    // 4. Salida
    Escribir "La suma total es: " + resultado
Fin
```

#### 3. Entidades Primitivas y Datos
- **Dato:** Unidad mínima de información.
- **Tipos de Datos Primitivos:**
    - Enteros (Integer) y Reales (Float/Double).
    - Caracteres (Char) y Booleanos (True/False).
- **Contenedores de Memoria:**
    - **Variables:** Valores que cambian (Ej: puntuación).
    - **Constantes:** Valores fijos (Ej: PI).
- **Operadores Aritméticos:** `+`, `-`, `*`, `/`, `%` (Módulo).

---

### 📝 Evaluación 2: El Entorno de Desarrollo y la Transición al Código
## Examen escrito 
**Objetivo:** Comprender el ecosistema de desarrollo moderno, dominar la terminal e instalar las herramientas necesarias para traducir lógica a código real.

#### 1. Scripts y Ejecución
- **¿Qué es un Script?:** Archivo de texto con comandos ejecutados por un intérprete (la "receta" en tiempo real).
- **Análisis Comparativo:**
    - **Compilación (C++, Rust):** Traducción previa integral (como traducir un libro entero).
    - **Interpretación (JS, Python):** Traducción línea por línea en tiempo real (como un intérprete en vivo).
- **Rendimiento y Flexibilidad:** Evolución con JIT (Just-In-Time).

#### 2. Herramientas del Programador
- **Editor de Código vs IDE:** VS Code/Sublime (Ligeros) vs IntelliJ/Eclipse (Pesados).
- **Funcionalidades Críticas:** Resaltado de sintaxis, IntelliSense, Emparejamiento de delimitadores, Autoindentación e integración con Git.

#### 3. Interfaz de Línea de Comandos (CLI)
- **Navegación Básica:**
    - `pwd`: Ruta actual.
    - `ls` / `dir`: Listar archivos.
    - `cd`: Cambiar de directorio.
    - `mkdir` / `touch`: Crear carpetas y archivos.
    - `rm` / `del`: Eliminar elementos.

#### 4. El Ecosistema JavaScript y Node.js
- **JavaScript:** El lenguaje universal (Frontend y Backend).
- **Motor V8:** El motor de Chrome que da velocidad a JS.
- **Node.js:** Entorno de ejecución fuera del navegador.
    - Arquitectura asíncrona y Event Loop (No bloqueante).
- **npm:** El gestor de paquetes más grande del mundo (Gestión de dependencias y `package.json`).

#### 5. Representación Gráfica: Diagramas de Flujo
- **Simbología Estándar:**
    - **Óvalo:** Inicio/Final.
    - **Rectángulo:** Proceso/Actividad (Cálculos).
    - **Rombo:** Decisión/Condicional (Si/No).
    - **Paralelogramo:** Entrada/Salida (Leer/Escribir).
    - **Líneas de Flujo:** Dirección de la lógica.

#### 💻 Práctica de Transición
- Instalación de Node.js (LTS) y VS Code.
- **De la lógica al código:** Refuerzo de Entrada/Salida en Pseudocódigo y su primera traducción a JavaScript real usando `console.log()` y `prompt-sync`.

---

### 📝 Evaluación 3: Arquitectura de la Lógica de Control
## Examen escrito 
**Objetivo:** Dominar la toma de decisiones en el código mediante estructuras condicionales, álgebra de Boole y patrones de refactorización profesional en JavaScript.

#### 1. Epistemología y Fundamentos
- **Evolución de la Lógica:** De los saltos incondicionales (GOTO) a la Programación Estructurada.
- **Definición de Estructuras de Decisión:** Instrucciones que rompen la linealidad del código basándose en expresiones booleanas.

#### 2. Operadores y Álgebra de Boole
- **Operadores Relacionales:** 
    - Diferencia crítica: Igualdad abstracta (`==`) vs. **Igualdad estricta (`===`)**.
    - Desigualdad, Mayor, Menor, Mayor/Menor o igual.
- **Conectores Lógicos (Tablas de Verdad):**
    - **AND (`&&`):** Restricción (todas deben cumplirse).
    - **OR (`||`):** Flexibilidad (al menos una debe cumplirse).
    - **NOT (`!`):** Inversión de polaridad lógica.

#### 3. Implementación de Condicionales en JS
- **Estructura If / Else / Else If:** Gestión de bloques con llaves `{}` y prevención de errores estructurales.
- **Estructura Switch:** Optimización de múltiples casos, el concepto de *fall-through* y el uso obligatorio de `break`.
- **Operador Ternario:** Sintaxis `? :` para asignaciones directas y fomento de la inmutabilidad (`const`).

#### 4. Semántica de Datos: Truthy y Falsy
- **Coerción de tipos:** Cómo JavaScript evalúa valores no booleanos en contextos lógicos.
- **Los 8 Valores Falsy:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- **Valores Truthy:** Todo lo que no es falsy (incluyendo `[]` y `{}`).

#### 5. Lógica Avanzada y Refactorización
- **Evaluación de Cortocircuito:** Uso de `&&` para lógica defensiva y `||` para valores de respaldo (*fallbacks*).
- **Operador de Coalescencia Nula (`??`):** Manejo preciso de `null` y `undefined`.
- **Patrones Profesionales:**
    - **Cláusulas de Guarda (Guard Clauses):** Retornos tempranos para eliminar el anidamiento excesivo.
    - **Mapeo de Objetos:** Sustitución de `switch` pesados por búsquedas en objetos/mapas.

#### 💻 Práctica: Mitad Teoría, Mitad Código
- **Teoría:** Resolución de matrices de verdad y análisis de flujo en papel.
- **Práctica (Node.js):** Creación de scripts que validen reglas de negocio complejas (ej. sistemas de permisos, calculadoras de impuestos con rangos, validación de formularios).

---

### 📝 Evaluación 4: Arquitectura de Control Iterativo
## Evaluacion en el laboratorio 
**Objetivo:** Dominar la automatización de tareas redundantes mediante el uso eficiente de bucles y el control del flujo iterativo en JavaScript.

#### 1. Fundamentos de la Repetición
- **Concepto de Bucle:** Abstracción de los saltos de bajo nivel hacia estructuras seguras y legibles.
- **Ciclo de Vida de una Iteración:**
    - **Inicialización:** Definición del punto de partida.
    - **Condición de Permanencia:** Evaluación booleana para continuar o salir.
    - **Actualización:** Mutación de la variable de control (evitar el bucle infinito).

#### 2. Taxonomía de los Bucles
- **Bucles Determinados:** Número de repeticiones conocido a priori.
- **Bucles Indeterminados:** Dependen de factores dinámicos (entradas de usuario, azar, datos externos).

#### 3. Estructuras Fundamentales en JS
- **Bucle `for`:** Integración de inicialización, condición y actualización en una sola cabecera. Ideal para rangos numéricos.
- **Bucle `while`:** Estructura de **pre-condición**. La ejecución depende de un estado que puede cambiar dinámicamente.
- **Bucle `do...while`:** Estructura de **post-condición**. Garantiza que el bloque de código se ejecute **al menos una vez**.

#### 4. Control Fino de Ejecución
- **Sentencia `break`:** Finalización prematura de la estructura.
- **Sentencia `continue`:** Salto de la iteración actual para pasar a la siguiente.

#### 5. Rendimiento y Patologías
- **El Bucle Infinito:** Causas y consecuencias (bloqueo del hilo único de Node.js / Event Loop).
- **Prácticas Defensivas:** Asegurar la progresión de la variable y evitar comparaciones estrictas con decimales.

#### 💻 Práctica de Cierre de Trimestre
- **Ejercicios de Acumulación:** Sumas, promedios y contadores.
- **Validación de Entradas:** Uso de `do...while` con `prompt-sync` para asegurar datos correctos.
- **Lógica de Azar:** Uso de `while` para procesos basados en condiciones aleatorias (simulaciones simples).

---

## ✅ Resumen del Trimestre 1
Con estas 4 evaluaciones, el alumno ha pasado de la **lógica pura en papel** (Eval 1), a la **configuración del entorno profesional** (Eval 2), dominar la **toma de decisiones dinámica** (Eval 3) y finalmente automatizar procesos mediante **iteración eficiente** (Eval 4).
