# Evaluación 3: Sistema de Gestión de Biblioteca Escolar

**Equipo 5**
**Dominio:** Control de catálogo de libros y material de lectura.

## 🎯 Objetivo
Desarrollar un sistema web asíncrono tipo CRUD para gestionar (registrar, visualizar, editar y eliminar) los libros adquiridos o donados a la biblioteca de la institución, utilizando un enfoque de Arquitectura de 3 Capas, Programación Orientada a Objetos y Modularización.

---

## 📋 Requerimientos Específicos

1. **Campos del Formulario:**
   - Título del Libro (Texto)
   - Autor (Texto)
   - Año de Publicación (Número)
   - Código ISBN (Texto/Número)

2. **Validaciones Estrictas (Frontend y Backend):**
   - El **Año de Publicación** no puede ser un número mayor al año en curso.
   - El **Código ISBN** es un identificador único, no debe estar vacío y debe tener al menos 10 dígitos.
   - El **Título** y **Autor** no pueden quedar en blanco.

3. **Persistencia de Datos:**
   - El archivo donde se guardará la información debe llamarse `biblioteca.json`.

4. **Sección de Estadísticas Básicas:**
   - La interfaz debe incluir un panel que muestre siempre actualizado: **El total de libros** registrados en el catálogo y **el título del libro más antiguo** de la biblioteca.

5. **Funcionalidad de Búsqueda:**
   - Añadir una barra de búsqueda que permita buscar libros por su **Título** o **Autor**.
   - Al buscar, la tabla debe filtrarse mostrando solo las coincidencias. *(Se otorgarán puntos extra si el filtrado se hace de forma reactiva/en tiempo real mientras el usuario escribe).*

---

## 🛠 Requerimientos Técnicos Generales

Para aprobar esta evaluación, el proyecto debe cumplir de forma obligatoria con lo siguiente:

### 1. Modularización (Prohibido un solo archivo gigante)
- **Frontend:** Usar ES6 Modules (`<script type="module">`). Separar la lógica en distintos archivos (Ej. `Libro.js`, `UI.js`, `app.js`).
- **Backend:** Separar la aplicación Express para evitar tener todo en el `server.js`. Deben extraer al menos las rutas (usando `express.Router()` en una carpeta `/routes`) y colocar la clase gestora del archivo JSON en su propio archivo/módulo.

### 2. Programación Orientada a Objetos (POO)
- **Frontend:** Instanciar el objeto antes de enviarlo (ej. `const nuevoLibro = new Libro(...)`). Crear una clase gestora para la interfaz (ej. `class UI`) con métodos como `capturarFormulario()`, `mostrarError()`, y `renderizarLista()`.
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
*Nota: Este proyecto será la base para la siguiente evaluación. Estructuren su código limpiamente, ya que más adelante se les exigirá agregar mas funcionalidades..*
