# Evaluación 1 — Arquitectura Cliente-Servidor con Express.js
## Programación II · Trayecto II · UPTT
**Ponderación:** 25% de la nota del trimestre  
**Modalidad:** Laboratorio en grupos de 2 a 3 integrantes  
**Tiempo:** 75 minutos

---

## 🎯 Objetivo

Construir un **Mini Portal de Carrera Universitaria** usando **Node.js** y **Express.js**, demostrando el dominio de la arquitectura de 3 capas: archivos estáticos (Frontend), rutas del servidor (Backend) y renderizado dinámico con plantillas EJS (SSR).

---

## 📋 Instrucciones Generales

1. Formen grupos de **2 o 3 integrantes**.
2. Creen una carpeta con el **apellido de todos** (ej: `perez-gonzalez/`).
3. Inicialicen el proyecto con `npm init -y` e instalen las dependencias.
4. **Cada integrante debe realizar al menos 1 commit** identificado con su nombre.
5. Al finalizar, suban el proyecto a GitHub y **entreguen el enlace del repositorio**.

> ⚠️ Un servidor que no arranca con `node server.js` no puede obtener más de **50 puntos**.

---

## 👥 División de Roles Sugerida

| Rol | Integrante | Responsabilidad |
|---|---|---|
| **Frontend** | 1 integrante | Carpeta `public/` — HTML, CSS y JS del cliente |
| **Backend** | 1 integrante | `server.js` — configuración, rutas y datos |
| **Vistas** | 1 integrante | Carpeta `views/` — plantillas EJS |

> En grupos de 2, el integrante de Backend también asume las Vistas.

---

## 🏗️ Estructura de Carpetas Requerida

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
    └── estudiante.ejs
```

---

## 🛣️ Rutas a Implementar

El servidor debe tener exactamente las siguientes rutas:

| Ruta | Método | Tipo | Descripción |
|---|---|---|---|
| `/` | GET | Estático | Sirve `index.html` desde `public/` |
| `/inicio` | GET | `res.send()` | Devuelve un mensaje de bienvenida del servidor |
| `/contacto` | GET | `res.send()` | Devuelve datos de contacto ficticios de la carrera |
| `/carrera` | GET | `res.render()` | Renderiza `carrera.ejs` con los datos de la carrera |
| `/estudiante` | GET | `res.render()` | Renderiza `estudiante.ejs` con el perfil de un estudiante |

### Datos a inyectar en `/carrera`
```javascript
res.render('carrera', {
    nombre: "Ingeniería en Informática",
    trayecto: "II",
    trimestre: 2,
    unidades: ["Programación II", "Matemática II", "Inglés Técnico", "Base de Datos"]
});
```

### Datos a inyectar en `/estudiante`
```javascript
res.render('estudiante', {
    nombre: "Tu Nombre Aquí",
    ci: "V-12.345.678",
    activo: true,
    materias: ["Programación II", "Matemática II", "Inglés Técnico"]
});
```

---

## ✅ Requisitos y Puntuación

### 1. Configuración del Proyecto (10 pts)
- `package.json` generado con `npm init`.
- `express` y `ejs` instalados como dependencias.
- El servidor arranca y muestra en consola el puerto en uso.

### 2. Archivos Estáticos (15 pts)
- `express.static('public')` configurado como middleware.
- `public/` contiene `index.html`, `css/styles.css` y `js/app.js` en sus carpetas.
- `http://localhost:3000` muestra la página de inicio.

### 3. Contenido del Frontend (15 pts)
- `index.html` tiene estructura HTML válida y contenido relacionado al tema.
- `styles.css` aplica estilos visibles (colores, tipografía, layout).
- `app.js` contiene al menos **una interacción del usuario** (botón, mostrar hora, etc.).

### 4. Rutas del Servidor (15 pts)
- Las 5 rutas de la tabla están implementadas.
- `/inicio` y `/contacto` responden con `res.send()` y textos diferentes.

### 5. Vistas EJS — `carrera.ejs` (20 pts)
- `app.set('view engine', 'ejs')` configurado antes de las rutas.
- Muestra `nombre`, `trayecto` y `trimestre` de la carrera.
- Usa `<% unidades.forEach(...) %>` para listar las unidades curriculares.

### 6. Vistas EJS — `estudiante.ejs` (15 pts)
- Muestra `nombre` y `ci` del estudiante.
- Usa `<% if (activo) %>` para mostrar un mensaje diferente según el estado.
- Usa `<% materias.forEach(...) %>` para listar las materias inscritas.

### 7. Uso de Git (10 pts)
- El repositorio tiene **al menos 3 commits** con mensajes descriptivos.
- **Cada integrante del grupo** aparece con al menos 1 commit.
- El proyecto está en GitHub y el enlace es accesible.

---

## 🌟 Punto Bonus Grupal (+10 pts)

Implementar la ruta `/estudiante/:nombre` que reciba el nombre por URL y lo muestre en la vista:

```javascript
app.get('/estudiante/:nombre', (req, res) => {
    res.render('estudiante', {
        nombre: req.params.nombre,
        ci: "V-00.000.000",
        activo: true,
        materias: ["Programación II", "Matemática II"]
    });
});
```

Al acceder a `http://localhost:3000/estudiante/Maria`, la página debe mostrar `Maria` como nombre.

---

## 📦 Comandos de Referencia

```bash
# Inicializar proyecto
npm init -y

# Instalar dependencias
npm install express
npm install ejs

# Ejecutar el servidor con reinicio automático
node --watch server.js

# Git — flujo de trabajo
git init
git add .
git commit -m "feat: estructura inicial del proyecto"
git push origin main
```

---

## 🚫 Penalizaciones

| Situación | Penalización |
|---|---|
| El servidor no arranca con `node server.js` | Máximo 50 pts |
| `node_modules/` subido al repositorio | -10 pts |
| Ningún integrante tiene commits individuales identificables | -10 pts |
| La carpeta `views/` no existe o las vistas no están en ella | Secciones 5 y 6 = 0 pts |
| Solo hay 1 commit para todo el proyecto | -5 pts |

> 💡 **Recuerda:** crea el `.gitignore` con `node_modules/` **antes** del primer commit.

---

*Programación II — Trayecto II — UPTT · Trimestre 2 (2026)*
