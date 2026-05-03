/**
 * Lógica de la Evaluación 3: Captura de Formularios y POST Asíncrono
 */

const formulario = document.getElementById('formProyecto');
const feedback = document.getElementById('feedback');

formulario.addEventListener('submit', async (e) => {
    // 1. IMPORTANTE: Bloquear la recarga de página
    e.preventDefault();

    // 2. Captura automática de datos
    const formData = new FormData(formulario);
    const datos = Object.fromEntries(formData.entries());

    // 3. VALIDACIÓN DE CAPA 2 (FRONTEND JS)
    // Damos feedback rápido al usuario antes de molestar al servidor
    if (datos.autor.trim().length < 5) {
        mostrarFeedback("El nombre del autor es demasiado corto.", "error");
        return;
    }

    try {
        mostrarFeedback("Enviando datos de forma segura...", "info");

        // 4. Envío POST Asíncrono
        const respuesta = await fetch('/api/proyectos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        // 5. Manejo de Respuesta (Éxito o Error de Capa 3)
        if (resultado.success) {
            mostrarFeedback(resultado.mensaje, "success");
            formulario.reset(); // Limpiar formulario tras éxito
        } else {
            mostrarFeedback(resultado.mensaje, "error");
        }

    } catch (error) {
        mostrarFeedback("Error de conexión: El servidor no responde.", "error");
    }
});

function mostrarFeedback(mensaje, tipo) {
    feedback.textContent = mensaje;
    feedback.className = `feedback-box ${tipo}`;
    feedback.classList.remove('hidden');
}
