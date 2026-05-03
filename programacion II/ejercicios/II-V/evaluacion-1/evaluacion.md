# Evaluación 1 — Mini Portal de Carrera Universitaria
## Programación II · Trayecto II · UPTT
**Fecha:** _______________  
**Tiempo:** 75 minutos  
**Integrantes (2 a 3):**

| Nombre y Apellido | C.I. |
|---|---|
| | |
| | |
| | |

---

## 📌 Descripción

Construyan un servidor web con **Node.js y Express.js** que funcione como el portal de una carrera universitaria. El servidor debe servir una página de inicio estática y mostrar información dinámica de la carrera y un estudiante mediante plantillas EJS.

---

## 🏗️ Estructura de Archivos

Organicen el proyecto de la siguiente manera:

```
apellidos-grupo/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
└── views/
    ├── carrera.ejs
    ├── estudiante.ejs
    └── buscar.ejs
```

---

## 🛣️ Rutas que debe tener el servidor

| Ruta | Qué debe hacer |
|---|---|
| `/` | Mostrar la página `index.html` desde la carpeta `public/` |
| `/inicio` | Responder con un mensaje de bienvenida de texto |
| `/contacto` | Responder con los datos de contacto de la carrera |
| `/carrera` | Renderizar la vista `carrera.ejs` con los datos de abajo |
| `/estudiante` | Renderizar la vista `estudiante.ejs` con los datos de abajo |
| `/buscar?ci=12345678` | Buscar un estudiante por C.I. en un array y renderizar `buscar.ejs` |

---

## 📄 Datos para las Vistas

### Ruta `/carrera` → vista `carrera.ejs`

Inyecten estos datos desde el servidor:

```javascript
{
    nombre: "Ingeniería en Informática",
    trayecto: "II",
    trimestre: 2,
    unidades: ["Programación II", "Matemática II", "Inglés Técnico", "Base de Datos"]
}
```

La vista debe mostrar el nombre, trayecto y trimestre, y listar todas las unidades.

---

### Ruta `/estudiante` → vista `estudiante.ejs`

Inyecten estos datos desde el servidor:

```javascript
{
    nombre: "Su Nombre Aquí",
    ci: "V-12.345.678",
    activo: true,
    materias: ["Programación II", "Matemática II", "Inglés Técnico"]
}
```

La vista debe mostrar el nombre y C.I., indicar si el estudiante está activo o no, y listar las materias inscritas.

---

### Ruta `/buscar?ci=...` → vista `buscar.ejs`

El servidor debe tener el siguiente array de estudiantes **definido antes de las rutas**:

```javascript
const estudiantes = [
    { ci: "12345678", nombre: "Ana Ramírez",  activo: true,  materias: ["Programación II", "Matemática II"] },
    { ci: "87654321", nombre: "Luis Pérez",   activo: false, materias: ["Inglés Técnico"] },
    { ci: "11223344", nombre: "María Gómez",  activo: true,  materias: ["Programación II", "Base de Datos"] },
    { ci: "44332211", nombre: "Carlos Ruiz",  activo: true,  materias: ["Matemática II", "Inglés Técnico"] }
];
```

La ruta recibe la cédula como **parámetro de consulta** (`req.query`):

- Si se accede a `/buscar?ci=12345678`, el servidor debe buscar en el array el estudiante cuya `ci` coincida.
- Si **lo encuentra**, renderiza `buscar.ejs` pasando los datos del estudiante encontrado.
- Si **no lo encuentra**, renderiza `buscar.ejs` pasando `null` (o un objeto vacío) para que la vista muestre un mensaje de "Estudiante no encontrado".

Ejemplos de uso:
```
http://localhost:3000/buscar?ci=12345678  → muestra a Ana Ramírez
http://localhost:3000/buscar?ci=99999999  → muestra "Estudiante no encontrado"
```

La vista `buscar.ejs` debe mostrar:
- La C.I. que fue buscada.
- Si se encontró: el nombre, estado (activo/inactivo) y sus materias.
- Si no se encontró: un mensaje de error indicando que no existe ese registro.

---

## 🌐 Página de Inicio (`public/index.html`)

La página de inicio debe:
- Tener una estructura HTML completa.
- Aplicar estilos desde `css/styles.css`.
- Incluir al menos **una interacción** con el usuario usando `js/app.js`  
  *(ejemplos: un botón que muestre la hora, un mensaje al hacer clic, etc.)*.
- Mostrar enlaces a las rutas del servidor: `/carrera` y `/estudiante`.

---

## 📤 Entrega

1. Suban el proyecto a **GitHub** (cada integrante debe tener al menos 1 commit).
2. El repositorio **no debe incluir** la carpeta `node_modules/`.
3. Entreguen el **enlace del repositorio** al finalizar.

---

*Programación II — Trayecto II — UPTT · Trimestre 2 (2026)*
