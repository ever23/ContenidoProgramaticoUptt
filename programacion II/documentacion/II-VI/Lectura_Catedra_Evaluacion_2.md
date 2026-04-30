# Manual de Estudio Profundo: Evaluación 2
## Materia: Programación II (Trayecto II)
### Eje Temático: Integración Backend-BD y CRUD Asíncrono

---

## 🧭 Introducción: Conectando los Dos Cerebros
En este punto, tenemos dos sistemas aislados en nuestra computadora (o servidor):
1. **Node.js (Express):** Procesador de peticiones web rápidas, inteligente pero sin memoria propia a largo plazo.
2. **Servidor SQL (MySQL/PostgreSQL):** Un bóveda de alta seguridad, excelente para memoria a largo plazo pero no sabe cómo hablar con navegadores web o procesar clics de usuario.

El objetivo de un ingeniero Backend es construir un **Puente** entre Node.js y la Base de Datos. Cuando Node.js reciba un `POST` desde el Frontend, traducirá esa petición a un comando SQL, lo enviará a la Base de Datos, esperará la confirmación, y luego le responderá al Frontend: "Todo salió perfecto".

---

## 🏛️ CAPÍTULO I: Drivers y ORMs (El Traductor)

Node.js, de forma nativa, no sabe hablar el idioma de base de datos MySQL o Postgres. Necesita un paquete de software intermediario.

### 1.1 El Driver Nativo (El Traductor Crudo)
Es una librería que descargamos mediante `npm` (por ejemplo, `mysql2` o `pg`). Este driver abre un túnel de red directo hacia el puerto de la base de datos (usualmente el 3306 o 5432). 
- **Ventaja:** Tú escribes tus comandos SQL puros en texto y el driver los pasa directamente. Es extremadamente rápido.
- **Desventaja:** Si te equivocas en la ortografía del SQL, te enterarás en tiempo de ejecución.

### 1.2 El ORM (Mapeo Objeto-Relacional)
Un ORM (como Sequelize o Prisma) es un nivel de abstracción mayor. En lugar de escribir sentencias SQL en texto, usas los métodos de Clases y Objetos (POO) en JavaScript que aprendimos en el Trimestre 1.
- **Ejemplo:** En vez de escribir `"SELECT * FROM usuarios"`, el ORM te permite hacer `Usuarios.findAll()`. El ORM luego genera el SQL automáticamente y lo manda.
- Para efectos formativos y de dominio de la arquitectura, esta cátedra exige primero el uso del Driver Nativo.

---

## 🧩 CAPÍTULO II: El Cuello de Botella Asíncrono

Comunicar dos programas distintos (Node y el SGBD) toma tiempo. La base de datos puede estar en otro país. Por tanto, **absolutamente todas las consultas a la Base de Datos son Asíncronas**. 

Si Node.js hace un `SELECT` e intenta imprimir el resultado inmediatamente en la siguiente línea, obtendrá "Indefinido", porque el disco duro de la base de datos aún no ha terminado de girar.
Debemos aplicar la filosofía de las **Promesas** (`async / await`) que dominamos en el Frontend, pero esta vez desde el Backend hacia la Base de Datos.

---

## 🏗️ CAPÍTULO III: Prevención de Inyección SQL (Seguridad Crítica)

> [!CAUTION]
> **El pecado más mortal de un Backend:** Concatenar texto ciegamente.

Supongamos que el usuario envía su nombre a través de un formulario web y llega a Node.js en la variable `req.body.nombre`.
Si tú escribes tu consulta SQL así:
`let sql = "SELECT * FROM usuarios WHERE nombre = '" + req.body.nombre + "'";`

¿Qué pasa si un atacante malicioso escribe en el formulario de la página web exactamente este texto?:
`Pedro'; DROP TABLE usuarios; --`

El texto SQL concatenado resultante sería:
`SELECT * FROM usuarios WHERE nombre = 'Pedro'; DROP TABLE usuarios; --'`
Node enviará este texto a la Base de Datos. La BD ejecutará el SELECT y luego **BORRARÁ LA TABLA ENTERA DEL SISTEMA**.

### La Solución: Consultas Preparadas (Prepared Statements)
Nunca debes inyectar variables directamente en el string SQL. Debes usar marcadores de posición (`?` o `$1`) y pasar las variables en un arreglo separado. El Driver (mysql2) desinfectará y escapará caracteres peligrosos automáticamente.

---

## 💻 Laboratorio: Implementación de la Ruta C (Create)

Aquí integramos Express con un driver SQL, aplicando Asincronía y Consultas Preparadas.

```javascript
// Servidor Node.js
const express = require('express');
// Importamos el driver moderno basado en Promesas
const mysql = require('mysql2/promise'); 
const app = express();
app.use(express.json());

// 1. Crear la conexión global a la Base de Datos (Pool)
const poolBD = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'passwordSeguro',
    database: 'universidad_db'
});

// 2. Ruta POST para guardar en BD (Endpoint C de CRUD)
app.post('/api/registrar-alumno', async (req, res) => {
    try {
        const { nombre, cedula, edad } = req.body; // Extraemos lo que envía el Frontend

        // 3. CONSULTA PREPARADA DE ALTA SEGURIDAD (Note los signos de interrogación '?')
        const sql = "INSERT INTO Estudiantes (nombre, cedula, edad) VALUES (?, ?, ?)";
        
        // 4. Ejecución Asíncrona. El Pool inyecta de forma segura el arreglo [nombre, cedula, edad] en los '?'
        console.log("Iniciando transacción con la BD...");
        const [resultado] = await poolBD.execute(sql, [nombre, cedula, edad]);

        // 5. Respuesta al cliente
        res.status(201).json({
            mensaje: "Alumno registrado exitosamente en MySQL.",
            idGenerado: resultado.insertId
        });

    } catch (error) {
        console.error("Error fatal SQL:", error);
        res.status(500).json({ error: "Fallo en la persistencia de datos." });
    }
});

app.listen(3000, () => console.log('API conectada al motor relacional'));
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **API RESTful (Representational State Transfer):** Estilo arquitectónico para sistemas hipermedia distribuidos que define un conjunto de restricciones (sin estado, cacheable, interfaz uniforme) para la creación de servicios web operados a través de verbos estándar HTTP (GET, POST, PUT, DELETE).
- **CRUD:** Acrónimo fundacional de las cuatro funciones operativas elementales de almacenamiento persistente: Crear (Create), Leer (Read), Actualizar (Update) y Eliminar (Delete).
- **Driver de BD:** Módulo de software especializado que implementa la capa física de transporte y los protocolos de socket requeridos para establecer un enlace de bajo nivel entre un entorno de ejecución y un motor de base de datos específico.
- **ORM (Object-Relational Mapping):** Técnica de ingeniería de software que facilita la conversión automática de datos incompatibles entre sistemas de tipos orientados a objetos (Node/JS) y bases de datos relacionales, creando una base de datos "virtual" en código.
- **SQL Injection (Inyección SQL):** Vulnerabilidad crítica de seguridad informática que ocurre cuando un atacante interfiere maliciosamente con las consultas estructuradas que la aplicación realiza a su base de datos, explotando la concatenación insegura de inputs del cliente.
- **Prepared Statement (Sentencia Preparada):** Funcionalidad de seguridad y optimización de motores SGBD que pre-compila el esquema de la consulta separando tajantemente la lógica estática del SQL de los parámetros variables de entrada, neutralizando la Inyección SQL.
