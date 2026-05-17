# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-III)
## Evaluación 2: Listas Enlazadas (Estructuras Dinámicas Dispersas)
**Trayecto I · Trimestre 3 · UPTT**

Esta guía contiene ejercicios diseñados para aplicar la lógica del almacenamiento de datos no contiguo.
**Restricción Fundamental:** Todos los ejercicios deben resolverse creando programas interactivos en consola. No utilice clases orientadas a objetos ni arreglos tradicionales para almacenar las secuencias; implemente funciones creadoras de objetos literales (`factory functions`) y lógica estructurada básica, utilizando únicamente lo aprendido hasta este trimestre.

---

1. **Historial de Mensajes (Inserción al Inicio)**
Desarrolle un programa tipo "Bandeja de Entrada". El sistema debe solicitar repetidamente al usuario que ingrese nuevos mensajes de texto por consola. Cada vez que llegue un mensaje, este debe almacenarse en memoria utilizando una estructura no contigua (mediante nodos enlazados), garantizando que el mensaje más reciente siempre quede en el tope (apuntando al anterior). El sistema debe contar con un menú que permita seguir añadiendo mensajes o listar todos los mensajes almacenados, desde el más nuevo hasta el más antiguo.

2. **Lista de Tareas Diarias (Inserción al Final)**
Construya un gestor de tareas pendientes por consola. El sistema debe solicitar al usuario que ingrese diversas tareas que deba realizar durante el día. A diferencia del ejercicio anterior, estas tareas deben enlazarse secuencialmente una tras otra en memoria, respetando estrictamente su orden de llegada. Añada una opción en el menú interactivo para mostrar la planificación completa, estructurada visualmente mediante flechas (`->`) que indiquen el flujo de ejecución.

3. **Buscador de Contactos**
Extienda o modifique la lógica del programa anterior para crear un directorio telefónico sencillo. Una vez que el usuario haya registrado múltiples nombres secuencialmente, el sistema debe ofrecer una opción de búsqueda. El programa preguntará por el nombre a consultar, navegará a través de los enlaces de la estructura desde el principio hasta el final, y le confirmará al usuario si el contacto existe o si no se encuentra registrado en el directorio.

4. **El Inversor de Nodos (Reto Clásico)**
Basado en un clásico problema universitario: Tomando como base la estructura del programa de Tareas, diseñe un algoritmo capaz de invertir la lista en memoria (es decir, el último elemento ahora debe ser el primero, y todos los enlaces deben apuntar hacia atrás). Está prohibido crear nuevos nodos o usar arreglos auxiliares; debe manipular únicamente las referencias (punteros) de los nodos existentes.

5. **El Detector de Bucles (Algoritmo de la Tortuga y la Liebre)**
Simule un error grave en memoria: fuerce manualmente que el último nodo de su Directorio Telefónico apunte de regreso al primer nodo (creando un bucle infinito). Desarrolle una función que sea capaz de recorrer la estructura sin quedarse colgada infinitamente, retornando `true` si detecta un ciclo, empleando dos referencias (punteros) que avancen a diferentes velocidades.

6. **Depuración de Contactos (Eliminar Duplicados)**
Dada la lista enlazada del directorio telefónico, diseñe un algoritmo que la recorra y elimine cualquier contacto que aparezca repetido consecutivamente. Recuerde que "eliminar" en listas enlazadas significa reasignar el puntero del nodo anterior para que "salte" el nodo duplicado (ej. `actual.siguiente = actual.siguiente.siguiente`), dejando que el Recolector de Basura (Garbage Collector) haga el resto.

7. **El Clasificador Académico (Merge de Listas Ordenadas)**
Se le entregan dos listas enlazadas independientes que contienen calificaciones ordenadas de menor a mayor (Sección A y Sección B). Cree una función que reciba ambas cabeceras (`headA` y `headB`) y construya una sola lista enlazada unificada que mantenga el orden ascendente estricto. (Restricción: No se permite crear una tercera lista vacía y usar un ciclo clásico, debe fusionarlas reordenando los punteros existentes).

---
