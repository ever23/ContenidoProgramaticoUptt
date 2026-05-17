// --- CLASE PADRE (Superclase) ---
class Persona {
    constructor(cedula, nombre, apellido) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Método que será sobrescrito por las clases hijas (Polimorfismo)
    mostrarInformacion() {
        console.log(`[Persona] ${this.nombre} ${this.apellido} (CI: ${this.cedula})`);
    }
}

// --- CLASE HIJA 1 ---
// La palabra 'extends' indica la herencia
class Estudiante extends Persona {
    constructor(cedula, nombre, apellido, carrera) {
        // 'super()' llama al constructor de la clase Padre (Persona)
        super(cedula, nombre, apellido); 
        this.carrera = carrera;
        this.notas = [];
    }

    agregarNota(nota) {
        if (this.notas.length < 4) {
            this.notas.push(nota);
        }
    }

    // Polimorfismo: Reescribimos el método del Padre para que haga algo específico del Estudiante
    mostrarInformacion() {
        console.log(`[Estudiante] ${this.nombre} ${this.apellido}`);
        console.log(`Carrera: ${this.carrera} | CI: ${this.cedula}`);
        console.log(`Notas: [${this.notas.join(", ")}]`);
        console.log(`------------------------------`);
    }
}

// --- CLASE HIJA 2 ---
class Profesor extends Persona {
    constructor(cedula, nombre, apellido, especialidad) {
        super(cedula, nombre, apellido);
        this.especialidad = especialidad;
    }

    // Polimorfismo: Comportamiento distinto al de Estudiante y al de Persona
    mostrarInformacion() {
        console.log(`[Profesor] Prof. ${this.nombre} ${this.apellido}`);
        console.log(`Especialidad: ${this.especialidad}`);
        console.log(`------------------------------`);
    }
}

module.exports = { Persona, Estudiante, Profesor };
