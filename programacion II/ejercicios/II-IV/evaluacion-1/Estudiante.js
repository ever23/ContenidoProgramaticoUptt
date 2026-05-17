class Estudiante {
    constructor(cedula, nombre, apellido) {
        // Atributos (Propiedades)
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = []; // Arreglo para guardar las 4 notas
    }

    // Método para agregar notas
    agregarNota(nota) {
        if (this.notas.length < 4) {
            this.notas.push(nota);
            console.log(`Nota ${nota} agregada a ${this.nombre}.`);
        } else {
            console.log(`Error: ${this.nombre} ya tiene 4 notas.`);
        }
    }

    // Método para calcular la nota final
    calcularPromedio() {
        if (this.notas.length === 0) return 0;
        let suma = this.notas.reduce((acumulador, n) => acumulador + n, 0);
        return suma / this.notas.length;
    }

    // Método para mostrar la información del estudiante
    mostrarInformacion() {
        console.log(`=== Datos del Estudiante ===`);
        console.log(`Cédula: ${this.cedula}`);
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Notas: [${this.notas.join(", ")}]`);
        console.log(`Promedio Final: ${this.calcularPromedio()}`);
        console.log(`============================\n`);
    }
}

// Exportamos la clase para poder usarla en otros archivos (como main.js)
module.exports = Estudiante;
