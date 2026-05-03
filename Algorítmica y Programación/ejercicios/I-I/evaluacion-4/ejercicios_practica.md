# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-I)
## Evaluación 4: Arquitectura de Control Iterativo (Bucles Complejos)
**Trayecto I · Trimestre 1 · UPTT**

Esta práctica final combina el uso de bucles con lógica condicional anidada para resolver problemas que requieren procesamiento múltiple y toma de decisiones en cada paso.

---

1. **Analizador de Ventas Semanales**
Desarrolle un programa que procese las ventas de una semana (7 días). Utilice un bucle `for` para solicitar el monto de venta de cada día. Al finalizar, el sistema debe reportar:
- El total de ventas de la semana.
- El promedio de venta diario.
- **Contador especial:** Cuántos días se realizaron "Ventas Altas" (montos superiores a $100).

2. **Control de Inventario de Almacén (Salida Dinámica)**
Cree un script para gestionar el stock de un producto. El programa debe pedir un **stock inicial**. Luego, mediante un bucle `while`, debe preguntar cuántas unidades se desean retirar:
- Si la cantidad a retirar es menor o igual al stock actual, se realiza la resta y se muestra el nuevo stock.
- Si la cantidad supera el stock, debe mostrar: "Error: No hay suficientes unidades".
- **Alerta:** Si el stock llega a menos de 5 unidades, mostrar un mensaje de "¡Advertencia: Stock Crítico!".
El programa termina cuando el stock llega a 0 o el usuario ingresa un retiro de 0.

3. **Validador de PIN con Intentos Limitados**
Simule la seguridad de una tarjeta bancaria. El sistema debe solicitar el PIN al usuario (PIN correcto: `9876`).
- El usuario tiene un máximo de **3 intentos** para acertar.
- Si acierta antes de agotar los intentos, debe mostrar: "Acceso Concedido".
- Si falla los 3 intentos, el programa debe terminar mostrando: "Tarjeta Bloqueada por seguridad".
*Pista: Use un contador dentro de un bucle `while` o `for`.*

4. **Procesador de Notas de un Curso (Centinela)**
Diseñe un programa que permita a un profesor ingresar las notas finales de sus alumnos una por una.
- El programa debe pedir la nota continuamente hasta que el profesor ingrese un número negativo (ej: `-1`), el cual servirá para finalizar el proceso.
- Al terminar, el programa debe mostrar:
    - Cuántos alumnos fueron procesados.
    - El promedio general del curso.
    - Cuántos alumnos están **Aprobados** (nota >= 50) y cuántos **Reprobados** (nota < 50).

---

### 🔄 Conceptos avanzados:
- Combinación de `for` / `while` con estructuras `if` internas.
- Uso de **Contadores** (`cont++`) y **Acumuladores** (`suma += valor`).
- Lógica de **Centinela** (valores especiales para terminar el bucle).
- Manejo de límites e intentos.
