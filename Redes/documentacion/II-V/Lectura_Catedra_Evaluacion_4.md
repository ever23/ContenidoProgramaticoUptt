# Manual de Estudio Profundo: Evaluación 4
## Materia: Redes (Trayecto II)
### Eje Temático: Seguridad Perimetral y Redes Privadas (VPNs)

---

## 🧭 Introducción: Defendiendo el Castillo
Un servidor conectado a internet sin protección recibe, en promedio, un intento de ataque automatizado por fuerza bruta desde Rusia, China o Estados Unidos cada **30 segundos**. Internet es una zona de guerra hostil plagada de *bots* diseñados para secuestrar equipos e inyectar *Ransomware* (secuestro de datos a cambio de criptomonedas).

La culminación de tus estudios de redes en este trimestre se enfoca en la **Seguridad Perimetral**. Si la red de tu empresa es un castillo, hoy aprenderás a construir la muralla, a configurar a los guardias en el puente levadizo y a crear túneles subterráneos secretos para los aliados.

---

## 🏛️ CAPÍTULO I: El Firewall (Cortafuegos)

Un Firewall es el sistema de seguridad primario de la red. Puede ser un equipo de hardware físico muy costoso (como los de Palo Alto o Cisco ASA) que se pone justo en la frontera entre la red de tu empresa y el Router de internet, o puede ser un software ejecutándose dentro de tu servidor Linux.

El Firewall funciona inspeccionando cada "paquete" de red entrante y saliente y comparándolo contra una estricta **Lista de Control de Acceso (ACL - Access Control List)**.

### 1.1 Filtrado por Reglas (El Guardia del Puente)
La filosofía moderna de seguridad es de **"Denegación Implícita" (Default Deny)**. Consiste en una regla general al final de la lista: *"Si no estás en mi lista de invitados VIP, estás bloqueado"*.
Luego, configuras excepciones:
- **Regla 1:** Permitir entrada de paquetes por el Puerto 80 y 443 (Tráfico Web HTTP/HTTPS para que los clientes vean tu página).
- **Regla 2:** Permitir entrada por el Puerto 22 (SSH) SOLO SI la petición proviene de la dirección IP de la casa del Administrador de Sistemas. Todos los demás intentos de conexión SSH desde el planeta serán descartados (Droppeados) silenciosamente.

### 1.2 Iptables (El Motor Linux)
En servidores Linux, el cortafuegos interno más famoso se llama `iptables` (y su sucesor moderno `nftables`). Trabaja directamente en el núcleo (Kernel) del sistema operativo, interceptando la red a velocidades extremas.

---

## 🧩 CAPÍTULO II: Túneles Secretos (VPN - Virtual Private Network)

Supongamos que el Gerente General está de viaje en Japón, en el Wi-Fi gratuito e inseguro de un Starbucks, y necesita entrar a la base de datos de facturación de la empresa en Caracas para aprobar un pago.
La base de datos es súper secreta y el Firewall de la empresa tiene estrictamente bloqueado el acceso desde el exterior. 

¿Cómo hacemos que el Gerente entre como si estuviera físicamente sentado en la oficina en Caracas, sin abrirle un hueco de seguridad al Firewall de la empresa? **Construyendo una VPN.**

### 2.1 El Funcionamiento de la VPN
1. El gerente abre un programa cliente VPN en su laptop en Japón.
2. Este programa se conecta a un servidor VPN (ej. OpenVPN o WireGuard) instalado dentro del edificio de la empresa en Caracas.
3. Se crea un **Túnel Cifrado** a través de internet (IPsec). Todo lo que el gerente envíe, se empaqueta en una "cápsula" blindada con criptografía extrema. Nadie en el cibercafé de Japón ni en las operadoras de internet internacionales puede ver qué datos van allí.
4. Cuando la cápsula llega al servidor de Caracas, se abre. Para los servidores locales (y el Firewall), parece que la petición vino desde el servidor VPN que está físicamente al lado de ellos en la red LAN.
5. El gerente accede a la base de datos de forma 100% invisible y segura.

---

## 🏗️ CAPÍTULO III: Control de Acceso Local (TCP Wrappers y PAM)

Además de proteger la frontera exterior (Firewall), debemos asegurar las puertas internas del servidor (Defensa en Profundidad).

- **TCP Wrappers (`/etc/hosts.allow` y `/etc/hosts.deny`):** Es una herramienta clásica de Linux. Antes de que un servicio interno (como FTP o SSH) responda, el "Wrapper" (Envoltorio) revisa si la IP de origen está en el archivo de los permitidos. Si está en la lista de los denegados, le corta el teléfono en la cara inmediatamente.
- **PAM (Pluggable Authentication Modules):** Es el corazón del login en Linux. PAM permite crear reglas ultra complejas de autenticación. Por ejemplo: configurar PAM para obligar a que todos los administradores necesiten usar su celular y colocar un código de Google Authenticator (MFA - Múltiple Factor de Autenticación) después de poner su contraseña.

---

## 💻 Resumen del Trimestre II

Has dado el salto de técnico instalador de cables a **Ingeniero Administrador de Infraestructuras**.
Ahora dominas:
1. El diseño topológico profesional y los estándares Wi-Fi (IEEE 802.11).
2. La arquitectura lógica del internet, el enrutamiento y la partición de redes (Subnetting IP).
3. Cómo instalar los servicios invisibles (DHCP, DNS, servidores Web) que mantienen el mundo corporativo vivo.
4. Cómo atrincherar y fortificar esos servicios contra ejércitos de bots mediante Firewalls restrictivos y Criptografía VPN.

Con esto concluye tu especialización de arquitectura local.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Firewall (Cortafuegos):** Dispositivo de hardware o aplicativo de software de red diseñado para monitorear, filtrar y dictaminar el tráfico entrante y saliente basándose en políticas de seguridad lógicas (ACLs) preestablecidas.
- **ACL (Access Control List):** Estructura de datos secuencial que contiene normativas de filtrado permisivo o restrictivo (Reglas) evaluadas cronológicamente para determinar el ruteo o descarte de paquetes IP y puertos de capa 4.
- **Denegación Implícita (Default Deny):** Paradigma de máxima seguridad cibernética en configuración de Firewalls donde toda interacción no explícita o positivamente autorizada en la lista de control, es mandatoriamente denegada y descartada por defecto.
- **VPN (Virtual Private Network):** Arquitectura de red lógica superpuesta que emplea mecanismos de encapsulamiento asimétrico (Túneles) y criptografía (IPsec/SSL) para extender de forma encriptada y remota una red local sobre una infraestructura de red pública o insegura (Internet).
- **IPsec (Internet Protocol Security):** Suite de protocolos IETF, fundamental en la creación de túneles VPN, que opera a nivel de Capa de Red (Capa 3) para proporcionar autenticación robusta, integridad matemática y confidencialidad en los paquetes IP.
- **Fuerza Bruta (Brute Force Attack):** Vector de ataque cibernético heurístico caracterizado por el envío masivo, automatizado y repetitivo de permutaciones de credenciales (passwords) con el objetivo algorítmico de vulnerar sistemas de autenticación débiles.
