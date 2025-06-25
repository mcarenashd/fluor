const boton = document.getElementById("boton");

function mostrarMensaje() {
  Swal.fire({
    title: "La fluorita brilla en la oscuridad 💎✨",
    html: `El mineral fluorita, del cual se obtiene el flúor, puede brillar bajo luz ultravioleta. De hecho, ¡la palabra “fluorescencia” viene de “fluorita”!
            
        `,
<<<<<<< HEAD
    imageUrl: "../src/images/img-donde-estoy/GIFFLUOR.gif",
    confirmButtonText: "Home",
    confirmButtonColor: "#f9d369",
    background: "#0000",
    color: "#black",
    customClass: {
      popup: 'swal-custom-popup',
      confirmButton: 'my-custom-confirm',
      image: 'swal-custom-image'
    },
    backdrop: `
          rgb(0, 0, 0)
=======
            imageUrl: "../src/images/img-donde-estoy/gif-prueba.gif",
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
>>>>>>> f492766be1d16a4a020b7ef156c3ae25172d1d96
             url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
  });
}

boton.addEventListener("click", function () { mostrarMensaje() })