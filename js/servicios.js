//Script Cambiar Color

// Variables para los estilos inicial y alternativo de la sección de servicios
const estilosIniciales = { backgroundColor: 'rgb(30, 30, 30)', color: 'white' };
const estilosAlternativos = { backgroundColor: 'white', color: 'black' };

// Estado para rastrear el estilo actual
let estadoActual = 'inicial';

// Función para cambiar los estilos de la sección de servicios
function cambiarEstilos() {
    const seccionServicios = document.getElementById('servicios');

    // Cambiar los estilos según el estado actual
    if (estadoActual === 'inicial') {
        aplicarEstilos(seccionServicios, estilosAlternativos);
        estadoActual = 'alternativo';
    } else {
        aplicarEstilos(seccionServicios, estilosIniciales);
        estadoActual = 'inicial';
    }
}

// Función para aplicar estilos a un elemento
function aplicarEstilos(elemento, estilos) {
    for (const propiedad in estilos) {
        elemento.style[propiedad] = estilos[propiedad];
    }
}

// Evento click para cambiar los estilos cuando se hace clic en el botón
document.getElementById('styleSwitcher2').addEventListener('click', cambiarEstilos);

// Variables para los estilos inicial y alternativo del título del carrusel
const estilosTituloInicial = { color: 'white' };
const estilosTituloAlternativo = { color: 'black' };

// Estado para rastrear el estilo actual del título del carrusel
let estadoActualTitulo = 'inicial';

// Función para cambiar los estilos del título del carrusel
function cambiarEstilosTitulo() {
    const tituloCarrusel = document.getElementById('carrusel-titulo');

    // Cambiar los estilos según el estado actual
    if (estadoActualTitulo === 'inicial') {
        aplicarEstilos(tituloCarrusel, estilosTituloAlternativo);
        estadoActualTitulo = 'alternativo';
    } else {
        aplicarEstilos(tituloCarrusel, estilosTituloInicial);
        estadoActualTitulo = 'inicial';
    }
}

// Evento click para cambiar los estilos del título del carrusel cuando se hace clic en el botón
document.getElementById('styleSwitcher2').addEventListener('click', cambiarEstilosTitulo);

// Script para el carrusel

// Inicializar el índice de la diapositiva actual
let slideIndex = 1;

// Mostrar la diapositiva actual al cargar la página
showSlides(slideIndex);

// Función para avanzar o retroceder entre las diapositivas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar una diapositiva específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para mostrar las diapositivas
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Verificar los límites del índice de la diapositiva
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Ocultar todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostrar la diapositiva actual
    slides[slideIndex - 1].style.display = "block";
}

