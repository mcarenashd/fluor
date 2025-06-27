const boton = document.getElementById("boton");

function mostrarMensaje() {
  Swal.fire({
    title: "La fluorita brilla en la oscuridad 💎✨",
    html: `El mineral fluorita, del cual se obtiene el flúor, puede brillar bajo luz ultravioleta. De hecho, ¡la palabra “fluorescencia” viene de “fluorita”!
            
        `,
    imageUrl: "../src/images/img-donde-estoy/GIFFLUOR.gif",
    confirmButtonText: "Home",
    confirmButtonColor: "#f9d369",
    background: "#000",
    color: "#black",
    
    customClass: {
      popup: 'swal-custom-popup',
      confirmButton: 'my-custom-confirm',
      image: 'swal-custom-image'
    },
    backdrop: `
          rgba(0, 0, 0, 0.85)
             url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
  });
}

boton.addEventListener("click", function () { mostrarMensaje() })