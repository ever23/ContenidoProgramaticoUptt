# 📋 Asignación: Exposición y Defensa Práctica (Evaluación 3)
**Materia:** Redes (Trayecto II)
**Eje Temático:** Administración y Servicios Vitales de Red

## 🎯 Objetivo de la Evaluación
Demostrar el dominio teórico de los servicios de red fundamentales (Capa 7) y contrastar la experiencia práctica de administrar un servidor web de alto rendimiento (**Nginx**) en entornos Windows y Linux, fomentando la investigación autónoma.

## 👥 Modalidad
*   Grupos de trabajo (2 a 3 estudiantes).
*   **A cada grupo se le asignará un entorno de Sistema Operativo** para su investigación y práctica: **Grupo A (Windows)** o **Grupo B (Linux/Termux en Android)**.

---

## 📖 PARTE I: Defensa Teórica
Basándose en el material "Lectura_Catedra_Evaluacion_3", el grupo deberá exponer de forma concisa y clara los siguientes puntos antes de la demostración:

1.  **El Rol del SysAdmin:** 
2.  **Servicios Estructurales:** Explicar cómo interactúan el servicio **DHCP** y el servicio **DNS** en una red real.
3.  **Transferencia de Archivos:** **FTP/SFTP** y **Samba/SMB**.
4.  **Acceso Remoto Seguro:** acceso remoto con ssh .

---

## 💻 PARTE II: Demostración Práctica (El Reto Nginx)
El grupo deberá investigar, preparar y mostrar **en vivo** la puesta en marcha de un servidor web **Nginx** en su sistema operativo asignado. **No se permiten herramientas empaquetadas (como XAMPP o WAMP)**; deben investigar cómo desplegar Nginx puro.

### 🚀 Requisitos de la Demostración para AMBOS Grupos:
Durante la evaluación presencial, el grupo deberá demostrar al profesor lo siguiente:

1.  **Despliegue y Arranque:** Demostrar cómo se inicia el servicio del servidor web Nginx en su entorno (Windows o Linux/Termux).
2.  **Alojamiento del Mini-sitio:** El servidor debe estar configurado para alojar un **sitio web compuesto por exactamente tres (3) páginas HTML básicas**.
    *   Estas páginas deben estar **conectadas entre sí mediante enlaces (links)** (ej. un menú de navegación básico para ir de una a otra).
    *   La página de inicio debe contener los nombres y cédulas de los integrantes.
3.  **Prueba de Red Local:** El grupo debe averiguar la dirección IP de su máquina servidora. El profesor se conectará a la misma red Wi-Fi y probará el acceso a la página web **desde su propio dispositivo**, navegando por los diferentes enlaces para comprobar el enrutamiento correcto de los archivos.
4.  **Detención del Servicio:** Al finalizar, el grupo debe demostrar cómo se apaga o detiene correctamente el servicio de Nginx en su sistema operativo.

### 🔍 Temas de Investigación por Grupo:

**Grupo A (Entorno Windows):**
*   ¿Cómo se descarga y ejecuta el binario de Nginx nativo en Windows?
*   ¿En qué carpeta deben ubicarse los archivos HTML para que Nginx los lea por defecto en este entorno?
*   ¿Cómo se averigua la IP en Windows y cómo se asegura que el Firewall local permita el tráfico entrante al puerto 80?
*   ¿Cómo se detiene el proceso de un servidor que corre en segundo plano en Windows?

**Grupo B (Entorno Linux / Termux en Android):**
*   ¿Cómo se instala Nginx usando los repositorios oficiales por línea de comandos?
*   ¿Cuál es la ruta (directorio) por defecto donde Linux (o Termux) espera encontrar los archivos web públicos?
*   ¿Cómo se crean y editan archivos HTML directamente desde la terminal (consola)?
*   ¿Cómo se gestiona (inicia/detiene) el servicio de Nginx mediante comandos?

---

## ⚖️ Criterios de Evaluación (Rúbrica)

| Criterio | Descripción | Ponderación |
| :--- | :--- | :--- |
| **Investigación y Despliegue** | El grupo logró descubrir cómo levantar Nginx en su entorno sin usar instaladores gráficos pre-empaquetados. | 30% |
| **Enrutamiento (HTML)** | El mini-sitio de 3 páginas carga correctamente, y los enlaces internos usan rutas relativas válidas. | 20% |
| **Accesibilidad Externa** | La página es visible por el profesor desde otro dispositivo en la red (correcto manejo de IP/Puertos/Firewall). | 25% |
| **Dominio Teórico** | Claridad en la defensa de la Parte I y uso correcto del vocabulario técnico. | 25% |
