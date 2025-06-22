
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.play().catch(e => {
        console.log('Autoplay bloqueado por el navegador');
        // Opcionalmente mostrar un botón de play
    });
});


//QUIZ

function checkAnswer(button) {
  const questionDiv = button.parentElement;
  const selected = questionDiv.querySelector('input[type="radio"]:checked');
  const resultDiv = questionDiv.querySelector('.result');
  const correct = questionDiv.dataset.answer;

  if (!selected) {
    resultDiv.textContent = "Selecciona una respuesta.";
    resultDiv.style.color = "#cc0000";
    return;
  }

  if (selected.value === correct) {
    resultDiv.textContent = "¡Correcto!";
    resultDiv.style.color = "#006600";
  } else {
    resultDiv.textContent = "Incorrecto 😬";
    resultDiv.style.color = "#cc0000";
  }
}
