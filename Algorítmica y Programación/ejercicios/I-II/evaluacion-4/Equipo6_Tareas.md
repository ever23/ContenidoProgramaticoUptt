# Evaluación 4: Sistema Gestor de Tareas (To-Do List CLI)
**Equipo 6**

## 🎯 Objetivo
Desarrollar una aplicación de consola (CLI) tipo CRUD para gestionar tareas diarias y productividad, integrando todos los conceptos vistos en el Trimestre I-I y I-II. El programa debe funcionar de manera continua mediante un menú interactivo y garantizar la persistencia de datos en disco duro.

---

## 📋 Requerimientos Específicos

1. **Campos del Registro (Objeto):**
   - Título de la Tarea (Texto)
   - Descripción Breve (Texto)
   - Nivel de Urgencia (Texto: Alta, Media, Baja)
   - Estado de la Tarea (Booleano: Completada o Pendiente)

2. **Validaciones Estrictas:**
   - El **Nivel de Urgencia** ingresado no puede ser un valor inventado; debe ser validado lógicamente para aceptar estrictamente una de las tres opciones válidas.
   - Todo campo de texto debe contener información válida.
   - De violarse las reglas, la tarea no será creada y se indicará un error por consola.

3. **Sección de Interfaz Gráfica / Lógica de Estado:**
   - Cuando se imprima el arreglo con la lista general de tareas (Opción de "Mostrar Todas"), el programa debe imprimir visualmente un icono de "✅" si el estado de la tarea es "Completada" (true), o una "❌" si el estado está pendiente. 
   - El menú debe tener una opción directa para buscar una tarea pendiente y "Marcarla como Terminada".

---

## 🛠 Requerimientos Técnicos Obligatorios

Para aprobar la evaluación, el proyecto debe cumplir estrictamente con lo siguiente:

### 1. Menú Interactivo Infinito y CRUD
- Al iniciar, el programa debe mostrar un menú con opciones numéricas para lograr un **CRUD completo**: Añadir Tarea, Ver Tareas, Editar Tarea, Borrar Tarea, Marcar Terminada, y Salir.
- **Ciclo de Vida:** El programa **NO** debe cerrarse tras ejecutar una acción. Debe procesar lo solicitado y volver a imprimir el menú repetidas veces, finalizando únicamente si el usuario selecciona "Salir".
- **Captura:** El programa debe pausar y pedir datos por consola interactivamente.

### 2. Lógica de Arreglos y Edición
- Los registros deben guardarse lógicamente como objetos dentro de un arreglo.
- Para las opciones de **Editar** y **Borrar**, el equipo debe ingeniárselas para localizar la tarea específica dentro del arreglo, extraerla o modificarla correctamente sin alterar el resto de la agenda.

### 3. Persistencia de Datos (Archivos Locales JSON)
- **Al Iniciar:** El programa debe cargar automáticamente los datos previamente guardados en un archivo `tareas.json`.
- **Al Modificar:** Cada vez que el usuario cree, edite, borre o marque terminada una tarea, el arreglo completo debe guardarse y sobrescribirse inmediatamente en el disco duro, garantizando una agenda persistente.

### 4. Arquitectura Limpia (Modularización y Funciones)
- Queda **prohibido** entregar el código de la evaluación en un único archivo gigante. 
- La aplicación debe separar responsabilidades lógicas en diferentes módulos/archivos enlazados.
- Se exige el uso obligatorio de **Funciones** para encapsular bloques lógicos repetitivos (ej. limpiar pantalla, imprimir menú, grabar en disco).

### 5. Entrega: Git y GitHub
- El proyecto debe inicializarse localmente con control de versiones.
- Debe entregarse subido a un **repositorio público en GitHub**.
- El repositorio debe incluir un archivo `README.md` con los nombres y cédulas de los integrantes del equipo, además de instrucciones claras sobre cómo ejecutar el proyecto en la terminal.
