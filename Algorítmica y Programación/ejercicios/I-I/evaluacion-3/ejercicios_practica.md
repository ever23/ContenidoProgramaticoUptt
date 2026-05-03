# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-I)
## Evaluación 3: Arquitectura de la Lógica de Control (Condicionales)
**Trayecto I · Trimestre 1 · UPTT**

En esta práctica, exploraremos cómo los programas toman decisiones complejas combinando múltiples entradas y condiciones lógicas.

---

1. **Sistema de Control de Acceso a Evento**
Diseñe un programa que valide el acceso a un club. El sistema debe solicitar la **edad** del usuario y si posee una **entrada** (si/no).
- Si es menor de 18 años: "Acceso denegado: Menor de edad".
- Si es mayor de 18 y tiene entrada: "¡Bienvenido! Disfrute el evento".
- Si es mayor de 18 pero NO tiene entrada: "Acceso denegado: Debe comprar su entrada en taquilla".
- **Desafío:** Si el usuario tiene más de 60 años y tiene entrada, mostrar: "¡Bienvenido! Tiene acceso a la zona VIP".

2. **Calculadora de Nómina con Bonos y Deducciones**
Escriba un script que calcule el sueldo de un trabajador. Solicite el **sueldo base** y los **años de antigüedad**.
- Si el trabajador tiene más de 5 años de antigüedad, se le suma un bono del 10% del sueldo base.
- Si el sueldo final (después del bono) es superior a $500, se le aplica una retención de seguridad social del 4%.
Muestre el desglose final: Sueldo base, monto del bono aplicado, monto de la retención y el sueldo neto a cobrar.

3. **Clasificador de Triángulos**
Cree un programa que solicite al usuario la medida de los **tres lados** de un triángulo. El sistema debe realizar lo siguiente:
- Primero, verificar si los lados pueden formar un triángulo (la suma de dos lados siempre debe ser mayor al tercero).
- Si es válido, clasificarlo como:
    - **Equilátero:** Los tres lados son iguales.
    - **Isósceles:** Dos lados son iguales.
    - **Escaleno:** Todos los lados son diferentes.

4. **Simulador de Inicio de Sesión y Retiro**
Desarrolle un sistema de cajero automático muy básico. 
- Defina un PIN constante (ej: `1234`) y un saldo inicial (ej: `$1000`).
- Solicite al usuario su **clave**. 
- Si la clave es correcta, pregunte el **monto a retirar**.
    - Si el monto es menor o igual al saldo, muestre: "Retiro exitoso. Su nuevo saldo es: [resultado]".
    - Si el monto supera el saldo, muestre: "Fondos insuficientes".
- Si la clave es incorrecta desde el inicio, muestre: "Acceso bloqueado: Clave errónea".

---

### 🧠 Conceptos clave a aplicar:
- Estructuras `if / else if / else` anidadas.
- Operadores lógicos complejos: `&&` (Y), `||` (O).
- Uso de variables para mantener estados (ej: el saldo).
