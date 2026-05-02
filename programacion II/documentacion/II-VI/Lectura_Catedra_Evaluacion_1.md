# Manual de Estudio Profundo: Evaluación 1
## Materia: Programación II (Trayecto II)
### Eje Temático: Conectividad Nativa, Arquitectura de Datos y CRUD con MySQL2

---

## 🧭 Introducción: El Puente hacia la Persistencia
En tu trayectoria académica, hasta ahora has construido aplicaciones web donde la memoria es volátil; si el servidor Node.js se reinicia, todos los datos se pierden. Por otro lado, en la materia de Bases de Datos estás aprendiendo a estructurar información persistente usando el Modelo Relacional y SQL.

El objetivo fundamental de un desarrollador Backend es construir un **Puente Arquitectónico** infalible entre estos dos mundos: la agilidad de Node.js y la persistencia de un motor como MySQL o MariaDB. 

En esta lectura abandonaremos las simulaciones y aprenderemos a establecer esta conexión a muy bajo nivel, escribiendo sentencias SQL puras desde JavaScript, controlando el flujo de datos y comprendiendo los peligros de seguridad inherentes a las bases de datos.

---

## 🏛️ CAPÍTULO I: Drivers y Arquitectura de Conexión

Node.js, por su propia naturaleza de diseño, no sabe cómo comunicarse con MySQL. Necesita un programa intermediario capaz de traducir los objetos de JavaScript a paquetes de red binarios que el puerto 3306 de MySQL pueda entender. A este traductor se le conoce como **Driver**.

En la industria moderna, el estándar absoluto es el paquete `mysql2`. A diferencia del antiguo paquete `mysql` (ya obsoleto), `mysql2` está reescrito para soportar **Promesas (`async/await`)**. Esto es vital: si usamos un driver antiguo que bloquee el *Event Loop* mientras espera que la base de datos responda, todo nuestro servidor se congelará para los demás usuarios.

### 1.1 El Anti-Patrón: Conexiones Simples (`createConnection`)
Una conexión simple abre un túnel directo (un socket) entre Node.js y MySQL. 
```javascript
// ❌ Mala práctica en servidores web
const conexion = await mysql.createConnection({...}); 
```
**¿Por qué es peligroso?**
Imagina que tu API se vuelve popular y 500 usuarios intentan iniciar sesión al mismo tiempo. Si usas una conexión simple, los 500 usuarios intentarán pasar por el mismo túnel simultáneamente. El túnel se saturará, MySQL rechazará las peticiones por exceso de tráfico concurrente y tu servidor colapsará mostrando el temido error `ETIMEDOUT` o `ECONNREFUSED`.

### 1.2 La Solución Profesional: El Pool de Conexiones (`createPool`)
La arquitectura élite dicta el uso de un **Pool de Conexiones**. 
Un Pool actúa como un "estacionamiento" de túneles de red. Cuando el servidor inicia, Node.js abre silenciosamente, por ejemplo, 10 conexiones simultáneas hacia MySQL y las deja "estacionadas" a la espera.

Cuando un usuario hace una petición HTTP, Node.js le presta un túnel vacío. El usuario ejecuta su SQL, y cuando termina, el túnel no se destruye, sino que regresa al Pool para ser prestado inmediatamente al siguiente usuario. Esto permite atender a miles de usuarios reciclando un número pequeño de conexiones físicas, optimizando dramáticamente la memoria RAM.

---

## 🐳 CAPÍTULO II: Infraestructura Moderna (Docker & MariaDB)

Antes de programar, necesitamos un motor de base de datos activo. Instalar MySQL o MariaDB directamente en Windows suele causar conflictos de puertos y servicios (especialmente si usas XAMPP). La solución profesional es **Docker**.

### 2.1 ¿Por qué Docker?
Docker nos permite crear un "contenedor" (una computadora virtual mínima) que solo contiene MariaDB. Es portátil, no ensucia tu sistema operativo y garantiza que todos los desarrolladores del equipo usen la misma versión exacta.

### 2.2 Orquestación con Docker Compose
Para levantar nuestra base de datos, crearemos un archivo llamado `docker-compose.yml` en la raíz de nuestro proyecto. Este archivo es el "plano arquitectónico" de nuestra infraestructura.

```yaml
version: '3.8'
services:
  db:
    image: mariadb:latest
    container_name: mariadb-uptt
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: root        # Contraseña del superusuario
      MARIADB_DATABASE: universidad_db   # Crea la base de datos automáticamente
    ports:
      - "3306:3306"                      # Mapea el puerto del contenedor al tuyo
    volumes:
      - ./mysql_data:/var/lib/mysql      # Persistencia: los datos no se borran al apagar
```

### 2.3 Comandos Esenciales
Para iniciar tu base de datos, abre una terminal en la carpeta del proyecto y ejecuta:
```bash
# Levanta el contenedor en segundo plano
docker-compose up -d

# Verifica que esté corriendo
docker ps
```

### 2.4 Acceso a la Consola SQL (Terminal)
Si necesitas entrar directamente a la base de datos para hacer consultas rápidas desde la terminal, usa este comando:

```bash
# Acceso interactivo a MariaDB dentro del contenedor
docker exec -it mariadb-uptt mariadb -u root -proot universidad_db
```
Una vez dentro, puedes ejecutar comandos como `SELECT * FROM Estudiantes;` directamente. Para salir, escribe `exit`.

---

## 🧩 CAPÍTULO III: Seguridad Crítica (Inyección SQL)

Al integrar Node.js con SQL, surge la vulnerabilidad de seguridad más famosa y destructiva del mundo del Backend: **La Inyección SQL**.

> [!CAUTION]
> **El pecado mortal del Backend:** Concatenar texto ciegamente. 
> Nunca debes construir una cadena SQL uniendo variables enviadas por el usuario.

Supongamos que haces un sistema de Login y escribes tu SQL así:
```javascript
// FORMA INSEGURA (Prohibida)
const sql = "SELECT * FROM usuarios WHERE email = '" + req.body.email + "'";
```
¿Qué pasa si un atacante malicioso escribe en el campo de email el siguiente texto exacto?
`' OR 1=1; --`

Tu código concatenará eso directamente y el SQL resultante que Node enviará a MySQL será:
`SELECT * FROM usuarios WHERE email = '' OR 1=1; --'`

Como la condición matemática `1=1` siempre es verdadera, MySQL ignorará la contraseña y le dará al atacante acceso total al sistema como si fuera administrador. Peor aún, podría inyectar un comando `DROP TABLE usuarios` y borrar tu empresa entera.

### 2.1 La Solución: Consultas Preparadas (Prepared Statements)
Para anular este ataque, el driver `mysql2` nos obliga a usar **Consultas Preparadas**. 
En lugar de inyectar variables en el string, colocamos signos de interrogación `?` (marcadores de posición) y le pasamos los datos en un arreglo por separado. 

```javascript
// FORMA SEGURA (Consulta Preparada)
const sql = "SELECT * FROM usuarios WHERE email = ?";
// El driver desinfecta automáticamente la variable antes de tocar la BD
const [filas] = await pool.execute(sql, [req.body.email]); 
```
Con esto, si el usuario envía código malicioso, MySQL lo tratará como texto simple y no lo ejecutará.

---

## 💻 Laboratorio: Tu Primer CRUD Nativo con MySQL2

Vamos a llevar la teoría a la práctica construyendo una API RESTful. Asegúrate de tener tu contenedor de Docker corriendo antes de empezar.

**Paso 0: Preparar la Base de Datos**
Si estás usando el Docker Compose anterior, conéctate con tu gestor (HeidiSQL, DBeaver o VS Code MySQL) y ejecuta este SQL inicial:

```sql
CREATE TABLE IF NOT EXISTS Estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cedula VARCHAR(20) NOT NULL UNIQUE
);
```

**Paso 1: Instalación de Dependencias**
```bash
npm install express mysql2
```

**Paso 2: Construcción de la API (`index.js`)**
Presta especial atención a la desestructuración de arreglos `const [filas] = await ...`. El método `pool.execute` devuelve un arreglo con mucha metadata. Al usar los corchetes `[]`, extraemos únicamente los datos reales de la tabla. También aplicaremos bloques `try/catch` para manejar caídas de red.

```javascript
const express = require('express');
const mysql = require('mysql2/promise'); // Exigimos la versión de Promesas
const app = express();

// Middleware obligatorio para procesar JSON en el req.body
app.use(express.json());

// 1. Configuramos el Pool de Conexiones
const pool = mysql.createPool({
    host: 'localhost',      // Si usas Docker, es localhost
    user: 'root',
    password: 'root',       // La contraseña que definimos en el docker-compose
    database: 'universidad_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 🟢 C (Create): Insertar con SQL
app.post('/api/estudiantes', async (req, res) => {
    try {
        const { nombre, cedula } = req.body;
        // Consulta Preparada de alta seguridad
        const sql = "INSERT INTO Estudiantes (nombre, cedula) VALUES (?, ?)";
        const [resultado] = await pool.execute(sql, [nombre, cedula]);
        
        // 201 = Created (Creado con éxito)
        res.status(201).json({ mensaje: "Estudiante guardado", id: resultado.insertId });
    } catch (error) {
        res.status(500).json({ error: "Fallo en la base de datos" });
    }
});

// 🔵 R (Read): Consultar con SQL
app.get('/api/estudiantes', async (req, res) => {
    try {
        const sql = "SELECT * FROM Estudiantes";
        // Desestructuramos el resultado para obtener solo las filas
        const [filas] = await pool.execute(sql);
        res.status(200).json(filas);
    } catch (error) {
        res.status(500).json({ error: "Error al leer datos" });
    }
});

// 🟠 U (Update): Actualizar con SQL
app.put('/api/estudiantes/:id', async (req, res) => {
    try {
        const { nombre } = req.body;
        const sql = "UPDATE Estudiantes SET nombre = ? WHERE id = ?";
        await pool.execute(sql, [nombre, req.params.id]);
        res.status(200).json({ mensaje: "Estudiante actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "No se pudo actualizar" });
    }
});

// 🔴 D (Delete): Eliminar con SQL
app.delete('/api/estudiantes/:id', async (req, res) => {
    try {
        const sql = "DELETE FROM Estudiantes WHERE id = ?";
        await pool.execute(sql, [req.params.id]);
        res.status(200).json({ mensaje: "Estudiante eliminado del sistema" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
});

app.listen(3000, () => console.log('API conectada a MySQL en puerto 3000'));
```

### El Siguiente Nivel
¡Felicidades! Tienes una API conectada de forma segura. Sin embargo, escribir SQL en texto rígido dentro de JavaScript puede volverse tedioso cuando los proyectos escalan. En la Lectura 2, veremos cómo la Ingeniería de Software soluciona esto usando herramientas más abstractas.

---

## 📘 ANEXO: Diccionario Técnico Formal
- **Driver de BD:** Módulo de software especializado que implementa la capa física de transporte requerida para establecer un enlace de bajo nivel entre un entorno de ejecución (Node.js) y un motor de base de datos específico (MySQL/MariaDB).
- **Pool de Conexiones:** Patrón de diseño de software enfocado en la concurrencia, el cual mantiene en memoria caché un conjunto de conexiones de base de datos activas y listas para ser reutilizadas dinámicamente.
- **Inyección SQL:** Vulnerabilidad crítica de seguridad informática que ocurre cuando un atacante interfiere maliciosamente con las consultas estructuradas de la base de datos para alterar su comportamiento lógico.
- **Prepared Statement:** Funcionalidad de optimización y seguridad que pre-compila el esquema de la consulta en el motor de base de datos, separando tajantemente la lógica estática del SQL de los parámetros variables de entrada.
- **Docker:** Plataforma de virtualización a nivel de sistema operativo que permite empaquetar software en "contenedores" aislados, garantizando que una aplicación funcione de la misma manera en cualquier entorno de hardware.
- **Docker Compose:** Herramienta de orquestación utilizada para definir y ejecutar aplicaciones multi-contenedor mediante un archivo de configuración YAML, facilitando la gestión de servicios vinculados como APIs y bases de datos.
