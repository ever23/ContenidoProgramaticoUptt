# Manual de Estudio Profundo: Evaluación 2
## Materia: Algorítmica y Programación (Trayecto I - Trimestre I)
### Eje Temático: Entornos de Desarrollo, Ecosistema JavaScript y Diagramación Lógica

---

## 📜 CAPÍTULO I: La Naturaleza de los Scripts y la Ejecución

### 1.1 El Concepto de Script en la Computación Moderna
Un script es, en esencia, un archivo de texto que contiene una secuencia de comandos destinados a ser ejecutados por un programa intérprete, en lugar de ser procesados directamente por la unidad central de procesamiento (CPU) como código máquina nativo. Se puede conceptualizar el script como una "receta de cocina" o una lista de tareas pendientes para la computadora, donde la máquina sigue las instrucciones una tras otra para automatizar un trabajo específico sin intervención humana.

La distinción técnica entre un script y un programa compilado radica en el proceso de traducción. Mientras que los lenguajes compilados (como C, C++ o Rust) requieren una fase previa de transformación integral a código binario antes de poder ejecutarse, los lenguajes de scripting (como JavaScript, Python, PHP o Ruby) se interpretan en tiempo real, línea por línea.

### 1.2 Análisis Comparativo: Interpretación frente a Compilación
Para ilustrar esta diferencia, se suele utilizar la analogía del traductor. Un lenguaje compilado es equivalente a traducir un libro entero de un idioma a otro antes de que alguien lo lea; el lector recibe la versión final lista para consumir. En cambio, un script es como tener un intérprete humano sentado al lado del lector, traduciendo cada frase a medida que se avanza en el texto.

| Característica | Lenguajes Compilados (Programas) | Lenguajes de Scripting (Interpretados) |
| :--- | :--- | :--- |
| **Traducción** | Previa a la ejecución (Fase de Build). | Durante la ejecución (Línea por línea). |
| **Rendimiento** | Superior; ejecución directa por el procesador. | Inferior; sobrecarga debida a la interpretación. |
| **Flexibilidad** | Menor; requiere recompilación ante cambios. | Mayor; permite cambios dinámicos y rápidos. |
| **Portabilidad** | Dependiente de la plataforma del binario (SO/CPU).| Independiente; corre en cualquier SO con intérprete. |
| **Ejemplos** | C, C++, Rust, Go, Haskell. | JavaScript, Python, Ruby, PHP, Perl. |

> **Nota Técnica:** A pesar de que históricamente los lenguajes interpretados eran significativamente más lentos, el desarrollo de técnicas como la **Compilación Justo a Tiempo (JIT)** ha reducido drásticamente esta brecha, permitiendo que scripts de JavaScript o Python alcancen rendimientos competitivos para aplicaciones comerciales.

---

## 🛠️ CAPÍTULO II: El Entorno de Trabajo del Ingeniero

### 2.1 Herramientas de Desarrollo: El Editor de Código
Escribir software requiere un entorno que facilite la gestión de la sintaxis y la estructura de los archivos. Un editor de código es una herramienta de software diseñada específicamente para escribir y editar código fuente, diferenciándose de los editores de texto genéricos (como el Bloc de notas) por poseer funcionalidades optimizadas para la productividad del programador:

*   **Resaltado de Sintaxis:** Utiliza colores diferenciados para palabras clave, variables, tipos de datos y cadenas de texto, facilitando la detección visual inmediata de errores.
*   **Autocompletado e IntelliSense:** Sugiere opciones de código a medida que el usuario escribe, basándose en la gramática del lenguaje, reduciendo la carga cognitiva.
*   **Emparejamiento de Delimitadores:** Resalta automáticamente las llaves `{}`, corchetes `[]` o paréntesis `()` correspondientes.
*   **Autoindentación:** Ajusta la sangría de las líneas para reflejar la jerarquía lógica de bucles y condiciones (vital para la legibilidad).
*   **Integración con Git:** Permite gestionar repositorios y versiones directamente desde la interfaz.

### 2.2 La Evolución: Del Editor Clásico al IDE Agéntico
Existe una distinción técnica fundamental que ha evolucionado drásticamente en los últimos años:
*   **Editor de Código:** Herramienta ágil enfocada puramente en la escritura de texto con ayudas visuales (ej. VS Code, Sublime Text).
*   **IDE Clásico (Integrated Development Environment):** Un conjunto exhaustivo *pasivo* que incluye editores, depuradores y compiladores en una misma interfaz gráfica, esperando las interacciones físicas del programador (ej. IntelliJ IDEA, Eclipse).
*   **IDE Agéntico (Nativo de IA):** La vanguardia actual de la ingeniería de software. Entornos como **Antigravity**, donde el IDE deja de ser una herramienta pasiva y actúa como un "compañero de programación" (Pair Programmer) autónomo. Este entorno tiene la capacidad de leer archivos, ejecutar comandos en la terminal y corregir código activamente bajo la dirección y supervisión lógica del ingeniero humano.

---

## 💻 CAPÍTULO III: La Interfaz de Línea de Comandos (CLI)

La terminal, consola o línea de comandos (CLI) representa la interfaz más directa y potente entre el usuario y el sistema operativo. A diferencia de la interfaz gráfica (GUI) que se basa en clics, la terminal recibe instrucciones textuales que permiten realizar tareas con precisión y rapidez superiores.

### Navegación y Gestión de Directorios (El "GPS" del Desarrollador)

| Comando (Linux/macOS) | Equivalente Windows | Descripción de la Función |
| :--- | :--- | :--- |
| `pwd` | `cd` (sin argumentos) | **Print Working Directory.** Muestra la ruta absoluta de la ubicación actual. |
| `ls` | `dir` | Lista el contenido del directorio. Banderas: `-l` (detallado), `-a` (ocultos). |
| `cd [ruta]` | `cd [ruta]` | **Change Directory.** Moverse entre carpetas. Ej: `cd ..` (subir un nivel). |
| `mkdir [nombre]`| `md [nombre]` | **Make Directory.** Crea una nueva carpeta. |
| `touch [archivo]`| `type nul > [arch]` | Crea un archivo vacío listo para ser editado en la ubicación actual. |
| `rm [archivo]` | `del [archivo]` | Elimina archivos de forma permanente. `rm -r` para borrar carpetas llenas. |

---

## 🌐 CAPÍTULO IV: JavaScript, Node.js y el Ecosistema npm

### 4.1 JavaScript: El Lenguaje de la Lógica Universal (ECMAScript)
Técnicamente, JavaScript es una implementación del estándar **ECMAScript**. Es un **lenguaje de programación de alto nivel, interpretado (mediante compilación JIT - Just In Time), con tipado dinámico débil y multiparadigma** (soporta programación estructurada, imperativa, orientada a objetos basada en prototipos y funcional). 

En términos prácticos para la ingeniería:
*   **Alto Nivel (Abstracción):** Su sintaxis está diseñada para legibilidad humana, delegando la gestión compleja de memoria (Garbage Collection) directamente a la máquina.
*   **Tipado Dinámico:** Las variables no están atadas a un tipo de dato estricto en tiempo de compilación; la asignación de tipos ocurre en tiempo de ejecución.
*   **JavaScript como Lenguaje de Ingeniería:** Aunque JS nació en los navegadores, **lo usaremos pura y exclusivamente como un motor lógico**. Construiremos el "cerebro matemático" de los programas, ejecutando algoritmos y procesando datos directamente en la consola del sistema operativo.

### 4.2 Node.js: Arquitectura y el Motor V8
A nivel de ingeniería de sistemas, **Node.js no es un lenguaje de programación**, es un entorno de ejecución (*runtime environment*). Específicamente, Node.js es un entorno de ejecución multiplataforma, de código abierto, asíncrono y orientado a eventos, escrito principalmente en **C y C++**. 

Su poder computacional se fundamenta en dos pilares tecnológicos críticos:
1.  **El Motor V8 de Google:** Un motor de alto rendimiento (escrito en C++) que no interpreta el código JavaScript línea por línea de forma tradicional, sino que lo compila a código máquina nativo en tiempo real (JIT) antes de ejecutarlo, logrando velocidades comparables a lenguajes compilados.
2.  **La Librería `libuv` (El Event Loop):** A diferencia de los modelos tradicionales que consumen RAM creando un hilo (*thread*) pesado por cada acción, Node.js utiliza un **Bucle de Eventos de Hilo Único (Single-Threaded Event Loop)**. Delega las operaciones pesadas (I/O, lectura de archivos) al kernel del sistema operativo sin detenerse, logrando una **Asincronía No Bloqueante** de altísima eficiencia computacional.

### 4.3 npm: El Gestor de Paquetes
**npm (Node Package Manager)** es el administrador de dependencias predeterminado. Al instalar Node, npm permite descargar librerías externas para evitar "reinventar la rueda". Todas las dependencias de un proyecto se registran en un manifiesto vital llamado `package.json`.

---

## ⚙️ CAPÍTULO V: Instalación y Prueba del Entorno (El "Hola Mundo")

Para llevar la teoría a la práctica y empezar a programar, es imperativo configurar y validar la estación de trabajo:

**1. Instalación de Node.js y npm**
*   **Windows:** Descargar el instalador LTS (Long Term Support) desde `nodejs.org`. Durante el asistente, es obligatorio marcar la opción "Add to PATH".
*   **Linux (Ubuntu):** Ejecutar en terminal `sudo apt update && sudo apt install nodejs npm`.
*   *Verificación:* Escribir en terminal `node -v` y `npm -v` para confirmar que el sistema los reconoce.

**2. Instalación de VS Code**
*   Descargar desde `code.visualstudio.com`. Al instalar, marcar "Agregar a PATH" para poder abrir proyectos directamente desde la consola tecleando `code .`

**3. Prueba de Fuego: Tu Primer Script por Consola**
Una vez instaladas las herramientas, abre tu terminal (CMD, PowerShell o Bash) y ejecuta el siguiente comando:
```bash
node -e "console.log('¡Entorno de Ingeniería Listo!');"
```
Si la consola responde con el mensaje, habrás ejecutado exitosamente tu primer código JavaScript a través del motor V8 directamente en el sistema operativo, sin usar un navegador.

---

## 🚀 CAPÍTULO VI: De la Lógica al Código (Práctica de Traducción)

Toda la teoría de entornos y scripts tiene un único objetivo final: traducir nuestra lógica abstracta a un idioma que la máquina pueda ejecutar. Para demostrar esto, tomaremos el algoritmo de la **"Calculadora de Masas para Arepas"** (visto en la Evaluación 1) y lo convertiremos en nuestro primer programa real.

### 6.1 El Pseudocódigo Original (Repaso)
Recordemos nuestra lógica base diseñada en papel:
```text
Algoritmo CalcularMasaArepas
  Variable personas Entero;
  Variable tazas_harina, tazas_agua Real;
  
  personas = 4; // Simulamos la entrada de datos
  
  tazas_harina = personas * 0.5;
  tazas_agua = personas * 0.6;
  
  Escribir "Harina requerida: ", tazas_harina;
Fin
```

### 6.2 Integrando Entrada de Datos Reales (`prompt-sync`)
En el entorno web (navegador) existe una instrucción nativa para pedir datos al usuario, pero Node.js (al operar en la terminal) maneja las entradas de teclado de forma *asíncrona* (un concepto avanzado que verás más adelante). 

Para replicar el comportamiento directo y secuencial de nuestra instrucción `Leer()` del pseudocódigo, usaremos una librería externa. Abre la terminal integrada de VS Code y ejecuta:
```bash
npm install prompt-sync
```
**¿Por qué hacemos esto?** Estamos utilizando **npm** (el gestor de paquetes del Capítulo 4) para descargar código creado por la comunidad que nos facilita la lectura de teclado, permitiéndonos mantener nuestro código simple y estructurado de arriba hacia abajo.

### 6.3 Guía Rápida de Traducción de Algoritmos
Antes de traducir la calculadora completa, es vital entender las equivalencias exactas entre lo que escribíamos en papel y cómo se escribe en la computadora. Fíjate en el siguiente ejemplo donde importamos la librería bajo el nombre de la constante `leer`:

![Guía de Traducción de Algoritmos](file:///C:/Users/HP%20430%20G6/.gemini/antigravity/brain/d3e2905f-6023-4794-87df-6de7fbc95dcb/media__1777476313425.png)

Como puedes ver en la imagen de referencia:
*   Declarar una `Variable` pasa a ser `let`.
*   El comando `Leer` pasa a ser `leer()` (si es texto) o `parseInt(leer())` si necesitamos asegurarnos de que sea un número para hacer operaciones matemáticas.
*   El comando `Escribir` pasa a ser `console.log()`.

### 6.4 La Traducción de la Calculadora de Masas (Node.js)
Aplicando la guía anterior en tu editor, crea un archivo llamado `calculadora.js` e implementa la lógica completa:

```javascript
// Importamos la librería que acabamos de instalar
const leer = require('prompt-sync')();

// Fase 1: Entrada de Datos reales
let entrada = leer("Ingresa la cantidad de personas: ");
let personas = parseInt(entrada); // Convertimos el texto a número entero

// Fase 2: Proceso (El núcleo aritmético)
let tazasHarina = personas * 0.5;
let tazasAgua = personas * 0.6;

// Fase 3: Salida (Retroalimentación al usuario)
console.log("\n=== CALCULADORA DE MASAS ===");
console.log("Para " + personas + " personas necesitas:");
console.log("-> Harina: " + tazasHarina + " tazas.");
console.log("-> Agua: " + tazasAgua + " tazas.");
```

### 6.4 Ejecución del Script
Para que la computadora procese esta "receta", debes abrir la terminal integrada de tu editor y pasarle el archivo al intérprete:
```bash
node calculadora.js
```
*¡Felicidades! Al ver el resultado matemático en tu pantalla, acabas de completar el ciclo de la ingeniería de software: desde el diseño abstracto hasta el producto digital funcional.*

---

## 📘 ANEXO AUXILIAR: El Diagrama de Flujo

> **Nota Pedagógica:** En el entorno profesional contemporáneo, rara vez se diagraman algoritmos completos. Sin embargo, cuando la lógica condicional de un proceso es confusa, los ingenieros recurren a los diagramas de flujo como herramienta visual para "desenredar" el problema antes de escribir el código.

Si necesitas apoyarte en esta herramienta gráfica temporalmente, estos son los 5 elementos básicos estandarizados:

| Símbolo Visual | Nombre Técnico | Uso en la Lógica |
| :---: | :--- | :--- |
| **Óvalo** | **Inicio / Final** | Marca obligatoriamente dónde nace y dónde muere el algoritmo. |
| **Rectángulo** | **Proceso** | Una acción interna (ej. hacer una suma matemática, asignar una variable). |
| **Rombo** | **Decisión**| Una pregunta de *Sí/No* (Condicional `if`). Divide el flujo en caminos alternativos. |
| **Paralelogramo**| **Entrada / Salida** | Pedir datos al usuario (leer) o mostrar un resultado en pantalla (imprimir). |
| **Flechas** | **Líneas de Flujo** | Conectan los símbolos mostrando la dirección exacta en la que avanza el programa. |
