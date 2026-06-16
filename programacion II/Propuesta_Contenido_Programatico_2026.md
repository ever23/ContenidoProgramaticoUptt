# Propuesta de Innovación Curricular: Programación II (2026)
**Campo de Investigación:** Informática
**Área de Investigación:** Informática Aplicada
**Línea de Investigación Principal:** Desarrollo de Aplicaciones
**Línea de Investigación Secundaria:** Ingeniería del Software
**Enfoque:** Profesionalización del Desarrollo mediante Arquitectura de Capas, Persistencia y Despliegue Real

## Justificación Pedagógica e Investigativa

### Vinculación con las Líneas de Investigación del PNFI
De acuerdo con la estructura jerárquica de investigación del Programa Nacional de Formación en Informática (PNFI), las líneas de investigación constituyen grupos de proyectos y planes de trabajo organizados de forma sistemática, cuyo propósito es orientar la investigación científica dentro de los Proyectos Sociotecnológicos (PST) para dar respuestas cognitivas y socialmente pertinentes a los problemas de las comunidades.

La presente propuesta se inscribe de manera principal en la línea de **Desarrollo de Aplicaciones**, por cuanto su contenido aborda directamente los siguientes programas (dimensiones operativas) de dicha línea:

- **Aplicaciones cliente-servidor:** Las unidades de Arquitectura de Sistemas Web (Unidad 7), Servidores Web con Express.js (Unidad 10) y el Proyecto Final Full-Stack (Unidad 14) forman al estudiante en el diseño e implementación de "sistemas distribuidos que separan responsabilidades entre clientes que solicitan servicios y servidores que los proporcionan", con la arquitectura de 3 capas (Presentación, Negocio, Datos).
- **Servicios de integración para aplicaciones:** La Unidad 9 (Comunicación Asíncrona y Fetch API) capacita al estudiante en la implementación de "tecnologías estándar (REST, JSON)" para el ciclo Petición-Respuesta HTTP y el consumo de servicios, promoviendo la interoperabilidad entre sistemas.
- **Aplicaciones web interactivas:** Las unidades de Diseño de Interfaz con HTML5/CSS3 (Unidad 6) y Programación del DOM (Unidad 8) forman al estudiante en el "desarrollo de soluciones accesibles desde navegadores, que permiten interacción dinámica con el usuario, conexión con bases de datos y despliegue en entornos de Internet", utilizando tecnologías como HTML, CSS y JavaScript.
- **Aplicaciones multiplataforma:** El Proyecto Final (Unidad 14) exige la integración total del sistema (Frontend + Backend + Base de Datos) desplegado en la nube, ejercitando el "diseño y desarrollo de soluciones que pueden ejecutarse en distintos entornos" y favoreciendo "la portabilidad, la eficiencia en el mantenimiento y la cobertura de usuarios diversos".
- **Modelado y gestión de datos:** La Unidad 11 (Gestión de Bases de Datos Relacionales SQL) aborda directamente el "diseño conceptual, lógico y físico de estructuras de datos" mediante esquemas relacionales, normalización, operaciones CRUD y administración de motores (PostgreSQL/MySQL), garantizando "la integridad, consistencia y eficiencia en el almacenamiento y recuperación de la información".
- **Seguridad y auditoría de aplicaciones:** La Unidad 12 (Integración, Sesiones y Seguridad) incorpora la "autenticación, autorización" y prevención de ataques (Inyecciones SQL, XSS), alineándose con las "prácticas de desarrollo seguro" y los principios de protección de datos que establece esta dimensión.

De manera secundaria, la propuesta se articula con la línea de **Ingeniería del Software** en las siguientes dimensiones operativas:

- **Arquitectura y Diseño de Software:** Las unidades de POO (Unidades 1-5) forman al estudiante en paradigmas de diseño, aplicando "principios de modularidad, desacoplamiento y escalabilidad" que incluyen "arquitecturas monolíticas, orientadas a servicios y basadas en microservicios".
- **Gestión, Calidad y Seguridad del Software:** Complementando la dimensión de seguridad de Desarrollo de Aplicaciones, la línea de Ingeniería del Software aporta el marco de "control de calidad, pruebas automatizadas y prácticas de desarrollo seguro" que se aplica transversalmente en los laboratorios.
- **Ingeniería de Datos y Automatización de Procesos:** La Unidad 13 (Docker, VPS, SSH, PM2) introduce al estudiante en "integración continua y automatización de flujos de trabajo", incluyendo "DevOps, pipelines de despliegue" y contenerización.
- **Interfaces y Experiencia de Usuario (UX/UI):** La Unidad 6 (HTML5/CSS3, Flexbox, Grid, Responsive Design) aplica directamente los principios de "usabilidad, accesibilidad, diseño centrado en el usuario y prototipado" que establece esta dimensión.

### Continuidad Curricular
Esta propuesta representa la **continuación natural** de Algorítmica y Programación (Trayecto I), materia inscrita en la línea de Ingeniería del Software. El estudiante transita orgánicamente desde los fundamentos lógico-algorítmicos hacia la construcción de productos tecnológicos reales:

- Los **objetos literales y JSON** aprendidos en Algorítmica se convierten en el formato de intercambio de datos de las APIs REST.
- La **programación modular** del Trayecto I evoluciona hacia el **paradigma de objetos** y la **arquitectura de capas**.
- Las **estructuras de datos** del Trayecto I fundamentan la gestión eficiente de la **persistencia en bases de datos relacionales**.

Esta continuidad tecnológica (JavaScript/Node.js) elimina la fricción cognitiva del cambio de lenguaje y permite al estudiante concentrarse en los conceptos de alta complejidad propios del Trayecto II.

### Fundamentación Pedagógica
En el marco de la transformación curricular del Trayecto II, esta propuesta plantea una transición estratégica del aprendizaje instrumental hacia la Ingeniería de Software como arquitectura integral. Alineada con el Documento Rector del PNFI, esta actualización busca la convergencia de competencias técnicas mediante la unificación del ecosistema de desarrollo.

El núcleo de la propuesta reside en la reducción de la carga cognitiva mediante la continuidad sintáctica (JavaScript/Node.js). Al eliminar la fragmentación tecnológica característica de modelos anteriores, el estudiante puede dedicar su potencial analítico a la comprensión de conceptos de alta complejidad como la Programación Orientada a Objetos, la arquitectura de tres capas y la seguridad lógica. Este enfoque garantiza la formación de un profesional capaz de liderar proyectos socio-tecnológicos con soluciones escalables, seguras y alineadas con los estándares internacionales de la industria del software.

## Diagnóstico de Obsolescencia y Desafío Pedagógico
La revisión del modelo tradicional de Programación II revela factores de obsolescencia que limitan el perfil profesional del egresado y su capacidad de aportar soluciones pertinentes a través de los PST:

- **Efecto de la "Caja de Cristal":** El enfoque anterior limitaba al estudiante al entorno local de su computadora (localhost), impidiendo el contacto con entornos reales de la línea de Desarrollo de Aplicaciones. Nuestra propuesta rompe esta barrera, introduciendo el Despliegue en VPS y Gestión de Procesos (PM2), forzando un encuentro real con el entorno de producción.
- **Vulnerabilidad de los Sistemas Monolíticos:** El contenido anterior (basado en scripts lineales) es inadecuado para la web moderna. Esta propuesta introduce el Patrón de Capas y Middlewares como respuesta pedagógica a la necesidad de seguridad, mantenimiento y trabajo colaborativo, competencias exigidas por las dimensiones de Arquitectura y Seguridad de la línea de Ingeniería del Software.
- **Invisibilidad de la Seguridad:** En el diseño curricular previo, la seguridad era un tema anecdotórico. En la Propuesta 2026, la Seguridad Lógica (Autenticación, Sesiones y Saneamiento de Datos) es un eje transversal, atendiendo directamente la dimensión de Gestión, Calidad y Seguridad del Software.
- **Fricción Cognitiva Tecnológica:** El cambio abrupto a lenguajes como PHP o Java generaba una interrupción en el flujo de aprendizaje y rompía la continuidad con el Trayecto I. Al mantener JavaScript, el estudiante puede enfocar toda su potencia cognitiva en los conceptos complejos de la Orientación a Objetos y Bases de Datos.
- **Desarticulación con las Líneas de Investigación:** El contenido anterior no establecía correspondencia con los programas de las líneas de Desarrollo de Aplicaciones ni de Ingeniería del Software. Esta propuesta mapea explícitamente cada bloque temático con las dimensiones operativas correspondientes.

---

## Trimestre II-IV: Paradigma de Objetos e interfaces (Unidades 1-6)
**Meta:** Migrar de la lógica procedural a la arquitectura de objetos y diseño visual.

### Unidad 1: Paradigma de Programación Orientada a Objetos
- Fundamentos y filosofía del paradigma.

### Unidad 2: Clases y Objetos en JavaScript Moderno
- Definición de clases, atributos y métodos.
- Constructores y Especificadores de Acceso (Público/Privado).

### Unidad 3: Herencia y Reutilización
- Extensión de clases, constructores de subclases y superclases.

### Unidad 4: Polimorfismo y Abstracción
- Sobrecarga y sobreescritura de métodos. Clases abstractas conceptuales.

### Unidad 5: Interfaces y Contratos de Código
- Definición de interfaces y su importancia en sistemas escalables.

### Unidad 6: Herramientas de Diseño de Interfaz (Frontend)
- HTML5 Semántico y CSS3 (Flexbox, Grid, Responsive Design).

---

## Trimestre II-V: Arquitectura Web y Lógica de Script (Unidades 7-10)
**Meta:** Construir el puente entre el cliente y el servidor.

### Unidad 7: Arquitectura de Sistemas Web
- Modelo Cliente-Servidor y Arquitectura de 3 capas (Presentación, Negocio, Datos).

### Unidad 8: Programación de Script y Manipulación del DOM
- Interactividad dinámica y gestión de eventos en el navegador.
- Validación de formularios y captura de datos.

### Unidad 9: Comunicación Asíncrona y Fetch API
- El ciclo Petición-Respuesta (HTTP). Procesamiento de datos JSON.
- Consumo de servicios desde el Frontend.

### Unidad 10: Servidores Web con Express.js
- Configuración de servidores profesionales, rutas y middlewares.
- Servicio de archivos estáticos (Arquitectura integrada).

---

## Trimestre II-VI: Persistencia, Seguridad y Despliegue (Unidades 11-14)
**Meta:** Profesionalización, base de datos y puesta en producción.

### Unidad 11: Gestión de Bases de Datos Relacionales (SQL)
- Administración de motores (PostgreSQL/MySQL), esquemas y backups.
- Operaciones CRUD mediante sentencias SQL optimizadas.

### Unidad 12: Integración, Sesiones y Seguridad
- Gestión de Cookies y Sesiones para autenticación de usuarios.
- Protección de rutas y prevención de ataques (Inyecciones SQL/XSS).

### Unidad 13: Herramientas de Servidor y Producción
- Virtualización con Docker: Creación de imágenes y contenedores para entornos reproducibles.
- Configuración de entornos reales (VPS) mediante SSH.
- Gestión de procesos con PM2 y despliegue continuo.

### Unidad 14: Proyecto Final de Carrera (Defensa)
- Integración total del sistema: Frontend + Backend + BD en la nube.
---

## Estrategias Pedagógicas
Las estrategias responden a los principios del "aprender haciendo" promovidos por el Documento Rector del PNFI y se articulan con las dimensiones operativas de las líneas de Desarrollo de Aplicaciones e Ingeniería del Software:

- **Metodología "Learning by Doing" (Aprender Haciendo):** Desarrollo de micro-proyectos semanales que escalan hasta convertirse en el proyecto final. Cada micro-proyecto se vincula con un programa específico de la línea de Desarrollo de Aplicaciones (ej: un CRUD = Servicios de integración para aplicaciones; un Login = Aplicaciones web interactivas).
- **Sesiones de Live Coding:** El docente desarrolla módulos de software en tiempo real, permitiendo al alumno observar el proceso de debugging y resolución de problemas en entornos profesionales.
- **Revisión de Pares (Code Review):** Uso de Git para que los alumnos revisen el código de sus compañeros, fomentando la lectura de código ajeno y las mejores prácticas de la dimensión de Gestión, Calidad y Seguridad del Software.
- **Arquitectura de 3 Capas:** Aplicación obligatoria de la separación de responsabilidades en todos los laboratorios desde el segundo trimestre, alineándose con el programa de Aplicaciones cliente-servidor.

## Recursos e Herramientas Tecnológicas
El entorno de aprendizaje simula una estación de trabajo de ingeniería de software real, utilizando herramientas alineadas con los programas de la línea de Desarrollo de Aplicaciones:

- **Software Base:** Visual Studio Code (Extensiones Pro), Node.js (LTS), Git — continuidad con el ecosistema del Trayecto I.
- **Ecosistema Backend:** Express.js, NPM (Gestión de dependencias) — programa de Aplicaciones cliente-servidor.
- **Gestión de Datos:** PostgreSQL / MySQL, Clientes de DB (DBeaver/TablePlus) — programas de Servicios de integración para aplicaciones y Modelado y gestión de datos.
- **Pruebas de API:** Postman o Insomnia para la verificación de servicios web — programa de Servicios de integración para aplicaciones.
- **Infraestructura:** Docker & Docker Compose (Contenerización), Servidores VPS, SSH y PM2 — dimensión de Ingeniería de Datos y Automatización de Procesos de la línea de Ingeniería del Software.
- **Material Educativo:** Repositorios de GitHub con plantillas base y documentación en Markdown.

## Sistema de Evaluación
La evaluación es continua y orientada a validar las competencias asociadas a los programas de la línea de Desarrollo de Aplicaciones y las dimensiones de Ingeniería del Software:

- **Evaluación Formativa:** Retroalimentación constante sobre la calidad del código, aplicación de Clean Code y patrones de diseño (dimensión de Gestión, Calidad y Seguridad del Software).
- **Evaluación Sumativa (4 Cortes por Trimestre):**
    - **Laboratorios Técnicos (50%):** Implementación de funcionalidades específicas (ej: un CRUD, un Login). Evalúa competencias de Aplicaciones cliente-servidor y Servicios de integración para aplicaciones.
    - **Exámenes de Lógica/Arquitectura (25%):** Validación de conceptos teóricos y diseño de esquemas de datos. Evalúa competencias de Arquitectura y Diseño de Software, y Modelado y gestión de datos.
    - **Proyecto Final (25%):** Prototipo Totalmente Funcional de un sistema integral Full-Stack, desplegado en un servidor real (VPS) y validado mediante casos de uso reales. Evalúa la integración de todas las dimensiones: Aplicaciones multiplataforma + Seguridad y auditoría de aplicaciones + Ingeniería de Datos y Automatización de Procesos.

## Referencias Bibliográficas
- Martin, R. C. (2008). *Clean Code: A Handbook of Agile Software Craftsmanship*. Prentice Hall.
- Gamma, E., et al. (1994). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.
- Flanagan, D. (2020). *JavaScript: The Definitive Guide*. O'Reilly Media.
- Ministerio del Poder Popular para la Educación Universitaria. *Documento Rector del PNFI*. Caracas, Venezuela.
- Ministerio del Poder Popular para la Educación Universitaria. *Líneas de Investigación del PNFI: Actualización 2024*. Caracas, Venezuela.
- Mozilla Developer Network (MDN). *HTTP and Express.js Documentation*. [https://expressjs.com/](https://expressjs.com/)
- Ley de Infogobierno (2013). *Gaceta Oficial de la República Bolivariana de Venezuela*. [https://www.conati.gob.ve/](https://www.conati.gob.ve/)
- ISO/IEC 25010:2011. *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE)*.
- Fielding, R. T. (2000). *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral Dissertation, University of California, Irvine.
