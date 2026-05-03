/**
 * Lógica de la Evaluación 2: Fetch API y Asincronía
 */

async function obtenerNotas() {
    const contenedor = document.getElementById('contenedorNotas');
    const loader = document.getElementById('loader');

    try {
        // Mostrar cargando
        loader.classList.remove('hidden');
        contenedor.innerHTML = "";

        // 1. Petición Fetch
        const respuesta = await fetch('/api/notas');
        
        if (!respuesta.ok) throw new Error("Error al obtener datos");

        // 2. Convertir a JSON
        const datos = await respuesta.json();

        // 3. Renderizar en el DOM
        datos.forEach(estudiante => {
            const card = document.createElement('div');
            card.className = `nota-card ${estudiante.estado.toLowerCase()}`;
            
            card.innerHTML = `
                <h3>${estudiante.nombre}</h3>
                <p><strong>Materia:</strong> ${estudiante.materia}</p>
                <div class="nota-badge">${estudiante.nota}</div>
                <span class="status-text">${estudiante.estado}</span>
            `;
            
            contenedor.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        contenedor.innerHTML = `<p class="error">Error: No se pudo conectar con el servidor.</p>`;
    } finally {
        loader.classList.add('hidden');
    }
}

document.getElementById('btnConsultar').addEventListener('click', obtenerNotas);
