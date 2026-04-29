# Guía de Aprendizaje: Fundamentos de Algorítmica y Programación
**Unidad 1:** La Comunicación Humano-Máquina y la Lógica de Datos

---

## 🏛️ 1. La Programación como Proceso de Resolución
Programar no es "escribir código"; es el proceso intelectual de **abstraer una solución**. 

### 1.1 El Programa como Entidad Lógica
Si comparamos la computadora con el ser humano:
- **Hardware:** Es el cuerpo físico (procesador, memoria, circuitos).
- **Programa:** Es la mente (instrucciones, lógica, algoritmos). 
*Sin un programa, el hardware es una estructura inerte.*

### 1.2 El Lenguaje de Programación: El Puente de Abstracción
Las máquinas operan en **Lenguaje de Máquina (Binario: 0s y 1s)**. Para evitar la complejidad de este nivel, utilizamos niveles de abstracción:
- **Bajo Nivel (Ensamblador):** Control absoluto, alta dificultad.
- **Alto Nivel (JavaScript, Python):** Proximidad al lenguaje humano, mayor productividad.

> **Nota del Investigador:** JavaScript es un lenguaje **Interpretado** por el motor V8 (Node.js), lo que permite una ejecución ágil y multiplataforma, ideal para el desarrollo rápido de prototipos.

---

## 🧩 2. El Algoritmo: El Corazón de la Lógica
Un algoritmo es una **secuencia lógica, finita y precisa** de pasos para resolver un problema. 

### 2.1 Características de Calidad Algorítmica
Para que un proceso sea considerado un algoritmo profesional, debe cumplir:
1.  **Precisión:** Orden estricto de ejecución.
2.  **Determinismo (Definido):** A las mismas entradas, siempre las mismas salidas.
3.  **Finitud:** Debe terminar. Un programa que no termina es un error de diseño.

### 2.2 La Analogía de la Receta (Evolucionada)
- **Algoritmo:** La receta escrita.
- **Datos:** Los ingredientes (insumos).
- **Programa:** El acto de cocinar (ejecución).
- **Variables:** Los recipientes donde los ingredientes se transforman.

---

## 🔢 3. Teoría de Datos y Tipos Primitivos
Un **Dato** es la unidad mínima de información. En Node.js, clasificamos estos insumos para optimizar el cálculo:

### 3.1 Tipos de Datos Fundamentales
| Tipo | Nombre Técnico | Ejemplo | Descripción |
| :--- | :--- | :--- | :--- |
| **Entero** | `Integer` | `25`, `-5` | Números exactos sin decimales. |
| **Real** | `Float / Double` | `3.14`, `0.5` | Números con precisión decimal. |
| **Caracter** | `String` | `'A'`, `"Hola"` | Texto y símbolos. |
| **Booleano** | `Boolean` | `true`, `false` | Valores de lógica binaria (Verdad/Falso). |

### 3.2 Contenedores de Información
- **Variables:** Espacios de memoria cuyo valor fluctúa (ej: `let puntuacion = 0`).
- **Constantes:** Datos inmutables que protegen la integridad del programa (ej: `const PI = 3.1416`).

---

## 🏗️ 4. Introducción a la Metodología de las 4 Fases
Desde esta primera unidad, toda resolución se divide en cuatro momentos críticos:
1.  **Declaración:** Definir qué "recipientes" (variables) vamos a usar.
2.  **Entrada:** Capturar los "ingredientes" (datos) del usuario.
3.  **Cálculo:** Aplicar la lógica y los **Operadores Aritméticos** (`+`, `-`, `*`, `/`, `%`).
4.  **Salida:** Mostrar el resultado final al mundo.

---

## ❓ Desafío de Reflexión
*Si un algoritmo es finito y preciso, ¿podríamos decir que las leyes de la física son el "algoritmo" del universo? ¿Qué serían las variables en ese caso?*
