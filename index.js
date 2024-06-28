const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

yesBtn.addEventListener('click', function () {
    Swal.fire({
        title: '¡Gracias Alan 🤭!',
        text: '¡Sabía que ibas a decir que sí Alan uwu 🤭🤭🤭!',
        icon: 'success',
        confirmButtonText: '💖',
        customClass: {
            confirmButton: 'swal2-confirm-btn',
            popup: 'swal2-popup',
            title: 'swal2-title'
        }
    }).then(() => {
        toggleFullScreen();
        playMusic();
    });
});

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    noBtn.style.setProperty('top', randomY + 'vh'); // Utilizamos vh para ocupar toda la altura de la ventana
    noBtn.style.setProperty('left', randomX + 'vw'); // Utilizamos vw para ocupar toda la anchura de la ventana
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

