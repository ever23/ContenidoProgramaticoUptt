/**
 * Lógica para la vista de listado, búsqueda, edición y borrado (CRUD)
 */

let proyectosGlobales = []; // Guardamos los datos en memoria para el buscador

const listaCuerpo = document.getElementById('listaCuerpo');
const searchInput = document.getElementById('searchInput');
const feedback = document.getElementById('feedback');

// Modal Elements
const modalEditar = document.getElementById('modalEditar');
const formEditar = document.getElementById('formEditar');
const btnCerrarModal = document.getElementById('btnCerrarModal');

// Al cargar la página, traemos los datos
document.addEventListener('DOMContentLoaded', cargarProyectos);

async function cargarProyectos() {
    try {
        const respuesta = await fetch('/api/proyectos');
        proyectosGlobales = await respuesta.json();
        renderizarTabla(proyectosGlobales);
    } catch (error) {
        mostrarFeedback("Error cargando los proyectos desde el servidor.", "error");
    }
}

function renderizarTabla(proyectos) {
    listaCuerpo.innerHTML = ''; // Limpiamos

    if (proyectos.length === 0) {
        listaCuerpo.innerHTML = `<tr><td colspan="5" style="text-align: center;">No se encontraron proyectos.</td></tr>`;
        return;
    }

    proyectos.forEach(p => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${p.titulo}</td>
            <td>${p.autor}</td>
            <td>${p.trayecto}</td>
            <td>${p.fecha}</td>
            <td>
                <button class="btn-small btn-edit" onclick="abrirEdicion('${p.id}')">Editar</button>
                <button class="btn-small btn-delete" onclick="eliminarProyecto('${p.id}')">Eliminar</button>
            </td>
        `;
        listaCuerpo.appendChild(tr);
    });
}

// Búsqueda reactiva (En tiempo real)
searchInput.addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase();
    
    // Filtrado de arreglo en base al Título o Autor
    const resultados = proyectosGlobales.filter(p => 
        p.titulo.toLowerCase().includes(busqueda) || 
        p.autor.toLowerCase().includes(busqueda)
    );
    
    renderizarTabla(resultados);
});

// Eliminar (DELETE)
async function eliminarProyecto(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar este proyecto?')) return;

    try {
        const respuesta = await fetch(`/api/proyectos/${id}`, {
            method: 'DELETE'
        });
        const resultado = await respuesta.json();

        if (resultado.success) {
            mostrarFeedback(resultado.mensaje, "success");
            cargarProyectos(); // Recargamos para actualizar
        } else {
            mostrarFeedback(resultado.mensaje, "error");
        }
    } catch (error) {
        mostrarFeedback("Error de conexión al eliminar.", "error");
    }
}

// Editar (PUT) - Preparar el Modal
window.abrirEdicion = function(id) {
    const proyecto = proyectosGlobales.find(p => p.id === id);
    if (!proyecto) return;

    document.getElementById('editId').value = proyecto.id;
    document.getElementById('editTitulo').value = proyecto.titulo;
    document.getElementById('editAutor').value = proyecto.autor;
    document.getElementById('editTrayecto').value = proyecto.trayecto;

    modalEditar.classList.add('active');
};

btnCerrarModal.addEventListener('click', () => {
    modalEditar.classList.remove('active');
});

// Enviar datos actualizados al Backend
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = document.getElementById('editId').value;
    const datosActualizados = {
        titulo: document.getElementById('editTitulo').value,
        autor: document.getElementById('editAutor').value,
        trayecto: document.getElementById('editTrayecto').value
    };

    try {
        const respuesta = await fetch(`/api/proyectos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados)
        });
        
        const resultado = await respuesta.json();
        
        if (resultado.success) {
            modalEditar.classList.remove('active');
            mostrarFeedback(resultado.mensaje, "success");
            cargarProyectos(); // Recargamos para actualizar
        } else {
            alert(resultado.mensaje);
        }
    } catch (error) {
        alert("Error de conexión al editar.");
    }
});

function mostrarFeedback(mensaje, tipo) {
    feedback.textContent = mensaje;
    feedback.className = `feedback-box ${tipo}`;
    feedback.classList.remove('hidden');
    
    // Auto-ocultar a los 3 segundos
    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 3000);
}
