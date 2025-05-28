  function mostrarSeccion(id) {
    // Oculta todas las secciones con clase "registro" o "registros"
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
      seccion.classList.remove('visible');
    });

    // Muestra solo la sección seleccionada
    const seccionMostrada = document.getElementById(id);
    if (seccionMostrada) {
      seccionMostrada.classList.add('visible');
    }
  }
