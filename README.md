# UPTT Planner - Automatización con MCP y Antigravity

Este proyecto utiliza el **Model Context Protocol (MCP)** para automatizar la creación de cronogramas académicos de la UPTT directamente desde Antigravity (Gemini).

## 🚀 ¿Qué es el MCP?
El MCP (Model Context Protocol) es un estándar que permite a Antigravity "salir" de su ventana de chat y utilizar herramientas externas. En este caso, permite que la IA pueda leer y escribir archivos de Excel de forma precisa, manteniendo el formato institucional.

## 🛠️ Componentes del Sistema
- **Servidor MCP (`mcp-uptt-work/server.js`):** El motor en Node.js que procesa los archivos Excel usando `exceljs`.
- **Plantilla Base (`Cronograma de Activides.xlsx`):** El formato oficial de la UPTT.
- **Planificaciones (`.md`):** Documentos donde se definen los objetivos y temas por trimestre.
- **Reglas (`Reglas_Generacion_Planillas.md`):** El manual pedagógico que guía a la IA.

## 📖 Cómo usarlo en Antigravity

Para generar nuevas planillas, solo debes dar instrucciones en lenguaje natural. Antigravity detectará automáticamente el servidor MCP y ejecutará los comandos necesarios.

### Ejemplos de Prompts:
- *"Genera las planillas de Algorítmica T1 para el trimestre que inicia el 4 de mayo. Doy clase los viernes."*
- *"Ajusta el cronograma de Redes para que la evaluación 2 sea una semana después."*
- *"Crea el cronograma del próximo mes basándote en la planificación de Programación II."*

### Reglas que Antigravity siempre sigue:
1. Divide el trimestre en 3 archivos mensuales.
2. Respeta los días de clase según el horario del profesor.
3. Salta automáticamente los asuetos (Semana Aniversario, feriados).
4. **Regla de Oro:** Siempre incluye una clase de contenido antes de cada evaluación.

## 📝 Requisitos de la Planificación
Para que la generación sea exitosa, el usuario debe proporcionar:
1. **Unidades y Objetivos:** Listado claro de las unidades de contenido a cubrir.
2. **Las 4 Evaluaciones:** Definir 4 cortes evaluativos (25% cada uno), indicando si es examen escrito, laboratorio o proyecto.
3. **Mapeo 1:1:** Asegurarse de que cada unidad (o grupo de unidades) esté asignada a una evaluación específica.


## 📁 Estructura de Salida
Los archivos generados se guardan automáticamente en:
`cronograma/[Periodo_Academico]/[Nombre_Materia]_[Mes].xlsx`

## ⚙️ Instalación Técnica (Para nuevos entornos)
1. Instalar dependencias en la carpeta del servidor: `npm install`.
2. Registrar el servidor en la configuración de Antigravity (`mcp_config.json`):
```json
{
  "mcpServers": {
    "uptt-planner": {
      "command": "node",
      "args": ["C:\\Ruta\\Al\\Proyecto\\mcp-uptt-work\\server.js"]
    }
  }
}
```
