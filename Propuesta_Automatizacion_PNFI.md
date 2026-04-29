# Propuesta Tecnológica: Sistema de Automatización de Gestión Académica PNFI (SAGA-PNFI)

## 1. Introducción
La gestión administrativa docente en el Programa Nacional de Formación en Informática (PNFI) consume una cantidad significativa de tiempo que podría dedicarse a la investigación y la docencia. La creación manual de cronogramas, planes de evaluación y planillas de seguimiento es propensa a errores de fechas y falta de sincronía con el calendario académico.

## 2. La Visión
Transformar la burocracia académica en un proceso fluido y automatizado mediante el uso de Inteligencia Artificial (IA) y el Protocolo de Contexto de Modelo (MCP), asegurando que cada profesor cuente con planificaciones pedagógicamente sólidas y administrativamente impecables en segundos.

## 3. Arquitectura del Sistema

El sistema se compone de tres capas fundamentales:

### A. Capa de Ingesta (Procesamiento de PDF)
- **Función:** Utilizar modelos de lenguaje (Gemini) para leer los PDFs oficiales de los contenidos programáticos del PNFI.
- **Resultado:** Extracción de unidades, objetivos y temas en un formato estructurado (Markdown/JSON).

### B. Capa de Inteligencia Pedagógica
- **Función:** Aplicar un motor de reglas basado en las "Reglas de Generación de Planillas":
    - Sincronización automática con el calendario de asuetos.
    - Validación de la regla "Clase-antes-de-Evaluación".
    - Distribución equilibrada de la carga evaluativa (4 cortes de 25%).
- **Personalización:** El profesor solo ingresa su horario y la IA distribuye los temas.

### C. Capa de Generación (Motor Excel)
- **Función:** Un servidor de automatización (basado en el prototipo `uptt-planner`) que inyecta los datos procesados directamente en las planillas oficiales de la UPTT.
- **Resultado:** Archivos `.xlsx` listos para impresión y firma.

## 4. Flujo de Usuario para el Docente
1. **Carga de Datos:** El docente sube el PDF de su materia y una foto/archivo del calendario académico.
2. **Configuración de Horario:** El docente indica: *"Doy clase los Martes de 8:00 a 11:00"*.
3. **Validación:** El sistema propone un cronograma. El docente puede ajustar temas con un lenguaje natural (*"Mueve este examen una semana más tarde"*).
4. **Descarga:** El sistema entrega el set de 3 planillas mensuales generadas.

## 5. Beneficios Institucionales
- **Estandarización:** Todas las planillas del departamento tendrán el mismo formato y nivel de detalle profesional.
- **Eficiencia:** Reducción del tiempo de planificación de horas a segundos.
- **Calidad Pedagógica:** Asegura que no se evalúen contenidos no impartidos y que se cumpla con el programa oficial.
- **Actualización Inmediata:** Si el calendario académico cambia por un evento imprevisto, todos los cronogramas se pueden regenerar en un click.

## 6. Estado Actual (Prueba de Concepto)
Actualmente, el Prof. Enyerber Franco cuenta con el **núcleo funcional** de este sistema (Servidor MCP + Motor de Reglas), validado con éxito en las materias de Algorítmica, Redes y Programación II.
