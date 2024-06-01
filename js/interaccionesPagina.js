// Mostrar/Ocultar información
document.addEventListener('DOMContentLoaded', function() {
    const botonToggleInfo = document.createElement('button');
    botonToggleInfo.textContent = 'Mostrar/Ocultar Información de Contacto';
    document.querySelector('#seccionContacto > .container').insertBefore(botonToggleInfo, document.querySelector('#seccionContacto > .container > section'));

    botonToggleInfo.addEventListener('click', function() {
        const seccionInfoContacto = document.querySelector('#seccionContacto > .container > section:nth-child(1)');
        if (seccionInfoContacto.style.display === 'none') {
            seccionInfoContacto.style.display = 'block';
        } else {
            seccionInfoContacto.style.display = 'none';
        }
    });
});

// Notificaciones emergentes
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente');
    this.reset();
});

// Encuesta/Votación interactiva
document.getElementById('formularioEncuesta').addEventListener('submit', function(event) {
    event.preventDefault();
    const valorSeleccionado = document.querySelector('input[name="valoracion"]:checked').value;
    const contenedorResultados = document.getElementById('resultadosEncuesta');
    contenedorResultados.textContent = `Gracias por tu valoración: ${valorSeleccionado}`;
    this.reset();
});

// Cambios de estilo
document.getElementById('cambiarTemaBtn').addEventListener('click', function() {
    document.body.classList.toggle('alternate-style');
});

//Script Cambiar Color

// Variables para los estilos inicial y alternativo del body
const initialStyles = { backgroundColor: 'rgb(30, 30, 30)', color: 'white' };
const alternateStyles = { backgroundColor: 'white', color: 'black' };
