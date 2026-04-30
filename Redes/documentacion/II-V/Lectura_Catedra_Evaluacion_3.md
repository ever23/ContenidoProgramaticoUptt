# Manual de Estudio Profundo: Evaluación 3
## Materia: Redes (Trayecto II)
### Eje Temático: Administración y Servicios Vitales de Red

---

## 🧭 Introducción: La Vida de un Administrador de Sistemas
Tener los cables (Capa 1), los Switches (Capa 2) y el enrutamiento IP (Capa 3) configurados es como tener un edificio terminado con calles pavimentadas. Pero el edificio está vacío; no hay negocios ni servicios adentro que la gente pueda usar.

La verdadera utilidad de una red para una empresa radica en los **Servicios** (Capa 7). Aquí el ingeniero de redes se pone el sombrero de **SysAdmin (Administrador de Sistemas)**. Su labor es instalar sistemas operativos (generalmente Linux Server) y levantar aplicaciones de red para automatizar tareas, compartir recursos y mantener la red funcional invisiblemente para los usuarios normales.

---

## 🏛️ CAPÍTULO I: Los Servicios Estructurales (El Cerebro Automático)

Si entras a la cafetería de la universidad, sacas tu teléfono y te conectas al Wi-Fi, instantáneamente tienes acceso a internet. No tuviste que configurar manualmente una IP, la máscara de subred y la dirección del router en tu teléfono. Todo fue mágico. Esa "magia" es gracias a dos servicios críticos:

### 1.1 DHCP (Protocolo de Configuración Dinámica de Host)
Es un servidor que actúa como un "oficial de arrendamiento". Cuando tu teléfono se conecta al Wi-Fi, grita en la red (Broadcast): "¡Hola! Soy nuevo aquí, ¿alguien me presta una IP?". 
El servidor DHCP lo escucha y le responde: "Bienvenido. Tu IP será la `192.168.1.50`, pero solo te la presto por 24 horas (Lease Time). Toma también la dirección del router para que puedas salir a internet".
Si DHCP se cae, nadie nuevo podrá entrar a la red.

### 1.2 DNS (Sistema de Nombres de Dominio)
Las computadoras solo entienden números IP (ej. `142.250.190.46`). Los humanos son pésimos memorizando números IP y excelentes memorizando palabras.
El servidor DNS es "La guía telefónica de Internet". Cuando escribes `www.google.com` en tu navegador, tu PC no sabe a dónde ir. Primero consulta velozmente al servidor DNS: "Disculpa, ¿qué número IP es Google.com?". El DNS responde `142.250.190.46`, y tu PC ya sabe a quién conectarse.
*Dato vital:* Si tu internet parece haberse caído (Chrome dice "No hay conexión" al buscar páginas), pero WhatsApp sigue enviando mensajes, tu internet no se cayó; se cayó tu servidor DNS.

---

## 🧩 CAPÍTULO II: Servicios de Transferencia y Compartición de Archivos

Dentro de una empresa, los empleados necesitan pasarse documentos gigantes que no caben en un correo, o necesitan una carpeta "Pública" en Windows donde todos puedan depositar informes.

- **FTP (File Transfer Protocol):** Un servicio clásico para subir y bajar archivos pesados a un servidor dedicado. Es rápido pero inseguro, viaja en texto plano. En entornos profesionales se exige usar su versión cifrada criptográficamente: **SFTP** (Secure FTP).
- **Samba / SMB (Server Message Block):** Si el servidor de archivos usa Linux, pero los empleados en las oficinas usan Windows, hablan lenguajes nativos distintos. Samba es un servicio de software libre que hace que una máquina Linux "simule" ser una máquina Windows en la red, permitiendo a los contadores arrastrar y soltar carpetas de red mágicamente desde su Explorador de Archivos Windows.

---

## 🏗️ CAPÍTULO III: Acceso Remoto Seguro (El Poder del SysAdmin)

Un administrador de sistemas profesional **no camina** hasta el cuarto de servidores frío para arreglar un error. Arregla un servidor de Rusia sentado en su oficina en Caracas. Lo hace a través de servicios de terminal remota.

- **Telnet:** Creado en 1969, permitía abrir una consola de texto remota. Es la peor pesadilla de seguridad moderna porque si escribes la contraseña de Administrador, esta viaja en texto claro por el cable y cualquier hacker (usando un programa llamado *Wireshark*) puede leerla como si fuera un periódico.
- **SSH (Secure Shell):** El estándar de oro moderno. Hace lo mismo que Telnet (te da una consola terminal de un servidor a 10,000 kilómetros de distancia), pero utiliza **Criptografía Asimétrica (Llaves Públicas y Privadas)**. Toda la comunicación está encriptada militarmente. Aunque el hacker lea los datos del cable, solo verá basura matemática ilegible.

---

## 💻 Laboratorio Teórico: Instalación de un Servicio Web en Linux

El sistema operativo preferido para servidores del mundo es **GNU/Linux** (distribuciones como Ubuntu Server, Debian o CentOS) debido a su inmunidad a virus comunes, estabilidad y que es gratuito.

Para levantar un Servidor Web (que compite con Node.js/Express, pero está escrito en C para servir HTML estático rapidísimo), usamos **Apache** o **Nginx**.

*Secuencia típica de un Administrador por consola SSH:*
```bash
# 1. Nos conectamos remotamente al servidor desde nuestra PC
ssh root@203.0.113.5

# 2. Actualizamos la lista de programas del servidor
sudo apt update

# 3. Instalamos el demonio Apache Web Server
sudo apt install apache2

# 4. Aseguramos que el servicio arranque automáticamente si la máquina se reinicia
sudo systemctl enable apache2

# 5. Iniciamos el servicio manualmente ahora mismo
sudo systemctl start apache2

# Resultado: Si entras por Chrome a http://203.0.113.5, verás la página web de la empresa.
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **SysAdmin (Administrador de Sistemas):** Profesional de Tecnologías de la Información responsable del despliegue, configuración, mantenimiento operativo, seguridad y monitoreo proactivo de la infraestructura de servidores y servicios de red de una organización.
- **DHCP (Dynamic Host Configuration Protocol):** Protocolo de red cliente-servidor (UDP 67/68) que asigna dinámicamente y centraliza la gestión de direcciones IP, máscaras de subred y puertas de enlace (gateways) a los dispositivos (hosts) entrantes en una red.
- **DNS (Domain Name System):** Sistema de bases de datos jerárquico y distribuido que traduce nombres de dominio legibles por humanos (ej. dominio.com) a identificadores numéricos de enrutamiento (Direcciones IP), resolviendo la localización de nodos en internet.
- **SFTP (SSH File Transfer Protocol):** Protocolo de red diseñado para el acceso, transferencia y administración segura de archivos, operando exclusivamente sobre un túnel encriptado (generalmente SSH en el puerto 22) para garantizar la integridad y confidencialidad del flujo de datos.
- **Samba (SMB/CIFS):** Implementación de software libre del protocolo de red propietario de Microsoft (SMB), que permite la interoperabilidad estructural de archivos compartidos e impresoras entre plataformas Unix/Linux y clientes nativos Windows.
- **Criptografía Asimétrica:** Paradigma criptográfico base de SSH y HTTPS que emplea un par de claves algorítmicamente vinculadas: una llave pública (distribuible libremente para encriptar) y una llave privada (protegida localmente para desencriptar), garantizando confidencialidad extrema sin requerir intercambio previo de secretos.
