const { Persona, Estudiante, Profesor } = require('./Clases');

console.log("Iniciando Práctica de Herencia y Polimorfismo...\n");

// Creamos un arreglo que puede guardar cualquier tipo de Persona
let directorioDePersonas = [];

// Instanciamos estudiantes
const est1 = new Estudiante("30111222", "Ana", "López", "Informática");
est1.agregarNota(20);
est1.agregarNota(18);

// Instanciamos profesores
const prof1 = new Profesor("15444333", "Carlos", "Mendoza", "Matemáticas");
const prof2 = new Profesor("18999888", "Luisa", "Fernández", "Programación Web");

// Agregamos todos al mismo directorio
directorioDePersonas.push(est1);
directorioDePersonas.push(prof1);
directorioDePersonas.push(prof2);

// Demostración de Polimorfismo:
// Recorremos el arreglo de personas. Aunque todas son vistas como "Persona",
// al llamar a mostrarInformacion(), cada objeto ejecuta su VERSIÓN ESPECÍFICA del método.
console.log("=== DIRECTORIO DE LA UNIVERSIDAD ===\n");
directorioDePersonas.forEach(persona => {
    persona.mostrarInformacion(); 
});
