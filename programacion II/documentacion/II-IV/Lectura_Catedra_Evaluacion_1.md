# Manual de Estudio Profundo: Evaluación 1
## Materia: Programación II (Trayecto II)
### Eje Temático: Paradigma Orientado a Objetos (POO)

---

## 🧭 Introducción: Modelando el Mundo Real
En Algorítmica y Programación aprendimos el paradigma Estructurado (funciones y variables sueltas). Sin embargo, a medida que los programas crecen (piensa en sistemas bancarios, videojuegos o redes sociales), manejar miles de variables y funciones dispersas se vuelve insostenible.

La **Programación Orientada a Objetos (POO)** es una evolución en el diseño de software. En lugar de pensar en el programa como "una lista de pasos a seguir", pensamos en él como **"un ecosistema de entidades que interactúan"**. La POO nos permite modelar la realidad. Si haces un sistema para una clínica, no creas variables aisladas `nombrePaciente`, `edadPaciente`, `cobrarPaciente()`. Creas una entidad `Paciente` que *conoce* su propia información y *sabe* qué acciones puede realizar.

---

## 🏛️ CAPÍTULO I: Clases y Objetos (La Fábrica y el Producto)

### 1.1 La Clase (El Molde)
Una **Clase** no es un dato físico real, es un concepto abstracto. Es el **molde, plantilla o plano arquitectónico** que define las características y comportamientos que tendrán las futuras entidades creadas a partir de ella.
*Analogía:* El plano de un automóvil. El plano te dice que el auto tendrá 4 ruedas y un motor, pero el plano en sí mismo no te sirve para conducir al trabajo.

### 1.2 El Objeto (La Instancia Real)
Un **Objeto** (o Instancia) es la manifestación física (en memoria RAM) construida a partir de una Clase. 
*Analogía:* Si la Clase es el plano del auto, el Objeto es el Toyota Corolla rojo estacionado en tu garaje. Es tangible y ocupa espacio real. Puedes crear múltiples Objetos diferentes (un Corolla rojo, un Honda azul) partiendo de la misma Clase.

---

## 🧩 CAPÍTULO II: Anatomía de la Clase

Para definir el plano (la Clase), necesitamos estipular dos cosas fundamentales: lo que "es" y lo que "hace".

### 2.1 Los Atributos (Lo que "es")
Son las **variables** que viven dentro de la clase. Representan el estado o las características físicas/lógicas de la entidad.
- Para una clase `Coche`, los atributos serían: `color`, `marca`, `velocidadActual`.
- Para una clase `Usuario`, serían: `email`, `contraseña`, `rol`.

### 2.2 Los Métodos (Lo que "hace")
Son las **funciones** que viven dentro de la clase. Representan el comportamiento o las acciones que la entidad es capaz de ejecutar, muchas veces modificando sus propios atributos.
- Para `Coche`, los métodos serían: `acelerar()`, `frenar()`, `encenderLuces()`.

---

## 🏗️ CAPÍTULO III: El Pilar del Encapsulamiento y Constructores

### 3.1 El Encapsulamiento (La Caja Fuerte)
Uno de los grandes problemas de la programación estructurada es que cualquier parte del código puede modificar variables globales, causando daños irreparables. La POO introduce los **Modificadores de Acceso** para proteger la información (Encapsularla):
- **Public (Público):** Cualquier persona fuera de la clase puede ver y modificar el atributo/método.
- **Private (Privado):** Información clasificada. Solo los métodos internos de la clase pueden leer o modificar ese atributo. Por ejemplo, el `saldo` de una `CuentaBancaria` debe ser privado; no puedes cambiarlo desde afuera con un simple `cuenta.saldo = 1000000`, debes pasar por un método oficial como `cuenta.depositar()`.

### 3.2 El Constructor
Cuando un objeto nace (es instanciado), a menudo necesita configuraciones iniciales. El **Constructor** es un método especial que se ejecuta *automática y únicamente una vez* en el preciso momento en que el objeto es creado. Se usa para inicializar sus atributos básicos.

---

## 💻 Laboratorio: Creando una Clase en JavaScript

JavaScript moderno soporta POO a través de la sintaxis de clases (introducida en ES6). Construyamos nuestra primera clase.

```javascript
// 1. Definición de la Clase (El Molde)
class CuentaBancaria {
    
    // 2. El Constructor (Inicializa el objeto al nacer)
    constructor(titularInicial, saldoInicial) {
        this.titular = titularInicial;
        
        // El símbolo '#' en JS indica que este atributo es PRIVADO (Encapsulado)
        // No puede ser modificado directamente desde afuera de esta clase.
        this.#saldo = saldoInicial; 
    }

    // Atributo Privado (sintaxis moderna)
    #saldo;

    // 3. Métodos (Comportamientos)
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Depósito de $${cantidad} exitoso.`);
        } else {
            console.log("Error: La cantidad debe ser positiva.");
        }
    }

    // Método "Getter" para permitir que otros vean el saldo (sin poder modificarlo libremente)
    consultarSaldo() {
        return `El saldo de ${this.titular} es $${this.#saldo}`;
    }
}

// 4. Instanciación (Creando Objetos Reales)
const miCuenta = new CuentaBancaria("Juan Pérez", 100);

miCuenta.depositar(50); // Llama al comportamiento
console.log(miCuenta.consultarSaldo()); // Muestra: El saldo de Juan Pérez es $150

// Intentando violar el encapsulamiento:
// miCuenta.#saldo = 1000000; // ❌ ERROR CRÍTICO. El motor bloqueará este intento de hackeo.
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **POO (Programación Orientada a Objetos):** Paradigma de programación basado en el modelado conceptual de entidades ("objetos") que amalgaman estado (datos) y comportamiento (código) para resolver requerimientos de software.
- **Clase (Class):** Plantilla abstracta y declarativa que define la estructura estática (atributos) y dinámica (métodos) de una categoría de objetos.
- **Objeto (Object/Instance):** Entidad concreta asignada en memoria, generada a partir de una clase específica, poseedora de un estado particular e independiente.
- **Atributo:** Variable ligada estructuralmente a una clase que representa las propiedades cuantificables o descriptivas de la entidad.
- **Método:** Subrutina encapsulada en una clase que expone las capacidades operativas y de manipulación de estado del objeto.
- **Constructor:** Método especializado de invocación automática durante la instanciación, encargado de la inicialización y reserva de recursos para un nuevo objeto.
- **Encapsulamiento:** Principio arquitectónico orientado a ocultar la complejidad y el estado interno de un objeto, forzando la interacción exclusiva a través de interfaces públicas controladas (Getters, Setters y Métodos de negocio).
