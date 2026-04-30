# Manual de Estudio Profundo: Evaluación 2
## Materia: Redes (Trayecto II)
### Eje Temático: Componentes de Red y Topologías

---

## 🧭 Introducción: La Arquitectura del Enjambre
Saber crear el cable de red es solo el inicio. Imagina que tienes 50 computadoras en una oficina. Si conectas cables entre todas ellas al azar, crearás un caos inmanejable de cables tropezados, colisiones de datos y fallos en cascada.

Para que una red sea eficiente, escalable (que pueda crecer mañana sin desarmar lo de hoy) y resistente a fallos, necesitamos comprender a los "Directores de Orquesta" (los dispositivos de interconexión) y organizar las computadoras siguiendo un mapa arquitectónico claro: **Las Topologías**.

---

## 🏛️ CAPÍTULO I: Los Nodos de Interconexión (Hardware de Red)

Si el cable es la autopista, estos dispositivos son los semáforos, rotondas y policías de tránsito.

### 1.1 Tarjeta de Interfaz de Red (NIC)
Es la puerta física de tu computadora al mundo. Todo equipo que quiera conectarse a una red necesita una NIC (Network Interface Card). Convierte los datos digitales del procesador en pulsos eléctricos o de radio. Posee un identificador físico único quemado en su chip desde la fábrica: **La Dirección MAC**.

### 1.2 El Hub (Concentrador) - (Tecnología Obsoleta)
El dispositivo más tonto de la red. Si el Hub tiene 8 puertos y recibe un mensaje por el puerto 1 dirigido a la computadora del puerto 4, el Hub no sabe leer para quién es el mensaje. Su solución es gritar el mensaje a los puertos 2, 3, 4, 5, 6, 7 y 8 al mismo tiempo (Broadcasting). Esto genera un nivel de ruido y "colisiones" de datos inaceptable en redes modernas.

### 1.3 El Switch (Conmutador) - (El Rey de la LAN)
El Switch es inteligente. Cuando recibe un paquete, lo abre, lee la Dirección MAC de destino, y crea un "puente virtual" interno exclusivamente entre el puerto emisor y el puerto receptor. Las demás computadoras conectadas al Switch ni se enteran de la conversación. Esto elimina las colisiones y maximiza la velocidad de la Red Local (LAN).

### 1.4 El Router (Enrutador) - (El Rey de la WAN)
Mientras que el Switch conecta computadoras dentro de *un mismo edificio* (LAN), el **Router** conecta *edificios diferentes* (conecta una LAN con otra LAN, formando la Internet WAN). El Router lee direcciones lógicas (Direcciones IP), calcula cuál es el camino más corto hacia otra ciudad o país, y expulsa el paquete hacia allá. Es el "GPS" de la red.

---

## 🧩 CAPÍTULO II: Clasificación Geográfica de las Redes

Las redes se clasifican administrativamente según el terreno que cubren:

- **PAN (Personal Area Network):** Tu teléfono conectado a tus audífonos Bluetooth (Metros).
- **LAN (Local Area Network):** Un cibercafé, una casa o un edificio corporativo entero. Controlada por un solo administrador, usa Switches y cables de cobre.
- **MAN (Metropolitan Area Network):** Conecta varias LAN dentro de una misma ciudad (ej. Las diferentes facultades de la universidad distribuidas por la ciudad). Generalmente usa Fibra Óptica propia.
- **WAN (Wide Area Network):** La madre de todas. Conecta países y continentes (Internet). Implica infraestructura masiva administrada por proveedores globales (ISPs) e interconecta millones de Routers.

---

## 🏗️ CAPÍTULO III: Topologías (El Mapa Lógico y Físico)

La Topología es la forma geométrica en la que disponemos nuestras computadoras y cables. Se divide en Topología Física (cómo se ven los cables en la pared) y Topología Lógica (cómo fluyen los datos eléctricamente dentro del cable).

### 3.1 Topología en Bus (La Línea Recta)
Todas las computadoras se conectan a un único cable central largo (Troncal). Si una computadora habla, todas escuchan.
- **Problema Crítico:** Si el cable troncal se rompe con una tijera en el centro, la red entera muere. Es obsoleta.

### 3.2 Topología en Anillo
Las computadoras se conectan en un círculo cerrado. El mensaje viaja pasando de computadora en computadora en una sola dirección hasta llegar a su destino.
- **Problema Crítico:** Si una computadora del anillo se apaga, rompe la cadena y la red entera cae. (Token Ring la usaba lógicamente).

### 3.3 Topología en Estrella (El Estándar Moderno)
Todas las computadoras tienen su cable individual conectado a un equipo central (Un Switch). Si dibujas el diagrama, parece una estrella brillante.
- **Ventaja Absoluta:** Si el cable de la computadora 3 se rompe o la PC se quema, la red del resto de la oficina sigue funcionando perfectamente al 100%. Solo falla si se quema el Switch central. 

### 3.4 Topología en Malla (Mesh)
Cada computadora está conectada directamente con todas y cada una de las demás computadoras.
- **Ventaja:** Hiper-tolerante a fallos. Si se rompen 10 cables, los datos buscan otro camino. 
- **Desventaja:** Extremadamente cara y un infierno de instalar físicamente (se usan fórmulas factoriales para calcular cuántos miles de cables necesitas para 50 PCs). Se usa principalmente en conexiones lógicas entre Routers WAN.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Topología de Red (Network Topology):** Mapeo gráfico y arquitectónico que define la disposición estructural (física) y la trayectoria del flujo de datos (lógica) entre los nodos interconectados de un sistema de telecomunicaciones.
- **Switch (Conmutador):** Dispositivo de Capa 2 (Enlace de Datos) encargado de interconectar segmentos de red LAN, operando mediante la conmutación inteligente de tramas unicast basada en tablas de reenvío de Direcciones MAC (CAM Tables).
- **Router (Enrutador):** Dispositivo de Capa 3 (Red) especializado en la interconexión de redes disímiles, responsable del análisis de cabeceras IP, cálculo de rutas óptimas (mediante algoritmos de métrica) y la retransmisión de paquetes a través de topologías WAN.
- **Dirección MAC (Media Access Control):** Identificador hexadecimal plano de 48 bits, globalmente único, asignado por el fabricante al hardware físico de una Interfaz de Red (NIC) durante su ensamblaje.
- **LAN (Local Area Network):** Infraestructura de red confinada a un entorno geográficamente limitado (domicilio, edificio corporativo), caracterizada por el alto ancho de banda y la propiedad privada de la infraestructura subyacente.
- **Topología en Estrella:** Arquitectura física centralizada donde todos los nodos periféricos se conectan mediante enlaces punto a punto a un concentrador o conmutador central, previniendo fallos en cascada sistémicos ante la desconexión de clientes individuales.
