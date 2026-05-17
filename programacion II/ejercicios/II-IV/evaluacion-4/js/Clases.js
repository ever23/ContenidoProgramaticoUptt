// Este archivo se ejecuta directamente en el navegador, no en Node.js.
// Por lo tanto, no usamos "require" ni "module.exports".

class Persona {
    constructor(cedula, nombre) {
        this.cedula = cedula;
        this.nombre = nombre;
    }
}

class Estudiante extends Persona {
    constructor(cedula, nombre, carrera) {
        super(cedula, nombre);
        this.carrera = carrera;
        this.notas = [];
    }

    agregarNota(nota) {
        if (this.notas.length < 4) {
            this.notas.push(nota);
        }
    }
}

// Opcional: Arreglo global para almacenar los estudiantes en la memoria del navegador
const directorioEstudiantes = [];
