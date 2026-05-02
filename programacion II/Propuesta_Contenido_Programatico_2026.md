# Propuesta de Innovación Curricular: Programación II (2026)
**Línea de Investigación:** Ingeniería de Software Educativa y Arquitecturas Web Soberanas
**Enfoque:** Profesionalización del Desarrollo mediante el Modelo de Capas y Persistencia Real

## 🎓 Justificación Pedagógica e Investigativa
En la etapa de transición hacia el Trayecto II, la presente propuesta plantea un cambio de paradigma: pasar del código como herramienta aislada al código como **arquitectura de ingeniería**. Alineada con el **Documento Rector del PNFI**, esta actualización busca consolidar la formación técnica mediante la construcción de soluciones integrales que respondan a la realidad productiva del país.

La introducción de la **Arquitectura de 3 Capas** y el desarrollo **Full-Stack** no solo dota al estudiante de competencias laborales de alto nivel, sino que fomenta una **cultura de ingeniería** basada en el orden, la modularidad y la escalabilidad. Al centrar la enseñanza en un stack tecnológico unificado y soberano (Node.js/SQL/Linux), garantizamos que el estudiante pueda liderar proyectos socio-tecnológicos complejos, transformando meros conceptos en prototipos totalmente funcionales con impacto social directo.

## 📉 Diagnóstico de Obsolescencia y Desafío Pedagógico
La revisión del modelo tradicional de Programación II revela factores de obsolescencia que limitan el perfil profesional del egresado:

- **Efecto de la "Caja de Cristal":** El enfoque anterior limitaba al estudiante al entorno local de su computadora (localhost). Nuestra propuesta rompe esta barrera, introduciendo el **Despliegue en VPS y Gestión de Procesos (PM2)**, forzando un encuentro real con el entorno de producción y la administración de sistemas.
- **Vulnerabilidad de los Sistemas Monolíticos:** El contenido anterior (basado en scripts lineales) es inadecuado para la web moderna. Esta propuesta introduce el **Patrón de Capas y Middlewares** como respuesta pedagógica a la necesidad de seguridad, mantenimiento y trabajo colaborativo en equipo.
- **Invisibilidad de la Seguridad:** En el diseño curricular previo, la seguridad era un tema anecdótico. En la Propuesta 2026, la **Seguridad Lógica (Autenticación, Sesiones y Saneamiento de Datos)** es un eje transversal, preparando al egresado para proteger la integridad de la información institucional.
- **Fricción Cognitiva Tecnológica:** El cambio abrupto a lenguajes como PHP o Java en este nivel generaba una interrupción en el flujo de aprendizaje. Al mantener la **continuidad con JavaScript**, el estudiante puede enfocar toda su potencia cognitiva en los conceptos complejos de la **Orientación a Objetos y Bases de Datos**.

---

## 📅 Trimestre 1: Paradigma de Objetos e interfaces (Unidades 1-5, 7)
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

## 📅 Trimestre 2: Arquitectura Web y Lógica de Script (Unidades 6, 8, 9)
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

## 📅 Trimestre 3: Persistencia, Seguridad y Despliegue (Unidades 10-12)
**Meta:** Profesionalización, base de datos y puesta en producción.

### Unidad 11: Gestión de Bases de Datos Relacionales (SQL)
- Administración de motores (PostgreSQL/MySQL), esquemas y backups.
- Operaciones CRUD mediante sentencias SQL optimizadas.

### Unidad 12: Integración, Sesiones y Seguridad
- Gestión de Cookies y Sesiones para autenticación de usuarios.
- Protección de rutas y prevención de ataques (Inyecciones SQL/XSS).

### Unidad 13: Herramientas de Servidor y Producción
- Virtualización con **Docker**: Creación de imágenes y contenedores para entornos reproducibles.
- Configuración de entornos reales (VPS) mediante SSH.
- Gestión de procesos con PM2 y despliegue continuo.

### Unidad 14: Proyecto Final de Carrera (Defensa)
- Integración total del sistema: Frontend + Backend + BD en la nube.
---

## 🏛️ Estrategias Pedagógicas
Para garantizar el éxito en el desarrollo de software profesional, se aplicarán las siguientes estrategias:
- **Metodología "Learning by Doing" (Aprender Haciendo):** Desarrollo de micro-proyectos semanales que escalan hasta convertirse en el proyecto final.
- **Sesiones de Live Coding:** El docente desarrolla módulos de software en tiempo real, permitiendo al alumno observar el proceso de *debugging* y resolución de problemas.
- **Revisión de Pares (Code Review):** Uso de Git para que los alumnos revisen el código de sus compañeros, fomentando la lectura de código ajeno y las mejores prácticas.
- **Arquitectura de 3 Capas:** Aplicación obligatoria de la separación de responsabilidades en todos los laboratorios desde el segundo trimestre.

## 🛠️ Recursos y Herramientas Tecnológicas
El entorno de aprendizaje simula una estación de trabajo de ingeniería de software real:
- **Software Base:** Visual Studio Code (Extensiones Pro), Node.js (LTS), Git.
- **Ecosistema Backend:** Express.js, NPM (Gestión de dependencias).
- **Gestión de Datos:** PostgreSQL / MySQL, Clientes de DB (DBeaver/TablePlus).
- **Pruebas de API:** Postman o Insomnia para la verificación de servicios web.
- **Infraestructura:** Docker & Docker Compose (Contenerización), Servidores VPS, SSH y PM2 para puesta en producción.
- **Material Educativo:** Repositorios de GitHub con plantillas base y documentación en Markdown.

## 📊 Sistema de Evaluación
La evaluación es continua y orientada a resultados funcionales:
- **Evaluación Formativa:** Retroalimentación constante sobre la calidad del código, aplicación de *Clean Code* y patrones de diseño.
- **Evaluación Sumativa (4 Cortes por Trimestre):**
    - **Laboratorios Técnicos (50%):** Implementación de funcionalidades específicas (ej: un CRUD, un Login).
    - **Exámenes de Lógica/Arquitectura (25%):** Validación de conceptos teóricos y diseño de esquemas de datos.
    - **Proyecto Final (25%):** Prototipo Totalmente Funcional de un sistema integral Full-Stack, desplegado en un servidor real (VPS) y validado mediante casos de uso reales.
