function sendMessage(event) {
    event.preventDefault();
    document.getElementById('msg').innerText = "Mensagem enviada com sucesso!";
}

document.querySelectorAll('.side-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('side-menu').classList.remove('open');
            document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
        }
    });
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

// Função global para mostrar/ocultar senha
window.mostrarSenhaFunc = function () {
    var senhaInput = document.getElementById("senha");
    if (senhaInput) {
        senhaInput.type = senhaInput.type === "password" ? "text" : "password";
    }
};

const usernameInput = document.getElementById("username");
const rememberMeCheckbox = document.getElementById("rememberMe");

// Ao carregar a página, verifica se há usuário salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("savedUsername");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberMe && savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }
});

// Quando o checkbox ou o campo de usuário mudarem
rememberMeCheckbox.addEventListener("change", () => {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameInput.value);
        localStorage.setItem("rememberMe", true);
    } else {
        localStorage.removeItem("savedUsername");
        localStorage.setItem("rememberMe", false);
    }
});

// Atualiza o nome salvo ao digitar, se "lembrar-me" estiver ativo
usernameInput.addEventListener("input", () => {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameInput.value);
    }
});