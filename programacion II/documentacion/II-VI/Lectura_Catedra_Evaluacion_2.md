# Manual de Estudio Profundo: Evaluación 2
## Materia: Programación II (Trayecto II)
### Eje Temático: Mapeo Objeto-Relacional (ORM) y Active Record

---

## 🧭 Introducción: Elevando el Nivel de Abstracción
En la lectura anterior, aprendimos a conectarnos a la base de datos y realizar operaciones CRUD escribiendo comandos SQL en texto puro (`"INSERT INTO..."`). 
Aunque esto funciona, hace que el código sea extenso y difícil de mantener. La ingeniería de software moderna soluciona este problema mediante el uso de herramientas llamadas **ORM**, las cuales transforman las tablas de SQL en objetos de JavaScript.

---

## 🏛️ CAPÍTULO I: Abstracción de Datos y el Patrón Active Record

Un **ORM (Object-Relational Mapping)** es una capa de software que se coloca "encima" del driver (`mysql2`). Su trabajo es ocultar el texto SQL y permitirte interactuar con la base de datos usando programación orientada a objetos.

### 1.1 ORMs en la Industria Moderna
El uso de ORMs es un estándar absoluto en el desarrollo de software a nivel mundial. Como ingeniero, si dominas la lógica subyacente de un ORM, aprender a utilizar cualquier otro en tu futuro profesional será sumamente sencillo. Algunos de los líderes del mercado en la actualidad son:
- **Ecosistema Node.js (JS/TS):** Prisma, Sequelize y TypeORM.
- **Ecosistema Python:** Django ORM y SQLAlchemy.
- **Ecosistema PHP:** Eloquent (Laravel) y Doctrine (Symfony).
- **Ecosistema Java:** Hibernate.
- **Ecosistema C# (.NET):** Entity Framework.

### 1.2 El Patrón Active Record
Casi todos los ORMs mencionados se basan fuertemente en el patrón *Active Record* (Registro Activo), el cual establece dos principios fundamentales:
1. **El Objeto Tabla:** Representa la tabla completa y sirve para hacer inserciones masivas y búsquedas sin escribir comandos `SELECT`.
2. **El Objeto Fila:** Cada registro que buscas en la base de datos te es devuelto como un objeto inteligente. Si cambias un dato en el objeto (ej. el nombre) y lo mandas a guardar, el objeto automáticamente genera y ejecuta el `UPDATE` en la base de datos por ti.

---

## 🧩 CAPÍTULO II: El ORM de la Cátedra (`mysql-tab`)

Para facilitar tu aprendizaje y enseñarte a construir arquitecturas limpias, utilizaremos el ORM desarrollado en esta cátedra: **`mysql-tab`** (que hace uso de `tabla-model` por debajo).

Este ORM tiene funcionalidades automáticas diseñadas para ahorrarte horas de trabajo:
1. **Auto-Creación de Bases de Datos:** Si olvidas crear la base de datos en tu motor, el ORM atrapará el error de red y creará la base de datos vacía automáticamente.
2. **Creación Automática con Modelos:** No necesitas ir a PHPMyAdmin a crear la tabla columna por columna. Puedes definir la estructura en tu archivo de JavaScript y el ORM construirá la tabla física de forma invisible.
3. **Seguridad Automática:** No tienes que preocuparte por programar Consultas Preparadas; el ORM sanitiza todas las variables automáticamente para evitar la Inyección SQL.

---

## 💻 Laboratorio: Modelado y Active Record con `mysql-tab`

Reescribiremos el CRUD de la lectura pasada usando nuestra herramienta ORM para que veas la diferencia entre SQL manual y Active Record.

**Paso 1: Instalación**
```bash
npm install mysql-tab tabla-model
```

**Paso 2: Implementación (`index.js`)**

```javascript
const express = require('express');
const dbTabla = require('mysql-tab');
const Model = require('tabla-model'); // Herramienta para modelar la BD desde JS

const app = express();
app.use(express.json());

// 1. Configuramos la conexión (El ORM creará la BD si no existe)
const poolBD = new dbTabla({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'universidad_db'
});

// 2. Definición del Modelo (Creará la tabla automáticamente si no existe)
const ModeloEstudiante = new Model("Estudiantes", [
    { name: "id", type: "int", primary: true, autoincrement: true },
    { name: "nombre", type: "varchar(100)" },
    { name: "cedula", type: "varchar(20)" }
]);
poolBD.addModel(ModeloEstudiante);

// Extraemos el controlador de la tabla
const tablaEstudiantes = poolBD.tabla("Estudiantes");

// 🟢 C (Create): Inserción Directa con Objeto
app.post('/api/estudiantes', async (req, res) => {
    // Adiós al INSERT INTO. El ORM lo hace por nosotros.
    await tablaEstudiantes.insert(req.body); 
    res.json({ mensaje: "Estudiante guardado" });
});

// 🔵 R (Read): Búsqueda Limpia
app.get('/api/estudiantes', async (req, res) => {
    const lista = await tablaEstudiantes.select(); 
    res.json(lista);
});

// 🟠 U (Update): Modificando la base de datos con Active Record
app.put('/api/estudiantes/:id', async (req, res) => {
    // 1. Buscamos la fila específica. Devuelve un objeto inteligente (dbRow)
    let estudiante = await tablaEstudiantes.selectById(req.params.id);
    
    // 2. Modificamos el objeto en la memoria RAM
    estudiante.nombre = req.body.nombre;
    
    // 3. El objeto se sincroniza a sí mismo con la Base de Datos
    await estudiante.update(); 
    
    res.json({ mensaje: "Estudiante actualizado mediante Active Record" });
});

app.listen(3000, () => console.log('API ORM conectada y escuchando'));
```

---

## 📘 ANEXO: Diccionario Técnico Formal
- **ORM (Object-Relational Mapping):** Técnica de ingeniería que convierte datos incompatibles entre sistemas de tipos orientados a objetos (JavaScript) y bases de datos relacionales.
- **Active Record:** Patrón de diseño en el cual los objetos de dominio encapsulan tanto la lógica de datos como el comportamiento de persistencia, mapeando instancias directamente a filas de una tabla.
- **`mysql-tab` y `tabla-model`:** Ecosistema ORM propietario empleado en la cátedra para encapsular drivers nativos y facilitar el modelado, inferencia y operaciones asíncronas mediante objetos declarativos.
