//Script Más Información

// Obtener referencia al botón y al contenedor de información adicional
const botonAlternar = document.getElementById('toggleInfo');
const infoAdicional = document.getElementById('additionalInfo');

// Agregar un evento de clic al botón
botonAlternar.addEventListener('click', function() {
    // Verificar si el contenedor de información adicional está visible o no
    if (infoAdicional.style.display === 'none') {
        // Si está oculto, mostrarlo cambiando su estilo de display a 'block'
        infoAdicional.style.display = 'block';
        // Cambiar el texto del botón
        botonAlternar.textContent = 'Ocultar Información Adicional';
    } else {
        // Si está visible, ocultarlo cambiando su estilo de display a 'none'
        infoAdicional.style.display = 'none';
        // Cambiar el texto del botón
        botonAlternar.textContent = 'Más sobre Peluquería Pepa';
    }
});


//Script Cambiar Color

// Variables para los estilos inicial y alternativo del body
const estilosIniciales = { backgroundColor: 'rgb(30, 30, 30)', color: 'white' };
const estilosAlternativos = { backgroundColor: 'white', color: 'black' };

// Estado para rastrear el estilo actual
let estiloActual = 'inicial';

// Función para cambiar los estilos del body
function cambiarEstilos() {
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
document.getElementById('styleSwitcher1').addEventListener('click', cambiarEstilos);
