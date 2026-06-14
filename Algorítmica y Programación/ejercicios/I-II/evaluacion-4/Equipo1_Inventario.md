# Evaluación 4: Sistema CLI de Inventario de Almacén
**Equipo 1**

## 🎯 Objetivo
Desarrollar una aplicación de consola (CLI) tipo CRUD para gestionar el registro de productos de un almacén, integrando todos los conceptos vistos en el Trimestre I-I y I-II. El programa debe funcionar de manera continua mediante un menú interactivo y garantizar la persistencia de datos en el disco duro.

---

## 📋 Requerimientos Específicos

1. **Campos del Registro (Objeto):**
   - Nombre del Producto (Texto)
   - Categoría (Texto)
   - Precio Unitario (Número decimal)
   - Cantidad en Stock (Número entero)

2. **Validaciones Estrictas:**
   - El **Precio Unitario** y la **Cantidad en Stock** no pueden ser números negativos.
   - Ningún campo de texto debe quedar en blanco.
   - En caso de un dato inválido, el sistema debe informar el error y cancelar el registro actual.

3. **Sección de Estadísticas / Búsqueda:**
   - El sistema debe tener una opción que calcule y muestre el **Valor Monetario Total** del almacén (sumatoria del `precio * cantidad` de cada producto en existencia).

---

## 🛠 Requerimientos Técnicos Obligatorios

Para aprobar la evaluación, el proyecto debe cumplir estrictamente con lo siguiente:

### 1. Menú Interactivo Infinito y CRUD
- Al iniciar, el programa debe mostrar un menú con opciones numéricas para lograr un **CRUD completo**: Registrar, Mostrar Todos, Editar, Eliminar, Estadísticas, y Salir.
- **Ciclo de Vida:** El programa **NO** debe cerrarse tras ejecutar una acción. Debe procesar lo solicitado y volver a imprimir el menú repetidas veces, finalizando únicamente si el usuario selecciona "Salir".
- **Captura:** El programa debe pausar y pedir datos por consola interactivamente.

### 2. Lógica de Arreglos y Edición
- Los registros deben guardarse lógicamente como objetos dentro de un arreglo.
- Para las opciones de **Editar** y **Eliminar**, el equipo debe ingeniárselas para localizar el registro específico dentro del arreglo, extraerlo o modificarlo correctamente sin alterar los demás registros.

### 3. Persistencia de Datos (Archivos Locales JSON)
- **Al Iniciar:** El programa debe cargar automáticamente los datos previamente guardados en un archivo `inventario.json`.
- **Al Modificar:** Cada vez que el usuario registre, edite o elimine un registro, el arreglo completo debe guardarse y sobrescribirse inmediatamente en el disco duro, asegurando que los datos no se pierdan si se cierra la consola bruscamente.

### 4. Arquitectura Limpia (Modularización y Funciones)
- Queda **prohibido** entregar el código de la evaluación en un único archivo gigante. 
- La aplicación debe separar responsabilidades lógicas en diferentes módulos/archivos enlazados.
- Se exige el uso obligatorio de **Funciones** para encapsular bloques lógicos repetitivos (ej. limpiar pantalla, imprimir menú, grabar en disco).

### 5. Entrega: Git y GitHub
- El proyecto debe inicializarse localmente con control de versiones.
- Debe entregarse subido a un **repositorio público en GitHub**.
- El repositorio debe incluir un archivo `README.md` con los nombres y cédulas de los integrantes del equipo, además de instrucciones claras sobre cómo ejecutar el proyecto en la terminal.
