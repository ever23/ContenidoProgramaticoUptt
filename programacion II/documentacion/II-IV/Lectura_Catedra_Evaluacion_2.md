# Manual de Estudio Profundo: Evaluación 2
## Materia: Programación II (Trayecto II)
### Eje Temático: Herencia, Polimorfismo e Interfaces

---

## 🧭 Introducción: La Escala Evolutiva del Software
En la lectura anterior, dominamos la creación de clases individuales. Pero en el mundo real, los sistemas no se componen de clases aisladas; se relacionan entre sí. 

Si estamos programando un videojuego, tendremos `Guerreros`, `Magos` y `Arqueros`. Todos ellos comparten atributos comunes (todos tienen `PuntosDeVida`, un `Nombre`, una posición `X/Y`). Si creamos tres clases desde cero copiando y pegando el código de esos atributos, estamos cometiendo un pecado mortal en ingeniería de software: violar el principio **DRY (Don't Repeat Yourself - No te repitas)**. 

Para organizar jerarquías lógicas y reutilizar código de forma elegante, la Programación Orientada a Objetos nos provee sus pilares más avanzados: **Herencia y Polimorfismo**.

---

## 🏛️ CAPÍTULO I: La Herencia (Reutilización Genética)

La **Herencia** permite crear una clase nueva basándose en una clase ya existente. Es una relación "Es un" (Is-A). 

- **Superclase (Clase Padre):** La clase general que contiene los atributos y métodos comunes. Ej: `Personaje`.
- **Subclase (Clase Hija):** La clase especializada que "hereda" automáticamente todo lo del padre, pero puede añadir sus propias características únicas. Ej: `Mago`. Un `Mago` *es un* `Personaje`.

### Ventajas de la Herencia:
1. **Reutilización Masiva:** Escribes la lógica común en la Superclase una sola vez. Si mañana quieres cambiar cómo funciona el movimiento, modificas la Superclase y todas las hijas se actualizan mágicamente.
2. **Jerarquía Lógica:** Permite estructurar sistemas biológicos, catálogos de tiendas (Electrodomésticos -> Televisores -> SmartTV), etc.

---

## 🧩 CAPÍTULO II: El Polimorfismo (Múltiples Formas)

El **Polimorfismo** (del griego "muchas formas") es la capacidad que tienen los objetos de diferentes clases (que comparten una misma Superclase) de responder a un *mismo* método de forma distinta.

Supongamos que la Superclase `Personaje` tiene el método `atacar()`. 
- Si invocas `Guerrero.atacar()`, el sistema ejecutará un espadazo.
- Si invocas `Mago.atacar()`, el sistema disparará una bola de fuego.

El código principal no necesita saber si eres guerrero o mago. Simplemente recorre una lista de personajes y a todos les dice `atacar()`. Cada subclase **sobreescribe** (Override) el método del padre para darle su propio comportamiento único.

---

## 🏗️ CAPÍTULO III: Interfaces (Contratos Estrictos)

En lenguajes puramente tipados como Java o TypeScript, la Herencia a veces no es suficiente, porque un objeto no puede heredar de múltiples padres simultáneamente (Herencia Múltiple).

Aquí entran las **Interfaces**. Una interfaz no es una clase, es un **Contrato**. No contiene código real, solo promesas. Dicta: *"Cualquier clase que firme este contrato, está OBLIGADA a implementar los siguientes métodos"*.

Por ejemplo, una interfaz `IVolador` exige tener un método `volar()`. Así, un `Avión` (máquina) y un `Pato` (animal) pueden firmar el contrato `IVolador`, asegurando al sistema que ambos saben volar, aunque pertenezcan a jerarquías totalmente distintas.

---

## 💻 Laboratorio: Herencia y Polimorfismo en JS

En JavaScript utilizamos las palabras reservadas `extends` para indicar herencia y `super` para llamar al constructor del padre.

```javascript
// 1. La Superclase (Clase Padre)
class Personaje {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
    }

    // Método genérico
    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.salud} HP.`);
    }

    // Método destinado a ser polimórfico
    atacar() {
        console.log(`${this.nombre} ataca con sus puños.`);
    }
}

// 2. La Subclase (Hereda de Personaje)
class Mago extends Personaje {
    constructor(nombre, salud, mana) {
        // 'super' ejecuta el constructor de la Superclase (Personaje)
        super(nombre, salud); 
        // Atributo exclusivo del Mago
        this.mana = mana; 
    }

    // Polimorfismo: Sobreescritura (Overriding) del método atacar
    atacar() {
        if (this.mana >= 10) {
            console.log(`${this.nombre} lanza una Bola de Fuego mortal.`);
            this.mana -= 10;
        } else {
            console.log(`${this.nombre} no tiene maná... usa ataque básico.`);
            // Usamos super.atacar() para llamar a la acción genérica del padre
            super.atacar(); 
        }
    }
}

// 3. Ejecución
const player1 = new Personaje("Aldeano", 50);
const player2 = new Mago("Gandalf", 100, 20);

// Ambos ejecutan presentarse() heredado
player1.presentarse();
player2.presentarse();

// POLIMORFISMO EN ACCIÓN: Mismo comando, comportamiento distinto
console.log("\n-- Inicia Combate --");
player1.atacar(); // Aldeano ataca con sus puños.
player2.atacar(); // Gandalf lanza una Bola de Fuego mortal.
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Herencia (Inheritance):** Mecanismo de diseño mediante el cual una entidad conceptual o clase (subclase) deriva su estructura base y comportamiento de otra clase preexistente (superclase), promoviendo la reutilización de código (DRY).
- **Superclase / Clase Padre:** Plantilla de nivel superior en una jerarquía de herencia que define estados y comportamientos genéricos.
- **Subclase / Clase Hija:** Plantilla especializada que extiende una Superclase, adquiriendo sus capacidades y definiendo aditamentos propios.
- **Polimorfismo:** Propiedad de los sistemas orientados a objetos que permite a instancias de distintas subclases responder a una misma firma de método mediante implementaciones morfológicamente diferentes.
- **Sobreescritura (Overriding):** Acto de redefinir explícitamente en una subclase un método previamente definido y heredado de su superclase, para proveer un comportamiento especializado.
- **Interfaz (Interface):** Constructo semántico puramente declarativo que estipula un contrato de métodos requeridos sin proveer implementación, obligando a las clases signatarias a cumplir dicha estructura arquitectónica.
- **`super`:** Palabra reservada y operador referencial utilizado en subclases para invocar métodos o rutinas de inicialización (constructores) alojados en la superclase jerárquicamente superior.
