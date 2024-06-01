//Script Notificación

// Función para mostrar la notificación emergente
function mostrarNotificacion() {
    alert("¡Formulario enviado con éxito!");
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
}

// Asociar evento de clic al botón de enviar formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    mostrarNotificacion(); 
    limpiarCampos(); 
});


//Script Valoración

// Función para procesar el voto del usuario
function votar(opcion) {
    // Verificar si la opción seleccionada es 'malo' o 'regular'
    if (opcion === 'malo' || opcion === 'regular') {
        // Ocultar la encuesta y mostrar la sección de mejora
        document.getElementById('encuesta').style.display = 'none';
        document.getElementById('mejorar').style.display = 'block';
    } else {
        // Mostrar un mensaje de agradecimiento por la valoración
        mostrarMensaje('Gracias por tu valoración.');
    }
}

// Función para enviar un mensaje
function enviarMensaje() {
    mostrarMensaje('Gracias por tu mensaje.');
}

// Función para mostrar un mensaje de alerta
function mostrarMensaje(mensaje) {
    alert(mensaje);
}


//Script Cambiar Color

// Variables para los estilos inicial y alternativo del body
const estilosIniciales = { backgroundColor: 'rgb(30, 30, 30)', color: 'white' };
const estilosAlternativos = { backgroundColor: 'white', color: 'black' };

// Estado para rastrear el estilo actual
let estiloActual = 'inicial';

// Función para cambiar los estilos del body
function alternarEstilos() {
    const cuerpo = document.body;

    // Cambiar los estilos según el estado actual
    if (estiloActual === 'inicial') {
        aplicarEstilos(cuerpo, estilosAlternativos);
        estiloActual = 'alternativo';
    } else {
        aplicarEstilos(cuerpo, estilosIniciales);
        estiloActual = 'inicial';
    }
}

// Función para aplicar estilos a un elemento
function aplicarEstilos(elemento, estilos) {
    for (const propiedad in estilos) {
        elemento.style[propiedad] = estilos[propiedad];
    }
}

// Evento click para cambiar los estilos cuando se hace clic en el botón
document.getElementById('styleSwitcher3').addEventListener('click', alternarEstilos);
