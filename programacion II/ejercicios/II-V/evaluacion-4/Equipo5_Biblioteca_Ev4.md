# Evaluación 4: Sistema Full-Stack y Subida de Archivos
**Equipo 5: Sistema de Gestión de Biblioteca Escolar**

## 🎯 Objetivo
Extender el proyecto base de la Evaluación 3 para convertirlo en un sistema Full-Stack completo. Se evaluará la incorporación de contenido multimedia, lógica de negocio avanzada y la generación de reportes imprimibles.

---

## 📋 Requerimientos Nuevos (Pilares de la Evaluación)

### 1. Gestión de Archivos Multimedia (Portada del Libro)
- **Frontend:** Añadir al formulario de registro un campo para subir la **Portada del Libro** (`<input type="file" accept="image/*">`). Empaquetar y enviar los datos mediante `FormData`.
- **Backend:** Integrar `multer` para guardar físicamente las portadas en la carpeta `/uploads` del servidor. El `biblioteca.json` registrará el nombre o ruta final generada.
- **UI:** La tabla de libros debe incluir una miniatura gráfica de la portada. Se exige que el servidor devuelva estas imágenes a través de una ruta GET usando `res.sendFile`.

### 2. Reporte Imprimible (Inventario Físico de Biblioteca)
- Crear una nueva ventana o vista HTML para el **"Reporte General de Inventario"**.
- Esta vista debe consumir todo el listado de libros, pero presentarlo en un formato formal de auditoría (tabla en blanco y negro, sin imágenes para ahorrar tinta, con columnas claras).
- El reporte debe estar ordenado **por Año de Publicación** (del más antiguo al más nuevo) e incorporar un botón de impresión rápida (`window.print()`).

### 3. Lógica de Negocio Avanzada (Historial Completo de Préstamos)
- **Trazabilidad de Movimientos:** Cada libro tendrá un arreglo interno anidado llamado `historial_prestamos`.
- **Registro de Eventos:** Al prestar el ejemplar, el sistema debe solicitar obligatoriamente y registrar: Nombre del Lector que se lo llevó, Fecha de Salida y Fecha Esperada de Devolución. Estos datos se insertan como un objeto en el arreglo.
- **Restricciones Algorítmicas:** El Backend bloqueará matemáticamente cualquier intento de prestar un libro cuyo estado actual no sea "Disponible". La UI debe poseer una ventana de detalle que permita visualizar todo el historial de préstamos pasados y el préstamo actual del libro.

---

## 🛠 Entregables y Defensa
- **Continuidad del Proyecto:** Deben trabajar obligatoriamente sobre el mismo repositorio de GitHub de la Evaluación 3. Subirán los nuevos cambios a ese mismo repositorio y actualizarán el `README.md` para detallar el funcionamiento del historial de préstamos.
- Defensa presencial: Explicación de cómo el Backend bloquea los préstamos de libros no disponibles, justificación de la ruta GET de la imagen (`res.sendFile`), y el proceso de ordenamiento de los datos para generar el reporte impreso.
