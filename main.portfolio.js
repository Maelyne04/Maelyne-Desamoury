"use strict";

let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    const totalImages = images.length;

    // Calcul du nouvel index
    currentIndex += direction;

    // Boucle si on dépasse les limites
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Ajuste la position de la piste
    const offset = -currentIndex * 100; // Multiplie par 100% pour déplacer horizontalement
    track.style.transform = `translateX(${offset}%)`;
}
