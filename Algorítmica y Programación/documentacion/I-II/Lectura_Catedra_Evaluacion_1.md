# Manual de Estudio Profundo: Evaluación 1
## Materia: Algorítmica y Programación (Trayecto I - Trimestre II)
### Eje Temático: Arquitectura Modular, Funciones y Ámbitos (Scope)

---

## 🏗️ CAPÍTULO I: El Problema del "Código Espagueti" y la Solución Modular

Durante el primer trimestre, escribimos programas de arriba hacia abajo (secuenciales) que resolvían problemas de cálculo inmediatos. Sin embargo, en el mundo real de la ingeniería, los sistemas de software tienen miles o millones de líneas de código. Si escribiéramos todo de corrido, el código se volvería ilegible, frágil e imposible de mantener: a esto se le conoce como **"Código Espagueti"**.

La **Programación Modular** surge como la cura a este caos. **Técnicamente, se define como un paradigma de diseño de software basado en la descomposición algorítmica de un sistema complejo en subprogramas más pequeños, independientes e intercambiables, denominados "módulos".** 

El objetivo arquitectónico de esta técnica es lograr una **Alta Cohesión** (cada módulo hace una sola cosa muy bien) y un **Bajo Acoplamiento** (los módulos no dependen excesivamente unos de otros), facilitando el mantenimiento, la escalabilidad y la depuración del código.

> **💡 La Analogía del Restaurante (El concepto en la vida real):** 
> En lugar de que una sola persona tome la orden, cocine, sirva la comida y cobre al cliente (Código Monolítico), la programación modular divide el trabajo: hay un mesero, un chef y un cajero. Cada uno tiene una tarea específica (**Alta Cohesión**), y si la cocina se daña, no impide que el cajero siga cobrando lo que ya se sirvió (**Bajo Acoplamiento**).

En lenguajes como JavaScript, esta separación del trabajo se logra principalmente a través de la creación y orquestación de **Funciones**.

---

## ⚙️ CAPÍTULO II: Anatomía de una Función

### 2.1 ¿Qué es una Función?
En términos prácticos, una función es un **sub-programa** o un "mini-programa" dentro de tu código principal. Es una caja negra diseñada para hacer una tarea específica:
1.  Le entregas datos crudos (**Entradas**).
2.  Hace un proceso interno protegido y aislado (**Cálculo**).
3.  Te devuelve un resultado útil (**Salida** o valor de retorno).

### 2.2 Parámetros vs. Argumentos (La trampa del principiante)
Es vital en la ingeniería de software hablar con propiedad técnica. Aunque a menudo se usan erróneamente como sinónimos, son dos conceptos muy distintos en el ciclo de vida de una función:

| Concepto | Definición Técnica | En la vida real | Ejemplo en Código |
| :--- | :--- | :--- | :--- |
| **Parámetro** | Es la variable *vacía* que la función **espera recibir** en su definición. | "Tráeme un vaso de *algo*." | `function saludar(nombre)` |
| **Argumento** | Es el valor o dato *real* que le **inyectas** a la función al invocarla. | El *agua* que viertes en el vaso. | `saludar("Ana")` |

### 2.3 La Dualidad: Funciones vs Procedimientos
*   **Procedimiento:** Ejecuta una serie de acciones pero **no devuelve** un resultado matemático o lógico (Ejemplo: `console.log("Hola, bienvenido")`).
*   **Función Pura:** Toma datos, los transforma y **obligatoriamente devuelve** un valor nuevo hacia el programa principal usando la palabra clave `return`. 

> **⚠️ Advertencia Profesional:** Si en Node.js creas una función para hacer un cálculo y olvidas colocar el `return` al final, la función hará su trabajo pero devolverá `undefined` por defecto hacia el exterior, arruinando y rompiendo tu programa principal.

---

## 🛠️ CAPÍTULO III: Declaraciones en JavaScript

JavaScript ofrece múltiples formas de crear estos "mini-programas". Las dos estructurales más importantes para este nivel son:

### 1. Declaración Clásica (Function Declaration)
Es la forma tradicional. Tiene una propiedad técnica llamada *hoisting* (elevación), lo que significa que el motor de JavaScript te permite invocarla (llamarla) incluso líneas antes de donde fue escrita.
```javascript
// Invocación (Inyectando los Argumentos 5 y 10)
const total = calcularArea(5, 10); 

// Definición (Declarando los Parámetros base y altura)
function calcularArea(base, altura) {
  return base * altura;
}
```

### 2. Funciones Flecha (Arrow Functions - ES6)
Es el estándar moderno de la industria desde 2015. Ofrece una sintaxis mucho más limpia y analítica. **No tienen hoisting**, por lo que es obligatorio crearlas y guardarlas en memoria antes de poder utilizarlas, lo que fuerza un código más ordenado.
```javascript
// Función Flecha tradicional con bloque de llaves
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};

// Función Flecha compacta (retorno implícito matemático, ideal para una sola línea)
const sumar = (a, b) => a + b;
```

---

## 🛡️ CAPÍTULO IV: El Ámbito de las Variables (Scope)

El concepto de ámbito (Scope) dicta **dónde nace, dónde vive y dónde muere una variable**. Entender esto evita el 90% de los errores silenciosos en la programación modular.

### 4.1 La Regla de Las Vegas (Ámbito Local o de Bloque)
*"Lo que se declara dentro de una función, se queda y muere dentro de la función."*
Las variables creadas con `let` o `const` dentro de unas llaves `{}` son **invisibles** para el resto del programa. Esto es una ventaja masiva de seguridad: aísla y protege los datos.

```javascript
function procesarPago() {
    let saldoSecreto = 5000; // Variable de Ámbito Local
    console.log("Procesando pago...");
}

procesarPago();
// Intentar acceder desde afuera genera una ruptura de seguridad (Crash)
console.log(saldoSecreto); // ❌ ERROR FATAL: saldoSecreto is not defined
```

### 4.2 El Peligro del Ámbito Global
Las variables declaradas libremente, fuera de cualquier función, viven en el **Ámbito Global**. Todo el programa puede verlas y, lo que es peor, **modificarlas**.

> **🛑 Alarma de Ingeniería (Bad Practice):** Usar variables globales indiscriminadamente es una práctica repudiada en la industria. Crea "colisiones de nombres", donde una función (ej. `validarUsuario()`) modifica accidentalmente el dato que necesitaba otra función (ej. `procesarCompra()`), causando *bugs* casi imposibles de rastrear. Acostúmbrate a aislar todo dentro de funciones y pasar la información utilizando exclusivamente **parámetros** y **retornos**.

---

## 📦 CAPÍTULO V: Sistemas de Módulos (CommonJS vs. ES Modules)

Un sistema de módulos es el estándar que dicta cómo el código escrito en un archivo (módulo) puede ser encapsulado, exportado y posteriormente importado por otro archivo. En el ecosistema de Node.js, la arquitectura se divide históricamente en dos grandes estándares:

- **CommonJS (CJS):** Es el sistema de módulos original y tradicional que le dio vida a Node.js. Su característica técnica principal es que su mecanismo de carga es **síncrono**; es decir, el hilo de ejecución se bloquea hasta que el módulo requerido es leído y cargado completamente desde el disco duro a la memoria RAM. Utiliza la función `require()` para importar dependencias y el objeto `module.exports` para exponer la lógica. Dado su diseño síncrono, es altamente eficiente para arquitecturas de servidor (backend), pero inoperante en entornos de navegador web.
- **ECMAScript Modules (ESM):** Es el estándar oficial moderno introducido en la especificación ES6. A diferencia de CommonJS, el sistema ESM es **asíncrono** y de análisis estático. Esto significa que el motor de JavaScript (como V8) puede analizar el árbol de dependencias *antes* de ejecutar el código, habilitando optimizaciones críticas a nivel de compilación, como el *tree-shaking* (la eliminación automática de código que fue exportado pero nunca utilizado). Utiliza las palabras clave `import` y `export`. ESM representa la unificación definitiva del lenguaje, ya que es soportado nativamente tanto por Node.js como por los navegadores web modernos.

**Ejemplo CommonJS:**
```javascript
// util.js
module.exports.sumar = (a, b) => a + b;

// main.js
const { sumar } = require('./util');
```

**Ejemplo ES Modules:**
```javascript
// util.mjs
export const sumar = (a, b) => a + b;

// main.mjs
import { sumar } from './util.mjs';
import { readFile } from 'node:fs/promises'; // Prefijo node: recomendado en 2025
```

> **⚠️ Configuración Obligatoria (Transición a ESM):**
> A partir de este trimestre, el estándar de la cátedra será **ES Modules**. Para que Node.js entienda que estás usando ESM en tus archivos, debes asegurarte de que tu archivo `package.json` tenga la propiedad `"type": "module"`.

**Migración de nuestro entorno (`prompt-sync` a ESM):**
Hasta ahora usábamos `require()` para importar nuestra librería de consola. Al migrar a ESM, la sintaxis arquitectónica cambia. Así es como debes importar `prompt-sync` de ahora en adelante en todos tus laboratorios:

```javascript
// 1. Importamos la librería por defecto usando sintaxis ESM
import PromptSync from 'prompt-sync';

// 2. Inicializamos el motor de captura
const prompt = PromptSync();

// 3. Ya podemos usarlo normalmente
let edad = prompt("Ingresa tu edad: ");
console.log(`Edad registrada: ${edad}`);
```

### 5.1 Patrones Modulares Clave
- **Singleton:** Garantiza una única instancia compartida (útil para conexiones a bases de datos).
- **Factory:** Crea objetos dinámicamente según parámetros de entrada sin exponer la lógica de creación.
- **Revealing Module:** Usa cierres para ocultar variables privadas y exponer solo una interfaz pública controlada.

---

## 🏁 CAPÍTULO VI: Conclusiones Técnicas y Directrices
La programación modular en JavaScript requiere una integración profunda de conceptos de ámbito, gestión de memoria y diseño de funciones. Para construir sistemas escalables, se recomienda:
- **Priorización de Funciones Puras:** Minimizar los efectos secundarios para lograr una arquitectura predecible y fácil de testar.
- **Encapsulamiento mediante Cierres:** Utilizar ámbitos locales para ocultar la complejidad interna y exponer interfaces mínimas.
- **Uso de Estándares Modernos (ESM):** Adoptar `import`/`export` para beneficiarse de optimizaciones como el *tree-shaking*.
- **Gestión de Parámetros:** Recordar que los primitivos se pasan por valor y los objetos por referencia (dirección de memoria), lo que puede causar mutaciones accidentales si no se gestiona con precaución.

En última instancia, la maestría en JavaScript reside en la capacidad de orquestar estas unidades modulares de manera que el sistema total sea mayor que la suma de sus partes.
