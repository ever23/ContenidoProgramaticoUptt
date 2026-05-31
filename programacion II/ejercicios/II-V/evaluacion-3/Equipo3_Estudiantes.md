# Evaluación 3: Sistema de Control de Estudiantes

**Equipo 3**
**Dominio:** Gestión académica y control de estudios.

## 🎯 Objetivo
Desarrollar un sistema web asíncrono tipo CRUD para gestionar (matricular, visualizar, editar y eliminar) a los estudiantes en un trayecto o carrera de la institución, utilizando un enfoque de Arquitectura de 3 Capas, Programación Orientada a Objetos y Modularización.

---

## 📋 Requerimientos Específicos

1. **Campos del Formulario:**
   - Nombre del Estudiante (Texto)
   - Cédula de Identidad (Texto)
   - PNF / Carrera (Menú desplegable / Select)
   - Índice Académico / Promedio (Número)

2. **Validaciones Estrictas (Frontend y Backend):**
   - El **Índice Académico** debe ser un número que se encuentre estrictamente en el rango de 1 a 20.
   - El **PNF / Carrera** no puede quedar sin seleccionar (opción por defecto).
   - El **Nombre** debe tener un mínimo de 4 letras.

3. **Persistencia de Datos:**
   - El archivo donde se guardará la información debe llamarse `estudiantes.json`.

4. **Sección de Estadísticas Básicas:**
   - La interfaz debe incluir un panel que muestre siempre actualizado: **El total de estudiantes** matriculados y el **promedio académico general** de toda la institución (sumatoria de índices / total de estudiantes).

5. **Funcionalidad de Búsqueda:**
   - Añadir una barra de búsqueda que permita buscar estudiantes por su **Cédula**.
   - Al buscar, la tabla debe filtrarse mostrando solo las coincidencias. *(Se otorgarán puntos extra si el filtrado se hace de forma reactiva/en tiempo real mientras el usuario escribe).*

---

## 🛠 Requerimientos Técnicos Generales

Para aprobar esta evaluación, el proyecto debe cumplir de forma obligatoria con lo siguiente:

### 1. Modularización (Prohibido un solo archivo gigante)
- **Frontend:** Usar ES6 Modules (`<script type="module">`). Separar la lógica en distintos archivos (Ej. `Estudiante.js`, `UI.js`, `app.js`).
- **Backend:** Separar la aplicación Express para evitar tener todo en el `server.js`. Deben extraer al menos las rutas (usando `express.Router()` en una carpeta `/routes`) y colocar la clase gestora del archivo JSON en su propio archivo/módulo.

### 2. Programación Orientada a Objetos (POO)
- **Frontend:** Instanciar el objeto antes de enviarlo (ej. `const nuevoEstudiante = new Estudiante(...)`). Crear una clase gestora para la interfaz (ej. `class UI`) con métodos como `capturarFormulario()`, `mostrarError()`, y `renderizarLista()`.
- **Backend:** Encapsular la lógica del disco duro en una clase (ej. `class GestorArchivo`) que utilice el módulo nativo `fs` (File System).

### 3. Comunicación Asíncrona y DOM (CRUD)
- Al enviar formularios (Registrar o Editar), el navegador **NO debe recargar la página** (`e.preventDefault()`).
- Los datos deben empaquetarse usando `FormData` o JSON puro.
- El envío al backend debe realizarse de forma asíncrona mediante `fetch()` usando el verbo HTTP adecuado (`POST` para crear, `PUT/PATCH` para editar, `DELETE` para eliminar).
- La tabla o lista en el DOM debe contar con botones de "Editar" y "Eliminar" para cada registro. Al crear, editar o eliminar y recibir éxito del servidor, el DOM (tanto la tabla principal como **el panel de estadísticas**) debe actualizarse dinámicamente para reflejar los cambios al instante sin recargar la página.

### 4. Instrucciones de Entrega (Git y GitHub)
- El proyecto debe inicializarse como un repositorio Git.
- Deben crear un archivo `README.md` en la raíz del proyecto que contenga obligatoriamente:
  1. Nombre, Apellido y Cédula de los integrantes del equipo.
  2. Una breve descripción del proyecto y su objetivo.
  3. Instrucciones paso a paso para la instalación y ejecución del proyecto (ej. comando para instalar dependencias `npm install` y para levantar el servidor `node server.js` o `npm run dev`).

### 5. Defensa Oral y Calidad Visual
- **Defensa de Código:** El día de la entrega se realizará una defensa presencial. Cada integrante deberá ser capaz de explicar la lógica del código, el flujo de datos (Frontend -> Backend -> Archivo JSON) y las decisiones de diseño arquitectónico.
- **Calidad Visual (UI/UX):** El proyecto será evaluado por su apariencia. No se aceptarán interfaces "crudas" (HTML puro sin estilos). Deberán aplicar hojas de estilo (CSS) para garantizar que la aplicación web sea estéticamente agradable e intuitiva para el usuario final.

---

## 🔮 Preparación para la Evaluación 4
*Nota: Este proyecto será la base para la siguiente evaluación. Estructuren su código limpiamente, ya que más adelante se les exigirá agregar mas funcionalidades.*
