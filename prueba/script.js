// --- Funcionalidad del Botón de Entrada ---
document.getElementById('open-btn').addEventListener('click', function() {
    // 1. Lanzar Confeti (con colores rosados y dorados ahora)
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#ffb7c5', '#ffd700', '#ffffff']
    });

    // 2. Transición a la página principal
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-page');

    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.classList.add('hidden');
            main.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    }, 500);
});


// --- Funcionalidad de Flores Cayendo Constantemente ---

const flowerContainer = document.getElementById('flower-container');
const flowerEmojis = ['🌸', '🌺', '🌹', '🌷','💐']; // Tipos de flores

function crearFlor() {
    const flower = document.createElement('div');
    // Elegir un emoji al azar
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.classList.add('falling-flower');

    // Aleatorizar la posición inicial (izquierda), el tamaño y la duración de la caída
    const startLeft = Math.random() * 100; // Posición horizontal entre 0% y 100%
    const fontSize = Math.random() * 20 + 15; // Tamaño entre 15px y 35px
    const duration = Math.random() * 5 + 5; // Duración entre 5s y 10s

    flower.style.left = startLeft + 'vw';
    flower.style.fontSize = fontSize + 'px';
    flower.style.animationDuration = duration + 's';
    // Un pequeño retraso aleatorio para que no empiecen todas a la vez si recargas
    flower.style.animationDelay = '-' + Math.random() * 5 + 's'; 

    flowerContainer.appendChild(flower);

    // Eliminar la flor del DOM cuando termine la animación para no saturar el navegador
    setTimeout(() => {
        flower.remove();
    }, (duration + 1) * 1000);
}

// Iniciar la creación de flores
// Crea una flor cada 300 milisegundos. Puedes aumentar este número para menos flores.
setInterval(crearFlor, 300); 

// Crear algunas flores iniciales para que ya haya algunas al cargar
for(let i = 0; i < 15; i++) {
    crearFlor();
}