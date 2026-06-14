# Evaluación 4: Sistema Full-Stack y Subida de Archivos
**Equipo 1: Sistema de Control de Inventarios**

## 🎯 Objetivo
Extender el proyecto base de la Evaluación 3 para convertirlo en un sistema Full-Stack completo. Se evaluará la incorporación de contenido multimedia, lógica de negocio avanzada y la generación de reportes imprimibles.

---

## 📋 Requerimientos Nuevos (Pilares de la Evaluación)

### 1. Gestión de Archivos Multimedia (Foto del Producto)
- **Frontend:** Modificar el formulario de registro para incluir un campo de subida de imagen (`<input type="file" accept="image/*">`). Enviar los datos utilizando `FormData` en lugar de JSON.
- **Backend:** Instalar y configurar el middleware `multer`. El servidor debe guardar las fotos físicamente en una carpeta `/uploads`, mientras que el archivo `inventario.json` solo debe guardar el nombre o ruta de la imagen.
- **UI:** La tabla principal ahora debe mostrar una miniatura de la "Foto del Producto". Crear una ruta GET específica en Express usando `res.sendFile` para servir estas imágenes bajo demanda.

### 2. Reporte Imprimible (Reporte de Fallas de Stock)
- Desarrollar una nueva página o vista HTML dedicada llamada **"Reporte de Fallas"**.
- El sistema debe filtrar el JSON original y enviar a esta vista **únicamente los productos cuya cantidad sea menor a 5 unidades** (productos en riesgo de agotarse).
- El reporte debe tener un diseño formal (encabezado de la empresa, fecha) optimizado para impresión (usando CSS `@media print` si es posible) e incluir un botón que ejecute `window.print()`.

### 3. Lógica de Negocio Avanzada (Kardex de Entradas y Salidas)
- **Historiales Separados:** En lugar de tener un campo estático `cantidad` que se edita manualmente, el producto tendrá dos arreglos internos por separado: uno para las `entradas` y otro para las `salidas`.
- **Registro de Operaciones:** El sistema debe tener botones o formularios secundarios para registrar una nueva "Entrada" o una nueva "Salida" especificando cantidad y fecha.
- **Cálculo de Stock:** El Backend debe añadir el registro al arreglo correspondiente y recalcular matemáticamente el stock actual sumando el total de entradas y restando el total de salidas. La UI debe permitir ver el historial detallado de entradas y salidas de cada producto.

---

## 🛠 Entregables y Defensa
- **Continuidad del Proyecto:** Deben trabajar obligatoriamente sobre el mismo repositorio de GitHub de la Evaluación 3. Subirán los nuevos cambios a ese mismo repositorio y actualizarán el `README.md` para incluir instrucciones actualizadas sobre cómo usar el nuevo Kardex.
- Defensa presencial: Deberán explicar detalladamente cómo intercepta los archivos `multer`, cómo implementaron la lógica del Kardex en el Backend, y cómo generaron la vista del reporte imprimible.
