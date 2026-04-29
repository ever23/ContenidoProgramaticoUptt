# Planeación de Infraestructura y Estándares IEEE: El Cimiento de la Red Local

El diseño y la construcción de una Red de Área Local (LAN) no consiste simplemente en "conectar cables a un enrutador". En el ámbito de la ingeniería en telemática y sistemas, la creación de una red es un proceso riguroso de arquitectura lógica y física. Una red mal diseñada generará cuellos de botella, caídas de servicio y será imposible de escalar cuando la organización crezca.

En esta primera unidad del trimestre, dejaremos atrás los conceptos básicos para adentrarnos en la **Planeación Profesional de Redes** y en la estricta obediencia a los **Estándares de la Industria** que garantizan que equipos de diferentes fabricantes (Cisco, TP-Link, Huawei) puedan comunicarse sin fricción.

---

## 📐 CAPÍTULO I: La Planeación LAN (Diseño de Infraestructura)

Cuando a un ingeniero se le asigna la tarea de interconectar un edificio gubernamental o un laboratorio universitario, debe seguir una metodología de planeación estructurada:

1.  **Análisis de Requisitos:** ¿Cuántos usuarios habrá? ¿Qué tipo de datos van a transferir (texto, videollamadas, bases de datos pesadas)? ¿Cuál es el presupuesto?
2.  **Selección de Medios:** Decidir dónde se usará cableado de cobre (UTP/STP), dónde fibra óptica (para los enlaces troncales o *Backbones*) y dónde cobertura inalámbrica (Wi-Fi).
3.  **Diseño Topológico:** Elegir la estructura física. En la actualidad, la **Topología en Estrella Extendida** (donde los dispositivos se conectan a Switches periféricos, y estos a un Switch central) es el estándar de oro.
4.  **Escalabilidad y Redundancia:** Planificar pensando en el futuro. Dejar puertos libres en los Switches y asegurar caminos alternativos en caso de que un cable principal se corte.

---

## 🏛️ CAPÍTULO II: El Imperio de la Interoperabilidad (El IEEE)

Imagínate si cada marca de computadoras usara un tipo de cable de red distinto o un lenguaje diferente. El internet no existiría. Para evitar este caos, nació el **IEEE (Instituto de Ingenieros Eléctricos y Electrónicos)**.

El IEEE es la organización mundial que dicta las "leyes" universales de las telecomunicaciones. Ellos definen la familia de estándares **IEEE 802**, que gobiernan exactamente cómo deben transmitirse los datos a nivel físico y de enlace de datos (Capas 1 y 2 del Modelo OSI). Todo fabricante de hardware en el mundo debe obedecer estas leyes.

---

## 🔌 CAPÍTULO III: El Estándar 802.3 (Ethernet)

El rey absoluto de las redes cableadas. El estándar **IEEE 802.3** (comúnmente llamado Ethernet) dicta cómo se envían pulsos eléctricos a través de cables de cobre o pulsos de luz a través de fibra óptica.

### Evolución de la Velocidad:
*   **Ethernet Clásico:** 10 Mbps (Obsoleto).
*   **Fast Ethernet (802.3u):** 100 Mbps (Aún común en hogares).
*   **Gigabit Ethernet (802.3ab):** 1,000 Mbps o 1 Gbps (El estándar actual para redes LAN empresariales, requiere cable UTP Categoría 5e o superior).
*   **10 Gigabit Ethernet (802.3an):** 10,000 Mbps (Usado para interconectar servidores y Switches principales).

**La regla de los 100 metros:** En el diseño Ethernet con cable UTP (cobre), la señal eléctrica comienza a degradarse después de los 100 metros de distancia. Si un dispositivo está más lejos, el ingeniero debe instalar un Switch intermedio o cambiar el medio a Fibra Óptica.

---

## 📡 CAPÍTULO IV: El Estándar 802.11 (Wi-Fi)

Para la movilidad, el IEEE definió la familia **802.11**, conocida comercialmente como Wi-Fi. Las redes inalámbricas (WLAN) no viajan por cables, sino por ondas de radiofrecuencia (RF) que flotan en el aire, lo cual las hace vulnerables a interferencias (paredes, microondas, otros routers).

### Las Dos Grandes Bandas de Frecuencia:
1.  **Banda de 2.4 GHz:** Mayor alcance (atraviesa mejor las paredes), pero velocidades más bajas y muy congestionada (muchas interferencias).
2.  **Banda de 5 GHz:** Menor alcance, pero velocidades altísimas y canales más limpios. Ideal para streaming o videollamadas.

### Alfabeto del 802.11:
*   **802.11n (Wi-Fi 4):** Introdujo MIMO (múltiples antenas) para mejorar señal.
*   **802.11ac (Wi-Fi 5):** Popularizó la banda de 5 GHz.
*   **802.11ax (Wi-Fi 6):** Diseñado específicamente para entornos de altísima densidad (estadios, aeropuertos, universidades llenas de alumnos).

---

## 💻 CAPÍTULO V: Caso de Estudio (Diseño de Laboratorio)

Si te encargan conectar el nuevo laboratorio de la UPTT con 30 computadoras:
1.  **Estándar Elegido:** IEEE 802.3ab (Gigabit Ethernet) para garantizar fluidez al compilar código o descargar dependencias (`npm install`).
2.  **Cableado:** Cable UTP Categoría 6, respetando la regla de no exceder los 100 metros hasta el Cuarto de Telecomunicaciones.
3.  **Topología:** Estrella. Todas las PC irán canalizadas por la pared hasta un Switch central de 48 puertos en un Rack.
4.  **Movilidad:** Se instalará un Access Point (Punto de Acceso) bajo el estándar 802.11ac en el techo para proveer conexión a los teléfonos y laptops personales de los profesores, configurado en una red (VLAN) separada por seguridad.

---

## 📘 ANEXO: Diccionario Técnico Formal (Redes II)

*Vocabulario de ingeniería para la defensa de diseño de infraestructura:*

- **Topología Física:** El diseño geométrico o mapa físico de cómo están tirados los cables y colocados los equipos de red.
- **Topología Lógica:** La forma en que los datos (paquetes) realmente viajan a través de la red, independientemente de cómo estén conectados los cables.
- **IEEE:** Instituto de Ingenieros Eléctricos y Electrónicos, máxima autoridad global en estandarización de tecnologías de red y hardware.
- **Backbone (Columna Vertebral):** El enlace principal de alta velocidad (usualmente fibra óptica) que conecta las diferentes subredes o pisos de un edificio.
- **Access Point (AP):** Dispositivo de red que interconecta equipos inalámbricos para formar una red WLAN y sirve como puente hacia la red cableada tradicional.
- **Atenuación:** Pérdida progresiva de la fuerza de una señal (eléctrica o de radio) a medida que viaja a través del medio físico, dictando los límites de distancia permitida.
