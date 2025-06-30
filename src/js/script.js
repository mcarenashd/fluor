// Event listeners para protones
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
            title: "Datos científicos interesantes",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🔥 Soy el elemento más electronegativo de todos.</li>
                <li>💎 A temperatura ambiente soy un gas tóxico y amarillo.</li>
                <li>⚗️ Puedo reaccionar hasta con gases nobles como el xenón.</li>
                <li>💥 El flúor puro es tan reactivo que casi nada sobrevive a mi contacto.</li>
                <li>🔗 Formo enlaces súper fuertes en la química orgánica.</li>
            </ul>
        `,
            imageUrl: "src/images/img-index/fluor-gif5.gif",
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
            left top
            no-repeat
            `
         });
}

proton9.addEventListener("click", function(){mostrarMensaje1()})

const proton8 = document.getElementById("proton8");

function mostrarMensaje () {
        Swal.fire({
            title: "Propiedades del flúor",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🌈 Mi número atómico es 9.</li>
                <li>🔬 Soy el elemento más electronegativo de todos.</li>
                <li>🔢 Soy un gas amarillo, tóxico y muy reactivo..</li>
                <li>🎯 Puedo combinarme con casi todo, incluso gases nobles.</li>
            </ul>
        `,
            imageUrl: "src/images/img-index/fluor-gif3.gif",
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

const proton7 = document.getElementById("proton7");

function mostrarMensaje2 () {
        Swal.fire({
            title: "Curiosidades",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🌈 Demasiado de mí mancha los dientes: fluorosis.</li>
                <li>🔬 Formo enlaces tan fuertes que casi son indestructibles.</li>
                <li>🔢 Estoy en gafas especiales, cohetes y satélites.</li>
                <li>🎯 En química orgánica, ¡soy clave para moléculas súper resistentes!</li>`,
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
            left top
            no-repeat
            `
         });
}

proton7.addEventListener("click", function(){mostrarMensaje2()})

const proton6 = document.getElementById("proton6");
function mostrarMensaje3 () {
        Swal.fire({
            title: "Curiosidades",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li>🌈 Demasiado de mí mancha los dientes: fluorosis.</li>
                <li>🔬 Formo enlaces tan fuertes que casi son indestructibles.</li>
                <li>🔢 Estoy en gafas especiales, cohetes y satélites.</li>
                <li>🎯 En química orgánica, ¡soy clave para moléculas súper resistentes!</li>`,
            imageUrl: "src/images/img-index/fluor-gif6.gif",
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
            left top
            no-repeat
            `
         });
}

proton6.addEventListener("click", function(){mostrarMensaje3()})

const proton4 = document.getElementById("proton4");

function mostrarMensaje4 () {
        Swal.fire({
            title: "Curiosidades",
            html: `<ul style="text-align: left; margin: 0 auto; display: inline-block;">
                <li> ⚗️ Fui descubierto por Henri Moissan en 1886.</li>
                <li> 🧫 Muchos científicos murieron intentando aislarme.</li>
                <li> 📜 Mi nombre viene del latín fluere, que significa fluir.</li>
                <li> 🧪 Durante siglos se me conocía solo por mis compuestos.`,
            imageUrl: "src/images/img-index/fluor-gif4.gif",
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
            left top
            no-repeat
            `
         });
}

proton4.addEventListener("click", function(){mostrarMensaje4()})

const toggleNeonBtn = document.getElementById("toggleNeon");

toggleNeonBtn.addEventListener("click", () => {
    document.body.classList.toggle("neon-mode");
});