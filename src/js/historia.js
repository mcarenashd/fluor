//---------------BACKGROUND VIDEO STARWARS----------------
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.play().catch(e => {
        console.log('Autoplay bloqueado por el navegador');
    });
});


//-----------------------QUIZ----------------------
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
        // Mensaje de éxito con SweetAlert2
        Swal.fire({
            title: "¡Elemento Domado!",
            text: "¡Has domado al elemento maldito! Tú también has logrado lo imposible: comprender al más rebelde de los elementos. El flúor ya no tiene secretos para ti.",
            icon: "success",
            confirmButtonText: "¡Increíble!",
            confirmButtonColor: "#f9d369",
            background: "#FDF6E2",
            color: "#592851",
            customClass: {
              popup: 'swal-custom-popup',
              confirmButton: 'my-custom-confirm'
            }
        });
        
        // Se activan los fuegos artificiales
        startFireworks();
        
    } else {
          // Reproducir sonido de error
        var wrongSound = new Audio('../src/images/assets-historia/audio/incorrect-buzzer-retro.wav');
        wrongSound.volume = 0.04; 
        wrongSound.play();
        // Mensaje de error con SweetAlert2
        Swal.fire({
            icon: "error",
            title: "El Misterio Persiste...",
            text: "El elemento fantasma sigue siendo un misterio para ti. No es una derrota: es un desafío. Vuelve a repasar su historia… y enfréntate de nuevo al reto.",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#732F6E",
            background: "#FDF6E2",
            color: "#592851",
            customClass: {
              popup: 'swal-custom-popup',
              confirmButton: 'my-custom-confirm'
              }
        });
    }
}

//--------------------FUEGOS ARTIFICIALES--------------------
function startFireworks() {
    // Crear un contenedor temporal para los fuegos artificiales
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'fireworks-container';
    fireworksContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(fireworksContainer);

    // Inicializar fuegos artificiales
    const fireworks = new Fireworks.default(fireworksContainer, {
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: {
            min: 50,
            max: 50
        },
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        },
        sound: {
            enabled: true,
            files: [
            '../src/images/assets-historia/audio/explosion0.mp3',
            '../src/images/assets-historia/audio/explosion1.mp3',
            '../src/images/assets-historia/audio/explosion2.mp3'
                  ],
            volume: {
                min: 2,
                max: 6
                    }
},
    });

    fireworks.start();
    setTimeout(() => {
        fireworks.stop();
        setTimeout(() => {
            document.body.removeChild(fireworksContainer);
        }, 1000); 
    }, 8000);
}