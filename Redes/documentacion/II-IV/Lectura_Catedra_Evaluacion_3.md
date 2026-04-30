# Manual de Estudio Profundo: Evaluación 3
## Materia: Redes (Trayecto II)
### Eje Temático: Protocolos y Modelos de Comunicación (OSI y TCP/IP)

---

## 🧭 Introducción: La Torre de Babel Tecnológica
En la década de 1970 y principios de los 80, el mundo de las computadoras era un caos. Si tu empresa compraba computadoras a IBM, formaban su propia red. Si luego compraban computadoras a Apple o a Digital Equipment Corporation (DEC), estas no podían conectarse a la red de IBM. Cada fabricante inventaba su propio cable, su propio voltaje y su propio idioma.

Para evitar que el mundo tecnológico se fragmentara en tribus aisladas, la **ISO (Organización Internacional de Normalización)** decidió crear un estándar universal de paz. Un "Esperanto" computacional. Si todos los fabricantes del mundo fabricaban sus tarjetas y sistemas operativos siguiendo ese mismo estándar de múltiples capas, un computador Mac en Japón podría hablar con un servidor IBM en Caracas sin problemas. 
Así nació el **Modelo OSI (Open Systems Interconnection)**.

---

## 🏛️ CAPÍTULO I: El Modelo OSI (Anatomía en 7 Capas)

El Modelo OSI dividió la colosal tarea de transmitir datos por la red en **7 Capas independientes**. La genialidad de esta arquitectura es la "Abstracción". A la Capa 7 (tu navegador web) no le importa si estás conectado por cable de cobre o por Wi-Fi (Capa 1). Cada capa hace su trabajo y se lo pasa a la capa de abajo.

*(Regla mnemotécnica para recordarlas de abajo hacia arriba: FERTSPA - Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación).*

### Las Capas de Hardware (Medio Físico)
- **1. Capa Física:** Lidiar con lo tangible. Cables de cobre, luz óptica, radiofrecuencia y conectores RJ45. Solo maneja **Bits** puros (101010).
- **2. Capa de Enlace de Datos:** Organiza los bits en agrupaciones lógicas llamadas **Tramas (Frames)**. Aquí trabaja el Switch. Utiliza las **Direcciones MAC** físicas para entregar los datos a la computadora correcta dentro de un mismo edificio (LAN).
- **3. Capa de Red:** Aquí trabaja el Router. Utiliza las **Direcciones IP** (Lógicas). Su trabajo es trazar el mapa de GPS, calcular la mejor ruta por internet y enviar el **Paquete (Packet)** cruzando países enteros hacia otra red lejana.

### La Capa Intermedia (Corazón)
- **4. Capa de Transporte:** Se asegura de que el mensaje llegue completo y en orden. Maneja **Segmentos**. Sus dos protocolos estrella son TCP (Lento pero 100% seguro de que el archivo no está corrupto) y UDP (Hiper-rápido pero sin garantías, usado en llamadas por Zoom o Videojuegos online).

### Las Capas de Software (Usuario final)
- **5. Capa de Sesión:** Mantiene abierta la "llamada telefónica" (sesión lógica) entre las dos computadoras mientras transfieren archivos.
- **6. Capa de Presentación:** El traductor del sistema operativo. Comprime los datos, los encripta (SSL) o transforma caracteres ASCII.
- **7. Capa de Aplicación:** El software que el usuario ve. Tu navegador Chrome (usando el protocolo HTTP), o tu cliente de correo Outlook (SMTP, POP3).

---

## 🧩 CAPÍTULO II: El Concepto de Encapsulamiento (La Matryoshka Rusa)

Cuando tú escribes un correo y le das a "Enviar", ese texto puro de la Capa 7 comienza a bajar hacia la Capa 1. En cada capa por la que pasa, se le añade un **Encabezado (Header)** con instrucciones para el cartero.

1. Escribes el correo (Datos - C. Aplicación).
2. La C. Transporte agarra el correo, lo mete en un sobre y le pone la etiqueta "Protocolo TCP, asegurar entrega" (Ahora es un Segmento).
3. La C. Red agarra ese sobre, lo mete en un sobre más grande y le pone la "IP Origen y la IP Destino" (Ahora es un Paquete).
4. La C. Enlace agarra ese paquete, lo mete en una caja dura y le pone "MAC de mi Tarjeta y MAC de mi Router" (Ahora es una Trama).
5. La caja dura se tritura temporalmente en millones de chispazos de electricidad 1 y 0 (Bits), viaja por el cable submarino y llega al servidor de Google.
6. El Servidor de Google hace el proceso inverso (**Desencapsulamiento**): Recibe los bits, arma la caja, rompe el sobre grande, rompe el sobre pequeño y finalmente lee el correo original.

---

## 🏗️ CAPÍTULO III: OSI vs TCP/IP (La Teoría vs La Realidad)

El Modelo OSI es el mejor modelo del mundo para enseñar redes en las universidades (Es el estándar académico). 
Sin embargo, el gobierno de los Estados Unidos (específicamente DARPA) creó su propio sistema paralelo de redes en los años 70: **El Modelo TCP/IP**. 

TCP/IP fue el sistema que realmente se instaló en las computadoras e impulsó el Internet moderno, porque era más práctico. Mientras OSI tiene 7 capas teóricas perfectas, TCP/IP colapsó algunas de esas capas en solo 4 capas prácticas:

1. **Capa de Acceso a la Red** (Equivale a Física + Enlace del OSI).
2. **Capa de Internet** (Equivale a la Red del OSI. Aquí manda el Protocolo IP).
3. **Capa de Transporte** (Igual que en OSI. Aquí mandan TCP y UDP).
4. **Capa de Aplicación** (Fusiona Sesión, Presentación y Aplicación del OSI).

Como ingeniero, debes conocer OSI para diagnosticar problemas teóricamente ("Tengo un error de Capa 1" = el cable está roto), pero debes saber que en las trincheras reales estarás configurando protocolos TCP/IP.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Modelo OSI (Open Systems Interconnection):** Marco de referencia conceptual normado por la ISO que particiona la complejidad de las telecomunicaciones en siete capas jerárquicas y modulares.
- **Protocolo de Red:** Conjunto riguroso de reglas sintácticas, semánticas y de sincronización que gobiernan y estandarizan el intercambio de información entre entidades comunicantes en un sistema distribuido.
- **Encapsulamiento (Encapsulation):** Proceso descendente en la pila de protocolos mediante el cual se le añaden sucesivas cabeceras de control (Headers) a la carga útil (Payload) a medida que atraviesa las diferentes capas arquitectónicas.
- **Capa Física (L1):** Nivel inferior del Modelo OSI responsable de la transmisión de bits puros, no estructurados, a través de los medios físicos de conducción.
- **Dirección IP (Internet Protocol):** Identificador numérico lógico y jerárquico asignado dinámicamente a una interfaz de red (Capa 3), utilizado para enrutar paquetes a través de fronteras geográficas y topológicas en arquitecturas WAN.
- **TCP (Transmission Control Protocol):** Protocolo fundamental de la Capa de Transporte (Capa 4), orientado a conexión, caracterizado por sus mecanismos de retransmisión, control de flujo y garantía incondicional de la integridad y secuenciación de los datos entregados.
