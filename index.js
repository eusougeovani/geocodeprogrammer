// Atualiza a hora e a data
function atualizarHoraData() {
    const dataHora = new Date();
    const hora = adicionarZero(dataHora.getHours());
    const minutos = adicionarZero(dataHora.getMinutes());
    const segundos = adicionarZero(dataHora.getSeconds());
    const dia = adicionarZero(dataHora.getDate());
    const mes = adicionarZero(dataHora.getMonth() + 1);
    const ano = dataHora.getFullYear();

    const dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = dataHoraFormatada;
}

function adicionarZero(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

atualizarHoraData();
setInterval(atualizarHoraData, 1000);

function sendMessage(event) {
    event.preventDefault();
    document.getElementById('msg').innerText = "Mensagem enviada com sucesso!";
    // Opcional: limpar campos
    // event.target.reset();
}

// Animação suave ao clicar nos links do menu lateral
document.querySelectorAll('.side-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Fecha o menu lateral após o clique (opcional)
            document.getElementById('side-menu').classList.remove('open');
            document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Carrossel de imagens
    const track = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let slides = Array.from(document.querySelectorAll('.carousel-track a'));
    let currentSlide = 0;
    let carouselInterval;

    // Cria os indicadores (bolinhas)
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (idx === currentSlide) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showSlide(idx);
                restartCarousel();
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

    function startCarousel() {
        stopCarousel();
        carouselInterval = setInterval(nextSlide, 5000);
    }
    function stopCarousel() {
        if (carouselInterval) clearInterval(carouselInterval);
    }
    function restartCarousel() {
        stopCarousel();
        startCarousel();
    }

    // Eventos dos botões
    if (btnLeft) btnLeft.onclick = () => { prevSlide(); restartCarousel(); };
    if (btnRight) btnRight.onclick = () => { nextSlide(); restartCarousel(); };

    // Pausa ao passar mouse
    if (track) {
        track.addEventListener('mouseenter', stopCarousel);
        track.addEventListener('mouseleave', startCarousel);
    }

    // Inicialização
    if (slides.length > 0) {
        createIndicators();
        showSlide(0);
        startCarousel();
    }

    // Atualiza slides caso o DOM mude (opcional)
    window.addEventListener('resize', () => {
        slides = Array.from(document.querySelectorAll('.carousel-track a'));
        createIndicators();
        showSlide(currentSlide);
    });
});

// Botão voltar ao topo
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};