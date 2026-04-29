# Manual de Estudio Profundo: Evaluación 1
## Materia: Programación II (Trayecto I - Trimestre II)
### Eje Temático: El Paradigma Orientado a Objetos (POO), Clases, Atributos y Métodos

---

## 🧭 Introducción: El Cambio de Paradigma
En el trimestre pasado, dominaste la **Programación Estructurada** (secuencias, decisiones y ciclos). Ese enfoque es excelente para resolver cálculos secuenciales (como una receta de cocina paso a paso). Sin embargo, cuando intentas construir sistemas a gran escala (como una red social, un sistema bancario o un videojuego masivo), el código estructurado se vuelve caótico, difícil de leer y muy frágil ante cambios.

Es aquí donde debes dar el salto cognitivo más importante de tu carrera: pasar al **Paradigma Orientado a Objetos (POO)**. 

La POO no es solo una nueva sintaxis, es una **filosofía de diseño**. En lugar de ver el programa como una larga lista de instrucciones, empezarás a verlo como un "universo" lleno de entidades virtuales (Objetos) que interactúan entre sí. Tu trabajo ahora no es solo dar órdenes, sino **modelar la realidad** dentro de la computadora.

---

## 🏛️ CAPÍTULO I: De la Secuencia a la Entidad

### 1.1 ¿Qué es la Programación Orientada a Objetos?
Es un modelo de diseño de software (un paradigma) que organiza el diseño del programa en torno a datos u **"objetos"**, en lugar de funciones y lógica pura. En el mundo real, todo es un objeto: un estudiante, una cuenta bancaria, una factura, una arepa. La POO nos permite crear representaciones digitales exactas de esos objetos del mundo físico.

### 1.2 La Anatomía Fundamental del Objeto
Todo objeto en el universo (y en el código) se define estrictamente por dos dimensiones:
1. **Estado (Atributos):** Son las características descriptivas del objeto. Los adjetivos. Por ejemplo, un objeto `Estudiante` tiene estado: `nombre`, `cedula`, `trimestre`, `promedio`.
2. **Comportamiento (Métodos):** Son las acciones que el objeto es capaz de realizar. Los verbos. Por ejemplo, el `Estudiante` puede: `inscribirMateria()`, `presentarExamen()`, `retirarSemestre()`.

Si lo comparamos con la programación estructurada del trimestre pasado: los atributos son las *variables*, y los métodos son las *funciones*, pero ahora están encapsulados juntos dentro de una misma entidad.

---

## 🧩 CAPÍTULO II: La Fábrica y el Producto (Clases y Objetos)

Para no tener que programar cada estudiante uno por uno, la POO inventó el concepto de **Clase**.

### 2.1 La Clase (El Plano Arquitectónico)
Una **Clase** es un molde, una plantilla o un plano arquitectónico. Define qué atributos y métodos tendrán los objetos que sean creados a partir de ella. 
*Nota crítica:* Una clase **no** existe en la memoria física de forma utilizable. Es solo teoría. El plano de un edificio no te da refugio; tienes que construir el edificio primero.

### 2.2 El Objeto (La Instancia)
El **Objeto** es el ente real construido a partir de la Clase. A este proceso de "fabricar" un objeto a partir del molde se le llama **Instanciación**. Si la clase es "Estudiante", el objeto es "Juan Pérez, V-1234567, cursando Programación II". Un solo molde (Clase) puede instanciar infinitos objetos independientes en la memoria RAM.

### 2.3 El Constructor (El Proceso de Fabricación)
¿Cómo le pasamos los datos iniciales al molde para que fabrique un objeto único? A través de un método especial llamado **Constructor**. Es una función que se ejecuta **automáticamente y una sola vez** en el instante exacto en que nace el objeto (al usar la palabra reservada `new`). Su trabajo es inicializar el Estado (los atributos) del objeto recién nacido.

---

## 🏗️ CAPÍTULO III: Encapsulamiento y Seguridad (Acceso)

En la programación estructurada clásica, todas las variables estaban "sueltas" y cualquier parte del programa podía modificarlas (un peligro de seguridad enorme). En Programación II, introducimos las políticas de acceso:

### 3.1 Atributos Públicos vs Privados
- **Públicos:** Cualquier agente externo puede ver y modificar el valor (ej: cambiar el `nombre` de un estudiante). En JavaScript se declaran normalmente.
- **Privados (`#`):** El atributo está oculto y blindado. Nadie fuera del objeto puede leerlo o alterarlo directamente (ej: la `clave` del usuario o el `saldo` de una cuenta bancaria). En JavaScript moderno, se usa el prefijo `#` (ej: `#saldo`).

### 3.2 La Palabra Clave `this` (El "Yo" del Objeto)
Cuando un objeto está ejecutando uno de sus propios métodos, necesita referirse a sus propios atributos y no a los de otro objeto. Para ello utiliza la palabra `this`. Si el objeto dice `this.nombre`, está diciendo literalmente "Mi propio nombre".

---

## 💻 CAPÍTULO IV: Implementación Práctica (Caso de Estudio)

Para ilustrar este salto, transformaremos la lógica clásica en Arquitectura de Objetos. Modelaremos una **Cuenta Bancaria**.

> **Problema:** Necesitamos un sistema seguro donde cada cliente tenga su saldo protegido, pueda depositar, retirar y consultar, pero sin que nadie pueda alterar el saldo directamente burlándose de la seguridad del banco.

```javascript
// 1. LA CLASE (El Molde)
class CuentaBancaria {
  
  // Atributos Privados (Blindaje de seguridad)
  #titular;
  #saldo;

  // 2. EL CONSTRUCTOR (El Nacimiento)
  constructor(nombreTitular, depositoInicial) {
    this.#titular = nombreTitular; // 'this' significa 'Mi' titular
    this.#saldo = depositoInicial; 
  }

  // 3. LOS MÉTODOS (El Comportamiento)
  
  // Método para inyectar dinero
  depositar(monto) {
    if(monto > 0) {
      this.#saldo = this.#saldo + monto;
      console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`);
    } else {
      console.log("Error: Monto inválido.");
    }
  }

  // Método para extraer dinero
  retirar(monto) {
    if(monto > 0 && monto <= this.#saldo) {
      this.#saldo = this.#saldo - monto;
      console.log(`Retiro de $${monto} aprobado.`);
    } else {
      console.log("Error: Fondos insuficientes.");
    }
  }

  // Método de solo lectura (Garantiza que no manipulen el saldo)
  consultarSaldo() {
    return `Estimado ${this.#titular}, su saldo es $${this.#saldo}`;
  }
}

// 4. INSTANCIACIÓN (Creación de los Objetos Reales en RAM)
const cuentaProfesor = new CuentaBancaria("Prof. Juan", 500);
const cuentaEstudiante = new CuentaBancaria("Estudiante Carlos", 50);

// Ejecución de comportamientos
cuentaProfesor.depositar(100); // El propio objeto se actualiza
console.log(cuentaProfesor.consultarSaldo());

// Intento de Hackeo (Fallido porque #saldo es privado)
// cuentaProfesor.#saldo = 1000000; // Esto lanza un ERROR CRÍTICO de sintaxis
```

*Reflexión Pedagógica:* Observa cómo la Metodología de las 4 Fases sigue viva, pero ha evolucionado. La "Declaración" es ahora el diseño de la Clase. La "Entrada" viaja a través de los argumentos de los Métodos. El "Cálculo" ocurre dentro de esos Métodos, y la "Salida" la devuelve el propio objeto. El programa ya no es una lista de órdenes, es un ecosistema de entidades colaborativas.

---

## 📘 ANEXO: Diccionario Técnico Formal (Programación II)

*Para efectos de evaluación académica rigurosa, se establecen las siguientes definiciones formales:*

- **Programación Orientada a Objetos (POO):** Paradigma de diseño de software basado en la abstracción de entidades del mundo real (objetos) que agrupan estado (datos) y comportamiento (lógica) en una única estructura encapsulada.
- **Clase:** Plantilla abstracta, arquetipo o molde estructural que define las propiedades y métodos comunes que caracterizarán a una colección de objetos similares.
- **Objeto (Instancia):** Entidad lógica concreta que reside en la memoria RAM, originada a partir de una Clase, con un estado particular y capacidad de acción.
- **Instanciación:** Proceso técnico de asignación de memoria (vía instrucción `new`) mediante el cual una Clase abstracta genera un Objeto tangible y funcional.
- **Atributo:** Variable encapsulada dentro de una Clase u Objeto que define una porción de su estado interno.
- **Método:** Subrutina o función encapsulada dentro de una Clase que define un comportamiento específico o una alteración permitida sobre el estado del Objeto.
- **Constructor:** Método especial y de ejecución autoinvocada diseñado exclusivamente para inicializar el estado (atributos) de un objeto en el instante exacto de su instanciación.
- **Encapsulamiento:** Principio arquitectónico que oculta el estado interno de un objeto (atributos privados) y exige que cualquier interacción con dichos datos se realice exclusivamente a través de métodos públicos controlados.
- **`this`:** Puntero de referencia relativa (palabra clave) que permite a un objeto en ejecución referirse de forma inconfundible a su propio ámbito y a sus propios atributos/métodos en memoria.
