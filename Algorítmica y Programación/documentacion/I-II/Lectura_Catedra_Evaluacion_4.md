# Manual de Estudio Profundo: Evaluación 4
## Materia: Algorítmica y Programación (Trayecto I - Trimestre II)
### Eje Temático: Estructuras de Registros (Objetos) y Persistencia (Archivos)

---

## 🏗️ CAPÍTULO I: Estructuras de Registros (Objetos)

Hasta ahora hemos almacenado datos del mismo tipo en Arreglos (ej. una lista de 5 notas). Pero en el mundo real, las entidades son complejas. Un estudiante no es solo un número; tiene un nombre (`String`), una edad (`Number`) y un estado de aprobación (`Boolean`).

En Ciencias de la Computación, cuando necesitamos agrupar diferentes tipos de datos que pertenecen a una misma entidad, utilizamos una **Estructura de Registro**. En lenguajes modernos como JavaScript, a esto se le conoce como un **Objeto Literal**.

### 1.1 Definición Técnica de un Objeto
En Ciencias de la Computación, un Objeto es una **abstracción en memoria que permite agrupar datos relacionados** bajo un mismo bloque lógico para modelar entidades del mundo real. A nivel estructural, es una colección de datos "no indexada" (no usa posiciones numéricas 0, 1, 2 como los arreglos), sino que almacena la información mediante un sistema asociativo de **Clave-Valor (Key-Value)**. 

> **💡 La Analogía de la Ficha Médica:**
> Imagina una ficha de cartón en un hospital. Cuando el doctor necesita saber tu sangre, no busca el "dato número 2". El doctor busca el campo que dice "Tipo de Sangre" y lee su valor. Las **Claves** son los nombres de los campos impresos en la ficha, y los **Valores** son lo que el doctor escribe con bolígrafo.

### 1.2 Sintaxis y Acceso a Memoria
Los objetos se encierran entre llaves `{}`.

```javascript
// Declaración de un Objeto Literal (Registro)
let estudiante = {
    cedula: "27.000.000",
    nombre: "María",
    notaFinal: 18,
    aprobado: true
};

// Acceso a los datos usando Notación de Punto (.)
console.log(estudiante.nombre); // Salida: María
console.log(estudiante.notaFinal); // Salida: 18

// Modificación de un registro en memoria
estudiante.notaFinal = 20;
```

---

## 💾 CAPÍTULO II: El Fin de la Memoria Volátil (Persistencia `fs`)

Todos los algoritmos que has hecho hasta hoy tienen un "problema" crítico: operan exclusivamente en la memoria RAM. Cuando el programa de Node.js termina de ejecutarse y la consola se cierra, la memoria RAM se vacía y **todos los datos se pierden para siempre**.

Para crear software real, necesitamos que la información sobreviva al cierre del programa. A esto se le llama **Persistencia de Datos**. La forma más elemental y universal de persistencia es guardar la información en el Disco Duro de la computadora mediante Archivos.

### 2.1 El Sistema de Archivos (`fs` - File System)
Node.js incluye un módulo nativo del sistema llamado `fs` (File System). Este módulo le otorga "permisos" a tu código JavaScript para leer y escribir archivos directamente en el disco duro.

Como en este trimestre estamos usando el estándar moderno **ES Modules (ESM)**, debemos importar este módulo en la primera línea de nuestro archivo.

```javascript
// 1. Importación obligatoria del módulo nativo (Estándar ESM)
import fs from 'fs';
```

### 2.2 Escribiendo en el Disco (`writeFileSync`)
Para guardar información, le ordenamos a Node.js que cree un archivo de texto (ej. `.txt`) y escriba nuestro String dentro de él. Usamos la versión *síncrona* (`Sync`) para que el programa espere a que el disco duro termine de girar y guardar antes de continuar.

```javascript
import fs from 'fs';

let textoAGuardar = "Este es un reporte oficial de notas.";

// fs.writeFileSync(NombreDelArchivo, Contenido)
fs.writeFileSync('reporte.txt', textoAGuardar);
console.log("¡Archivo guardado con éxito en el disco duro!");
```

### 2.3 Leyendo del Disco (`readFileSync`)
Para recuperar información de una sesión anterior (incluso si apagaste la PC), leemos el archivo y lo cargamos de vuelta a la memoria RAM (a una variable).

```javascript
import fs from 'fs';

// fs.readFileSync(Ruta, Codificación)
// Obligatorio usar 'utf-8' para que Node traduzca los Ceros y Unos a texto humano legible.
let datosRecuperados = fs.readFileSync('reporte.txt', 'utf-8');

console.log("El archivo dice:");
console.log(datosRecuperados);
```

> **🛑 Alarma de Ingeniería (Escribir vs Agregar):**
> La instrucción `writeFileSync` **sobrescribe** todo el archivo. Si el archivo ya existía, borra todo lo que tenía antes e inserta lo nuevo (destrucción de datos). Si lo que deseas es *agregar* información nueva al final de un archivo sin borrar lo que ya tenía (como agregar un nuevo paciente a un historial), debes usar obligatoriamente `fs.appendFileSync()`.

---

## 🗄️ CAPÍTULO III: De la Memoria RAM al Almacenamiento Persistente (Formato JSON)

Un objeto en JavaScript representa a *un solo* estudiante en la memoria RAM. Pero una universidad tiene miles. La solución en la industria es **Crear un Arreglo de Objetos**. 

### 3.1 ¿Qué es JSON y por qué se parece a un Objeto?
**JSON** (*JavaScript Object Notation*) es la definición formal de un formato de texto ligero y universal diseñado exclusivamente para el intercambio de datos. 

**¿Por qué JSON es igual a un Objeto?** Históricamente, JSON fue creado derivando directamente de la sintaxis de los objetos literales de JavaScript, heredando su arquitectura de llaves `{}` y el sistema Clave-Valor. La razón por la que la industria adoptó este modelo idéntico es la **interoperabilidad**: al usar este estándar universal, un programa escrito en Python, Java o PHP puede abrir un archivo `.json` guardado desde Node.js y entender los datos perfectamente sin problemas de compatibilidad.

Como su nombre lo indica, **la base de todo archivo JSON es siempre un Gran Objeto Principal `{}`**, y dentro de ese objeto raíz guardamos nuestros datos (como el arreglo de estudiantes). La regla de oro que lo diferencia de la memoria RAM es que en el texto JSON **todas las Claves deben ir estrictamente entre comillas dobles `""`**.

```javascript
// Representación de un archivo estricto JSON (Un Objeto Raíz que contiene un Arreglo)
{
    "estudiantes": [
        { "nombre": "María", "nota": 20, "aprobado": true },
        { "nombre": "Carlos", "nota": 12, "aprobado": false },
        { "nombre": "Ana", "nota": 15, "aprobado": true }
    ]
}
```

### 3.2 Traducción (Parseo y Stringify)
Los objetos vivos habitan en la memoria RAM, pero el módulo `fs` que vimos en el capítulo anterior solo puede guardar letras y caracteres (Strings) en el disco duro. JavaScript nos da dos herramientas maestras para traducir entre estos dos mundos:

1. **`JSON.stringify(objeto)`:** Toma tu Objeto vivo de la memoria RAM y lo "aplasta", convirtiéndolo en un solo bloque de texto puro (String) para que pueda ser guardado en el disco duro usando `fs.writeFileSync()`.
2. **`JSON.parse(texto_json)`:** Hace el proceso inverso. Usando `fs.readFileSync()` lees el texto JSON inerte desde el disco duro, y luego lo "revives" usando `parse`, transformándolo de nuevo en un Objeto estructurado en la RAM.

```javascript
// Simulamos recuperar este texto estático desde un archivo guardado en el disco
let archivoDeTexto = '{ "estudiantes": [ { "nombre": "María", "nota": 20 } ] }';

// 1. REVIVIMOS el texto a un Objeto real estructurado en la RAM
let baseDeDatosRAM = JSON.parse(archivoDeTexto);

// 2. Ahora sí podemos acceder al arreglo interno y procesarlo con un bucle for
let lista = baseDeDatosRAM.estudiantes;
for (let i = 0; i < lista.length; i++) {
    console.log(`El estudiante ${lista[i].nombre} sacó ${lista[i].nota}`);
}

// 3. APLASTAMOS el objeto completo de vuelta a texto puro para guardarlo
let nuevoTextoParaGuardar = JSON.stringify(baseDeDatosRAM);
```

### 3.3 Integración Total: Guardando y Leyendo JSON con `fs`
A continuación, veamos los dos escenarios reales que enfrentarás en el laboratorio uniendo todo lo aprendido:

**Escenario A: Escribiendo (Guardando) un Objeto en el Disco Duro**
```javascript
import fs from 'fs';

// 1. Tenemos nuestro objeto vivo en la RAM
let baseDeDatos = {
    "estudiantes": [
        { "nombre": "Pedro", "nota": 19 }
    ]
};

// 2. Lo convertimos a texto puro usando JSON.stringify
// Tip: Los parámetros '(..., null, 2)' le dan formato legible con saltos de línea e indentación.
let textoJSON = JSON.stringify(baseDeDatos, null, 2);

// 3. Usamos fs para guardarlo físicamente en un archivo .json
fs.writeFileSync('universidad.json', textoJSON);
console.log("¡Base de datos guardada exitosamente!");
```

**Escenario B: Leyendo (Recuperando) un JSON desde el Disco Duro**
```javascript
import fs from 'fs';

// 1. Leemos el archivo de texto inerte desde el disco duro
let archivoRecuperado = fs.readFileSync('universidad.json', 'utf-8');

// 2. Lo revivimos de texto puro a un Objeto real en la RAM
let baseDeDatosRAM = JSON.parse(archivoRecuperado);

// 3. Ya podemos usarlo con código JavaScript normal
let lista = baseDeDatosRAM.estudiantes;
console.log(`Tenemos ${lista.length} estudiante(s) registrado(s).`);
console.log(`El mejor es ${lista[0].nombre} con ${lista[0].nota} puntos.`);
```

---

> **📌 Resumen de Cátedra para la Evaluación de Laboratorio:**
> A diferencia de los cortes anteriores, esta evaluación no es en papel, **es frente a la computadora**. Tu objetivo es unir todas las piezas del rompecabezas:
> 1. Usar `prompt-sync` para pedir datos por consola.
> 2. Construir **Objetos** con esos datos y guardarlos en un **Arreglo**.
> 3. Usar `JSON.stringify()` para convertir toda esa estructura a texto.
> 4. Finalmente usar `fs.writeFileSync` (o `appendFileSync`) para que esos datos persistan en el disco duro tras cerrar el programa.
> ¡Esta es la arquitectura fundamental de cualquier sistema informático en la industria!
