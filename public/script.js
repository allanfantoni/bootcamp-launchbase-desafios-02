const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function() {
    const content = card.getAttribute('id');
    location.href = `/courses/${content}`;
  });
}