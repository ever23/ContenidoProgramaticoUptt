// ============================================
// Lógica del cliente — public/js/app.js
// Este script se ejecuta en el NAVEGADOR,
// no en el servidor Node.js.
// ============================================

// --- Mostrar hora en tiempo real al cargar ---
function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('es-VE');
    document.getElementById('hora-cliente').textContent = hora;
}

// Ejecutar al cargar la página
mostrarHora();

// --- Botón: actualizar hora manualmente ---
document.getElementById('btn-actualizar').addEventListener('click', function () {
    mostrarHora();

    // Animación visual de confirmación
    this.textContent = '✅ Actualizado';
    setTimeout(() => {
        this.textContent = '🔄 Actualizar hora';
    }, 1500);
});
