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
