# Manual de Estudio Profundo: Evaluación 3
## Materia: Programación II (Trayecto II)
### Eje Temático: Herramientas de Diseño de Interfaz (HTML / CSS)

---

## 🧭 Introducción: Construyendo para el Usuario Final
La algoritmia y la orientación a objetos son el motor de nuestro software, pero para el usuario común, el código interno es irrelevante. El usuario experimenta el software exclusivamente a través de la **Interfaz de Usuario (UI)**. 

Con esta evaluación marcamos un punto de inflexión en tu carrera: dejamos momentáneamente la consola negra para adentrarnos en el ecosistema web. Aprenderemos a construir las "ventanas" de nuestro software mediante el lenguaje de marcado estándar global: HTML, y su capa estética de estilo: CSS.

---

## 🏛️ CAPÍTULO I: HTML (HyperText Markup Language) - El Esqueleto

HTML **no es un lenguaje de programación**, es un lenguaje de **marcado**. No tiene lógica computacional (no puedes hacer `if`, ni `while`, ni cálculos matemáticos con HTML puro). Su único objetivo es estructurar documentos y darle semántica al contenido para que el navegador (Chrome, Firefox) entienda qué es cada texto.

### 1.1 Etiquetas (Tags) y Semántica
HTML funciona envolviendo contenido entre marcas o "etiquetas". La mayoría tiene apertura `<tag>` y cierre `</tag>`.
- **Estructura Semántica:** El HTML5 moderno requiere que etiquetemos el contenido por lo que *significa*, no por cómo queremos que se vea. Usamos `<header>` para cabeceras, `<nav>` para menús de navegación, `<main>` para contenido principal y `<footer>` para pies de página. Esto es crucial para el SEO (Google) y la accesibilidad (lectores de pantalla para personas ciegas).
- **Elementos Básicos:** `<h1>` a `<h6>` para títulos, `<p>` para párrafos, `<a>` para enlaces (hyperlinks) y `<img>` para imágenes.

### 1.2 Formularios
Son el puente de comunicación entre el usuario y nuestro algoritmo (la Fase 2: Entrada). Utilizamos la etiqueta `<form>` que agrupa varios `<input>` (cajas de texto, contraseñas, botones de radio). 

---

## 🧩 CAPÍTULO II: CSS (Cascading Style Sheets) - La Piel y el Estilo

Si HTML es el esqueleto de concreto de un edificio, CSS es la pintura, el diseño de interiores y la fachada de vidrio. CSS controla todo el aspecto visual: colores, tipografías, animaciones y diseño posicional.

### 2.1 La Regla CSS (Selector y Declaración)
Para darle estilo a un elemento HTML, CSS usa una estructura lógica: *apunta al objetivo e inyecta propiedades*.

```css
/* Selector { Declaraciones } */
h1 {
    color: blue;
    font-size: 24px;
}
```

### 2.2 Tipos de Selectores Esenciales
- **De Etiqueta:** Afecta a todos los elementos del mismo tipo. Ej: `p { ... }` (todos los párrafos).
- **De Clase (`.clase`):** Es el más usado. Permite afectar a grupos específicos. En HTML agregas `class="btn"`, y en CSS lo estilizas usando `.btn { ... }`.
- **De ID (`#id`):** Selecciona a un **único** elemento irrepetible en toda la página. En HTML `id="logo"`, en CSS `#logo { ... }`.

### 2.3 El Modelo de Caja (Box Model)
El concepto arquitectónico más crítico del diseño web: el navegador renderiza **absolutamente todo** (textos, botones, imágenes) como si estuvieran dentro de una **Caja Rectangular Invisible**.
Esta caja tiene 4 capas (de adentro hacia afuera):
1. **Content (Contenido):** El texto o la imagen per se.
2. **Padding (Relleno interno):** Espacio transparente entre el contenido y el borde de la caja.
3. **Border (Borde):** La línea divisoria (puede ser visible u oculta).
4. **Margin (Margen externo):** Espacio de separación entre esta caja y las demás cajas de la página.

---

## 🏗️ CAPÍTULO III: Diseño Responsivo (Responsive Design)

En la era moderna, una página web será abierta desde monitores 4K de 32 pulgadas y desde pantallas de smartphones de 6 pulgadas. Una interfaz profesional debe adaptarse como líquido al contenedor.

Logramos esto usando:
1. **Unidades Relativas:** Usar porcentajes `width: 50%` o `rem` en lugar de píxeles estáticos `width: 500px`.
2. **Flexbox y CSS Grid:** Sistemas avanzados de maquetación unidimensional y bidimensional que reordenan los elementos automáticamente según el espacio disponible.
3. **Media Queries:** "Sensores" condicionales en CSS que aplican estilos solo si la pantalla cumple ciertas reglas (ej: `@media (max-width: 768px) { ... }` cambiaremos el menú de horizontal a vertical si estamos en celular).

---

## 💻 Laboratorio: Creando una Tarjeta Premium

Aquí integramos la estructura HTML semántica y el estilo CSS moderno (usando variables CSS y efectos visuales).

```html
<!-- CÓDIGO HTML -->
<div class="tarjeta-premium">
    <h2 class="titulo">Plan Pro</h2>
    <p class="precio">$29<span class="mes">/mes</span></p>
    <button class="btn-adquirir">Comprar Ahora</button>
</div>
```

```css
/* CÓDIGO CSS */

/* 1. Uso de Variables CSS (Custom Properties) para consistencia de paleta */
:root {
    --bg-color: #12121e;
    --accent: #00f2ff;
    --text-claro: #e2e8f0;
}

/* 2. Estilizado de clase (Box Model y Efectos) */
.tarjeta-premium {
    background-color: var(--bg-color);
    color: var(--text-claro);
    width: 300px;
    padding: 30px;            /* Espacio interno para que no asfixie el texto */
    border-radius: 12px;      /* Bordes redondeados modernos */
    border: 1px solid rgba(0, 242, 255, 0.2); /* Borde sutil de neón */
    text-align: center;
    transition: transform 0.3s ease; /* Preparamos animación */
}

/* 3. Interactividad visual: Efecto Hover (al pasar el mouse) */
.tarjeta-premium:hover {
    transform: translateY(-10px); /* La tarjeta "flota" hacia arriba */
    box-shadow: 0 10px 20px rgba(0, 242, 255, 0.15); /* Brillo difuso */
}

.btn-adquirir {
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
    padding: 10px 25px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **HTML (HyperText Markup Language):** Estándar internacional utilizado para la estructuración y declaración semántica de documentos y aplicaciones ejecutadas en clientes web.
- **CSS (Cascading Style Sheets):** Lenguaje de diseño y presentación utilizado para definir la estética, formato visual y maquetación de documentos HTML.
- **Etiqueta Semántica:** Constructo sintáctico del HTML5 que describe lógicamente el rol y significado de su contenido (ej. `<header>`, `<article>`), mejorando la indexación y accesibilidad.
- **Selector CSS:** Patrón de búsqueda declarativo empleado para apuntar e identificar elementos en el Árbol DOM sobre los cuales aplicar reglas de estilizado.
- **Box Model (Modelo de Caja):** Paradigma fundacional de renderizado web donde el motor del navegador interpreta cada elemento HTML como un área rectangular compuesta por contenido, relleno (padding), borde (border) y margen (margin).
- **Responsive Web Design (Diseño Responsivo):** Metodología de diseño UI orientada a la creación de interfaces elásticas capaces de reorganizarse y escalar óptimamente según la resolución y dimensiones del viewport del dispositivo cliente.
- **Media Query:** Módulo CSS3 que permite la ejecución condicional de bloques de estilos basados en parámetros del entorno de visualización (ancho, alto, orientación).
