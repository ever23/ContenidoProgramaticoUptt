// Importamos la clase Estudiante (El 'Molde')
const Estudiante = require('./Estudiante');

console.log("Iniciando Práctica de Programación Orientada a Objetos...\n");

// 1. Instanciamos (Creamos) un objeto basado en la clase Estudiante
const alumno1 = new Estudiante("30123456", "Juan", "Pérez");
const alumno2 = new Estudiante("28987654", "María", "Gómez");

// 2. Usamos los métodos del objeto para agregar notas
alumno1.agregarNota(15);
alumno1.agregarNota(18);
alumno1.agregarNota(14);
alumno1.agregarNota(20);

alumno2.agregarNota(10);
alumno2.agregarNota(12);

// 3. Mostramos la información (El objeto procesa sus propios datos internamente)
alumno1.mostrarInformacion();
alumno2.mostrarInformacion();
