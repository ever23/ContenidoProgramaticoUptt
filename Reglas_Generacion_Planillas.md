# Reglas de Generación de Planificaciones Académicas - UPTT

Este documento establece los criterios y reglas pedagógicas para la generación automática de planillas de cronograma de actividades en Excel.

## 1. Estructura de Archivos
- **Segmentación Mensual:** El trimestre de 12 semanas debe dividirse en 3 archivos `.xlsx` independientes (Mes 1, Mes 2 y Mes 3).
- **Plantilla Oficial:** Se debe utilizar siempre el archivo `Cronograma de Activides.xlsx` como base, preservando sus fórmulas y formatos originales.

## 2. Calendario y Fechas
- **Sincronización de Horario:** Las fechas de las semanas deben coincidir con el día real de la clase del profesor (Ej: Lunes o Viernes).
- **Respeto de Asuetos:** Antes de generar, se debe consultar el calendario académico oficial (imagen de WhatsApp) para identificar semanas de asueto administrativo o feriados nacionales.
- **Semana Aniversario:** Bloquear siempre la semana del 11 al 15 de Mayo (o la equivalente cada año) como asueto.

## 3. Reglas Pedagógicas (Críticas)
- **Precedencia de Contenido:** **NUNCA** evaluar algo que no se haya dado en una clase previa. Siempre debe haber al menos una (1) sesión de contenido nuevo antes de cada evaluación.
- **Distribución de Notas:** Se deben programar exactamente 4 evaluaciones por trimestre, cada una con un peso del 25% para totalizar el 100%.
- **Cierre del Trimestre:** La última evaluación (Eval 4) debe ser preferiblemente en la última semana efectiva de clases (Semana 11 o 12).

## 4. Metodología de Contenido
- **Mapeo de Unidades:** Los contenidos deben extraerse de los archivos `Planificacion_Trimestre_X.md`. Cada evaluación debe cubrir unidades específicas (Relación 1:1 o 1:N).
- **Las 4 Fases:** En materias de programación, los contenidos deben seguir la estructura: Declaración, Entrada, Cálculo y Salida.

## 5. Automatización (MCP)
- Utilizar la herramienta `fill_uptt_planilla` del servidor `uptt-planner`.
- **Parámetros requeridos:** `templatePath`, `outputPath`, `weeks`.
- **Parámetro opcional pero recomendado:** `metadata` (Objeto con los datos del encabezado).
- **Campos del Objeto Metadata:**
  - `profesor`: Nombre completo.
  - `ci`: Cédula de Identidad (ej. 23781625).
  - `carrera`: Nombre de la carrera (ej. PNF Informática).
  - `trayecto`: Número romano (ej. II).
  - `trimestre`: Número romano (ej. III).
  - `unidad`: Nombre de la materia (ej. Programación II).
  - `aula`: Ubicación física de la clase.
  - `dedicacion`, `pnf`, `desde`, `hasta`, `codigo`.

## 6. Verificación de Integridad
- **Antes de Generar:** Confirmar con el usuario el día de la semana que le corresponde dar clase.
- **Post-Generación:** Notificar la ubicación del archivo generado para que el usuario pueda validarlo antes de la impresión.
