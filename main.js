// ─── HERO SLIDER ───
let currentSlide = 0;
const totalSlides = 6;
let sliderInterval;

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 4000);
}

// Pause on hover
const heroRight = document.querySelector('.hero-right');
if (heroRight) {
  heroRight.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  heroRight.addEventListener('mouseleave', startSlider);
}

startSlider();

// ─── MOBILE NAV ───
function toggleNav() {
  document.getElementById('main-nav').classList.toggle('nav-mobile-open');
}

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('main-nav');
  if (nav && nav.classList.contains('nav-mobile-open')) {
    if (!nav.contains(e.target)) {
      nav.classList.remove('nav-mobile-open');
    }
  }
});
