# Manual de Estudio Profundo: Evaluación 1
## Materia: Programación II (Trayecto II)
### Eje Temático: Gestión de Bases de Datos Relacionales (SQL Estándar)

---

## 🧭 Introducción: De la Prehistoria a la Ingeniería de Datos
En el trimestre pasado guardamos nuestra información en archivos de texto (`.json`) usando el módulo `fs`. Aunque eso sirve para tareas minúsculas, es una práctica obsoleta para sistemas reales. 

¿Qué pasa si dos usuarios intentan guardar su perfil exactamente en el mismo milisegundo? El archivo JSON se corromperá. ¿Qué pasa si tienes 10 millones de usuarios y quieres buscar a "María"? Node.js tendría que cargar un archivo de 2 Gigabytes a la RAM entera solo para hacer un `if` de búsqueda. El servidor explotaría.

La solución definitiva de la ingeniería de software son los **Sistemas Gestores de Bases de Datos (SGBD)**.

---

## 🏛️ CAPÍTULO I: El Modelo Relacional

Creado por E.F. Codd en 1970, es el modelo dominante en la banca, la industria y el comercio mundial.
Una Base de Datos Relacional organiza los datos no como listas planas, sino como un conjunto de **Tablas** (relaciones matemáticas) bidimensionales.

### 1.1 Elementos de la Tabla
- **La Tabla (Entidad):** Representa un objeto del mundo real. Ej: `Tabla_Estudiantes`.
- **Las Columnas (Atributos):** Definen el esquema estricto. Ej: `ID`, `Nombre`, `Edad`.
- **Las Filas (Registros/Tuplas):** Cada entrada individual. Si hay 100 estudiantes, la tabla tiene 100 filas.

### 1.2 La Regla de Oro: Integridad y Claves
El modelo relacional exige orden estricto:
- **Clave Primaria (Primary Key - PK):** Es una columna cuyo valor debe ser matemáticamente ÚNICO e IRREPETIBLE en toda la tabla. Garantiza que no haya duplicados de entidades completas. El mejor ejemplo es la "Cédula de Identidad" o un "ID numérico autoincremental".
- **Clave Foránea (Foreign Key - FK):** Es el pilar que le da la palabra "Relacional" al sistema. Es una columna en una tabla que "apunta" a la Clave Primaria de otra tabla, estableciendo un vínculo irrompible.

> [!TIP]
> **Ejemplo de Relación:** Si el Estudiante "Juan" inscribe la Materia "Matemáticas". No copiamos el nombre "Matemáticas" mil veces. La tabla `Inscripciones` solo guardará `ID_Estudiante=1` y `ID_Materia=14`. La Base de datos relaciona los números a altísima velocidad.

---

## 🧩 CAPÍTULO II: El Estándar SQL (Structured Query Language)

Para hablar con estos motores de bases de datos (sean MySQL, PostgreSQL o SQL Server) no usamos JavaScript. Usamos **SQL**, el lenguaje declarativo estándar mundial. Se llama "Declarativo" porque no le das los pasos lógicos al motor; solo le dices "Qué quieres", y el motor decide "Cómo buscarlo" internamente.

El lenguaje SQL se divide en varios sub-lenguajes:

### 2.1 DDL (Data Definition Language)
Se usa para crear la "Arquitectura" o el esqueleto.
```sql
-- Creamos la tabla y definimos sus reglas estrictas (Tipos de datos)
CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    edad INT,
    fecha_registro DATE
);
```

### 2.2 DML (Data Manipulation Language)
El núcleo del trabajo diario. Modifica o lee la información real (CRUD).
- **C**reate: `INSERT INTO Estudiantes (nombre, edad) VALUES ('Ana', 22);`
- **R**ead: `SELECT nombre, edad FROM Estudiantes WHERE edad >= 18;`
- **U**pdate: `UPDATE Estudiantes SET edad = 23 WHERE id = 1;`
- **D**elete: `DELETE FROM Estudiantes WHERE id = 1;`

---

## 🏗️ CAPÍTULO III: El Riesgo de las Anomalías (Normalización)

Si diseñas mal las tablas, tu sistema colapsará. Imagina una tabla donde guardas: `Nombre | Teléfono1 | Teléfono2 | Teléfono3`. ¿Y si alguien tiene 4 teléfonos? Tendrías que rediseñar la tabla entera. 

La **Normalización** es un conjunto de reglas algorítmicas (Primera Forma Normal, Segunda, Tercera) que aplicas al diseño para garantizar que:
1. No haya datos redundantes (repetidos innecesariamente).
2. Cada celda de la tabla contenga un solo valor atómico (no guardar "tlf1, tlf2" en un solo texto).
3. Las dependencias sean lógicas (el nombre depende del ID del estudiante, no del profesor).

---

## 💻 Laboratorio: Consultas Avanzadas (El Poder de JOIN)

El verdadero poder relacional se ve cuando necesitamos datos que están divididos en diferentes tablas. Para unirlos en una sola vista, usamos la instrucción `JOIN`.

Supongamos que tenemos `Estudiantes` y `Materias`. Y una tabla puente `Inscripciones`.
Queremos saber: *"¿Cuáles son los nombres de los estudiantes y el nombre de la materia en la que están inscritos?"*

```sql
SELECT 
    Estudiantes.nombre, 
    Materias.nombre_materia 
FROM 
    Inscripciones
/* Unimos la tabla Estudiantes usando el puente de los IDs */
INNER JOIN Estudiantes ON Inscripciones.id_estudiante = Estudiantes.id
/* Unimos la tabla Materias usando el puente de los IDs */
INNER JOIN Materias ON Inscripciones.id_materia = Materias.id;

/* El resultado será una vista plana instantánea con los nombres reales */
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **SGBD (Sistema Gestor de Base de Datos):** Software de infraestructura altamente optimizado y especializado que actúa como una interfaz transaccional entre el almacenamiento físico de datos, las aplicaciones de negocio y los usuarios.
- **SQL (Structured Query Language):** Lenguaje de programación de dominio específico diseñado conceptualmente bajo el paradigma declarativo para la administración y consulta de sistemas de bases de datos relacionales.
- **Clave Primaria (PK):** Restricción de integridad en una tabla relacional conformada por una o más columnas cuyos valores unívocos identifican de manera inequívoca a cada tupla o registro individual.
- **Clave Foránea (FK):** Restricción referencial impuesta sobre una columna de una tabla que requiere que los valores contenidos coincidan mandatoriamente con los valores existentes en una Clave Primaria de otra (o la misma) tabla, garantizando la consistencia del ecosistema.
- **Normalización:** Proceso analítico y sistemático de diseño lógico de bases de datos que aplica un conjunto riguroso de reglas (Formas Normales) orientado a la erradicación de anomalías transaccionales y redundancias estructurales.
- **JOIN:** Operador relacional fundamental del estándar SQL que permite la fusión horizontal temporal de dos o más conjuntos de datos (tablas), fundamentado en una condición algorítmica de coincidencia entre sus respectivos dominios.
