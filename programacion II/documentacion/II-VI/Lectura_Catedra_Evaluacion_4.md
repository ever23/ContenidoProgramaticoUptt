# Manual de Estudio Profundo: Evaluación 4
## Materia: Programación II (Trayecto II)
### Eje Temático: Despliegue en Producción (VPS) y Arquitectura Final

---

## 🧭 Introducción: De "Funciona en mi máquina" a "Funciona en el Mundo"
Hasta este momento, tú has sido el desarrollador, el servidor y el cliente. Cuando ejecutas `node index.js`, tu aplicación nace y vive en la IP local de tu máquina (`localhost` o `127.0.0.1`). Si le envías la URL `http://localhost:3000` a tu profesor para que evalúe el sistema, no podrá abrirlo, porque esa dirección solo existe dentro de tu cableado interno.

La fase culminante de la ingeniería de software es el **Despliegue (Deployment)**. Significa tomar tu código terminado, llevarlo a una computadora física real que esté conectada a internet las 24 horas del día (un Servidor en Producción) y configurarlo para que cualquier persona en el planeta pueda acceder a tu sistema.

---

## 🏛️ CAPÍTULO I: Tipos de Hosting (Alojamiento)

Existen múltiples filosofías para subir una aplicación web, dependiendo del presupuesto y el control técnico necesario:

1. **Shared Hosting (Alojamiento Compartido):** Es como alquilar una habitación en una casa gigante. Compartes el disco duro, la RAM y la IP con miles de otras páginas web (típicamente páginas hechas en WordPress/PHP). Es barato pero muy limitado. No puedes instalar Node.js a tu antojo porque no eres el "dueño" del sistema operativo.
2. **PaaS (Plataforma como Servicio - ej. Heroku, Vercel, Render):** Es como un taxi. Tú entregas el código y ellos se encargan de encender el servidor, instalar Node.js y la Base de Datos automáticamente. Es excelente para empezar, pero costoso a largo plazo y tienes poco control sobre el hardware subyacente.
3. **VPS (Virtual Private Server - Servidor Privado Virtual):** Es el estándar profesional. Es como alquilar una computadora en blanco (generalmente con Linux Ubuntu) ubicada en un centro de datos en Nueva York o Frankfurt. Tú tienes control total (acceso **Root**). Eres responsable de instalar Node.js, configurar la Base de Datos y encender la aplicación. 

Esta cátedra exige el dominio de la filosofía **VPS** para forjar una verdadera comprensión de los sistemas.

---

## 🧩 CAPÍTULO II: Preparando el Entorno VPS (Linux)

Cuando compras un VPS (en empresas como DigitalOcean, AWS EC2 o Linode), te entregan únicamente una IP pública (ej. `198.51.100.22`), un usuario (`root`) y una contraseña. No hay interfaz gráfica (no hay mouse ni ventanas), todo se controla mediante una terminal en negro a través de **SSH**.

### 2.1 Conexión Segura por SSH
SSH (Secure Shell) es un protocolo criptográfico de red para operar servicios de red de forma segura sobre una red no segura.
Para entrar a tu servidor desde tu casa, abres tu terminal y escribes:
`ssh root@198.51.100.22`

Una vez dentro, estás operando la computadora remota. Debes instalar manualmente el entorno:
```bash
# Actualizar los paquetes del sistema Linux
apt update && apt upgrade

# Instalar Node.js
apt install nodejs

# Instalar el motor de Base de Datos (ej. MySQL)
apt install mysql-server
```

---

## 🏗️ CAPÍTULO III: Gestión de Procesos (PM2)

Si ejecutas tu servidor de la forma clásica escribiendo `node index.js` en el VPS, la aplicación funcionará. Pero en el momento en que cierres la ventana de tu terminal en tu casa, el proceso de Node.js morirá y la aplicación se caerá mundialmente.
Además, si tu código tiene un error y se rompe (Crash), nadie lo levantará automáticamente.

Para solucionar esto, utilizamos un Gestor de Procesos en Producción llamado **PM2**.
PM2 es un demonio (daemon) que corre en el fondo del servidor Linux. 

### Pasos de Despliegue con PM2:
1. Instalas PM2 a nivel global: `npm install -g pm2`
2. Arrancas tu aplicación mediante PM2: `pm2 start index.js --name "MiAppUniversitaria"`
3. ¡Listo! PM2 enviará el proceso al fondo. Si cierras la terminal, la app sigue viva. Si la app se rompe por un error, PM2 la reiniciará automáticamente en menos de un segundo. Si el servidor físico se reinicia, PM2 volverá a encender tu app.

---

## 💻 Laboratorio: Servidores Web Inversos (Nginx)

Nuestra aplicación en Node.js corre en un puerto específico, digamos el `3000`. Pero cuando entras a `www.google.com`, no escribes `www.google.com:3000`. Esto es porque la web estándar funciona sobre los puertos 80 (HTTP) o 443 (HTTPS).

En el mundo profesional, nunca exponemos Node.js directamente al puerto 80 abierto al internet, por razones de seguridad y rendimiento.
Colocamos un "Portero" hiper-rápido llamado **Nginx** (o Apache). 

El usuario de internet le pide la página a Nginx (en el puerto 80). Nginx toma la petición, verifica si es maliciosa, y si está limpia, se voltea y le pasa la petición internamente a Node.js (en el puerto 3000). Esto se conoce como **Proxy Inverso**.

**Arquitectura Final en Producción:**
`Usuario Internet` ➡️ `(IP Pública Puerto 80) Nginx` ➡️ `(Localhost Puerto 3000) Node.js + PM2` ➡️ `Base de Datos MySQL`

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Deployment (Despliegue):** Conjunto integral de actividades y configuraciones que hacen que un sistema de software sea funcional y accesible para su uso previsto dentro de un entorno de producción (live environment).
- **VPS (Virtual Private Server):** Máquina virtual aislada comercializada como un servicio por proveedores de alojamiento en la nube, ofreciendo al usuario acceso a nivel de superusuario (root) sobre el sistema operativo alojado.
- **SSH (Secure Shell):** Protocolo de red criptográfico que permite acceder y operar equipos remotamente a través de una arquitectura cliente-servidor cifrada, erradicando el riesgo de intercepción de credenciales.
- **Daemon (Demonio):** Proceso o hilo del sistema operativo que se ejecuta en segundo plano en lugar de estar bajo el control directo de un usuario interactivo.
- **PM2:** Gestor de procesos avanzado orientado a entornos de producción para aplicaciones Node.js, equipado con balanceo de carga integrado y mecanismos de resiliencia (auto-reinicio y persistencia de estado).
- **Reverse Proxy (Proxy Inverso):** Servidor intermedio de red (como Nginx) posicionado frente a uno o más servidores web internos (como Node.js), que intercepta las peticiones de los clientes y las direcciona lógicamente hacia los servicios subyacentes, actuando como escudo protector y balanceador de carga.
