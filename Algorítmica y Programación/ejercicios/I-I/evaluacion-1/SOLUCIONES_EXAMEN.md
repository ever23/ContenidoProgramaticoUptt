# 🔑 Clave de Respuestas: Examen Evaluación 1 (Versión Actualizada)

### PARTE I: Preguntas de Desarrollo (15 pts)

1.  **Programa y Lenguaje:** 
    *   **Programa:** Es una secuencia lógica de instrucciones que la computadora ejecuta para resolver un problema.
    *   **Lenguaje de Programación:** Es el sistema formal (reglas y símbolos) que permite al humano escribir dichas instrucciones para que la máquina las entienda. 
    *   **Relación:** El lenguaje es la herramienta/idioma, y el programa es el producto final escrito en ese idioma.
2.  **Fase de Declaración:** Su objetivo es reservar y etiquetar espacios en la memoria RAM. Si se omite, el procesador no encontrará el identificador del dato y el programa fallará por "variable no definida".
3.  **Compilador vs Intérprete:** El compilador traduce el código fuente completo antes de la ejecución (crea un archivo .exe). El intérprete traduce y ejecuta línea por línea en tiempo real. 
4.  **Sintaxis vs Semántica:** Es un **Error Semántico**. La sintaxis es correcta (el programa "habla" bien el lenguaje), pero el significado o lógica de la operación es incorrecto (hace lo que no debe).
5.  **Variable vs Constante:** La **Variable** se usa para datos que cambian (ej. edad, precio). La **Constante** para datos fijos (ej. PI, tasa de impuesto). El criterio es si el valor muta o permanece estático.
6.  **Finito y Definido:** **Finito** asegura que el proceso termine y libere recursos. **Definido** asegura que el programa sea confiable y predecible (mismas entradas = mismas salidas).

---

### PARTE II: Resolución de Problemas (5 pts)

```text
Algoritmo CalculoDescuentoAniversario
Inicio

  // FASE 1: DECLARACIÓN
  Variable producto Cadena;
  Variable precio_original, monto_descuento, precio_final Real;
  Constante TASA_DESC = 0.12;

  // FASE 2: ENTRADA
  Escribir "Nombre del producto:";
  producto = Leer();
  Escribir "Precio original:";
  precio_original = Leer();

  // FASE 3: CÁLCULO
  monto_descuento = precio_original * TASA_DESC;
  precio_final = precio_original - monto_descuento;

  // FASE 4: SALIDA
  Escribir "Producto: ", producto;
  Escribir "Monto ahorrado: ", monto_descuento;
  Escribir "Total a pagar: ", precio_final;

Fin
```
