# 📘 Ejercicios de Práctica: Algorítmica y Programación
## Trayecto I · UPTT (Enfoque: Funciones y Modularización)

Esta guía presenta problemas de lógica que deben ser resueltos aplicando **modularización y funciones** en JavaScript, utilizando únicamente variables simples, estructuras de control y acumuladores (sin el uso de arreglos/arrays).

---

1. **Sistema de Tarifas Dinámicas**
Desarrolle un programa que calcule el costo final de una entrada mediante una **función dedicada**. El sistema debe solicitar el precio base y la edad del usuario. La función debe recibir estos parámetros y aplicar las siguientes reglas: si el usuario es menor de 18 años, se aplica un 10% de descuento; si tiene 65 años o más, un 20%; en cualquier otro caso, paga el precio completo. El programa principal debe invocar la función e imprimir el desglose detallado del pago.

2. **Acumulador de Rendimiento Académico**
Escriba un algoritmo que gestione el rendimiento de un estudiante usando **funciones para el cálculo y la validación**. El programa debe solicitar una cantidad específica de notas a ingresar. Utilice un bucle para pedir cada nota individualmente y vaya acumulando el total en una variable. Al finalizar la carga, utilice una función para calcular el promedio (recibiendo la suma total y la cantidad de notas) y otra función para determinar si el estudiante está "Aprobado" (70 o más) o "Reprobado" (menos de 70).

3. **Análisis de Rangos y Divisibilidad**
Construya un programa que incluya una **función de recorrido**. El sistema debe recibir un número entero positivo por parte del usuario. La función debe recorrer todos los números desde el 1 hasta el número ingresado, imprimir únicamente aquellos que sean pares y, al finalizar, retornar la cantidad total de números pares encontrados para que el programa principal reporte el conteo final.

4. **Lógica de Búsqueda con Intentos Limitados**
Diseñe un juego de adivinanza modularizado. El sistema define un número secreto y el usuario cuenta con un máximo de 5 intentos para encontrarlo. Utilice una **función de comparación** que reciba el número secreto y el intento del usuario, devolviendo un mensaje indicando si el secreto es mayor o menor. El proceso principal debe controlar los intentos y terminar si el usuario acierta o si agota sus oportunidades.

5. **Monitor de Consumo Eléctrico Mensual**
Escriba un programa que solicite la cantidad de electrodomésticos en un hogar. Por cada equipo, deberá pedir su consumo en kWh y acumular el valor en una variable total. Implemente una **función de evaluación** que reciba el total acumulado y determine el nivel de riesgo: si el total supera los 300 kWh, debe retornar un mensaje de "Alerta de Alto Consumo"; de lo contrario, retornará "Consumo dentro del Rango Normal". Imprima el veredicto final.

6. **Comparativa de Ofertas Competitivas**
Desarrolle un programa que permita comparar el costo final de dos productos de diferentes tiendas. Utilice una **función única y reutilizable** que reciba el precio bruto y un porcentaje de descuento, devolviendo el precio neto calculado. El programa principal debe invocar la **misma función** dos veces: primero con los datos del Producto A y luego con los del Producto B. Finalmente, compare ambos resultados para informar al usuario cuál de las dos ofertas es más conveniente.

7. **Procesador de Nómina por Empleado**
Escriba un algoritmo para calcular el pago de varios empleados en una pequeña empresa. Diseñe una **función** que calcule el sueldo neto aplicando una retención fija del 5%. El programa principal debe solicitar cuántos empleados se procesarán y usar un bucle para pedir el sueldo base de cada uno, **reutilizando la función** en cada iteración para mostrar el pago correspondiente a cada trabajador de forma individual.

8. **Calculadora Multifuncional con Menú**
Diseñe un programa que simule una calculadora básica mediante el uso de **múltiples funciones especializadas**. El sistema debe solicitar al usuario dos números y luego mostrar un menú con las opciones: 1. Sumar, 2. Restar, 3. Multiplicar y 4. Dividir. Implemente una función independiente para cada operación matemática. El programa principal debe capturar la opción elegida por el usuario, invocar la función correspondiente y mostrar el resultado final, asegurándose de validar (mediante lógica o una función extra) que no se realicen divisiones entre cero.


9. **Conversor de Medidas de Longitud**
Diseñe un programa que permita convertir una cantidad en metros a otras unidades mediante un **menú de selección**. El sistema debe solicitar la cantidad en metros y mostrar las opciones: 1. Convertir a Kilómetros, 2. Convertir a Centímetros y 3. Convertir a Milímetros. Implemente una **función para cada conversión**. El programa principal debe invocar la función adecuada y mostrar el resultado con su respectiva unidad.

10. **Sistema de Control de Inventario Simple**
Desarrolle un programa que gestione el stock de un único producto mediante un **menú interactivo**. El sistema debe iniciar con una cantidad inicial de productos. Muestre un menú con las opciones: 1. Ver Stock, 2. Agregar Mercancía (Entrada), 3. Retirar Mercancía (Salida) y 4. Salir. Utilice una **función para procesar las entradas y salidas**, validando que no se retire más de lo que existe en stock. El programa debe usar un bucle para permitir al usuario realizar múltiples operaciones hasta que elija la opción de salir.

---

### 💡 Requerimientos Técnicos:
- Todas las soluciones deben implementar al menos una función con parámetros y retorno (`return`).

