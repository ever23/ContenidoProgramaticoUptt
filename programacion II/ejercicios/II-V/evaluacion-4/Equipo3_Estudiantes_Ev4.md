# Evaluación 4: Sistema Full-Stack y Subida de Archivos
**Equipo 3: Sistema de Control de Estudiantes**

## 🎯 Objetivo
Extender el proyecto base de la Evaluación 3 para convertirlo en un sistema Full-Stack completo. Se evaluará la incorporación de contenido multimedia, lógica de negocio avanzada y la generación de reportes imprimibles.

---

## 📋 Requerimientos Nuevos (Pilares de la Evaluación)

### 1. Gestión de Archivos Multimedia (Foto de Perfil del Estudiante)
- **Frontend:** Modificar el formulario de matrícula para incluir la captura de una fotografía (`<input type="file" accept="image/*">`). Los datos ahora deben enviarse vía `FormData`.
- **Backend:** Implementar `multer` para la captura del archivo binario. Guardar la imagen en disco (`/uploads`) y registrar únicamente el nombre de archivo en `estudiantes.json`.
- **UI:** La tabla del listado estudiantil debe lucir más profesional mostrando el rostro del estudiante. Crear una ruta GET explícita que use `res.sendFile` para entregar las fotos solicitadas.

### 2. Reporte Imprimible (Cuadro de Honor)
- Crear una nueva vista HTML llamada **"Cuadro de Honor Institucional"**.
- El servidor debe filtrar el JSON y entregar a esta vista **únicamente a los estudiantes sobresalientes** (aquellos con un índice académico mayor o igual a 18).
- La vista debe presentar los datos con formato de diploma o boletín formal y debe incluir obligatoriamente un botón para invocar la función `window.print()` (se recomienda aplicar estilos `@media print`).

### 3. Lógica de Negocio Avanzada (Arreglo de 4 Notas y Estatus Automático)
- **Registro Múltiple:** El formulario dejará de pedir un índice general estático y ahora exigirá ingresar obligatoriamente **4 Notas** (ej. los 4 cortes).
- **Cálculo Backend:** El servidor recibirá las 4 notas, las almacenará dentro de un arreglo anidado en el perfil del estudiante, y **calculará matemáticamente el promedio**.
- **Reglas Condicionales:** Basado en el promedio calculado, el Backend asignará automáticamente un "Estatus" usando `if/else`: *Aprobado* (>=12), *Reprobado* (<12) o *Recuperación*. La UI principal mostrará el promedio y resaltará con color (verde/rojo) el estatus asignado.

---

## 🛠 Entregables y Defensa
- **Continuidad del Proyecto:** Deben trabajar obligatoriamente sobre el mismo repositorio de GitHub de la Evaluación 3. Subirán los nuevos cambios a ese mismo repositorio y actualizarán el `README.md` para documentar el nuevo formato de captura de 4 notas.
- Defensa presencial: Demostrar dominio en el funcionamiento de `FormData` vs `JSON`, el cálculo matemático del promedio y cómo se genera la vista final para imprimir.
