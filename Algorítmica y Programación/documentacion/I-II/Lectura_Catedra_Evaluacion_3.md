# Manual de Estudio Profundo: Evaluación 3
## Materia: Algorítmica y Programación (Trayecto I - Trimestre II)
### Eje Temático: Arreglos Bidimensionales (Matrices) y Manipulación de Cadenas

---

## 🎲 CAPÍTULO I: La Dimensión Adicional (Matrices)

En la evaluación anterior estudiamos los **Arreglos Unidimensionales (Vectores)**, los cuales podemos visualizar como una sola línea de compartimentos (como un pastillero o una fila de pupitres). 

Sin embargo, muchos problemas de procesamiento en la ingeniería de software no son lineales. Piensa en un tablero de ajedrez, en una hoja de cálculo de Excel o en los píxeles de un monitor. Todos estos elementos de la vida real tienen **ancho y alto**.

Aquí es donde nacen los **Arreglos Bidimensionales o Matrices**.

### 1.1 Definición Técnica de una Matriz
En programación, una matriz es un dato estructurado de dos dimensiones. Técnicamente hablando, en lenguajes como JavaScript, una matriz es simplemente **un arreglo que contiene otros arreglos dentro de sí**.

Geométricamente, la visualizamos como una cuadrícula o tabla, dividida estrictamente en **Filas (Rows)** horizontales y **Columnas (Columns)** verticales.

> **💡 La Analogía del Edificio de Apartamentos:**
> Imagina un edificio. Un Arreglo Unidimensional es como una sola calle con casas a los lados: para entregar una carta solo necesitas el número de la casa (un solo índice). 
> 
> Una Matriz, en cambio, es como el edificio: para entregar una carta necesitas saber el **Piso (Fila)** y luego el **Número del Apartamento en ese piso (Columna)**. Necesitas obligatoriamente **dos coordenadas** para no perderte.

---

## 🗄️ CAPÍTULO II: Coordenadas y Acceso a Memoria

### Sintaxis de Declaración
Para crear una matriz en código, abrimos los corchetes principales `[]` y dentro colocamos otros sub-corchetes separados por comas.

```javascript
// Declaramos una matriz de 3 filas y 3 columnas (3x3)
let tablero = [
    [10, 20, 30], // Fila 0
    [40, 50, 60], // Fila 1
    [70, 80, 90]  // Fila 2
];
```

### El Sistema de Doble Índice `[Fila][Columna]`
La regla de oro de las matrices es que **siempre se invoca primero a la fila (el eje Y vertical) y luego a la columna (el eje X horizontal)**. Ambos índices, obedeciendo la Regla del Cero, comienzan siempre en 0.

```javascript
// Accediendo a datos específicos a través de coordenadas espaciales:
console.log(tablero[0][0]); // Salida: 10 (Fila 0, Columna 0)
console.log(tablero[1][2]); // Salida: 60 (Fila 1, Columna 2)

// Mutando un dato específico
tablero[2][1] = 99; // Reemplaza el 80 por un 99 en memoria
```

> **⚠️ Advertencia Profesional:** Al igual que con los vectores, intentar acceder a una fila o columna que excede los límites declarados (`tablero[5][5]`) causará un fallo de acceso a memoria, devolviendo `undefined` y colapsando cualquier matemática que dependa de ese valor.

---

## ⚙️ CAPÍTULO III: El Motor de las Matrices (Bucles Anidados)

Si para automatizar el recorrido de un Vector necesitábamos un bucle `for`, para recorrer una Matriz (que tiene dos dimensiones) necesitamos obligatoriamente **dos bucles `for`, uno dentro del otro (Bucles Anidados)**.

El bucle externo (el "padre") siempre controla el avance de las **filas**, y el bucle interno (el "hijo") controla el avance de las **columnas**.

### Recorrido Completo (Lectura de la Cuadrícula)
Para el **Examen Escrito**, dominar la "prueba de escritorio" (rastreo mental) de este código es obligatorio. Debes entender que por cada `1` vez que avanza la fila, la columna hace su ciclo de vida completo de inicio a fin.

```javascript
// Tenemos una matriz 3x3 de IDs
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Bucle Externo: Recorre los "Pisos" (Filas)
for (let fila = 0; fila < 3; fila++) {
    
    // Bucle Interno: Recorre los "Apartamentos" (Columnas) de ese Piso
    for (let col = 0; col < 3; col++) {
        
        console.log(`Posición [${fila}][${col}] contiene: ${matriz[fila][col]}`);
        
    }
}
```

---

## 📝 CAPÍTULO IV: Cadenas de Caracteres (El Texto como un Arreglo)

En la ciencia de la computación, un texto largo (`"Hola Mundo"`) no es un ente indivisible. Técnicamente, cualquier texto (String) es **un Arreglo Unidimensional de Caracteres**. 

Esto significa que la palabra `"Hola"` es en realidad procesada como la lista `['H', 'o', 'l', 'a']`. Por lo tanto, ¡podemos aplicarle el poder de los índices!

```javascript
let saludo = "Ingeniería";

// Podemos acceder a letras individuales con corchetes, base cero
console.log(saludo[0]); // Salida: "I"
console.log(saludo[4]); // Salida: "n"
```

### Funciones Nativas (Métodos) para Manipular Cadenas
El procesamiento de texto es vital para interactuar con bases de datos y usuarios. El lenguaje incluye herramientas (métodos pre-programados) para manipular cadenas fácilmente:

1. **`length` (Longitud):** Devuelve la cantidad total de caracteres (incluyendo espacios vacíos).
   ```javascript
   let palabra = "Universidad";
   console.log(palabra.length); // Salida: 11
   ```

2. **`substring(inicio, fin)` (Subcadena):** Corta y extrae un pedazo del texto original desde un índice de inicio hasta un índice final (exclusivo).
   ```javascript
   let texto = "JavaScript";
   let pedazo = texto.substring(0, 4); // Extrae del índice 0 al 3
   console.log(pedazo); // Salida: "Java"
   ```

3. **Concatenación (Unión de Cadenas):** Es la capacidad de "sumar" piezas de texto. Se recomienda siempre usar la sintaxis moderna de *Template Literals* (backticks `` ` ``).
   ```javascript
   let nombre = "Juan";
   let apellido = "Pérez";
   
   // Forma moderna y profesional (Interpolación)
   let reporte = `El usuario registrado es: ${nombre} ${apellido}`; 
   ```

---

## 🧰 CAPÍTULO V: Funciones Nativas (Vistazo a la Industria)

A lo largo del trimestre te hemos exigido construir algoritmos manualmente (usando bucles `for` y condicionales `if`) para insertar, buscar o procesar datos. En un **Examen Escrito**, esta es la única forma válida de resolver un problema, ya que demuestra que tu lógica computacional fundamental es sólida. 

Sin embargo, a nivel industrial, los lenguajes modernos incluyen "funciones pre-fabricadas" (llamadas **métodos**) que ejecutan estos algoritmos complejos internamente en milisegundos, ahorrándote el trabajo manual:

1. **`.push(valor)` (Inyectar al final):** Agrega un nuevo "compartimento" al final de un arreglo sin tener que calcular el índice manualmente.
   ```javascript
   let colores = ["Rojo", "Azul"];
   colores.push("Amarillo");
   console.log(colores); // ["Rojo", "Azul", "Amarillo"]
   ```

2. **`.pop()` (Extraer del final):** Elimina y destruye el último elemento del arreglo, reduciendo su tamaño en memoria.
   ```javascript
   colores.pop();
   console.log(colores); // ["Rojo", "Azul"]
   ```

3. **El Arsenal Profesional (Mención Honorífica):** En la industria del software, rara vez se programan desde cero los algoritmos estándar. Las estructuras de datos modernas vienen con un poderoso conjunto de herramientas integradas. Aunque **no las usarás en tu examen escrito** (pues debes demostrar tu lógica con bucles manuales), es vital que conozcas su existencia teórica:

   **A. Métodos de Búsqueda Automática:**
   Reemplazan la necesidad de hacer un bucle `for` y un `if` para buscar datos:
   - **`.includes(valor)`**: Le preguntas al arreglo si contiene un dato específico. Responde rápidamente con `true` (sí está) o `false` (no está).
   - **`.indexOf(valor)`**: Busca un dato y te devuelve exactamente en qué **número de índice** (coordenada) se encuentra. Si no existe, devuelve un `-1`.

   **B. Métodos de Mutación Rápida:**
   Al igual que `push` y `pop` alteran el final del arreglo, estos alteran otras partes:
   - **`.unshift(valor)`**: Inyecta un dato nuevo exactamente en la **posición 0** (el principio), empujando de forma automática todos los demás elementos un espacio hacia la derecha.
   - **`.shift()`**: Extrae y elimina el **primer elemento** (el del índice 0), rodando todos los demás hacia la izquierda para tapar el hueco.
   - **`.splice(inicio, cantidad)`**: Es el bisturí de los arreglos. Permite "operar" el arreglo abriéndolo por el medio para insertar o extirpar elementos en cualquier índice específico.
   - **`.reverse()`**: Invierte físicamente todo el arreglo; el primer elemento pasa a ser el último y el último pasa a ser el primero.

   **C. Métodos de Programación Funcional (El fin del bucle `for`):**
   Son los métodos más avanzados y demandados. Recorren el arreglo internamente a alta velocidad:
   - **`.forEach()`**: Recorre automáticamente el arreglo de inicio a fin y ejecuta una instrucción específica por cada "compartimento" que visita.
   - **`.map()`**: Recorre todo el arreglo, le aplica una transformación matemática o lógica a cada elemento, y **crea un arreglo completamente nuevo** con los resultados (sin dañar el original).
   - **`.filter()`**: Funciona como un colador. Recorre el arreglo evaluando una condición y **crea un arreglo nuevo** que contiene únicamente los elementos que "pasaron la prueba" (ideal para hacer sistemas de búsqueda).
   - **`.reduce()`**: Recorre el arreglo y va "aplastando" o acumulando todos sus valores iteración tras iteración, hasta reducirlos a un único resultado final (ej. la suma total de un carrito de compras masivo).

### Pasando Estructuras a nuestras Funciones (Modularidad)
Conectando con la **Evaluación 1**, puedes crear funciones modulares que reciban una Matriz o un Vector entero como parámetro para procesarlo.

> **🛑 Alarma de Ingeniería (Paso por Referencia):**
> Cuando pasas una variable primitiva (ej. un número) a una función, se le pasa una "copia" (Paso por Valor). Pero cuando pasas una Estructura de Datos (Matriz o Arreglo), estás pasando la **Dirección de Memoria Original** (Paso por Referencia). ¡Si tu función altera la estructura por dentro, la estructura original también sufrirá esos cambios por fuera!

> **📌 Resumen de Cátedra para el Examen:**
> Para aprobar el examen escrito, debes estar en la absoluta capacidad lógica de rastrear mentalmente cómo cambian las variables `fila` y `columna` (`i`, `j`) en un bucle anidado. Asimismo, nunca olvides que cada letra en una cadena de texto es un compartimento de memoria indexado que siempre comienza en el número CERO.
