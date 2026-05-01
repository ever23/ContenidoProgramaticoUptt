# 📋 Manual de Generación de Planillas Excel (UPTT)

Este manual explica cómo utilizar el servidor MCP **`uptt-planner`** dentro de Antigravity para generar los cronogramas oficiales de actividades en formato Excel (.xlsx).

## 🚀 Uso Básico

Antigravity puede detectar automáticamente cuando necesitas generar una planilla si le proporcionas los datos de la materia. Solo necesitas indicarle el nombre de la materia, el profesor y las fechas.

### Ejemplo de Instrucción (Prompt):
> "Genera la planilla de **Programación II** para el profesor **Enyerber Franco (C.I: 12.345.678)**. El trimestre es el **II-VI**, Trayecto **2**, Trimestre **3**. Inicia el 4 de mayo y termina el 25 de julio. Aula **Laboratorio 1**."

---

## 🛠️ Campos de Metadatos (Encabezado)

El sistema ahora soporta el llenado automático del encabezado de la planilla. Estos son los campos que puedes proporcionar:

| Campo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `profesor` | Nombre completo del docente | Enyerber Franco |
| `ci` | Cédula de Identidad | 23781625 |
| `dedicacion` | Tiempo Completo / Convencional | TIEMPO COMPLETO |
| `carrera` | Nombre de la Carrera | PNF Informática |
| `pnf` | Programa Nacional de Formación | PNFI |
| `trayecto` | Número de Trayecto | II |
| `trimestre` | Número de Trimestre | III |
| `desde` | Fecha de inicio del periodo | 04/05/2026 |
| `hasta` | Fecha de fin del periodo | 25/07/2026 |
| `unidad` | Nombre de la Unidad Curricular | Programación II |
| `codigo` | Código de la asignatura |  |
| `aula` | Ubicación de la clase | Laboratorio 1 |

---

## 📅 Generación Automática de Semanas

Antigravity calculará automáticamente las semanas basándose en:
1. **Fecha de Inicio:** Determina cuándo arranca la Semana 1.
2. **Día de Clase:** Si le dices "doy clase los lunes", el sistema asignará las fechas correctas a cada semana.
3. **Contenidos:** Tomará los temas de los manuales de estudio (`Lectura_Catedra_Evaluacion_X.md`) y los distribuirá equitativamente.
4. **Evaluaciones:** Insertará las 4 evaluaciones obligatorias (25% cada una) en las semanas correspondientes.

---

## 📁 Ubicación de Archivos

- **Plantilla:** El sistema siempre usa como base el archivo `Cronograma de Activides.xlsx` ubicado en la raíz.
- **Salida:** Por defecto, los archivos generados se guardan en una carpeta llamada `cronogramas/` organizada por materia y mes.

---

## ⚠️ Notas Técnicas (Para el Administrador)

Si el servidor MCP no responde:
1. Asegúrate de que el proceso `node server.js` esté configurado en Antigravity.
2. Verifica que la carpeta `node_modules` tenga instalada la librería `exceljs`.
3. El servidor utiliza el protocolo **StdioServerTransport** para comunicarse con la IA.
