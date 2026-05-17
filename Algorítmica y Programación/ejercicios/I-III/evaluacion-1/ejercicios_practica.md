# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-III)
## Evaluación 1: Punteros, Referencias y Gestión de Memoria
**Trayecto I · Trimestre 3 · UPTT**

Esta guía contiene ejercicios diseñados para comprender cómo funciona la memoria del computador (Stack y Heap) mediante el comportamiento de los tipos primitivos y los objetos. Resuelva cada problema desarrollando un programa interactivo en consola.

**Restricción Fundamental:** Solo está permitido utilizar la sintaxis, funciones y lógica enseñada hasta este momento en la cátedra (nada de Programación Orientada a Objetos ni Clases).

---

1. **El Espejo Roto (Paso por Valor)**
Desarrolle un programa que gestione la edad de dos personas gemelas. Solicite por consola la edad del primer gemelo. Asigne esa edad a una variable para el segundo gemelo. Luego, simule que ha pasado un año sumándole 1 a la edad del segundo gemelo. El sistema debe imprimir la edad actual de ambos. El estudiante debe agregar un comentario en el código explicando por qué el primer gemelo no envejeció en el sistema, argumentando sobre el manejo de memoria en tipos primitivos.

2. **La Clonación Fallida (Paso por Referencia)**
Desarrolle un sistema de inventario interactivo compartido entre dos tiendas. El sistema debe permitir ingresar tres productos al inventario principal. Luego, el programa debe asignar ese inventario completo a una variable que representa a la segunda tienda. Si la segunda tienda recibe un nuevo producto y lo agrega a su inventario, el sistema debe mostrar al final el inventario de *ambas* tiendas. El estudiante debe explicar en un comentario por qué el nuevo producto también apareció en la tienda principal.

3. **Copia Independiente (Rompiendo la Referencia)**
Modifique el sistema del ejercicio anterior para solucionar el problema. Investigue e implemente una técnica en JavaScript (como el Spread Operator o métodos de clonación) para que la segunda tienda reciba una "copia independiente" del inventario inicial. Demuestre que funciona agregando un nuevo producto a la segunda tienda sin afectar al inventario de la tienda principal.

4. **El Intercambio (Swap) Mutando Referencias**
Desarrolle un programa que administre el perfil de un usuario (con `nombre` y `rol`). El programa debe permitir ingresar los datos de dos usuarios distintos. Construya una lógica que intercambie los roles de ambos usuarios utilizando el paso por referencia. La subrutina encargada del intercambio debe modificar directamente los perfiles en memoria, sin necesidad de usar variables de retorno (`return`). Muestre los perfiles antes y después de realizar el intercambio.

---
