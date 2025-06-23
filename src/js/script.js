const circulo = document.getElementById("circulo1");

  circulo.addEventListener("click", () => {
    circulo.setAttribute("fill", "red");
  });
  console.log("¡Estoy viva!")


  const svg = document.getElementById("mySvg");

  svg.addEventListener("mouseenter", () => {
    svg.pauseAnimations();
  });

  svg.addEventListener("mouseleave", () => {
    svg.unpauseAnimations();
  });

  const circle2 = document.getElementById("circulo2");

  circle2.addEventListener("click", () =>{
    alert("El flúor es el elemento químico más electronegativo: atrae más fuerte los electrones que cualquier otro.")
  })


