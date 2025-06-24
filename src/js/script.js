// Event listeners para protones
const proton4 = document.getElementById("proton4");
if (proton4) {
  proton4.addEventListener("click", () => {
    alert("El flúor es el elemento químico más electronegativo: atrae más fuerte los electrones que cualquier otro.");
  });
}


// Control de animaciones - HOVER SOBRE TODO EL ÁTOMO
const atomContainer = document.getElementById("atom"); // El contenedor principal del átomo

if (atomContainer) {
  atomContainer.addEventListener("mouseenter", () => {
    // Pausar todas las animaciones de los protones
    const allProtones = document.querySelectorAll('[class*="proton-"]');
    allProtones.forEach(proton => {
      proton.style.animationPlayState = 'paused';
    });
    
    // Opcional: añadir una clase para efectos visuales adicionales
    atomContainer.classList.add('atom-paused');
  });

  atomContainer.addEventListener("mouseleave", () => {
    // Reanudar todas las animaciones
    const allProtones = document.querySelectorAll('[class*="proton-"]');
    allProtones.forEach(proton => {
      proton.style.animationPlayState = 'running';
    });
    
    // Remover la clase
    atomContainer.classList.remove('atom-paused');
  });
}

const proton9 = document.getElementById("proton9");

function mostrarMensaje () {
Swal.fire({
  title: "¿Quién soy?",
  text: 'El flúor es el elemento químico más electronegativo: atrae más fuerte los electrones que cualquier otro.',
  width: 600,
  padding: "1em",
  color: "#86A694",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0, 0, 123, 0.2)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
}

proton9.addEventListener("click", function(){mostrarMensaje()})

