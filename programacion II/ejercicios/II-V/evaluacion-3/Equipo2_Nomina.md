# Evaluación 3: Sistema Base de Nómina (RRHH)

**Equipo 2**
**Dominio:** Recursos Humanos y gestión de personal.

## 🎯 Objetivo
Desarrollar un sistema web asíncrono tipo CRUD para gestionar (registrar, visualizar, editar y eliminar) a los empleados en la base de datos de la empresa, utilizando un enfoque de Arquitectura de 3 Capas, Programación Orientada a Objetos y Modularización.

---

## 📋 Requerimientos Específicos

1. **Campos del Formulario:**
   - Nombre Completo (Texto)
   - Cédula de Identidad (Texto)
   - Cargo (Texto o Select)
   - Sueldo Mensual (Número)

2. **Validaciones Estrictas (Frontend y Backend):**
   - La **Cédula de Identidad** debe tener un formato válido (ej. empezar con V- o E-).
   - El **Sueldo Mensual** debe ser igual o superior al salario mínimo legal establecido.
   - El **Nombre** no puede estar vacío y debe contener nombre y apellido.

3. **Persistencia de Datos:**
   - El archivo donde se guardará la información debe llamarse `empleados.json`.

4. **Sección de Estadísticas Básicas:**
   - La interfaz debe incluir un panel que muestre siempre actualizado: **El total de empleados** registrados y **el gasto mensual total** en nómina de la empresa (sumatoria de todos los sueldos).

5. **Funcionalidad de Búsqueda:**
   - Añadir una barra de búsqueda que permita buscar empleados por su **Cédula** o **Nombre**.
   - Al buscar, la tabla debe filtrarse mostrando solo las coincidencias. *(Se otorgarán puntos extra si el filtrado se hace de forma reactiva/en tiempo real mientras el usuario escribe).*

---

## 🛠 Requerimientos Técnicos Generales

Para aprobar esta evaluación, el proyecto debe cumplir de forma obligatoria con lo siguiente:

### 1. Modularización (Prohibido un solo archivo gigante)
- **Frontend:** Usar ES6 Modules (`<script type="module">`). Separar la lógica en distintos archivos (Ej. `Empleado.js`, `UI.js`, `app.js`).
- **Backend:** Separar la aplicación Express para evitar tener todo en el `server.js`. Deben extraer al menos las rutas (usando `express.Router()` en una carpeta `/routes`) y colocar la clase gestora del archivo JSON en su propio archivo/módulo.

### 2. Programación Orientada a Objetos (POO)
- **Frontend:** Instanciar el objeto antes de enviarlo (ej. `const nuevoEmp = new Empleado(...)`). Crear una clase gestora para la interfaz (ej. `class UI`) con métodos como `capturarFormulario()`, `mostrarError()`, y `renderizarLista()`.
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
