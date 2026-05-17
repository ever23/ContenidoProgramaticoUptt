/**
 * Lógica del DOM y Eventos para la Evaluación 4
 */

// 1. Capturamos los elementos del DOM que necesitamos
const formulario = document.getElementById('formularioEstudiante');
const inputCedula = document.getElementById('cedula');
const inputNombre = document.getElementById('nombre');
const selectCarrera = document.getElementById('carrera');
const cuerpoTabla = document.getElementById('cuerpoTabla');

// 2. Escuchamos el evento 'submit' (Cuando el usuario envía el formulario)
formulario.addEventListener('submit', function(evento) {
    
    // IMPORTANTE: Evita que la página se recargue al enviar el formulario
    evento.preventDefault();

    // 3. Obtenemos los valores que el usuario escribió
    const cedula = inputCedula.value;
    const nombre = inputNombre.value;
    const carrera = selectCarrera.value;

    // 4. Instanciamos un nuevo objeto usando la clase Estudiante (viene de Clases.js)
    const nuevoEstudiante = new Estudiante(cedula, nombre, carrera);
    
    // Lo guardamos en nuestro arreglo global (opcional)
    directorioEstudiantes.push(nuevoEstudiante);

    // 5. Manipulación del DOM: Creamos una nueva fila (<tr>) para la tabla
    const fila = document.createElement('tr');

    // Construimos el HTML interno de esa fila usando los datos del objeto
    fila.innerHTML = `
        <td>${nuevoEstudiante.cedula}</td>
        <td>${nuevoEstudiante.nombre}</td>
        <td>${nuevoEstudiante.carrera}</td>
        <td><button class="btn-accion">Ver Notas</button></td>
    `;

    // 6. Añadimos la fila recién creada al cuerpo de la tabla visualmente
    cuerpoTabla.appendChild(fila);

    // 7. Limpiamos el formulario para el siguiente registro
    formulario.reset();
    inputCedula.focus(); // Ponemos el cursor de vuelta en el primer campo
});
