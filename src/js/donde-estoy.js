// File: ../src/js/script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el texto del botón
  const btnText = document.querySelector('.btn-text');
  let clicked = false; // bandera para evitar múltiples clics

  btnText.addEventListener('click', () => {
    if (clicked) return;      // si ya se hizo clic, no hacer nada más
    clicked = true;

    // Opcional: deshabilitar visualmente el botón
    btnText.style.opacity = '0.6';
    btnText.style.pointerEvents = 'none';

    // Crear contenedor para el vídeo y el texto de curiosidad
    const container = document.createElement('div');
    container.classList.add('curiosity-container');
    container.style.marginTop = '20px';
    container.style.textAlign = 'center';

    // Crear iframe con el vídeo (cambia la URL por el vídeo que elijas)
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/3ZKOV1V2h1E';
    iframe.title = 'Vídeo curiosidad sobre el flúor';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);

    // Crear párrafo con la curiosidad
    const texto = document.createElement('p');
    texto.textContent = '🔍 Curiosidad: El flúor fue aislado por primera vez en 1886 por el químico francés Henri Moissan, ¡quien perforó sus propios guantes con sus ácidos para estudiarlo!';
    texto.style.marginTop = '12px';
    texto.style.color = ' #592851';
    texto.style.textShadow = '0 1px 2px rgb(0, 0, 0)';
    texto.style.maxWidth = '600px';
    texto.style.marginLeft = 'auto';
    texto.style.marginRight = 'auto';
    container.appendChild(texto);

    // Insertar el contenedor justo debajo del .btn-container
    const btnContainer = document.querySelector('.btn-container');
    btnContainer.parentNode.insertBefore(container, btnContainer.nextSibling);
  });
});


