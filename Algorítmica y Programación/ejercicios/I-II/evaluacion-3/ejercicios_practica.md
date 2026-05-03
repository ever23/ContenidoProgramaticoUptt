# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-II)
## Evaluación 3: Matrices y Cadenas de Caracteres
**Trayecto I · Trimestre 2 · UPTT**

En esta práctica profundizaremos en el manejo de datos multidimensionales (arreglos dentro de arreglos) y el procesamiento de texto (Strings) como secuencias de caracteres.

---

1. **Suma de Matriz 2x2**
Desarrolle un script que permita llenar una matriz cuadrada de 2x2 (2 filas y 2 columnas). El programa debe solicitar los 4 valores al usuario, mostrar la matriz en formato de tabla por consola y calcular la suma total de todos sus elementos.

2. **Registro de Notas (Matrices)**
Cree un programa que gestione las notas de 3 alumnos. Cada alumno tiene 2 notas.
- Use una matriz de 3x2.
- Solicite las notas para cada alumno.
- Al final, el programa debe mostrar el promedio final de **cada alumno** por separado (recorriendo las filas).

3. **Analizador de Texto (Cadenas)**
Escriba un programa que solicite al usuario ingresar una oración o palabra larga. El sistema debe reportar:
- La longitud total del texto (cantidad de caracteres).
- El texto convertido completamente a **Mayúsculas**.
- Cuántas veces aparece la letra 'a' (o cualquier carácter específico) dentro de la cadena.

4. **Buscador de Subcadenas**
Desarrolle un script que pida una frase y luego una palabra clave. El programa debe informar si la palabra clave se encuentra dentro de la frase y, de ser así, en qué posición (índice) comienza.

---

### 💡 Requerimientos Técnicos:
- Uso de arreglos anidados para representar matrices (`const matriz = [[], []]`).
- Uso de bucles anidados (`for` dentro de `for`) para recorrer filas y columnas.
- Uso de métodos de String como `.length`, `.toUpperCase()`, `.includes()` o `.indexOf()`.
