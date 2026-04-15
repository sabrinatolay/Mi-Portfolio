// =============================================
//   PORTFOLIO — SABRINA TOLAY
//   main.js
// =============================================

// ── MENÚ HAMBURGUESA ─────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('abierto');
  // Cambiar ícono entre ☰ y ✕
  navToggle.textContent = navLinks.classList.contains('abierto') ? '✕' : '☰';
});

// Cerrar el menú al hacer clic en un link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('abierto');
    navToggle.textContent = '☰';
  });
});

// Cerrar el menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('abierto');
    navToggle.textContent = '☰';
  }
});


// ── NAVBAR — cambio al hacer scroll ──────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ── ANIMACIONES AL HACER SCROLL ──────────────
// Detecta cuando los elementos entran en pantalla
// y les agrega la clase 'visible' para animarlos

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // solo animar una vez
    }
  });
}, observerOptions);

// Elementos que se van a animar al aparecer
const elementosAnimados = document.querySelectorAll(
  '.seccion-titulo, .sobre-mi-texto, .categoria, .proyecto-card, .contacto-card, .hero-foto'
);

elementosAnimados.forEach(el => {
  el.classList.add('animar');
  observer.observe(el);
});


// ── SMOOTH SCROLL para navegadores viejos ────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const destino = document.querySelector(anchor.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ── LINK ACTIVO en la navbar al hacer scroll ─
const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  secciones.forEach(seccion => {
    const alto   = seccion.offsetHeight;
    const top    = seccion.offsetTop - 100;
    const id     = seccion.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollY >= top && scrollY < top + alto) {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('activo'));
        link.classList.add('activo');
      }
    }
  });
});
