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

## 💻 Laboratorio: Implementando una Pila en JS

Aunque podemos crear una Pila usando Objetos y Nodos manuales, en JS es muy común aprovechar un Arreglo para simularla, ya que los métodos nativos `push` y `pop` respetan la filosofía LIFO.

```javascript
class Pila {
    constructor() {
        this.items = []; // Usaremos un arreglo interno como almacenamiento
    }

    // Apilar (Push)
    apilar(elemento) {
        this.items.push(elemento); // Se añade al final del arreglo
    }

    // Desapilar (Pop)
    desapilar() {
        if (this.estaVacia()) return "La pila está vacía";
        return this.items.pop(); // Retira del final
    }

    estaVacia() {
        return this.items.length === 0;
    }
}

// Uso:
const historial = new Pila();
historial.apilar("Página Inicio");
historial.apilar("Página Contacto");
historial.apilar("Página Productos");

console.log(historial.desapilar()); // Sale "Página Productos" (El último que entró)
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
