# Manual de Estudio Profundo: Evaluación 4
## Materia: Algorítmica y Programación
### Eje Temático: Pilas, Colas y Árboles

---

## 🧭 Introducción: Arquitectura de Reglas Estrictas
Hasta ahora hemos estudiado la Lista Enlazada como una estructura libre, donde puedes insertar y borrar elementos en cualquier posición. Sin embargo, muchos problemas en ciencias de la computación requieren **disciplina**. A veces necesitamos forzar restricciones sobre *dónde* y *cómo* los datos pueden entrar o salir de una estructura.

Al someter una lista enlazada (o un arreglo) a reglas estrictas de entrada y salida, creamos lo que se conoce como un **Tipo de Dato Abstracto (TDA)**. Hoy exploraremos tres TDA legendarios: Pilas, Colas y Árboles, herramientas esenciales que hacen funcionar al propio sistema operativo y a la web.

---

## 🏛️ CAPÍTULO I: La Pila (Stack) - El Último es el Rey

Una Pila es una estructura de datos secuencial que sigue la filosofía estricta **LIFO (Last In, First Out - Último en entrar, Primero en salir)**.
Imagina un dispensador de platos de una cafetería o la bandeja de entrada de hojas en una impresora: solo puedes añadir platos en la parte superior y solo puedes sacar platos desde la misma parte superior.

### 1.1 Operaciones Básicas
- **Push (Apilar):** Añade un elemento al tope superior de la pila.
- **Pop (Desapilar):** Retira y devuelve el elemento que está en el tope superior.
- **Peek/Top (Cima):** Observa cuál es el elemento del tope sin retirarlo.

### 1.2 Casos de Uso Reales
- **El botón "Deshacer" (Ctrl+Z):** Tu editor de texto mete cada cambio en un Stack. Al darle "Deshacer", saca el último cambio (Pop).
- **Historial del Navegador:** Vas guardando páginas visitadas (Push). Al presionar el botón "Atrás", desapilas la última.
- **El Call Stack del procesador:** Como vimos en recursividad.

---

## 🧩 CAPÍTULO II: La Cola (Queue) - Justicia y Orden

Una Cola es una estructura secuencial basada en la filosofía **FIFO (First In, First Out - Primero en entrar, Primero en salir)**.
Es exactamente igual que hacer la fila en el supermercado o en el banco. Quien llega primero, es atendido primero. La inserción ocurre por un extremo (Atrás/Cola) y la salida por el extremo opuesto (Frente).

### 2.1 Operaciones Básicas
- **Enqueue (Encolar):** Inserta un elemento en la parte trasera de la cola.
- **Dequeue (Desencolar):** Retira y devuelve el elemento en el frente de la cola.

### 2.2 Casos de Uso Reales
- **Cola de Impresión:** Mandas 5 documentos a imprimir; la impresora los procesa en el orden exacto en que llegaron.
- **Servidores Web (Node.js/Express):** Cuando el servidor recibe miles de peticiones de usuarios, las encola (Event Loop) y atiende una por una.
- **Gestión de Hilos y Tareas en el Sistema Operativo.**

---

## 🏗️ CAPÍTULO III: Árboles - Estructuras Jerárquicas No Lineales

Pilas y Colas son estructuras "Lineales" (secuenciales). Sin embargo, hay información en el mundo real que es jerárquica (genealogías, organigramas corporativos). Para eso usamos los **Árboles**.

Un árbol está compuesto de nodos (como las listas enlazadas), pero en lugar de tener "un siguiente", un nodo puede apuntar a *varios* nodos inferiores (hijos).

### 3.1 Nomenclatura del Árbol (Términos Botánicos y Familiares)
- **Raíz (Root):** El nodo principal superior, único nodo sin "padre".
- **Hijos (Children):** Nodos descendientes directos de otro nodo.
- **Hojas (Leaves):** Nodos en los extremos del árbol que *no tienen* hijos.
- **Profundidad/Altura:** Número de niveles desde la raíz hasta la hoja más profunda.

### 3.2 El Árbol Binario de Búsqueda (BST)
Es la variante más famosa. Sus reglas son:
1. Cada nodo puede tener máximo 2 hijos (Izquierdo y Derecho).
2. Todo hijo izquierdo debe ser **menor** que su padre.
3. Todo hijo derecho debe ser **mayor** que su padre.

**¿Por qué es revolucionario?** Porque permite buscar datos a velocidades asombrosas. Si buscas el número 50 en un árbol y la raíz es 100, automáticamente descartas toda la mitad derecha del árbol entero. Esta estructura es la base de los motores de bases de datos relacionales (como MySQL).

---

## 💻 Laboratorio: Implementando una Pila en JS (Sin Arreglos)

Para dominar verdaderamente cómo funciona la memoria, está prohibido usar el objeto nativo `Array` de JavaScript (`[]`). Construiremos nuestras estructuras a bajo nivel utilizando **Nodos enlazados** (objetos literales) y **Factory Functions**.

### Ejemplo de Pila (Stack) LIFO

```javascript
// Factory Function para el Nodo
function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

// Puntero global al tope de la pila
let tope = null;

// Apilar (Push): El nuevo nodo entra por arriba
function apilar(dato) {
    let nuevoNodo = crearNodo(dato);
    nuevoNodo.siguiente = tope;
    tope = nuevoNodo;
}

// Desapilar (Pop): Sale el que está más arriba
function desapilar() {
    if (tope === null) return "La pila está vacía";
    let datoExtraido = tope.dato;
    tope = tope.siguiente; // El tope baja al siguiente nodo
    return datoExtraido;
}

// Uso:
apilar("Página Inicio");
apilar("Página Contacto");
apilar("Página Productos");

console.log(desapilar()); // Sale "Página Productos" (El último que entró)
```

### Ejemplo de Cola (Queue) FIFO

```javascript
// Factory Function (la misma de la pila sirve)
function crearNodo(dato) {
    return { dato: dato, siguiente: null };
}

// Necesitamos dos punteros para una cola eficiente
let frente = null;
let final = null;

// Encolar (Enqueue): Entra por el final de la fila
function encolar(dato) {
    let nuevoNodo = crearNodo(dato);
    if (final === null) {
        // Si la cola estaba vacía, el nuevo es tanto el frente como el final
        frente = nuevoNodo;
        final = nuevoNodo;
    } else {
        // Se añade detrás del último y se actualiza el puntero final
        final.siguiente = nuevoNodo;
        final = nuevoNodo;
    }
}

// Desencolar (Dequeue): Sale por el frente de la fila
function desencolar() {
    if (frente === null) return "La cola está vacía";
    let datoExtraido = frente.dato;
    frente = frente.siguiente; // El frente avanza al siguiente
    
    // Si al sacar el elemento la cola quedó vacía, limpiamos el final
    if (frente === null) {
        final = null;
    }
    return datoExtraido;
}

// Uso:
encolar("Cliente 1");
encolar("Cliente 2");
encolar("Cliente 3");

console.log(desencolar()); // Sale "Cliente 1" (El primero que llegó)
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **TDA (Tipo de Dato Abstracto):** Modelo matemático de una estructura de datos que especifica su comportamiento (semántica) mediante operaciones definidas, independientemente de su implementación física subyacente.
- **LIFO (Last In, First Out):** Paradigma de procesamiento secuencial donde el último ítem registrado es mandatoriamente el primer ítem en ser extraído.
- **FIFO (First In, First Out):** Paradigma de procesamiento donde los elementos se extraen en estricto orden cronológico de llegada.
- **Stack (Pila):** TDA lineal de acceso restringido basado en LIFO, operado primordialmente mediante directivas Push y Pop en un solo extremo.
- **Queue (Cola):** TDA lineal de acceso restringido basado en FIFO, operado en dos extremos segregados (frente de salida, cola de entrada).
- **Árbol (Tree):** Estructura de datos no lineal, acíclica y jerárquica, compuesta por nodos conectados mediante aristas dirigidas desde una raíz única.
- **Árbol Binario de Búsqueda (BST):** Árbol jerárquico donde la aridad máxima es dos, estructurado algorítmicamente para mantener valores menores en subárboles izquierdos y mayores en derechos, optimizando la complejidad de búsqueda a O(log n).
