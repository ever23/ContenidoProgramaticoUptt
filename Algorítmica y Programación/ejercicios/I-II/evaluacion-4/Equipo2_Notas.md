# Evaluación 4: Gestor Académico de Notas
**Equipo 2**

## 🎯 Objetivo
Desarrollar una aplicación de consola (CLI) tipo CRUD para gestionar el registro de notas de estudiantes, integrando todos los conceptos vistos en el Trimestre I-I y I-II. El programa debe funcionar de manera continua mediante un menú interactivo y garantizar la persistencia de datos en el disco duro.

---

## 📋 Requerimientos Específicos

1. **Campos del Registro (Objeto):**
   - Nombre del Estudiante (Texto)
   - Cédula de Identidad (Texto)
   - Nota Evaluación 1 (Número del 0 al 20)
   - Nota Evaluación 2 (Número del 0 al 20)

2. **Validaciones Estrictas:**
   - Ambas notas ingresadas deben ser evaluadas para asegurarse de que se encuentren estrictamente en el rango del 0 al 20.
   - La **Cédula de Identidad** no puede quedar vacía.
   - En caso de detectar una anomalía, el sistema debe imprimir un mensaje de error y cancelar ese registro.

3. **Sección de Estadísticas / Transformación Lógica:**
   - Antes de guardar definitivamente al estudiante en el sistema, el programa debe procesar las notas ingresadas, calcular el **Promedio Final** y anexar automáticamente al objeto un campo booleano extra llamado `Aprobado` (true si el promedio es mayor o igual a 10, false en caso contrario). 
   - El sistema debe tener una opción para listar únicamente a los estudiantes reprobados.

---

## 🛠 Requerimientos Técnicos Obligatorios

Para aprobar la evaluación, el proyecto debe cumplir estrictamente con lo siguiente:

### 1. Menú Interactivo Infinito y CRUD
- Al iniciar, el programa debe mostrar un menú con opciones numéricas para lograr un **CRUD completo**: Registrar, Mostrar Todos, Editar, Eliminar, Mostrar Reprobados, y Salir.
- **Ciclo de Vida:** El programa **NO** debe cerrarse tras ejecutar una acción. Debe procesar lo solicitado y volver a imprimir el menú repetidas veces, finalizando únicamente si el usuario selecciona "Salir".
- **Captura:** El programa debe pausar y pedir datos por consola interactivamente.

### 2. Lógica de Arreglos y Edición
- Los registros deben guardarse lógicamente como objetos dentro de un arreglo.
- Para las opciones de **Editar** y **Eliminar**, el equipo debe ingeniárselas para localizar el registro específico dentro del arreglo, extraerlo o modificarlo correctamente sin alterar los demás registros.

### 3. Persistencia de Datos (Archivos Locales JSON)
- **Al Iniciar:** El programa debe cargar automáticamente los datos previamente guardados en un archivo `estudiantes.json`.
- **Al Modificar:** Cada vez que el usuario registre, edite o elimine un registro, el arreglo completo debe guardarse y sobrescribirse inmediatamente en el disco duro, asegurando que los datos no se pierdan si se cierra la consola bruscamente.

### 4. Arquitectura Limpia (Modularización y Funciones)
- Queda **prohibido** entregar el código de la evaluación en un único archivo gigante. 
- La aplicación debe separar responsabilidades lógicas en diferentes módulos/archivos enlazados.
- Se exige el uso obligatorio de **Funciones** para encapsular bloques lógicos repetitivos (ej. limpiar pantalla, imprimir menú, grabar en disco).

### 5. Entrega: Git y GitHub
- El proyecto debe inicializarse localmente con control de versiones.
- Debe entregarse subido a un **repositorio público en GitHub**.
- El repositorio debe incluir un archivo `README.md` con los nombres y cédulas de los integrantes del equipo, además de instrucciones claras sobre cómo ejecutar el proyecto en la terminal.
