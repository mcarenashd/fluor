const footer = document.getElementById('common-footer');
  

if (footer){
  footer.innerHTML =
  `<p id="text-footer"> © 2025 · Proyecto realizado por Gema, Mariana, Olga, Priscelis y Camila para el Bootcamp Fullstack (Femcoders – Factoría F5). Todos los contenidos tienen fines educativos y de divulgación.</p>`;
}

// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const navLinks = document.getElementById('nav-links');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         navLinks.classList.toggle('active');
//     });
// });

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

