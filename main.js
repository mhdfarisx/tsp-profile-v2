// ─── HERO SLIDER ───
let currentSlide = 0;
const totalSlides = 7;
let sliderInterval;

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 4500);
}

// Pause on hover over hero
const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  hero.addEventListener('mouseleave', startSlider);
}

startSlider();

// ─── MOBILE NAV ───
function toggleNav() {
  document.getElementById('main-nav').classList.toggle('nav-mobile-open');
}

document.addEventListener('click', (e) => {
  const nav = document.getElementById('main-nav');
  if (nav && nav.classList.contains('nav-mobile-open')) {
    if (!nav.contains(e.target)) nav.classList.remove('nav-mobile-open');
  }
});
