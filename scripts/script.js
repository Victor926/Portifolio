const carrosselContainer = document.querySelector('.carrossel_container');
const botaoEsq = document.querySelector('.botao_esq');
const botaoDir = document.querySelector('.botao_dir');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;
const visibleCards = 3;
const cardWidth = 250 + 20;

botaoDir.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCarrossel();
    }
});

botaoEsq.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
});

function updateCarrossel() {
    carrosselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
