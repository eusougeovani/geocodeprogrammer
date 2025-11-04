// Carrossel: exibe uma imagem por vez
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    if (!track) return; // nada a fazer se não existir carrossel

    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let slides = Array.from(track.querySelectorAll('a'));
    let currentSlide = 0;

    function createIndicators() {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (idx === currentSlide) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(idx));
            indicatorsContainer.appendChild(dot);
        });
    }

    function updateIndicators() {
        if (!indicatorsContainer) return;
        const dots = indicatorsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });
    }

    function showSlide(idx) {
        if (!track || slides.length === 0) return;
        currentSlide = (idx + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicators();
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    if (btnLeft) btnLeft.addEventListener('click', prevSlide);
    if (btnRight) btnRight.addEventListener('click', nextSlide);

    if (slides.length > 0) {
        createIndicators();
        showSlide(0);
    }

    window.addEventListener('resize', () => {
        slides = Array.from(track.querySelectorAll('a'));
        createIndicators();
        showSlide(currentSlide);
    });
});
