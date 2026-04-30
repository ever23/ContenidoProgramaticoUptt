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

## 📚 Mapa de Lecturas de Cátedra (Materiales de Estudio)
A continuación, los enlaces directos a los manuales de estudio profundos (Manuales de Cátedra) generados para cada unidad curricular y trimestre:

### Trayecto I
- **Algorítmica y Programación (Trimestre 1)**
  - [Evaluación 1: Metodología de las 4 Fases y Algoritmia Base](./Algorítmica%20y%20Programación/documentacion/I-I/Lectura_Catedra_Evaluacion_1.md)
  - [Evaluación 2: Entornos de Desarrollo, CLI, Node.js y Diagramas](./Algorítmica%20y%20Programación/documentacion/I-I/Lectura_Catedra_Evaluacion_2.md)
  - [Evaluación 3: Arquitectura de la Lógica de Control (Condicionales)](./Algorítmica%20y%20Programación/documentacion/I-I/Lectura_Catedra_Evaluacion_3.md)
  - [Evaluación 4: Arquitectura de Control Iterativo (Bucles)](./Algorítmica%20y%20Programación/documentacion/I-I/Lectura_Catedra_Evaluacion_4.md)
- **Algorítmica y Programación (Trimestre 2)**
  - [Evaluación 1: Arquitectura Modular, Funciones y Ámbitos](./Algorítmica%20y%20Programación/documentacion/I-II/Lectura_Catedra_Evaluacion_1.md)
  - [Evaluación 2: Arreglos Unidimensionales y Procesamiento](./Algorítmica%20y%20Programación/documentacion/I-II/Lectura_Catedra_Evaluacion_2.md)
  - [Evaluación 3: Matrices Bidimensionales y Cadenas](./Algorítmica%20y%20Programación/documentacion/I-II/Lectura_Catedra_Evaluacion_3.md)
  - [Evaluación 4: Estructuras de Registros (Objetos) y Persistencia (Archivos)](./Algorítmica%20y%20Programación/documentacion/I-II/Lectura_Catedra_Evaluacion_4.md)

### Trayecto II
- **Programación II (Trimestre 5)**
  - [Evaluación 1: Arquitectura Cliente-Servidor, Capas y Express.js](./programacion%20II/documentacion/II-V/Lectura_Catedra_Evaluacion_1.md)
- **Redes de Computadoras (Trimestre 5)**
  - [Evaluación 1: Planeación LAN, Topologías y Estándares IEEE](./Redes/documentacion/II-V/Lectura_Catedra_Evaluacion_1.md)

---

## 📅 Mapa de Planificaciones y Contenidos Programáticos
A continuación, los enlaces a los documentos rectores que definen los objetivos, unidades y estrategias de evaluación por trimestre:

### Trayecto I: Algorítmica y Programación
- [Propuesta de Contenido Programático 2026](./Algorítmica%20y%20Programación/Propuesta_Contenido_Programatico_2026.md)
- [Contenido Programático Base](./Algorítmica%20y%20Programación/Contenido_Programatico.md)
- [Planificación Trimestre 1 (I-I)](./Algorítmica%20y%20Programación/Planificacion_Trimestre_I-I.md)
- [Planificación Trimestre 2 (I-II)](./Algorítmica%20y%20Programación/Planificacion_Trimestre_I-II.md)
- [Planificación Trimestre 3 (I-III)](./Algorítmica%20y%20Programación/Planificacion_Trimestre_I-III.md)

### Trayecto II: Programación II
- [Propuesta de Contenido Programático 2026](./programacion%20II/Propuesta_Contenido_Programatico_2026.md)
- [Contenido Programático Base](./programacion%20II/Contenido_Programatico.md)
- [Planificación Trimestre 4 (II-IV)](./programacion%20II/Planificacion_Trimestre_II-IV.md)
- [Planificación Trimestre 5 (II-V)](./programacion%20II/Planificacion_Trimestre_II-V.md)
- [Planificación Trimestre 6 (II-VI)](./programacion%20II/Planificacion_Trimestre_II-VI.md)

### Trayecto II: Redes de Computadoras
- [Contenido Programático](./Redes/Contenido_Programatico.md)
- [Planificación Trimestre 4 (II-IV)](./Redes/Planificacion_Trimestre_II-IV.md)
- [Planificación Trimestre 5 (II-V)](./Redes/Planificacion_Trimestre_II-V.md)
