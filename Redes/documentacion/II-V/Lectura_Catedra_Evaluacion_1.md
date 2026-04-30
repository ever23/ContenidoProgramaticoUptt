# Manual de Estudio Profundo: Evaluación 1
## Materia: Redes (Trayecto II)
### Eje Temático: Planeación, Diseño LAN y Estándares IEEE

---

## 🧭 Introducción: Arquitectura antes de la Implementación
Si te contratan para construir un edificio de 20 pisos, no empiezas a apilar ladrillos al azar. Primero contratas a un arquitecto para que trace los planos y asegure que los cimientos soporten el peso. 

En ingeniería de redes, el proceso es idéntico. Antes de comprar un solo metro de cable o configurar una dirección IP, el ingeniero debe realizar un proceso riguroso de **Planeación y Diseño LAN**. Una red mal diseñada hoy, será una red que colapsará mañana cuando la empresa contrate a 50 nuevos empleados.

---

## 🏛️ CAPÍTULO I: El Proceso de Planeación de Red

El diseño de una red local (LAN) se divide en fases estructuradas:

1. **Recolección de Requisitos:** ¿Para qué se usará la red? Una red para un cibercafé que descarga videojuegos requiere un diseño diferente a la red de un banco que procesa millones de transacciones pequeñas pero hiper-seguras.
2. **Selección de Topología y Medio:** Decidir si usar Estrella o Malla. Decidir si la conexión vertical entre pisos (Backbone) será de Fibra Óptica (por la velocidad y para evitar interferencia de los ascensores) y la conexión horizontal a las computadoras será de Cobre UTP Cat 6.
3. **Plano de Direccionamiento Lógico:** Calcular matemáticamente cuántas direcciones IP se necesitarán en el presente y en un futuro a 5 años (Escalabilidad).
4. **Seguridad Física:** Determinar la ubicación del "Cuarto de Telecomunicaciones" (Site / MDF), asegurando ventilación adecuada, UPS (baterías de respaldo) y control de acceso biométrico.

---

## 🧩 CAPÍTULO II: El Modelo de Diseño Jerárquico de 3 Capas (Cisco)

Para redes medianas y grandes, la industria no conecta todos los switches entre sí como una telaraña. Se utiliza el modelo jerárquico de Cisco, que divide la red física en tres capas lógicas:

1. **Capa de Acceso (Access Layer):** Son los switches baratos que están en los pasillos o paredes. Su único trabajo es darle conexión directa a las computadoras de los empleados, impresoras y teléfonos IP.
2. **Capa de Distribución (Distribution Layer):** Son switches más potentes e inteligentes ubicados en el cuarto de servidores de cada piso. Reciben los cables de todos los switches de Acceso de ese piso y aplican políticas de seguridad (Ej: "El departamento de ventas no puede ver las impresoras de recursos humanos").
3. **Capa Núcleo (Core Layer):** Es el "corazón" de la red. Son equipos extremadamente costosos y ultra-rápidos de fibra óptica. Su única misión es conmutar tráfico a la velocidad de la luz entre los diferentes pisos o edificios sin aplicar reglas pesadas.

---

## 🏗️ CAPÍTULO III: Los Estándares IEEE 802

Si compras una tarjeta Wi-Fi en China y un Router en Alemania, funcionan juntos mágicamente. Esto es gracias al **IEEE (Instituto de Ingenieros Eléctricos y Electrónicos)**, un comité mundial que dictamina las reglas exactas de cómo deben fabricarse las tecnologías.

El comité IEEE tiene un grupo de trabajo específico para Redes Locales y Metropolitanas llamado **IEEE 802**.

### Subcomités Críticos que debes conocer:
- **IEEE 802.3 (Ethernet):** Es el estándar que define todo sobre el cable de cobre y la fibra en redes LAN. Dicta desde el grosor del hilo hasta cómo deben lidiar con las colisiones.
- **IEEE 802.11 (Wi-Fi):** Define las comunicaciones LAN inalámbricas (Wireless LAN / WLAN). Ha evolucionado a lo largo de los años para soportar más velocidad y frecuencias:
  - `802.11g` (Velocidad vieja, 54 Mbps).
  - `802.11n` (Wi-Fi 4 - Usaba múltiples antenas MIMO).
  - `802.11ac` (Wi-Fi 5 - Banda de 5GHz, hiper rápido).
  - `802.11ax` (Wi-Fi 6 - El estándar moderno de ultra alta densidad).
- **IEEE 802.15 (Bluetooth/PAN):** Estándar para Redes de Área Personal inalámbricas de corto alcance.

---

## 💻 Laboratorio Teórico: El Simulador (Packet Tracer)

En lugar de gastar miles de dólares comprando equipos reales para practicar, la industria utiliza simuladores de red. El más famoso es **Cisco Packet Tracer**.

**Flujo de trabajo en el simulador:**
1. Arrastras un *Switch 2960* al espacio de trabajo.
2. Arrastras dos *PCs genéricas*.
3. Usas la herramienta de cableado (Rayo naranja) para seleccionar "Cable Directo de Cobre" (Straight-Through).
4. Conectas el puerto *FastEthernet0/1* del Switch al puerto *FastEthernet0* de la PC1.
5. Inmediatamente verás los "leds" de enlace en color ámbar mientras negocian, y luego en verde cuando hay conexión física exitosa (Capa 1 y 2 del modelo OSI operativas).

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Planeación LAN:** Fase arquitectónica deductiva donde se establecen los requerimientos topológicos, físicos y lógicos de una infraestructura de red local para garantizar rendimiento, seguridad y escalabilidad operativa.
- **Modelo Jerárquico de 3 Capas:** Arquitectura de diseño de red estandarizada que particiona la topología física en Capa de Acceso (conectividad final), Capa de Distribución (agregación y políticas) y Capa Núcleo (conmutación troncal de ultra alta velocidad).
- **IEEE (Institute of Electrical and Electronics Engineers):** Asociación técnico-profesional mundial responsable de la estandarización y desarrollo de normas tecnológicas en áreas de ingeniería eléctrica y ciencias de la computación.
- **IEEE 802.3 (Ethernet):** Conjunto normativo de especificaciones técnicas que define la estandarización de las capas Física (PHY) y de Control de Acceso al Medio (MAC) para arquitecturas de red alámbricas LAN.
- **IEEE 802.11 (Wi-Fi):** Estándar de la industria que especifica el conjunto de protocolos de control de acceso al medio y capa física para la implementación de redes locales inalámbricas (WLAN) sobre bandas de radiofrecuencia (típicamente 2.4GHz y 5GHz).
- **Packet Tracer:** Herramienta de software propietaria de simulación visual de redes diseñada por Cisco Systems, empleada masivamente en entornos académicos para la emulación topológica, configuración de hardware virtualizado y análisis de tráfico.
