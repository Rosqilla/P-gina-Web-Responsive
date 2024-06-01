document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    let esValido = true;

    // Validar nombre
    const valorNombre = document.getElementById('campoNombre').value;
    if (valorNombre.trim() === '') {
        esValido = false;
        alert('El nombre es obligatorio');
    }

    // Validar correo electrónico
    const valorCorreo = document.getElementById('campoCorreo').value;
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(valorCorreo)) {
        esValido = false;
        alert('El correo electrónico no es válido');
    }

    // Validar mensaje
    const valorMensaje = document.getElementById('campoMensaje').value;
    if (valorMensaje.trim() === '') {
        esValido = false;
        alert('El mensaje es obligatorio');
    }

    if (!esValido) {
        event.preventDefault();
    }
});
