document.querySelectorAll('.carrossel').forEach(carrossel => {
  const cards = carrossel.querySelectorAll('.carrossel-card');
  let current = 0;

  function showCard(idx) {
    cards.forEach((card, i) => {
      card.style.display = i === idx ? 'flex' : 'none';
    });
  }

  showCard(current);

  cards.forEach((card, i) => {
    card.querySelector('.prev').addEventListener('click', (e) => {
      e.stopPropagation();
      current = (current - 1 + cards.length) % cards.length;
      showCard(current);
    });
    card.querySelector('.next').addEventListener('click', (e) => {
      e.stopPropagation();
      current = (current + 1) % cards.length;
      showCard(current);
    });
  });
});
