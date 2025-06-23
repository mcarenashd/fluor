
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.play().catch(e => {
        console.log('Autoplay bloqueado por el navegador');
        // Opcionalmente mostrar un botón de play
    });
});


//QUIZ

function checkAllAnswers() {
  const questions = document.querySelectorAll('.question');
  const totalQuestions = questions.length;
  let correctAnswers = 0;

  questions.forEach((question, index) => {
    const correct = question.dataset.answer;
    const selected = question.querySelector('input[type="radio"]:checked');
    if (selected && selected.value === correct) {
      correctAnswers++;
    }
  });

  const resultDiv = document.getElementById("resultado-final");

  if (correctAnswers === totalQuestions) {
    resultDiv.textContent =
      "¡Has domado al elemento maldito! Tú también has logrado lo imposible: comprender al más rebelde de los elementos. El flúor ya no tiene secretos para ti.";
    resultDiv.style.color = "#006600";
  } else {
    resultDiv.textContent =
      "El elemento fantasma sigue siendo un misterio para ti. No es una derrota: es un desafío. Vuelve a repasar su historia… y enfréntate de nuevo al reto.";
    resultDiv.style.color = "#cc0000";
  }
}

import { Fireworks } from 'fireworks-js'

const container = document.querySelector('.container')
const fireworks = new Fireworks(container, { /* options */ })
fireworks.start()
