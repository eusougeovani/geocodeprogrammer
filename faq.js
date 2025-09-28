// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        // Fecha todos
        document.querySelectorAll('.faq-question').forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            b.parentElement.querySelector('.faq-answer').style.maxHeight = null;
            b.parentElement.querySelector('.faq-answer').classList.remove('open');
            b.querySelector('i').classList.remove('fa-chevron-up');
            b.querySelector('i').classList.add('fa-chevron-down');
        });
        // Abre o clicado se estava fechado
        if (!expanded) {
            this.setAttribute('aria-expanded', 'true');
            const answer = this.parentElement.querySelector('.faq-answer');
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + "px";
            this.querySelector('i').classList.remove('fa-chevron-down');
            this.querySelector('i').classList.add('fa-chevron-up');
        }
    });
});