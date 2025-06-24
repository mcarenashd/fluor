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

function mostrarMensaje1 () {
        Swal.fire({
            title: "¿Datos científicos interesantes?",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🔥 Soy el elemento más electronegativo de todos.</li>
                <li>💎 A temperatura ambiente soy un gas tóxico y amarillo.</li>
                <li>⚗️ Puedo reaccionar hasta con gases nobles como el xenón.</li>
                <li>💥 El flúor puro es tan reactivo que casi nada sobrevive a mi contacto.</li>
                <li>🔗 Formo enlaces súper fuertes en la química orgánica.</li>
            </ul>
        `,
            imageUrl: "src/images/img-index/fluor-gif1.gif",
            confirmButtonText: "Home",
            confirmButtonColor: "#f9d369",
            background: "#FDF6E2",
            
            color: "#592851",
            customClass: {
              popup: 'swal-custom-popup',
              confirmButton: 'my-custom-confirm',
              image: 'swal-custom-image',
            },
            backdrop: `
          rgba(0,0,123,0.4)
             url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
         });
}

proton9.addEventListener("click", function(){mostrarMensaje1()})

const proton8 = document.getElementById("proton8");

function mostrarMensaje () {
        Swal.fire({
            title: "Comparaciones y contexto",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🌈 “Soy un halógeno como el cloro y el yodo.</li>
                <li>🔬 Estoy en el grupo 17 de la tabla periódica..</li>
                <li>🔢 Mi número atómico es 9.</li>
                <li>🎯 Con solo 1 electrón más, alcanzo la estabilidad.</li>
            </ul>
        `,
            imageUrl: "src/images/img-index/fluor-gif2.gif",
            confirmButtonText: "Home",
            confirmButtonColor: "#f9d369",
            background: "#FDF6E2",   
            color: "#592851",
            customClass: {
              popup: 'swal-custom-popup',
              confirmButton: 'my-custom-confirm',
              image: 'swal-custom-image' 
            },
            backdrop: `
          rgba(0,0,123,0.4)
             url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
         });
}

proton8.addEventListener("click", function(){mostrarMensaje()})

function mostrarMensaje2 () {
        Swal.fire({
            title: "¿Quién soy?",
            text: 'El flúor puro es un gas amarillo pálido, tóxico y corrosivo. ¡Debe manejarse con mucho cuidado!',
            imageUrl: "src/images/img-index/fluor-gif2.gif",
            confirmButtonText: "Home",
            confirmButtonColor: "#f9d369",
            background: "#FDF6E2",   
            color: "#592851",
            customClass: {
              popup: 'swal-custom-popup',
              confirmButton: 'my-custom-confirm',
              image: 'swal-custom-image' 
            },
            backdrop: `
          rgba(0,0,123,0.4)
             url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
         });
}

proton7.addEventListener("click", function(){mostrarMensaje2()})

        // Swal.fire({
        //     title: "¿Quién soy?",
        //     text: "El flúor es el elemento químico más electronegativo: atrae más fuerte los electrones que cualquier otro.",
        //     icon: "success",
        //     confirmButtonText: "¡Increíble!",
        //     confirmButtonColor: "#f9d369",
        //     background: "#FDF6E2",
        //     color: "#592851",
        //     customClass: {
        //       popup: 'swal-custom-popup',
        //       confirmButton: 'my-custom-confirm'
        //     }
        // });