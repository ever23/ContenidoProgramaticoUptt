# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-III)
## Evaluación 3: Recursividad y el Call Stack
**Trayecto I · Trimestre 3 · UPTT**

Esta guía contiene ejercicios para entender el concepto matemático y computacional de la Recursividad, forzando a la mente a resolver problemas sin usar bucles iterativos. 

**Restricción Fundamental:** Para resolver los siguientes problemas, queda **estrictamente prohibido el uso de ciclos iterativos (`for`, `while`, `do-while`)**. Todo problema repetitivo debe ser resuelto usando funciones que se invoquen a sí mismas (recursividad), basándose únicamente en lo aprendido hasta ahora en la cátedra. Todos los programas deben ser interactivos por consola.

---

1. **El Despegue Espacial (Conteo Regresivo)**
Una agencia espacial necesita un módulo de software que muestre en la consola un contador regresivo antes de iniciar el lanzamiento de un cohete. El sistema debe solicitar al usuario la cantidad de segundos iniciales. A partir de allí, debe imprimir en pantalla el tiempo restante segundo a segundo, hasta llegar a cero, momento en el cual imprimirá "¡Despegue!". 

2. **La Bóveda del Banco (Suma Sucesiva)**
El mecanismo de seguridad de una bóveda antigua utiliza como código de apertura la sumatoria de todos los números enteros desde el 1 hasta un número secreto "N". Desarrolle un programa en consola que pida este número "N" y calcule la suma total utilizando exclusivamente una arquitectura recursiva. Al finalizar el cálculo de la pila de llamadas, muestre la clave resultante.

3. **El Encriptador Inverso (Manejo de Cadenas)**
Un sistema de mensajería seguro requiere que todas las contraseñas ingresadas sean almacenadas al revés. Solicite al usuario ingresar una clave de texto por consola. Diseñe una función recursiva que sea capaz de invertir el orden de los caracteres de la clave y retorne la cadena volteada. El programa final debe imprimir tanto la contraseña original como la encriptada. (Pista teórica: El caso base se alcanza cuando la longitud de la cadena es cero o uno).

4. **Progresión Biológica (Sucesión de Fibonacci)**
La clásica secuencia descubierta por Leonardo de Pisa. Desarrolle un simulador que calcule la población de una especie en el mes "N". Solicite por consola el mes objetivo, y mediante una función de *recursividad múltiple* (una función que se llama a sí misma dos veces), calcule el valor exacto en la sucesión.

5. **Las Torres de Hanói (El Reto Definitivo)**
El rompecabezas matemático más famoso de la programación. El sistema debe solicitar el número inicial de discos. Desarrolle una función puramente recursiva que imprima paso a paso las instrucciones exactas ("Mover disco de Torre A hacia Torre C") para trasladar todos los discos sin violar la regla de que un disco grande no puede ir sobre uno pequeño. Deberá lograrlo con máximo 4 o 5 líneas de lógica recursiva pura.

6. **El Algoritmo Milenario (Máximo Común Divisor)**
Implemente el Algoritmo de Euclides (creado hace más de 2000 años) mediante recursividad. Solicite dos números por consola. La función debe llamarse a sí misma pasando como argumentos el segundo número y el residuo de la división del primero entre el segundo, hasta que el residuo sea cero.

7. **Adivina mi número (Búsqueda Binaria Recursiva)**
Cree un arreglo de números ordenados del 1 al 1000. Solicite al usuario el número a buscar. En lugar de recorrer el arreglo linealmente, diseñe una función recursiva que calcule el índice de la mitad del arreglo. Si el número a buscar es mayor, que la función se llame a sí misma ignorando la mitad inferior; si es menor, que ignore la mitad superior. Siga reduciendo el espacio a la mitad hasta encontrar el número. (Este es el pilar de la eficiencia algorítmica).

---
