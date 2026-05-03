/**
 * Proyecto Final: Persistencia y Gestión de Archivos
 */

const formulario = document.getElementById('formRegistro');
const lista = document.getElementById('listaEstudiantes');

// 1. Función para cargar datos desde el disco duro al iniciar
async function cargarEstudiantes() {
    try {
        const res = await fetch('/api/estudiantes');
        const estudiantes = await res.json();
        
        lista.innerHTML = "";
        estudiantes.forEach(est => {
            const div = document.createElement('div');
            div.className = "estudiante-card";
            div.innerHTML = `
                <img src="${est.foto || 'https://via.placeholder.com/150'}" alt="Foto">
                <div class="info">
                    <h3>${est.nombre}</h3>
                    <p>C.I: ${est.cedula}</p>
                    <div class="actions">
                        <button onclick="editarNombre(${est.id}, '${est.nombre}')" class="btn-edit">Editar</button>
                        <button onclick="eliminarEstudiante(${est.id})" class="btn-delete">Eliminar</button>
                    </div>
                </div>
            `;
            lista.appendChild(div);
        });
    } catch (e) { console.error("Error al cargar datos"); }
}

// 2. Función para eliminar
async function eliminarEstudiante(id) {
    if (!confirm("¿Seguro que quieres eliminar este estudiante del disco duro?")) return;
    
    try {
        const res = await fetch(`/api/estudiantes/eliminar/${id}`);
        const result = await res.json();
        if (result.success) {
            cargarEstudiantes();
        }
    } catch (e) { alert("Error al eliminar"); }
}

// 3. Función para editar nombre
async function editarNombre(id, nombreActual) {
    const nuevoNombre = prompt("Nuevo nombre para el estudiante:", nombreActual);
    if (!nuevoNombre || nuevoNombre === nombreActual) return;

    try {
        const res = await fetch(`/api/estudiantes/editar/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nuevoNombre })
        });
        const result = await res.json();
        if (result.success) {
            cargarEstudiantes();
        }
    } catch (e) { alert("Error al editar"); }
}

// 4. Evento de envío (Multipart/Form-Data)
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    // FormData empaqueta tanto el texto como el ARCHIVO binario
    const datos = new FormData(formulario);

    try {
        const res = await fetch('/api/estudiantes', {
            method: 'POST',
            // OJO: NO poner headers de Content-Type. 
            // El navegador lo pone solo al ver el FormData con archivos.
            body: datos 
        });

        const result = await res.json();
        if (result.success) {
            alert(result.mensaje);
            formulario.reset();
            cargarEstudiantes(); // Refrescar lista
        }
    } catch (error) {
        alert("Error al conectar con el servidor.");
    }
});

// Cargar al iniciar
cargarEstudiantes();
