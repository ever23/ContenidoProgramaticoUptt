# Evaluación 4: Catálogo de Biblioteca Escolar
**Equipo 5**

## 🎯 Objetivo
Desarrollar una aplicación de consola (CLI) tipo CRUD para gestionar el registro y préstamo de libros en una biblioteca, integrando todos los conceptos vistos en el Trimestre I-I y I-II. El programa debe funcionar de manera continua mediante un menú interactivo y garantizar la persistencia de datos en disco duro.

---

## 📋 Requerimientos Específicos

1. **Campos del Registro (Objeto):**
   - Título del Libro (Texto)
   - Autor (Texto)
   - Año de Publicación (Número entero)
   - Disponible para Préstamo (Booleano: true/false)

2. **Validaciones Estrictas:**
   - El **Año de Publicación** no puede superar el año actual (no se pueden registrar libros del futuro).
   - El **Título** y el **Autor** no deben ser datos vacíos.
   - Si se ingresan datos erróneos, se debe cancelar la creación del libro imprimiendo un mensaje de advertencia.

3. **Sección de Estadísticas / Mutación Lógica:**
   - Dentro del menú, en lugar de un simple listado general, deberá existir una opción dedicada a **"Prestar un Libro"**. Esta opción solicitará al usuario identificar qué libro desea, buscará si está "Disponible" (`true`), y en caso positivo, cambiará el valor a `false` y guardará los cambios.

---

## 🛠 Requerimientos Técnicos Obligatorios

Para aprobar la evaluación, el proyecto debe cumplir estrictamente con lo siguiente:

### 1. Menú Interactivo Infinito y CRUD
- Al iniciar, el programa debe mostrar un menú con opciones numéricas para lograr un **CRUD completo**: Ingresar Libro, Mostrar Catálogo, Editar Libro, Retirar del Catálogo (Eliminar), Prestar/Devolver Libro, y Salir.
- **Ciclo de Vida:** El programa **NO** debe cerrarse tras ejecutar una acción. Debe procesar lo solicitado y volver a imprimir el menú repetidas veces, finalizando únicamente si el usuario selecciona "Salir".
- **Captura:** El programa debe pausar y pedir datos por consola interactivamente.

### 2. Lógica de Arreglos y Edición
- Los registros deben guardarse lógicamente como objetos dentro de un arreglo.
- Para las opciones de **Editar** y **Eliminar**, el equipo debe ingeniárselas para localizar el registro específico dentro del arreglo, extraerlo o modificarlo correctamente sin alterar los demás.

### 3. Persistencia de Datos (Archivos Locales JSON)
- **Al Iniciar:** El programa debe cargar automáticamente los datos previamente guardados en un archivo `biblioteca.json`.
- **Al Modificar:** Cada vez que el usuario registre, edite, elimine o "preste" un libro, el arreglo completo debe guardarse y sobrescribirse inmediatamente en el disco duro, asegurando que el estado del inventario sobreviva el cierre del sistema.

### 4. Arquitectura Limpia (Modularización y Funciones)
- Queda **prohibido** entregar el código de la evaluación en un único archivo gigante. 
- La aplicación debe separar responsabilidades lógicas en diferentes módulos/archivos enlazados.
- Se exige el uso obligatorio de **Funciones** para encapsular bloques lógicos repetitivos (ej. limpiar pantalla, imprimir menú, grabar en disco).

### 5. Entrega: Git y GitHub
- El proyecto debe inicializarse localmente con control de versiones.
- Debe entregarse subido a un **repositorio público en GitHub**.
- El repositorio debe incluir un archivo `README.md` con los nombres y cédulas de los integrantes del equipo, además de instrucciones claras sobre cómo ejecutar el proyecto en la terminal.
