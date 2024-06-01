# Estructura de Carpetas y Archivos

El proyecto de la página web de Peluquería Pepa sigue una estructura organizada y fácil de entender. A continuación, se presenta la organización de carpetas y archivos:

- **PeluqueriaPepa/**
  - **css/**
    - index.css
  - **imagenes/**
  - index.html
  - servicios.html
  - contacto.html
  - README.md
  - **js/**
    - scripts.js
    - servicios.js
    - contacto.js


- **css/:** Contiene el archivo CSS (index.css) que define los estilos de la página.
- **imagenes/:** Carpeta destinada a almacenar las imágenes utilizadas en la página web.
- **index.html:** Página principal de la web.
- **servicios.html:** Página que detalla los servicios ofrecidos por Peluquería Pepa.
- **contacto.html:** Página que proporciona información de contacto y un formulario para consultas.
- **js/:** Contiene los scripts JavaScript utilizados en la página.

# Tecnologías Utilizadas

La página web de Peluquería Pepa ha sido desarrollada utilizando las siguientes tecnologías:

- **HTML5:** Para la estructura y contenido de las páginas.
- **CSS3:** Para el diseño y estilo de la interfaz.
- **Media Queries:** Para hacer la página web responsive y adaptable a diferentes dispositivos.
- **JavaScript:** Para la interactividad y funcionalidades dinámicas.

# Características Principales

- **Responsive:** La página web está diseñada para ser accesible y funcional en una variedad de dispositivos, desde computadoras de escritorio hasta dispositivos móviles.
- **Secciones Claras y Distintas:** Cada página presenta secciones bien definidas, como "Quienes Somos", "Servicios" y "Contacto".
- **Interactividad:**  La página web incluye un carrusel de fotos, un cambio de estilo, un sistema de valoración para los servicios ofrecidos, un botón que al pulsarlo muestra más información, un formulario que cuando se envia sale una notificación emergente y una encuesta de valoración del servicio.

# Explicación de la Interactividad

En este proyecto se han implementado diversas funcionalidades interactivas para mejorar la experiencia del usuario:

## Carga Dinámica de Contenido

Se ha añadido un botón en la sección "Quiénes Somos" de la página principal (`index.html`) que permite a los usuarios acceder a más información sobre la peluquería Pepa. Al hacer clic en este botón, se muestra contenido adicional para explicar más sobre la historia de la peluquería.

## Carrusel de Fotos 

Se ha integrado un carrusel de fotos al final del apartado de "Servicios" (`servicios.html`). Este carrusel muestra tres ejemplos de cortes de pelo realizados en la peluquería, permitiendo a los usuarios visualizar el trabajo realizado.

## Cambio de Estilo 

Se ha añadido un botón en el encabezado (`header`) que permite cambiar dinámicamente el estilo de la página. Al hacer clic en este botón, se alterna entre un fondo oscuro y claro, junto con un cambio correspondiente en el color del texto para garantizar un adecuado contraste y legibilidad.

## Formulario de Contacto

En la sección de "Contacto" (`contacto.html`), se ha implementado un formulario de contacto que requiere que los usuarios ingresen su nombre y correo electrónico antes de enviar un mensaje a la peluquería. Una vez que se envía el formulario, se muestra una notificación emergente agradeciendo al usuario por su mensaje.

## Encuesta de Valoración

Al final del apartado de "Contacto", se ha incluido una encuesta de valoración sobre los servicios de la peluquería. Los usuarios pueden seleccionar entre tres opciones: "Buena", "Regular" o "Mala". Dependiendo de la opción seleccionada, se muestra un mensaje de agradecimiento o se solicita al usuario que envíe un mensaje adicional con detalles sobre cómo mejorar los servicios ofrecidos, una vez enviado este mensaje sale una notificación emergente agradeciendo al usuario su mensaje.