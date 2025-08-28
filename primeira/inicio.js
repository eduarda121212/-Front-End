document.getElementById('servicosBtn').addEventListener('click', () => {
  document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
});
let currentSlide = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 600}px)`;
}
