# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-III)
## Evaluación 4: Estructuras LIFO y FIFO (Pilas y Colas)
**Trayecto I · Trimestre 3 · UPTT**

Esta guía final contiene ejercicios basados en los problemas universitarios clásicos más prestigiosos para enseñar el control de flujo de datos estructurado.

**Restricción Fundamental:** Para todos estos ejercicios, queda estrictamente prohibido usar el objeto nativo `Array` de Javascript y sus métodos (`push`, `pop`, `shift`, `unshift`). Usted debe construir las estructuras (Pila y Cola) utilizando nodos enlazados (objetos literales) desde cero, implementando sus propias funciones para apilar, desapilar, encolar y desencolar. Los programas deben ser interactivos por consola.

---

### Módulo I: Pilas (Stacks - LIFO)

1. **El Compilador Básico (Verificador de Paréntesis)**
Usted trabaja creando un editor de código. Desarrolle un programa que pida al usuario una expresión matemática (ej. `{[()()]}`). Utilizando una Pila construida desde cero, valide si los símbolos de agrupación están balanceados. (Lógica: Empuje a la pila los símbolos de apertura; si llega un símbolo de cierre, desapile y verifique si hace par. Si la pila termina vacía, está balanceado).

2. **El Historial del Navegador Web**
Simule la funcionalidad de retroceder y avanzar de Chrome. Necesitará dos pilas independientes ("Atrás" y "Adelante"). Construya un menú interactivo: 
- Navegar a una nueva URL (se guarda en "Atrás" y se vacía "Adelante").
- Botón Retroceder (se desapila de "Atrás" y se apila en "Adelante").
- Botón Avanzar (se desapila de "Adelante" y se apila en "Atrás").

### Módulo II: Colas (Queues - FIFO)

3. **Simulador de Ventanilla Bancaria**
Cree un sistema que simule la llegada de clientes a un banco. El menú debe permitir:
- Añadir un cliente a la cola de espera (ingresa su nombre).
- Llamar al siguiente cliente (se desencola al primero y se anuncia por consola).
- Mostrar cuántos clientes quedan esperando en la cola.

4. **Planificador de Procesos (Round Robin)**
Simule el comportamiento de un microprocesador. Registre procesos con un "Tiempo de Ejecución" estimado. La CPU atiende al proceso que esté al frente de la cola durante 2 segundos. Si el proceso necesita más tiempo, réstele 2 segundos y envíelo de nuevo al final de la cola. Si termina, elimínelo del sistema. Muestre por consola cada ciclo de atención.

5. **Sala de Emergencias (Cola de Prioridad)**
Modifique el ejercicio del banco para un hospital. Existen dos tipos de pacientes: "Rutina" y "Emergencia". Los pacientes se encolan normalmente, pero si un usuario registra una "Emergencia", su algoritmo no debe ponerlo al final, sino que debe insertarlo lo más al frente posible (detrás de otras emergencias, pero antes que cualquier caso de rutina).

---
