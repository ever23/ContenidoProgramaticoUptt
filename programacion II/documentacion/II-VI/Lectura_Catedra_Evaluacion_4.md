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

1. **Shared Hosting (Alojamiento Compartido):** Es como alquilar una habitación en una casa gigante. Compartes el disco duro, la RAM y la IP con miles de otras páginas web (típicamente hechas en WordPress/PHP). Es barato pero muy limitado. No puedes instalar Node.js a tu antojo porque no eres el "dueño" del sistema operativo.
2. **PaaS (Plataforma como Servicio - ej. Heroku, Vercel, Render):** Es como un taxi. Tú entregas el código y ellos se encargan de encender el servidor, instalar Node.js y la Base de Datos automáticamente. Es excelente para empezar, pero costoso a largo plazo y tienes poco control sobre el hardware.
3. **VPS (Virtual Private Server - Servidor Privado Virtual):** Es el estándar profesional. Es como alquilar una computadora en blanco (generalmente con Linux Ubuntu) en un centro de datos. Tú tienes control total (acceso **Root**). Eres responsable de instalar Node.js, configurar la BD y la seguridad. 

Esta cátedra exige el dominio de la filosofía **VPS** para forjar una verdadera comprensión de los sistemas.

---

## 🧩 CAPÍTULO II: Preparando el Entorno VPS (Linux)

Cuando compras un VPS (en DigitalOcean, AWS EC2 o Linode), te entregan una IP pública (ej. `198.51.100.22`), un usuario (`root`) y una contraseña. No hay interfaz gráfica (no hay mouse ni ventanas), todo se controla mediante una terminal en negro a través de **SSH**.

### 2.1 Conexión Segura por SSH
SSH (Secure Shell) es un protocolo criptográfico para operar servidores remotos. Desde tu casa, abres la terminal y escribes:
`ssh root@198.51.100.22`

Una vez dentro, estás operando la computadora remota. Tradicionalmente (arquitectura *Bare-Metal*), debías instalar manualmente el entorno ejecutando comandos como `apt install nodejs mysql-server`. Sin embargo, esto trae un problema: **Las incompatibilidades**. Si tu laptop tenía Node v20 y el servidor Node v18, el proyecto podría romperse.

---

## 🐳 CAPÍTULO III: La Revolución de los Contenedores (Docker)

Para solucionar el eterno síndrome de *"En mi máquina funcionaba, pero en el servidor se rompió"*, la industria inventó la **Contenerización**, siendo **Docker** su máximo exponente.

En lugar de instalar Node.js y las dependencias directamente en el sistema operativo del VPS, tú "empaquetas" tu aplicación junto con su propia versión de Node.js, sus librerías y su configuración dentro de una caja virtual y hermética llamada **Contenedor**.

### Ventajas de la Arquitectura con Docker:
1. **Aislamiento:** El contenedor de tu aplicación corre de forma totalmente independiente. Si el contenedor colapsa, el servidor VPS físico sigue intacto.
2. **Portabilidad Absoluta:** Si el contenedor corre bien en tu laptop local, correrá exactamente igual en un VPS en Alemania o en un gigantesco clúster de Amazon Web Services, sin importar qué versión de Linux tengan instalada por debajo.
3. **Escalabilidad Inmediata:** Si el tráfico de tu sistema universitario se dispara el día de las inscripciones, Docker te permite "clonar" y encender 5 copias idénticas de tu contenedor en cuestión de segundos.

En la nube moderna, en lugar de ejecutar comandos de instalación largos, el ingeniero de DevOps simplemente le dice al servidor: *"Descarga mi contenedor Docker y enciéndelo"*.

### 3.1 La Receta: El `Dockerfile`
Para empaquetar tu aplicación, debes escribir las instrucciones de instalación en un archivo llamado `Dockerfile`. Este archivo es la "receta" que le dice a Docker cómo construir tu caja hermética.

**Ejemplo básico para una API Node.js:**
```dockerfile
# 1. Definimos el sistema operativo base (Node.js v20 ultra-ligero)
FROM node:20-alpine

# 2. Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos el package.json y descargamos las librerías
COPY package*.json ./
RUN npm install

# 4. Copiamos el resto de nuestro código fuente (index.js, routes, etc.)
COPY . .

# 5. Le indicamos a Docker qué puerto usará la aplicación
EXPOSE 3000

# 6. Comando final para encender el servidor
CMD ["node", "index.js"]
```

Con este simple archivo, Docker se encarga de descargar un mini-sistema operativo, instalar Node, instalar tus librerías y encender la aplicación. Esto garantiza que el entorno sea 100% idéntico tanto en la laptop de desarrollo como en el servidor de producción.

### 3.2 Orquestación: Node.js + MariaDB (`docker-compose`)
Rara vez una aplicación corre sola; por lo general, nuestra API necesita conectarse a una base de datos. En lugar de instalar MariaDB manualmente en el VPS, podemos levantar un segundo contenedor con la base de datos y conectarlos entre sí usando una herramienta llamada **Docker Compose** y un archivo `docker-compose.yml`.

**Ejemplo `docker-compose.yml`:**
```yaml
version: '3.8'

services:
  # 1. Nuestro contenedor de Base de Datos
  basedatos:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD: clave_super_secreta
      MYSQL_DATABASE: universidad_db
    ports:
      - "3306:3306"

  # 2. Nuestro contenedor de Node.js
  api:
    build: . # Construye la app usando el Dockerfile que hicimos antes
    ports:
      - "3000:3000"
    environment:
      DB_HOST: basedatos # Docker crea un DNS automático con el nombre del servicio
    depends_on:
      - basedatos # La API espera a que MariaDB esté lista
```

Con un solo comando (`docker-compose up -d`), el servidor encenderá de golpe la base de datos MariaDB y tu aplicación Node.js, y creará una red interna virtual para que se comuniquen entre ellos de forma segura.

> [!NOTE]
> **¿Y qué pasa con el `Dockerfile` que creamos antes?**
> ¡Queda exactamente igual! El `Dockerfile` es la receta exclusiva para armar tu aplicación Node.js. Por otro lado, `docker-compose` es el "Director de Orquesta" que toma tu `Dockerfile` (mediante la instrucción `build: .`), lo ensambla, y lo pone a funcionar al lado de la base de datos MariaDB (que ya viene pre-fabricada por la comunidad). Esta es la magia de la separación de responsabilidades.

---

## 🏗️ CAPÍTULO IV: Gestión de Procesos en Bare-Metal (PM2)

Si decides **no usar Docker** y desplegar tu código directamente sobre el servidor a la antigua (Bare-Metal), te enfrentarás a un segundo problema:
Si ejecutas `node index.js` en tu VPS, la aplicación funcionará. Pero en el momento en que cierres la ventana de terminal en tu casa, el proceso morirá y tu aplicación se caerá mundialmente.

Para evitar esto, utilizamos un Gestor de Procesos en Producción llamado **PM2**.
PM2 es un *demonio* (daemon) que corre en el fondo del servidor Linux y "cuida" a tu aplicación.

### Pasos de Despliegue con PM2:
1. Instalas PM2: `npm install -g pm2`
2. Arrancas tu app: `pm2 start index.js --name "MiAppUniversitaria"`
3. ¡Listo! PM2 enviará el proceso al fondo. Si cierras la terminal, la app sigue viva. Si la app arroja un error fatal y se apaga, PM2 la reiniciará automáticamente en un abrir y cerrar de ojos.

---

## 💻 Laboratorio: Servidores Web Inversos (Nginx)

Ya sea que uses Docker o PM2, tu aplicación de Node.js estará corriendo en un puerto específico (ej. `3000`). Pero cuando entras a `www.google.com`, no escribes `www.google.com:3000`. Esto es porque la web estándar viaja por los puertos 80 (HTTP) y 443 (HTTPS).

En el mundo profesional, nunca conectamos Node.js directamente al internet abierto. Colocamos un "Portero" hiper-rápido llamado **Nginx**. 

El usuario de internet le pide la página a Nginx (puerto 80). Nginx toma la petición, verifica si es un ataque DDoS, y si está limpia, se voltea y le pasa la petición internamente a tu contenedor de Node.js (puerto 3000). Esto se conoce como **Proxy Inverso**.

**Arquitectura Final (Topología en Producción):**
`Usuario Internet` ➡️ `(IP Pública Puerto 80) Nginx` ➡️ `(Localhost Puerto 3000) Contenedor Docker / PM2` ➡️ `Base de Datos`

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Deployment (Despliegue):** Conjunto integral de actividades y configuraciones que hacen que un sistema de software sea funcional y accesible para su uso previsto dentro de un entorno de producción.
- **VPS (Virtual Private Server):** Máquina virtual aislada comercializada como un servicio por proveedores de la nube, ofreciendo acceso a nivel de superusuario (root) sobre un Linux en blanco.
- **Docker:** Plataforma de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando abstracción adicional y portabilidad a través de la virtualización a nivel de sistema operativo.
- **Contenedor:** Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en distintos entornos informáticos.
- **PM2:** Gestor de procesos avanzado orientado a entornos de producción para Node.js, equipado con mecanismos de resiliencia (auto-reinicio).
- **Reverse Proxy (Proxy Inverso):** Servidor intermedio de red (ej. Nginx) posicionado frente a servidores internos, que intercepta las peticiones de los clientes y las enruta lógicamente hacia los servicios subyacentes.
