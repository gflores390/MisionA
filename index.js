const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

yesBtn.addEventListener('click', function () {
    Swal.fire({
        title: '¡Gracias Alan!',
        text: '¡Sabía que ibas a decir que sí uwu!🤭🤭🤭',
        icon: 'success',
        confirmButtonText: '💖'
    });
    toggleFullScreen();
    playMusic();
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 90);
    const randomY = parseInt(Math.random() * 90);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

const textElements = ["<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3","<3"];
const background = document.querySelector('.background');

textElements.forEach(text => {
    const span = document.createElement('span');
    span.className = 'floating';
    span.innerText = text;
    span.style.position = 'absolute';
    span.style.color = 'rgba(255, 255, 255, 0.1)';
    span.style.fontSize = '5em';
    span.style.whiteSpace = 'nowrap';
    span.style.top = `${Math.random() * 100}%`;
    span.style.left = `${Math.random() * 100}%`;
    span.style.transform = `translate(-${Math.random() * 100}%, -${Math.random() * 100}%)`;
    background.appendChild(span);
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

function playMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(err => {
            console.log(`Error playing audio: ${err.message} (${err.name})`);
        });
    } else {
        backgroundMusic.pause();
    }
}
