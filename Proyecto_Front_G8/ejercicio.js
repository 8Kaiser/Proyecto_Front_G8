console.warn("Esta es una advertencia importante.");

// Obtener el elemento de advertencia y el botón
const advertencia = document.getElementById('advertencia');
const botonMostrarAdvertencia = document.getElementById('botonMostrarAdvertencia');

// Agregar un evento de clic al botón
botonMostrarAdvertencia.addEventListener('click', function() {
  advertencia.style.display = 'block';
});

