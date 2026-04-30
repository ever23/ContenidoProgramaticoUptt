# Manual de Estudio Profundo: Evaluación 4
## Materia: Redes (Trayecto II)
### Eje Temático: Tecnologías LAN y Ancho de Banda

---

## 🧭 Introducción: La Ley de la Autopista
Imagina que te encargas del transporte de Caracas. Construyes la autopista más moderna y ancha del continente (Un excelente cable de fibra óptica o un switch de alta gama). Sin embargo, si al final de la autopista hay un túnel donde solo cabe un carro a la vez, se formará un atasco gigantesco. Toda tu costosa autopista se volverá inútil debido a ese "Cuello de Botella".

En las redes pasa exactamente lo mismo. No importa qué tan rápido es el procesador de tu computadora; si el canal de la red es estrecho, el archivo tardará horas en descargarse. Esta evaluación cierra el trimestre estudiando las medidas de capacidad y la tecnología reina que logró democratizar la velocidad en las redes locales.

---

## 🏛️ CAPÍTULO I: El Ancho de Banda y la Velocidad de Red

En el lenguaje coloquial solemos decir "Tengo 100 Megas de Internet". Pero como ingenieros, debemos dominar la terminología exacta, porque existe una confusión matemática masiva provocada intencionalmente por los equipos de marketing de las empresas proveedoras de internet (ISPs).

### 1.1 Ancho de Banda (Bandwidth)
Técnicamente, el Ancho de Banda mide la **Capacidad teórica máxima** de un medio de transmisión. Es "el ancho de la tubería de agua". Se mide en **Bits por Segundo (bps)**.
*Recuerda la base matemática: Un Bit es un cero o un uno (`b` minúscula). Un Byte (Octeto) son 8 bits aglomerados (`B` mayúscula).*

### 1.2 El Engaño de la Letra "B" (Bits vs Bytes)
Cuando pagas un plan de internet de "100 Megas", la compañía te está vendiendo **100 Megabits por segundo (Mbps)**. No te están vendiendo Megabytes.
Si vas a descargar un archivo pesado (como una película que pesa 100 Megabytes, `MB`), tu cerebro piensa "Si tengo 100 Megas de velocidad, bajará en 1 segundo". ¡Falso!

Como 1 Byte = 8 bits, para calcular tu velocidad real de descarga (Tasa de Transferencia Real / Throughput), debes dividir tu plan de internet entre 8:
- Plan de 100 Mbps / 8 = **12.5 MB/s de descarga real máxima**. La película de 100 MB tardará al menos 8 segundos en bajar.

### 1.3 Latencia (Ping)
Es el tiempo que tarda un solo paquete en viajar desde tu PC hasta el servidor y volver. Se mide en milisegundos (ms). Puedes tener una tubería gigantesca de 1 Gigabit por segundo (Ancho de Banda extremo), pero si la latencia es alta (ej. 300 ms, como el internet satelital en días lluviosos), las videollamadas se cortarán y los videojuegos tendrán un retraso (Lag) insufrible, aunque la "velocidad" sea muy alta.

---

## 🧩 CAPÍTULO II: La Victoria de Ethernet (Tecnologías LAN)

En los años 80, no existía un estándar universal para redes LAN. Tres gigantes competían por el control del mercado: Token Ring (de IBM), FDDI (Fibra) y Ethernet (creada en Xerox PARC).

### 2.1 La Caída de los Rivales
- **Token Ring (Topología de Anillo Lógico):** Funcionaba enviando un "Testigo" electrónico circulando por la red. Si una PC quería hablar, agarraba el testigo. Era muy ordenado y no había colisiones, pero el cable era muy costoso y el mantenimiento complejo.
- **FDDI:** Usaba anillos dobles de fibra óptica hiperrápidos. Pero en los años 90, instalar tarjetas de fibra óptica en las computadoras de una oficina normal era económicamente inviable.

### 2.2 Por qué ganó Ethernet
Ethernet ganó por ser **Barato, Simple y Tolerante al Caos**. 
Ethernet utiliza un protocolo llamado **CSMA/CD (Acceso Múltiple por Detección de Portadora y Detección de Colisiones)**.
Su filosofía era como un grupo de personas en una habitación a oscuras intentando hablar:
1. Escucho (CS): ¿Hay alguien hablando por el cable?
2. Si hay silencio, hablo (Transmito).
3. Detección (CD): Si da la casualidad que otra persona habló en el mismo milisegundo que yo, los mensajes chocan (Colisión). Ambas PCs detectan el choque, se callan, esperan un tiempo matemático aleatorio microscópico, y vuelven a intentar.

Con la evolución y masificación de los **Switches** (que eliminaron por completo las colisiones), Ethernet abandonó CSMA/CD, pero mantuvo su formato de "Tramas" baratas. Hoy en día, casi el 100% de las redes LAN del planeta cableadas con RJ45 son redes Ethernet.

### 2.3 Estándares de Velocidad Ethernet
- Standard Ethernet (10 Mbps) - Obsoleto.
- Fast Ethernet (100 Mbps) - Estándar base de oficinas antiguas.
- **Gigabit Ethernet (1000 Mbps / 1 Gbps)** - El estándar dominante moderno.
- 10 Gigabit Ethernet - Usado en servidores y Data Centers.

---

## 💻 Resumen del Trimestre I

Has completado el cimiento físico y lógico fundacional. Has aprendido:
1. Con qué cables físicos transmitir (Cobre, Fibra, Aire).
2. Cómo organizar la arquitectura geométrica para que la red no colapse (Topología en Estrella con Switches).
3. Cómo el software mundial se pone de acuerdo para hablar un mismo idioma independientemente del fabricante (Modelo OSI).
4. La medición de las carreteras digitales y por qué Ethernet gobierna el hardware local.

El próximo trimestre pasaremos a dominar la Capa 3: asignaremos Direcciones IP lógicas a las computadoras, construiremos Subredes y levantaremos cortafuegos de seguridad para defender el perímetro.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Ancho de Banda (Bandwidth):** Medida física teórica que cuantifica la capacidad máxima de un canal de comunicación para transferir datos en un lapso específico, expresada normativamente en bits por segundo (bps).
- **Tasa de Transferencia (Throughput):** Métrica de rendimiento empírico que determina el volumen de datos útiles efectivamente transmitidos y recibidos de forma exitosa por unidad de tiempo, usualmente menor al Ancho de Banda bruto debido a los márgenes de encapsulamiento y colisiones.
- **Latencia (Latency):** Retardo cronológico asociado a la propagación temporal de una señal o paquete de datos a través del medio de transmisión desde su punto de origen hasta su punto de recepción.
- **Ethernet (IEEE 802.3):** Estándar tecnológico de facto para redes de área local (LAN) caracterizado por su esquema de encapsulamiento en tramas de Capa 2 y, en sus arquitecturas legadas (Half-duplex), regulado por protocolos de acceso estocástico CSMA/CD.
- **CSMA/CD (Carrier-Sense Multiple Access with Collision Detection):** Protocolo determinista de control de acceso al medio utilizado en arquitecturas de topología bus compartida. Estipula directivas algorítmicas de "escucha antes de transmitir" y resolución matemática de retrasos tras la detección de una coalición eléctrica de señales (colisión).
