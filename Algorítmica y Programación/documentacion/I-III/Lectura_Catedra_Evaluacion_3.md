# Manual de Estudio Profundo: Evaluación 3
## Materia: Algorítmica y Programación
### Eje Temático: Recursividad

---

## 🧭 Introducción: El Efecto Inception
La programación nos ha enseñado que los problemas repetitivos se resuelven mediante estructuras iterativas (bucles `for` y `while`). Sin embargo, existe una alternativa profunda, elegante y matemática que desafía nuestra forma lineal de pensar: **La Recursividad**.

La recursividad ocurre cuando algo se define en términos de sí mismo. En programación, decimos que una función es recursiva cuando **se llama a sí misma** dentro de su propio bloque de código para resolver un problema de forma fraccionada. Imagina colocar dos espejos frente a frente; la imagen se repite infinitamente, pero en programación, debemos asegurarnos de que ese "espejo" tenga un punto final lógico.

---

## 🏛️ CAPÍTULO I: Las Leyes de la Recursividad

Un algoritmo recursivo exitoso es un delicado equilibrio. Si falla una de estas dos leyes fundamentales, el programa entrará en un ciclo infinito y colapsará la memoria (el famoso *Stack Overflow* o Desbordamiento de Pila).

### 1.1 El Caso Base (La Condición de Parada)
Todo algoritmo recursivo necesita un punto donde decir "¡Basta!". El caso base es el escenario más simple posible del problema, uno que se puede resolver inmediatamente sin necesidad de volver a llamarse a sí mismo.
*Si olvidas el caso base, la función se llamará eternamente.*

### 1.2 El Caso Recursivo (El Paso Inductivo)
Es la parte donde la función se invoca a sí misma, pero con un detalle crucial: **debe llamarse con parámetros que la acerquen cada vez más al Caso Base**. Cada llamada recursiva debe procesar un fragmento más pequeño del problema original.

---

## 🧩 CAPÍTULO II: Entendiendo el Call Stack (La Pila de Llamadas)

Para comprender por qué funciona la recursividad, hay que entender cómo el procesador gestiona las funciones. 

Cuando una función `A` llama a una función `B`, el procesador pausa la ejecución de `A`, guarda su estado actual en el **Call Stack** (una pila LIFO en la RAM) y empieza a ejecutar `B`. Cuando `B` termina, el procesador saca a `A` de la pila y continúa donde lo dejó.

En la recursividad, la función se llama a sí misma. Esto apila copias exactas de la misma función (con diferentes valores de variables) en la memoria, una sobre otra. Cuando se alcanza el **Caso Base**, la ejecución se detiene y la pila comienza a resolverse "desenrollándose" (Unwinding) de arriba hacia abajo, entregando los resultados de cada sub-llamada.

> [!WARNING]
> **Costo Computacional:** Cada vez que una función se apila, consume memoria RAM real. Si el caso base tarda 100,000 iteraciones en llegar, la RAM se llenará de 100,000 contextos congelados y el programa "reventará". Por eso, la recursividad no siempre es la solución óptima para operaciones masivas.

---

## 🏗️ CAPÍTULO III: Ventajas, Desventajas y Aplicaciones

### Ventajas (¿Por qué usarla?)
- **Elegancia Matemática:** Traduce fórmulas matemáticas complejas (como las sucesiones) a código muy limpio y corto.
- **Problemas Arbóreos:** Es la forma natural y obligatoria de recorrer estructuras de datos no lineales, como el DOM de una página web, sistemas de archivos de Windows/Linux o Árboles Binarios.
- **Divide y Vencerás:** Permite aplicar algoritmos avanzados de ordenamiento rápido como *QuickSort* o *MergeSort*.

### Desventajas
- Alto consumo de memoria (Call Stack) en problemas de gran volumen.
- Más difícil de depurar mentalmente para programadores novatos.

---

## 💻 Laboratorio: El Clásico Algoritmo Factorial

El factorial de un número (n!) es la multiplicación de ese número por todos sus enteros positivos inferiores.
Ejemplo: `5! = 5 * 4 * 3 * 2 * 1 = 120`.

Matemáticamente, se puede definir de forma recursiva: `n! = n * (n-1)!`

Veamos cómo se traduce a código JS:

```javascript
function calcularFactorial(n) {
    // 1. EL CASO BASE: Si llegamos a 0 o 1, sabemos que la respuesta es 1. ¡Paramos aquí!
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // 2. EL CASO RECURSIVO: Multiplicamos 'n' por el resultado de llamarnos a nosotros mismos con 'n-1'.
    // Esto asegura que cada vez nos acercamos más al caso base.
    return n * calcularFactorial(n - 1);
}

// Prueba:
console.log(calcularFactorial(5)); // Imprime 120
```

**Análisis de la Pila (Unwinding) para `calcularFactorial(3)`:**
1. Llama a `f(3)`. Retorna `3 * f(2)`. (Queda en espera)
2. Llama a `f(2)`. Retorna `2 * f(1)`. (Queda en espera)
3. Llama a `f(1)`. ¡CASO BASE! Retorna `1`.
4. Se "desenrolla": `f(2)` recibe el `1` y calcula `2 * 1 = 2`.
5. Se "desenrolla": `f(3)` recibe el `2` y calcula `3 * 2 = 6`. Resultado final.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Recursividad:** Propiedad computacional mediante la cual una subrutina o procedimiento se invoca a sí misma durante su propia ejecución para resolver un problema en fragmentos de complejidad decreciente.
- **Caso Base:** Condición lógica terminal en una función recursiva que detiene las auto-invocaciones y permite que el Call Stack inicie la resolución y retorno de valores (unwinding).
- **Caso Recursivo:** Fragmento lógico donde la función se auto-invoca pasando parámetros modificados que garanticen la convergencia hacia el Caso Base.
- **Call Stack (Pila de Llamadas):** Estructura de memoria estática (LIFO) administrada por el hilo de ejecución que almacena el contexto, parámetros y punto de retorno de las rutinas activas en un programa.
- **Stack Overflow (Desbordamiento de Pila):** Excepción crítica de sistema producida cuando el número de invocaciones anidadas excede el límite físico de memoria asignada al Call Stack, comúnmente causado por la ausencia o mal diseño de un Caso Base.
