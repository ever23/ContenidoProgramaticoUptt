# 🛰️ Guía de Laboratorio: Implementación con MikroTik (RouterOS)

Esta guía complementaria está diseñada para integrar el equipo físico MikroTik disponible en el laboratorio con los objetivos académicos del Trayecto II, Trimestre V.

---

## 1. Conceptos Fundamentales
MikroTik no es solo un router; es una computadora especializada que corre un sistema operativo basado en Linux llamado **RouterOS**. 

**Para el programador:** Piensa en MikroTik como un servidor con una estructura de configuración jerárquica, donde cada comando en la terminal tiene su equivalente en la interfaz gráfica.

---

## 2. Acceso Inicial al Equipo
Para configurar el equipo desde cero, utilizaremos la herramienta oficial **Winbox** (disponible en mikrotik.com).

1. **Conexión Física:** Conecta tu PC a cualquier puerto del MikroTik (excepto el puerto 1, que suele ser para internet).
2. **Acceso por MAC Address:** Winbox permite conectarse incluso si el equipo no tiene una IP configurada. Ve a la pestaña "Neighbors" y haz clic en la dirección MAC del equipo.
3. **Credenciales por defecto:** 
   - **User:** `admin`
   - **Password:** (vacío)

---

## 3. Configuración Base (Práctica para Evaluación 2: Direccionamiento)
El objetivo es crear una red local funcional para el laboratorio.

### A. Identificación de Interfaces
Es buena práctica renombrar los puertos para evitar errores:
- `ether1` -> `ether1-WAN` (Internet)
- `ether2` -> `ether2-LAN-Docente`
- `ether3` -> `ether3-LAN-Alumnos`

### B. Asignación de Direcciones IP
*Ruta: IP > Addresses*
- Asigna `192.168.10.1/24` a la interfaz `ether3-LAN-Alumnos`.
- **Explicación Pedagógica:** Aquí los alumnos ven cómo el router se convierte en el **Default Gateway** de esa red.

### C. Configuración del Servidor DHCP
*Ruta: IP > DHCP Server > DHCP Setup*
1. Selecciona la interfaz `ether3-LAN-Alumnos`.
2. Define el rango de direcciones (Pool): `192.168.10.10 - 192.168.10.250`.
3. Establece el Gateway: `192.168.10.1`.
- **Resultado:** Cualquier PC conectada al puerto 3 recibirá una IP automáticamente.

---

## 4. Salida a Internet (Práctica para Evaluación 3: Servicios)
Para que las PCs del laboratorio naveguen, necesitamos configurar el **NAT (Network Address Translation)**.

### A. Cliente DHCP (WAN)
*Ruta: IP > DHCP Client*
- Agrega un cliente en `ether1-WAN`. Esto permitirá que el MikroTik reciba internet del proveedor de la universidad.

### B. NAT Masquerade (El "Puente")
*Ruta: IP > Firewall > NAT*
- **Chain:** `srcnat`
- **Out. Interface:** `ether1-WAN`
- **Action:** `masquerade`
- **Concepto:** Traduce las IPs privadas de los alumnos a la IP pública del router para poder salir a internet.

---

## 5. Seguridad Perimetral (Práctica para Evaluación 4)
MikroTik utiliza un firewall basado en estados (stateful).

### Bloqueo por IP (Lista Negra)
*Ruta: IP > Firewall > Filter Rules*
1. **Chain:** `forward`
2. **Src. Address:** `192.168.10.50` (IP de un alumno "travieso")
3. **Action:** `drop`
- **Reto para la clase:** ¿Cómo harías para que ese alumno solo tenga bloqueado el internet pero pueda ver el servidor local?

---

## 📘 Diccionario MikroTik para la Clase
- **Winbox:** Interfaz gráfica nativa de gestión.
- **Bridge:** Agrupación lógica de puertos físicos para que funcionen como un Switch.
- **Safe Mode:** Botón vital en Winbox. Si haces un cambio que te desconecta, el router deshace el cambio automáticamente al perder la conexión. (¡Ideal para estudiantes!).
- **Torch:** Herramienta de monitoreo en tiempo real para ver qué tráfico está pasando por una interfaz específica.
