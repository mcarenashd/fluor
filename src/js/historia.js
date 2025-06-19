
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.play().catch(e => {
        console.log('Autoplay bloqueado por el navegador');
        // Opcionalmente mostrar un botón de play
    });
});
