# Manual de Estudio Profundo: Evaluación 1
## Materia: Redes (Trayecto II)
### Eje Temático: Fundamentos y Medios de Comunicación

---

## 🧭 Introducción: La Conquista de la Distancia
A lo largo de los trimestres pasados, hemos estudiado cómo las computadoras procesan información internamente (Algoritmia) y cómo podemos construir sistemas complejos (Programación II). Pero, ¿de qué sirve una computadora hiper-potente si está aislada del mundo?

La materia de **Redes** es el estudio de la infraestructura que conecta a la humanidad. Es la ciencia de convertir la información (documentos, imágenes, videos) en señales eléctricas, ópticas o electromagnéticas, enviarlas al otro lado del mundo en fracciones de segundo y reconstruirlas perfectamente. 

---

## 🏛️ CAPÍTULO I: El Sistema de Comunicación Básico

Toda red de computadoras, por más compleja que sea (incluso el Internet global), se reduce a un modelo de comunicación teórico universal propuesto por Claude Shannon en 1948. 

Este modelo exige cuatro componentes innegociables:
1. **Emisor (Fuente):** El dispositivo que origina el mensaje y lo codifica (ej. Tu computadora).
2. **Mensaje:** La información pura que se desea transmitir (ej. Un correo electrónico).
3. **Medio (Canal):** La autopista física por donde viaja la señal. Puede ser tangible (un cable) o intangible (el aire).
4. **Receptor (Destino):** El dispositivo que recibe la señal, la decodifica y recupera el mensaje original.

Si el Medio falla, no hay red. Si el Emisor y el Receptor no hablan el mismo "idioma" (Protocolo), el mensaje llega pero es incomprensible.

---

## 🧩 CAPÍTULO II: Medios Físicos de Transmisión

Los datos dentro de tu PC son ceros y unos lógicos. Para viajar por el mundo físico, deben transformarse en un fenómeno físico. Los clasificamos en dos grandes familias:

### 2.1 Medios Guiados (Alámbricos)
El canal físico está delimitado y contiene la señal para que no escape.
- **Cable Coaxial:** Usado históricamente en televisión por cable y primeras redes. Tiene un núcleo de cobre grueso blindado contra interferencias.
- **Par Trenzado (Cobre):** El rey indiscutible de las redes locales (LAN). Consiste en pares de hilos de cobre entrelazados entre sí. ¿Por qué se trenzan? Por física electromagnética: el trenzado cancela el ruido y la interferencia (Diafonía) generada por los cables adyacentes. Se divide en UTP (Sin blindaje, barato, el más común) y STP (Con blindaje de aluminio, para entornos industriales ruidosos).
- **Fibra Óptica:** El pináculo de la velocidad. No usa electricidad, usa **Luz** rebotando dentro de un hilo de vidrio o plástico extremadamente fino. Es inmune a la interferencia electromagnética (no le afectan las tormentas eléctricas ni motores cercanos) y puede transmitir terabytes de datos a distancias intercontinentales cruzando los océanos.

### 2.2 Medios No Guiados (Inalámbricos)
Usan el aire o el vacío del espacio como medio, transmitiendo a través de ondas electromagnéticas.
- **Microondas / Wi-Fi (Estándar 802.11):** Radiación de alta frecuencia. Excelente para movilidad local, pero susceptible a interferencias físicas (paredes gruesas) y otras señales (como el microondas de tu cocina).
- **Satélites y Ondas de Radio:** Para cobertura global.

---

## 🏗️ CAPÍTULO III: El Arte del Cableado (Normativas EIA/TIA 568)

En el mundo profesional de las Redes LAN, no podemos simplemente conectar cables de colores al azar en los conectores (RJ45). La industria ha establecido estándares mundiales de colores para garantizar que un ingeniero en Venezuela y uno en Japón entiendan la misma red.

Existen dos normas principales de orden de colores para los 8 hilos internos del cable UTP:

- **Norma T568A:** Blanco/Verde, Verde, Blanco/Naranja, Azul, Blanco/Azul, Naranja, Blanco/Marrón, Marrón.
- **Norma T568B:** Blanco/Naranja, Naranja, Blanco/Verde, Azul, Blanco/Azul, Verde, Blanco/Marrón, Marrón.

### 3.1 Tipos de Cables según su Uso
1. **Cable Directo (Straight-Through):** Usa la misma norma en ambos extremos (A-A o B-B). *Uso:* Conectar equipos de diferente capa lógica (ej. PC a Switch, o Router a Switch).
2. **Cable Cruzado (Crossover):** Usa la norma A en un extremo y la B en el otro. *Uso:* Conectar equipos de la misma capa lógica directamente (ej. PC a PC, o Switch a Switch antiguos). 
*(Nota: Hoy en día las tarjetas de red modernas tienen Auto-MDIX, un sistema inteligente que cruza internamente la señal si te equivocas de cable, pero el conocimiento del estándar cruzado sigue siendo evaluado teóricamente).*

---

## 💻 Laboratorio Teórico: Ponchado de Cable (Crimping)

En el entorno real de un ingeniero, crear un "Patch Cord" (cable de red a medida) requiere destreza física:
1. **Herramientas:** Cable UTP Cat 5e/6, Conectores RJ45, Ponchadora (Crimping tool), Pelacables.
2. **Preparación:** Pelar 3 centímetros de la cubierta externa plástica (Chaqueta) con cuidado de no cortar los hilos internos de cobre.
3. **Ordenamiento:** Destrenzar los 4 pares, aplanarlos y ordenarlos estrictamente según la norma T568B (la más usada mundialmente).
4. **Corte y Ponchado:** Cortar las puntas para que queden perfectamente rectas e introducirlas en el conector RJ45 (los pines dorados viendo hacia ti). Apretar fuerte con la ponchadora hasta escuchar el "clic" metálico que perfora el cable y hace contacto eléctrico.

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Telecomunicaciones:** Disciplina tecnológica enfocada en la transmisión, emisión y recepción de signos, señales, o información de cualquier naturaleza a través de medios electromagnéticos, ópticos o físicos.
- **Medio de Transmisión Guiado:** Soporte físico tangible (cobre, fibra de vidrio) utilizado para contener, confinar y dirigir ondas electromagnéticas o luminosas desde un emisor hasta un receptor.
- **Par Trenzado (Twisted Pair):** Cable compuesto por pares de conductores de cobre aislados y entrelazados en espiral, diseño geométrico destinado a minimizar la interferencia electromagnética (EMI) y la diafonía (crosstalk).
- **UTP (Unshielded Twisted Pair):** Variante de cable de par trenzado carente de blindaje metálico adicional, siendo el estándar de facto para la topología de cableado estructurado en infraestructuras LAN por su bajo costo y flexibilidad.
- **Fibra Óptica:** Filamento dieléctrico conductor de energía luminosa, caracterizado por su inmunidad total a interferencias electromagnéticas, nula emisión térmica y capacidades de ancho de banda superlativas.
- **RJ45 (Registered Jack 45):** Interfaz física y estándar de conectorización modular de 8 posiciones y 8 contactos (8P8C) empleada universalmente en la terminación de cables de red Ethernet de cobre.
- **Normas T568A / T568B:** Estándares técnicos de terminación estipulados por la TIA/EIA que especifican el esquema estricto de asignación de pines (pinout) y código de colores para cables UTP en conectores modulares de 8 pines.
