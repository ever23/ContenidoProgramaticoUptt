# Evaluación 4: Registro Clínico de Pacientes
**Equipo 4**

## 🎯 Objetivo
Desarrollar una aplicación de consola (CLI) tipo CRUD para gestionar la ficha de ingreso de pacientes en una clínica, integrando todos los conceptos vistos en el Trimestre I-I y I-II. El programa debe funcionar de manera continua mediante un menú interactivo y garantizar la persistencia de datos en disco duro.

---

## 📋 Requerimientos Específicos

1. **Campos del Registro (Objeto):**
   - Nombre del Paciente (Texto)
   - Edad (Número entero)
   - Peso Corporal en Kg (Número decimal)
   - Resumen de Síntomas (Texto descriptivo largo)

2. **Validaciones Estrictas:**
   - La **Edad** no puede ser negativa ni sobrepasar los límites biológicos lógicos.
   - El **Resumen de Síntomas** debe tener un mínimo de caracteres obligatorios (para evitar ingresos vacíos o inútiles como "se siente mal").
   - En caso de violación de estas reglas, el sistema impedirá el registro y notificará por qué.

3. **Sección de Estadísticas / Filtrado por Subcadenas:**
   - En la opción de Búsqueda del menú, en lugar de pedir buscar un paciente por un ID exacto, el sistema pedirá una "Palabra Clave" (ej. "fiebre"). El programa debe buscar dentro del texto completo de *Síntomas* de todos los pacientes y listar únicamente a aquellos que contengan dicha palabra en su resumen médico.

---

## 🛠 Requerimientos Técnicos Obligatorios

Para aprobar la evaluación, el proyecto debe cumplir estrictamente con lo siguiente:

### 1. Menú Interactivo Infinito y CRUD
- Al iniciar, el programa debe mostrar un menú con opciones numéricas para lograr un **CRUD completo**: Registrar Paciente, Mostrar Todos, Editar Diagnóstico, Dar de Alta (Eliminar), Búsqueda por Síntoma, y Salir.
- **Ciclo de Vida:** El programa **NO** debe cerrarse tras ejecutar una acción. Debe procesar lo solicitado y volver a imprimir el menú repetidas veces, finalizando únicamente si el usuario selecciona "Salir".
- **Captura:** El programa debe pausar y pedir datos por consola interactivamente.

### 2. Lógica de Arreglos y Edición
- Los registros deben guardarse lógicamente como objetos dentro de un arreglo.
- Para las opciones de **Editar** y **Dar de Alta (Eliminar)**, el equipo debe ingeniárselas para localizar el registro específico dentro del arreglo, extraerlo o modificarlo correctamente sin alterar el historial de los demás pacientes.

### 3. Persistencia de Datos (Archivos Locales JSON)
- **Al Iniciar:** El programa debe cargar automáticamente los datos previamente guardados en un archivo `pacientes.json`.
- **Al Modificar:** Cada vez que el usuario registre, edite o elimine un registro, el arreglo completo debe guardarse y sobrescribirse inmediatamente en el disco duro, asegurando que los historiales no se pierdan al cerrar el sistema.

### 4. Arquitectura Limpia (Modularización y Funciones)
- Queda **prohibido** entregar el código de la evaluación en un único archivo gigante. 
- La aplicación debe separar responsabilidades lógicas en diferentes módulos/archivos enlazados.
- Se exige el uso obligatorio de **Funciones** para encapsular bloques lógicos repetitivos (ej. limpiar pantalla, imprimir menú, grabar en disco).

### 5. Entrega: Git y GitHub
- El proyecto debe inicializarse localmente con control de versiones.
- Debe entregarse subido a un **repositorio público en GitHub**.
- El repositorio debe incluir un archivo `README.md` con los nombres y cédulas de los integrantes del equipo, además de instrucciones claras sobre cómo ejecutar el proyecto en la terminal.
