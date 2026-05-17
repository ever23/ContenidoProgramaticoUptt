# Laboratorio 2: Herencia y Polimorfismo

## Objetivo
Aplicar los conceptos del *Capítulo I y II* de la Lectura 2. Entender cómo una superclase permite reutilizar atributos comunes (como nombre y cédula), mientras que las clases hijas añaden sus propios atributos especiales. También ver la magia del polimorfismo en acción mediante un arreglo común.

## Tareas del Alumno
1. Ejecuta el archivo principal:
   ```bash
   node main.js
   ```
2. **Crear una nueva clase hija en `Clases.js`:** 
   - Crea la clase `Obrero` que herede de `Persona`.
   - Añade un atributo único llamado `turno` (ej. "Mañana", "Tarde").
   - Escribe su propio método polimórfico `mostrarInformacion()` que imprima `[Obrero] Nombre Apellido - Turno: X`.
3. **Modificar `main.js`:**
   - Importa la nueva clase `Obrero` al principio del archivo.
   - Crea dos instancias (objetos) de obreros.
   - Agrégalos al `directorioDePersonas`.
   - Al ejecutar el código, debes ver a los obreros imprimiéndose en la lista usando su propio formato.
