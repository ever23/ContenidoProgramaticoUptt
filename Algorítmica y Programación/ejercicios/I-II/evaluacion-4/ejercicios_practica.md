# 📘 Ejercicios de Práctica: Algorítmica y Programación (I-II)
## Evaluación 4: Objetos y Persistencia de Archivos
**Trayecto I · Trimestre 2 · UPTT**

En esta práctica final, aprenderemos a modelar datos complejos usando Objetos y a guardar/leer información del disco duro usando el módulo nativo `fs` de Node.js.

---

1. **Modelado de un Perfil de Estudiante**
Cree un script que defina un objeto llamado `estudiante`. El objeto debe tener las propiedades: `nombre`, `cedula`, y un arreglo de `notas` (3 notas).
- Solicite los datos al usuario para llenar el objeto.
- Implemente un método o lógica que calcule el promedio a partir del arreglo de notas dentro del objeto.
- Muestre el perfil completo y su promedio final.

2. **Gestión de Mini-Inventario (Objetos)**
Desarrolle un programa que gestione una lista de 3 productos. Cada producto es un objeto con: `nombre` y `precio`.
- Guarde los 3 objetos en un arreglo llamado `inventario`.
- Recorra el arreglo para encontrar cuál es el producto más costoso y muestre su nombre.

3. **Mi Primer Archivo de Texto (Escritura)**
Escriba un script que solicite al usuario una breve reflexión o nota del día. El programa debe utilizar el módulo `fs` de Node.js para crear un archivo llamado `nota.txt` y guardar el texto ingresado en él. Muestre un mensaje de confirmación cuando el archivo se haya guardado con éxito.

4. **Base de Datos Simple (JSON y Lectura)**
Cree un archivo llamado `datos.json` manualmente o mediante código que contenga un objeto con información básica (ej: `{ "usuario": "Admin", "nivel": 10 }`).
- Desarrolle un script que lea ese archivo usando `fs.readFileSync`.
- Convierta el contenido a un objeto de JavaScript usando `JSON.parse()`.
- Incremente el "nivel" en 1 y muestre el nuevo objeto por consola.

---

### 💡 Requerimientos Técnicos:
- Uso de objetos literales `{ prop: valor }`.
- Uso del módulo nativo de Node.js: `const fs = require('fs')`.
- Manejo de JSON (`JSON.stringify` y `JSON.parse`).
- Persistencia básica con `fs.writeFileSync` y `fs.readFileSync`.
