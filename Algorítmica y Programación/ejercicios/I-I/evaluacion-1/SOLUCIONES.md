# 📝 Solucionario: Evaluación 1 (Pseudocódigo)
## Algorítmica y Programación (I-I)

Este documento contiene la resolución lógica de los ejercicios de práctica siguiendo la **Metodología de las 4 Fases**.

---

### 1. Cálculo de Área de un Rectángulo
```text
Algoritmo CalcularAreaRectangulo
Inicio
    // 1. Declaración
    Variable base, altura, area: Real

    // 2. Entrada
    Escribir "Ingrese la base (cm):"
    base = Leer()
    Escribir "Ingrese la altura (cm):"
    altura = Leer()

    // 3. Cálculo
    area = base * altura

    // 4. Salida
    Escribir "El área total del rectángulo es: ", area, " cm²"
Fin
```

---

### 2. Conversor de Moneda (USD a BS)
```text
Algoritmo ConvertirDolaresABolivares
Inicio
    // 1. Declaración
    Variable dolares, tasa_cambio, bolivares: Real

    // 2. Entrada
    Escribir "Ingrese la cantidad de Dólares ($):"
    dolares = Leer()
    Escribir "Ingrese el tipo de cambio actual (BS por $):"
    tasa_cambio = Leer()

    // 3. Cálculo
    bolivares = dolares * tasa_cambio

    // 4. Salida
    Escribir "El monto total en Bolívares es: ", bolivares, " BS"
Fin
```

---

### 3. Promedio de Calificaciones Semanales
```text
Algoritmo CalcularPromedioNotas
Inicio
    // 1. Declaración
    Variable n1, n2, n3, suma, promedio: Real

    // 2. Entrada
    Escribir "Ingrese la nota 1:"
    n1 = Leer()
    Escribir "Ingrese la nota 2:"
    n2 = Leer()
    Escribir "Ingrese la nota 3:"
    n3 = Leer()

    // 3. Cálculo
    suma = n1 + n2 + n3
    promedio = suma / 3

    // 4. Salida
    Escribir "Suma total: ", suma
    Escribir "Promedio final: ", promedio
Fin
```

---

### 4. Cálculo de Factura con IVA
```text
Algoritmo GenerarFacturaIVA
Inicio
    // 1. Declaración
    Variable precio, cantidad, subtotal, iva, total: Real

    // 2. Entrada
    Escribir "Ingrese el precio del producto:"
    precio = Leer()
    Escribir "Ingrese la cantidad comprada:"
    cantidad = Leer()

    // 3. Cálculo
    subtotal = precio * cantidad
    iva = subtotal * 0.16
    total = subtotal + iva

    // 4. Salida
    Escribir "Subtotal: ", subtotal
    Escribir "IVA (16%): ", iva
    Escribir "Total Neto a Pagar: ", total
Fin
```
