# Manual de Estudio Profundo: Evaluación 2
## Materia: Algorítmica y Programación
### Eje Temático: Listas Enlazadas

---

## 🧭 Introducción: Rompiendo el Molde Estático
Hasta ahora, hemos utilizado **Arreglos (Arrays)** para almacenar colecciones de datos. Si bien en JavaScript los arreglos son dinámicos y mágicos, internamente, un arreglo clásico en informática es una estructura de datos estática y **contigua** en memoria. Esto significa que si creas un arreglo de 10 elementos, la RAM reserva un bloque ininterrumpido de 10 espacios. 

¿El problema? Si necesitas insertar un dato en el medio del arreglo, el procesador debe "empujar" todos los elementos siguientes una posición a la derecha. Esto es computacionalmente muy costoso.

Para resolver esto nacen las **Estructuras Dinámicas Dispersas**, siendo la más fundamental de todas: **La Lista Enlazada**.

---

## 🏛️ CAPÍTULO I: Anatomía del Nodo

En una lista enlazada, los elementos no se guardan en bloques contiguos de memoria. Pueden estar dispersos por todo el Heap. ¿Cómo saben entonces cuál es el siguiente elemento? Gracias a los **Nodos**.

Un Nodo es la unidad básica de una lista enlazada y se compone de dos partes esenciales:
1.  **El Dato (Payload):** La información útil que queremos almacenar (un número, un string, un objeto).
2.  **El Enlace (Referencia / Puntero):** Una referencia de memoria que apunta al *siguiente* nodo en la secuencia.

> [!TIP]
> Imagina una búsqueda del tesoro. El Nodo es un trozo de papel. En el papel está escrito el "Tesoro" (Dato) y "La dirección del siguiente trozo de papel" (Enlace). Nunca sabes dónde está todo el recorrido, solo puedes saltar de pista en pista.

---

## 🧩 CAPÍTULO II: Listas Simplemente Enlazadas (Singly Linked Lists)

Es la variante más básica. La lista tiene un nodo de entrada llamado **Cabeza (Head)**. Desde la Cabeza, los nodos apuntan hacia adelante en una sola dirección hasta llegar al último nodo, cuyo enlace apunta a `null` (indicando el final del camino).

### 2.1 Ventajas y Desventajas
- **Ventajas:** Insertar y eliminar elementos al inicio (o en posiciones conocidas) es extremadamente rápido (O(1)). No hay que reorganizar toda la memoria, solo cambiar una "flecha" (referencia).
- **Desventajas:** No tienen acceso aleatorio. No puedes pedir "el elemento número 5" instantáneamente (como harías con `arreglo[4]`). Debes empezar desde la Cabeza y seguir las flechas 5 veces.

### 2.2 Operaciones Fundamentales
- **Recorrer (Traverse):** Empezar en Head, hacer un ciclo `while(nodoActual != null)` e ir saltando `nodoActual = nodoActual.siguiente`.
- **Insertar al inicio:** Crear un nuevo nodo, hacer que su "siguiente" apunte al Head actual, y convertir este nuevo nodo en el nuevo Head.

---

## 🏗️ CAPÍTULO III: Variantes Avanzadas

### 3.1 Listas Doblemente Enlazadas (Doubly Linked Lists)
¿Y si mientras saltas por la lista necesitas retroceder? En la lista simple no puedes; tendrías que volver a empezar desde la Cabeza.
Para solucionarlo, el Nodo Doble tiene tres partes:
- El Dato.
- Enlace al Siguiente (`next`).
- Enlace al Anterior (`prev`).

Esto consume un poco más de memoria, pero permite iterar de ida y vuelta.

### 3.2 Listas Circulares
Son listas donde el último nodo (la cola), en lugar de apuntar a `null`, apunta de regreso al primer nodo (la cabeza). Creando un anillo cerrado. Muy útil para sistemas de turnos, juegos de mesa por turnos o algoritmos de sistema operativo (Round-Robin).

---

## 💻 Laboratorio: Implementación en JavaScript

Construyamos una Lista Simplemente Enlazada manual usando programación orientada a objetos básica para entender el motor interno.

```javascript
// Clase que representa la unidad básica
class Nodo {
    constructor(dato) {
        this.dato = dato;     // El valor
        this.siguiente = null; // Referencia al siguiente Nodo (Empieza apuntando a la nada)
    }
}

// Clase gestora de la estructura
class ListaEnlazada {
    constructor() {
        this.head = null; // La entrada a la lista
    }

    // Operación: Añadir al inicio (O(1))
    insertarInicio(dato) {
        let nuevoNodo = new Nodo(dato);
        nuevoNodo.siguiente = this.head; // El nuevo apunta al viejo inicio
        this.head = nuevoNodo;           // El nuevo es ahora el inicio oficial
    }

    // Operación: Recorrer e Imprimir (O(n))
    imprimir() {
        let actual = this.head;
        let resultado = "";
        while (actual !== null) {
            resultado += `[ ${actual.dato} ] -> `;
            actual = actual.siguiente; // Saltar al siguiente nodo
        }
        console.log(resultado + "null");
    }
}

// Uso práctico:
const miLista = new ListaEnlazada();
miLista.insertarInicio(10);
miLista.insertarInicio(20);
miLista.insertarInicio(30);

miLista.imprimir(); 
// Salida: [ 30 ] -> [ 20 ] -> [ 10 ] -> null
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Estructura Dinámica:** Colección de datos cuyo tamaño en memoria no está predefinido y puede modificarse libremente durante la ejecución del programa.
- **Nodo:** Unidad estructural de almacenamiento en una lista enlazada, compuesta por un segmento de datos y al menos un puntero de referencia lógica a otro nodo.
- **Lista Simplemente Enlazada:** Estructura dinámica unidireccional donde cada nodo mantiene una única referencia al elemento secuencialmente posterior.
- **Head (Cabeza):** Puntero de referencia raíz que indica la dirección de memoria del primer nodo válido en una lista enlazada.
- **Null:** Valor lógico que representa la nulidad intencional de una referencia. En listas, marca la terminación de la secuencia.
- **Lista Doblemente Enlazada:** Estructura dinámica bidireccional donde cada nodo contiene referencias explícitas tanto a su nodo predecesor como a su sucesor.
