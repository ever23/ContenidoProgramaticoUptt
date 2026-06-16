# Propuesta de Innovación Curricular: Algorítmica y Programación (2026)
**Campo de Investigación:** Informática
**Área de Investigación:** Informática Aplicada
**Línea de Investigación Principal:** Ingeniería del Software
**Línea de Investigación Secundaria:** Desarrollo de Aplicaciones
**Enfoque:** Construcción del Pensamiento Lógico-Algorítmico mediante un Ecosistema Unificado

## Justificación Pedagógica e Investigativa

### Vinculación con las Líneas de Investigación del PNFI
De acuerdo con la estructura jerárquica de investigación del Programa Nacional de Formación en Informática (PNFI), las líneas de investigación se definen como grupos de proyectos y planes de trabajo organizados de forma sistemática para abordar áreas del conocimiento de manera cooperativa y multidisciplinaria, con el propósito de orientar la investigación científica dentro de los Proyectos Sociotecnológicos (PST) y dar respuestas pertinentes a los problemas de las comunidades.

La presente propuesta se inscribe de manera principal en la línea de **Ingeniería del Software**, por cuanto su contenido aborda las siguientes dimensiones operativas (programas) de dicha línea:

- **Análisis e Ingeniería de Requerimientos:** A través de la Metodología de las 4 Fases (Unidad 4), el estudiante aprende a identificar, analizar, documentar y validar los datos de entrada, procesos y salidas de un problema antes de escribir una sola línea de código. Según el documento de líneas, esta dimensión incluye "técnicas de elicitación, análisis de consistencia, trazabilidad y especificación formal, asegurando que el software responda a las expectativas del usuario".
- **Arquitectura y Diseño de Software:** Las unidades de Programación Modular (Unidad 6), Estructuras de Datos (Unidades 7-9), Punteros (Unidad 11), Listas Enlazadas (Unidad 12), Recursividad (Unidad 13) y Pilas, Colas y Árboles (Unidad 14) forman al estudiante en los principios de modularidad, desacoplamiento y escalabilidad que define esta dimensión.
- **Gestión, Calidad y Seguridad del Software:** La Unidad 2 (Estándares de Calidad) introduce al estudiante en las prácticas de documentación y control de calidad desde el primer trimestre. Esta dimensión se orienta a "mejorar la eficiencia del proceso, la confiabilidad del producto y la protección de datos".
- **Ingeniería de Datos y Automatización de Procesos:** La Unidad 10 (Archivos y Persistencia en formato JSON) establece el primer contacto del estudiante con la persistencia de datos. Esta dimensión abarca "diseño y gestión de modelos de datos, persistencia eficiente" y constituye una competencia transversal.
- **Interfaces y Experiencia de Usuario (UX/UI):** Si bien en Algorítmica el estudiante trabaja en entorno CLI, los principios de diseño centrado en el usuario y la claridad en la presentación de salidas sientan las bases para la dimensión de UX/UI que se desarrollará plenamente en Programación II.

De manera secundaria, la propuesta establece un puente hacia la línea de **Desarrollo de Aplicaciones**, específicamente en los siguientes programas:

- **Servicios de integración para aplicaciones:** Al utilizar objetos literales (Unidad 9) y el formato JSON para persistencia (Unidad 10), el estudiante adquiere el formato estándar de intercambio de datos (REST, JSON, XML) que posteriormente consumirá y producirá en arquitecturas cliente-servidor durante Programación II.
- **Modelado y gestión de datos:** La Unidad 10 (Archivos JSON) y la Unidad 9 (Objetos Literales) introducen el diseño conceptual de estructuras de datos que sustentan el funcionamiento de las aplicaciones, preparando al estudiante para el modelado de bases de datos relacionales en el Trayecto II.

### Fundamentación Pedagógica
La presente propuesta surge de un análisis crítico sobre los procesos de enseñanza-aprendizaje en el PNFI, fundamentándose en la necesidad de transitar de una pedagogía de la herramienta hacia una pedagogía del pensamiento analítico. Bajo el Documento Rector del PNFI, esta actualización busca consolidar la Soberanía Cognitiva del estudiante, permitiéndole dominar las estructuras fundamentales de la computación independientemente de las fluctuaciones tecnológicas efímeras.

La adopción de un ecosistema unificado basado en Node.js y el entorno de interfaz de línea de comandos (CLI) constituye una estrategia didáctica para mitigar la dispersión cognitiva y centrar el esfuerzo intelectual en la resolución de problemas mediante la Metodología de las 4 Fases. Este rigor metodológico asegura la formación de un profesional con alta capacidad de abstracción, requisito indispensable para el desarrollo tecnológico endógeno y la soberanía informática nacional.

## Diagnóstico de Obsolescencia y Desafío Pedagógico
Tras un proceso de observación y evaluación de resultados académicos, se identifican las siguientes debilidades estructurales en el contenido programático vigente que esta propuesta busca superar:

- **Fragmentación Tecnológica:** La enseñanza de lenguajes inconexos genera una interrupción en el flujo de aprendizaje. Al mantener un stack unificado, el estudiante optimiza su energía mental hacia la profundización lógica en lugar de la memorización de múltiples sintaxis.

- **Desarticulación con las Líneas de Investigación:** El contenido anterior no establece una conexión explícita con las dimensiones operativas de las líneas de investigación del PNFI. Esta propuesta vincula cada unidad con los programas de Ingeniería del Software (análisis de requerimientos, arquitectura, calidad), permitiendo que los aprendizajes del Trayecto I tengan continuidad directa en los PST.

- **Brecha con los Estándares de la Industria:** Mantener herramientas y lenguajes aislados de la web moderna dificulta la integración en los Proyectos Socio-Tecnológicos. Esta actualización alinea la formación con los estándares contemporáneos de desarrollo de software, facilitando la aplicabilidad inmediata del conocimiento.

- **Ausencia de Puente Curricular:** El contenido original no preparaba al estudiante para la transición hacia Programación II. Al incorporar JSON y objetos literales como formatos de datos (línea de Desarrollo de Aplicaciones), esta propuesta crea una continuidad orgánica entre trayectos.

---

## Trimestre I-I: Fundamentos y Estructuras (Unidades 1-5)

### Unidad 1: Algoritmo y Programas
- Concepto de Algoritmos y Programas.
- Lenguaje algorítmico y de programación.
- Formas de representar un algoritmo: Lenguaje Natural, pseudocódigo y diagrama de flujo.

### Unidad 2: Estándares de Calidad en el Diseño de Algoritmos y Construcción de Programas
- Introducción a los estándares de calidad.
- Formas y técnicas de documentar algoritmos y programas.

### Unidad 3: Datos y Entidades Primitivas
- Tipos de datos, operadores y expresiones.
- Identificadores y reglas de escritura.
- Variables y constantes (Uso de let y const en Node.js).

### Unidad 4: Metodología para el Análisis y Planteamiento de Problemas
- Identificación de Entradas, Procesos y Salidas.
- Aplicación formal de la Metodología de las 4 Fases.

### Unidad 5: Programación Estructurada
- Estructuras de decisión (Simples, dobles, múltiples).
- Estructuras iterativas (Mientras, Repetir, Para).
- Teoremas de la programación estructurada.

---

## Trimestre I-II: Modularidad y Estructuras de Datos (Unidades 6-10)

### Unidad 6: Programación Modular
- Funciones y procedimientos: Definición y Declaración.
- Ámbito de variables: Datos locales y globales (Scope).
- Paso de parámetros y retorno de valores.

### Unidad 7: Arreglos
- Definición, clasificación y operaciones básicas.
- Métodos de Ordenamiento (Burbuja, Inserción).
- Métodos de búsqueda (Secuencial, Binaria).

### Unidad 8: Tratamiento de Cadenas de Caracteres
- Definición y manipulación de texto mediante funciones nativas.

### Unidad 9: Estructuras de Registros
- Definición, declaración y acceso a objetos literales.
- Arreglos de estructuras.

### Unidad 10: Archivos
- Persistencia de datos en disco duro.
- Gestión de archivos mediante el módulo fs (Formato JSON).

---

## Trimestre I-III: Gestión de Memoria y Estructuras Dinámicas (Unidades 11-14)

### Unidad 11: Punteros
- Definición, operadores y gestión de referencias en memoria.
- Punteros y estructuras.

### Unidad 12: Listas Enlazadas
- Listas simplemente enlazadas: Inserción, búsqueda y eliminación.
- Introducción a listas doblemente enlazadas y circulares.

### Unidad 13: Recursividad
- Fundamentos, caso base y diseño de algoritmos recursivos.

### Unidad 14: Introducción a las Estructuras de Datos Dinámicas Avanzadas: Pilas, Colas y Árboles
- Definición, funcionalidades e implementación básica de Stacks, Queues y Árboles Binarios.

---

## Estrategias Pedagógicas
Las estrategias seleccionadas responden a los principios del "aprender haciendo" promovidos por el Documento Rector del PNFI y se articulan con la dimensión de Gestión y Calidad de la línea de Ingeniería del Software:

- **Metodología de las 4 Fases:** Aplicación obligatoria en cada resolución de problemas (Analizar, Diseñar, Codificar, Probar). Esta metodología se alinea directamente con la dimensión de Análisis e Ingeniería de Requerimientos.
- **Clase Invertida (Flipped Classroom):** Apropiación teórica previa mediante guías en Markdown y taller práctico presencial, fomentando la autonomía del aprendizaje.
- **Programación Dirigida (Live Coding):** Demostración de lógica y depuración en tiempo real por parte del docente, simulando entornos profesionales de desarrollo.
- **Documentación como Hábito:** Desde la Unidad 2, el estudiante documenta cada solución siguiendo estándares de calidad, creando una cultura de la documentación alineada con las prácticas de la Ingeniería del Software.

## Recursos Tecnológicos
El ecosistema tecnológico se seleccionó para garantizar la continuidad curricular con Programación II y la alineación con la línea de Desarrollo de Aplicaciones:

- **Lenguaje:** JavaScript (Node.js runtime) — permite la transición directa hacia el desarrollo web en trayectos posteriores.
- **Herramientas de Desarrollo:** Visual Studio Code, Terminal de comandos (CLI), Librería prompt-sync.
- **Control de Versiones:** Git y GitHub para la gestión del código fuente, alineado con las prácticas de Ingeniería del Software.
- **Formato de Datos:** JSON como formato estándar de persistencia (Unidad 10), creando el puente hacia servicios REST en Programación II.
- **Documentación:** Guías en Markdown y repositorios de control de versiones.

## Sistema de Evaluación
La evaluación se orienta a validar las competencias asociadas a las dimensiones operativas de la línea de Ingeniería del Software:

- **Pruebas de Lógica (50%):** Resolución de algoritmos en papel/pizarra para validar el pensamiento analítico. Evalúa la capacidad de Análisis e Ingeniería de Requerimientos.
- **Laboratorios de Implementación (25%):** Traducción de lógica a programas funcionales en Node.js. Evalúa competencias de Arquitectura y Diseño de Software.
- **Retos de Algoritmia Avanzada (25%):** Resolución de problemas de alta complejidad en tiempo real. Evalúa la capacidad de diseñar soluciones eficientes con estructuras de datos apropiadas.

## Referencias Bibliográficas
- Haverbeke, M. (2018). *Eloquent JavaScript: A Modern Introduction to Programming*. [https://eloquentjavascript.net/](https://eloquentjavascript.net/)
- Simpson, K. (2015). *You Don't Know JS: Up & Going*. [https://github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
- Wirth, N. (1987). *Algoritmos + Estructuras de Datos = Programas*. Ediciones del Castillo.
- Ministerio del Poder Popular para la Educación Universitaria. *Documento Rector del PNFI*. Caracas, Venezuela.
- Ministerio del Poder Popular para la Educación Universitaria. *Líneas de Investigación del PNFI: Actualización 2024*. Caracas, Venezuela.
- Mozilla Developer Network (MDN). *JavaScript Reference and Web APIs*. [https://developer.mozilla.org/es/docs/Web/JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- Node.js Foundation. *Official Node.js Documentation and Best Practices*. [https://nodejs.org/docs/latest/api/](https://nodejs.org/docs/latest/api/)
- ISO/IEC 25010:2011. *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE)*.
