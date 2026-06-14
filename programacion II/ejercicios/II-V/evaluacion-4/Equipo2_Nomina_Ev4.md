# Evaluación 4: Sistema Full-Stack y Subida de Archivos
**Equipo 2: Sistema Base de Nómina (RRHH)**

## 🎯 Objetivo
Extender el proyecto base de la Evaluación 3 para convertirlo en un sistema Full-Stack completo. Se evaluará la incorporación de contenido multimedia, lógica de negocio avanzada y la generación de reportes imprimibles.

---

## 📋 Requerimientos Nuevos (Pilares de la Evaluación)

### 1. Gestión de Archivos Multimedia (Foto de Perfil / Constancia)
- **Frontend:** Modificar el formulario de registro para incluir un campo de subida de imagen (`<input type="file" accept="image/*">`) para la foto del empleado. Enviar los datos utilizando `FormData`.
- **Backend:** Instalar y configurar el middleware `multer`. El servidor debe guardar las fotos físicamente en una carpeta `/uploads`, y `empleados.json` solo guardará el nombre/ruta del archivo.
- **UI:** La tabla principal debe mostrar la miniatura del empleado junto a su nombre. Crear una ruta GET en Express (con `res.sendFile`) para servir las fotos de forma controlada.

### 2. Reporte Imprimible (Recibo de Nómina Total)
- Diseñar una nueva vista HTML formateada como un **"Reporte de Nómina"** oficial.
- Esta vista debe consultar al servidor y mostrar una lista tabulada limpia de todos los empleados con sus respectivos sueldos, y en la parte inferior **el gran total general a pagar por la empresa**.
- El documento debe lucir formal (logo, fecha de emisión) y contar con un botón de **Imprimir Reporte** que ejecute `window.print()` (se evaluará presentación visual para impresión).

### 3. Lógica de Negocio Avanzada (Cálculo Dinámico y Horas Extras)
- **Variables de Cálculo:** El sistema solicitará el "Sueldo Base" y la "Cantidad de Horas Extras Trabajadas" en el formulario.
- **Lógica Matemática Backend:** El servidor debe procesar esta información para calcular el Sueldo Neto aplicando fórmulas reales: sumar el pago de Horas Extras (ej. valor hora * 1.5), sumar un Bono Fijo, y aplicar obligatoriamente retenciones de ley porcentuales (ej. -4% IVSS y -1% Paro Forzoso).
- **Desglose en UI:** Al hacer clic en el detalle de un empleado, el frontend debe mostrar todo el desglose matemático detallado del pago calculado.

---

## 🛠 Entregables y Defensa
- **Continuidad del Proyecto:** Deben trabajar obligatoriamente sobre el mismo repositorio de GitHub de la Evaluación 3. Subirán los nuevos cambios a ese mismo repositorio y actualizarán el `README.md` para incluir instrucciones sobre el cálculo de horas extras y deducciones.
- Defensa presencial: Deberán explicar la configuración de `multer`, la lógica matemática implementada para el cálculo neto y la generación del formato del reporte.
