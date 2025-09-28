// Carrossel: exibe uma imagem por vez
document.addEventListener('DOMContentLoaded', function () {
    var carouselTrack = document.getElementById('carousel-track');
    var carouselItems = carouselTrack ? Array.from(carouselTrack.children) : [];
    var leftBtn = document.querySelector('.carousel-btn.left');
    var rightBtn = document.querySelector('.carousel-btn.right');
    var indicators = document.querySelector('.carousel-indicators');
    var currentIndex = 0;

    function updateCarousel() {
        if (!carouselItems.length) return;
        var itemWidth = carouselItems[0].offsetWidth;
        carouselTrack.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
        // Atualiza indicadores
        if (indicators) {
            indicators.innerHTML = '';
            carouselItems.forEach(function (_, i) {
                var dot = document.createElement('div');
                if (i === currentIndex) dot.classList.add('active');
                dot.onclick = function () {
                    currentIndex = i;
                    updateCarousel();
                };
                indicators.appendChild(dot);
            });
        }
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }
    function showNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    if (leftBtn) leftBtn.onclick = showPrev;
    if (rightBtn) rightBtn.onclick = showNext;

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let slides = Array.from(track.querySelectorAll('a'));
    let currentSlide = 0;

    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (idx === currentSlide) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showSlide(idx);
            });
            indicatorsContainer.appendChild(dot);
        });
    }

    function updateIndicators() {
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

    if (btnLeft) btnLeft.onclick = prevSlide;
    if (btnRight) btnRight.onclick = nextSlide;

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