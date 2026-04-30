# Manual de Estudio Profundo: Evaluación 2
## Materia: Redes (Trayecto II)
### Eje Temático: Direccionamiento, Enrutamiento y Subnetting

---

## 🧭 Introducción: El Sistema Postal Global
El Switch sabe cómo mover datos dentro de un edificio porque usa Direcciones MAC (que vienen grabadas de fábrica en el hardware). Pero las Direcciones MAC no tienen un orden geográfico. Es como intentar encontrar a "Juan Pérez" en el mundo sabiendo solo su nombre, sin saber en qué país o ciudad vive.

Para que internet funcione, la Capa 3 del modelo OSI utiliza **Direcciones IP lógicas**. Una IP no te dice *quién* es el equipo, te dice *dónde está*. Funciona exactamente igual que tu dirección postal: `País -> Estado -> Ciudad -> Calle -> Casa`. El proceso matemático para crear estas calles y casas lógicas se llama **Subnetting (Subredes)**.

---

## 🏛️ CAPÍTULO I: El Protocolo IPv4

Una dirección IPv4 es simplemente un número binario larguísimo de 32 ceros y unos. Como los humanos somos malos leyendo 32 bits seguidos (`11000000101010000000000100001010`), lo dividimos en 4 bloques de 8 bits (Octetos) y los convertimos a números decimales separados por puntos.
Ejemplo: `192.168.1.10`.

### 1.1 Red vs Host (Calle vs Casa)
Toda dirección IP está dividida lógicamente en dos porciones:
- **Porción de Red (Net ID):** Representa la calle o el barrio. Todas las computadoras conectadas al mismo switch o router *deben* tener la misma Porción de Red para poder hablar entre sí.
- **Porción de Host:** Representa el número de tu casa. Es el identificador único de tu máquina dentro de esa calle.

¿Cómo sabe la computadora dónde termina la calle y dónde empieza el número de la casa? Gracias a la **Máscara de Subred (Subnet Mask)**.
Si la máscara es `255.255.255.0`, los "255" indican la calle (`192.168.1`) y el "0" indica la casa (`.10`).

---

## 🧩 CAPÍTULO II: Subnetting (El Arte de Dividir Redes)

Imagina que una empresa te da la red `192.168.1.0` (que soporta 254 computadoras). Pero la empresa tiene 4 departamentos: Ventas, RRHH, Sistemas y Finanzas. 
Por seguridad, Ventas no debe poder ver las computadoras de RRHH. Si conectas a los 254 en el mismo switch, todos se verán.

**Subnetting** es una operación matemática a nivel binario donde "robamos" bits de la Porción de Host y se los regalamos a la Porción de Red. 
Al hacer esto, tomamos una calle gigante de 254 casas y la partimos en 4 calles pequeñas de 62 casas, separadas lógicamente con barreras impenetrables (a menos que uses un Router).

*Ventajas del Subnetting:*
1. **Seguridad:** Aísla departamentos.
2. **Rendimiento:** Reduce el ruido de "Broadcast" (si alguien grita en Ventas, RRHH ya no lo escucha).
3. **Organización Administrativa.**

---

## 🏗️ CAPÍTULO III: El Enrutamiento (Routing)

Una vez que dividiste la empresa en 4 subredes, estas subredes están aisladas. ¿Cómo hacemos si un usuario de Ventas *necesita legítimamente* enviarle un archivo al Servidor de Sistemas?
Necesitamos un **Router** (Enrutador).

El Router es un dispositivo que tiene una "pierna" (cable) en la red de Ventas y otra en la de Sistemas. Su trabajo es recibir un paquete, consultar un mapa interno llamado **Tabla de Enrutamiento**, y decidir por cuál puerto debe reenviar el paquete.

### 3.1 Tipos de Enrutamiento
- **Estático:** El administrador entra a la consola del Router y escribe manualmente el mapa de rutas. *"Si buscas la red de Sistemas, sal por el puerto 2"*. Es seguro, pero inmanejable en el internet global donde hay millones de rutas.
- **Dinámico:** Los routers utilizan protocolos de inteligencia artificial (como OSPF o BGP). Los routers hablan entre sí automáticamente: *"Hola, yo conozco el camino a la Universidad, y estoy a 2 milisegundos de distancia"*. Si un cable submarino se rompe en el océano, el protocolo dinámico recalcula matemáticamente una nueva ruta por otro país en segundos.

---

## 💻 El Salto a IPv6

IPv4 se inventó en los 80s y solo permitía 4.300 millones de direcciones IP. Con la llegada de los smartphones y el "Internet de las Cosas" (neveras y focos con WiFi), ¡Nos quedamos sin direcciones IP en el mundo real!

Para salvar el internet, se inventó **IPv6**.
IPv6 usa direcciones de 128 bits expresadas en formato hexadecimal gigante. (Ej: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).
La cantidad de IPs posibles con IPv6 es tan monstruosa que podríamos asignarle una dirección IP única a cada grano de arena del planeta Tierra y aún sobrarían billones.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Dirección IPv4:** Identificador lógico numérico de 32 bits segmentado en cuatro octetos decimales, empleado en la Capa 3 del modelo OSI para el enrutamiento unicast, multicast y broadcast en redes TCP/IP.
- **Máscara de Subred (Subnet Mask):** Máscara de bits de 32 posiciones utilizada mediante operaciones lógicas AND en conjunto con una IP para segmentar matemáticamente e identificar la frontera exacta entre la Porción de Red y la Porción de Host.
- **Subnetting (Subneteo):** Técnica de ingeniería de diseño de redes que particiona algorítmicamente un espacio de direccionamiento IP mayor en múltiples subredes lógicas independientes, optimizando el rendimiento mediante la reducción de dominios de broadcast.
- **Enrutamiento Estático:** Configuración manual de métricas y trayectorias en la tabla de ruteo de un dispositivo de Capa 3, caracterizado por su rigidez ante cambios topológicos y nulo consumo de procesamiento dinámico.
- **Protocolos de Enrutamiento Dinámico:** Algoritmos distribuidos (como OSPF o BGP) que permiten a los enrutadores intercambiar automáticamente topologías de red y calcular rutas métricas óptimas en tiempo real frente a fluctuaciones en la infraestructura.
- **IPv6:** Actualización estructural del protocolo de internet (Capa 3) que amplía el espacio de direccionamiento a 128 bits en nomenclatura hexadecimal, integrando de forma nativa soporte para IPsec y eliminando la necesidad de NAT (Network Address Translation).
