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