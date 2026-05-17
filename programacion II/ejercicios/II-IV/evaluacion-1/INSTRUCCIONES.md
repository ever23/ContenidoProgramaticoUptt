# Laboratorio 1: Programación Orientada a Objetos (POO)

## Objetivo
Aplicar los conceptos del *Capítulo I, II y III* de la Lectura 1. Los estudiantes deben comprender cómo abstraer un ente del mundo real (Un Estudiante) en un molde de código (Clase) y luego crear instancias (Objetos) a partir de él.

## Tareas del Alumno
1. Ejecuta el archivo principal en la consola para ver cómo funciona actualmente:
   ```bash
   node main.js
   ```
2. **Modificar `Estudiante.js`:** 
   - Añade un nuevo atributo llamado `carrera`.
   - Modifica el `constructor` para que reciba la carrera al momento de instanciar el objeto.
   - Modifica el método `mostrarInformacion()` para que imprima también la carrera.
3. **Modificar `main.js`:**
   - Actualiza la creación de `alumno1` y `alumno2` pasándoles su carrera (Ej: "Informática").
   - Crea un `alumno3` con tus propios datos. Agrégale 4 notas y muestra su información en consola.
