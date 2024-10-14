// Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carrossel = document.querySelector('.carrossel');

    let currentIndex = 0;
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = 345 + 40; // Largura do card + margem (20px de cada lado)

    // Clonar os primeiros e últimos cards para criar o efeito de loop
    const firstClone = carrossel.firstElementChild.cloneNode(true);
    const lastClone = carrossel.lastElementChild.cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    carrossel.appendChild(firstClone);
    carrossel.insertBefore(lastClone, carrossel.firstElementChild);

    const allCards = document.querySelectorAll('.carrossel .card');
    let size = allCards.length;

    carrossel.style.transform = `translateX(-${cardWidth * (currentIndex + 1)}px)`;

    nextBtn.addEventListener('click', () => {
        if (currentIndex >= totalCards) return;
        currentIndex++;
        carrossel.style.transition = 'transform 0.5s ease-in-out';
        carrossel.style.transform = `translateX(-${cardWidth * (currentIndex + 1)}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex <= -1) return;
        currentIndex--;
        carrossel.style.transition = 'transform 0.5s ease-in-out';
        carrossel.style.transform = `translateX(-${cardWidth * (currentIndex + 1)}px)`;
    });

    carrossel.addEventListener('transitionend', () => {
        const firstClone = document.querySelector('#first-clone');
        const lastClone = document.querySelector('#last-clone');

        if (allCards[currentIndex + 1].id === firstClone.id) {
            carrossel.style.transition = 'none';
            currentIndex = 0;
            carrossel.style.transform = `translateX(-${cardWidth * (currentIndex + 1)}px)`;
        }

        if (allCards[currentIndex + 1].id === lastClone.id) {
            carrossel.style.transition = 'none';
            currentIndex = totalCards - 1;
            carrossel.style.transform = `translateX(-${cardWidth * (currentIndex + 1)}px)`;
        }
    });
});



// Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll('.nav-link');

    // Adiciona um evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Obtém o ID da seção correspondente
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Faz scroll suave até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}