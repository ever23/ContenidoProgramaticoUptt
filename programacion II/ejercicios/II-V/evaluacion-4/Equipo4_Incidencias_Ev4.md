# Evaluación 4: Sistema Full-Stack y Subida de Archivos
**Equipo 4: Sistema de Reporte de Incidencias**

## 🎯 Objetivo
Extender el proyecto base de la Evaluación 3 para convertirlo en un sistema Full-Stack completo. Se evaluará la incorporación de contenido multimedia, lógica de negocio avanzada y la generación de reportes imprimibles.

---

## 📋 Requerimientos Nuevos (Pilares de la Evaluación)

### 1. Gestión de Archivos Multimedia (Evidencia Fotográfica)
- **Frontend:** Actualizar el formulario de reporte de fallos para incluir la subida obligatoria de una **Captura o Foto de Evidencia** (`<input type="file" accept="image/*">`). El envío debe migrar a `FormData`.
- **Backend:** Usar el middleware `multer` para guardar físicamente las fotos de las incidencias en el servidor (`/uploads`).
- **UI:** Al ver una incidencia, debe existir un botón o miniatura para visualizar la evidencia. Las imágenes deben servirse a través de una ruta dedicada con `res.sendFile`.

### 2. Reporte Imprimible (Listado de Incidencias Críticas)
- Construir una nueva vista HTML denominada **"Atención Inmediata"**.
- El Backend debe procesar la lista total (`incidencias.json`) y enviar a esta vista **únicamente los reportes que tengan un Nivel de Urgencia "Alta"**.
- El diseño debe estar optimizado para impresión (con una cabecera que indique "Prioridad Máxima") y contar con un botón nativo `window.print()`.

### 3. Lógica de Negocio Avanzada (Máquina de Estados y SLA de Días)
- **Flujo Estricto de Estados:** Los tickets pasarán por un flujo: "Pendiente" -> "Asignado a Técnico" -> "En Proceso" -> "Resuelta". Al cambiar de estado hacia "Resuelta", el técnico debe ingresar obligatoriamente un **Historial de Notas de Resolución**.
- **Trazabilidad (SLA):** El Backend debe registrar la fecha exacta de creación usando objetos `Date`. Cada vez que el Frontend solicite los datos, el servidor debe calcular y responder **cuántos días han transcurrido** desde el reporte inicial.
- **UI:** La tabla debe marcar en color rojo las incidencias que tengan más de 3 días de antigüedad sin resolver.

---

## 🛠 Entregables y Defensa
- **Continuidad del Proyecto:** Deben trabajar obligatoriamente sobre el mismo repositorio de GitHub de la Evaluación 3. Subirán los nuevos cambios a ese mismo repositorio y actualizarán el `README.md` para documentar el nuevo flujo de estados del ticket.
- Defensa presencial: Evaluar dominio sobre cómo `multer` intercepta binarios, cómo implementaron la máquina de estados y el cálculo de días, y la lógica de extracción para el reporte.
