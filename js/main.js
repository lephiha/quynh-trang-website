/* ============================================
   CORE+ — Shared JS (navbar, scroll, reveal)
   ============================================ */

// ── Navbar scroll behavior ──────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile menu ─────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const navMenu    = document.querySelector('.navbar-nav');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    menuToggle.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
    menuToggle.querySelectorAll('span')[1].style.opacity   = isOpen ? '0' : '1';
    menuToggle.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Scroll reveal (IntersectionObserver) ────
const revealEls = document.querySelectorAll('.fade-up, .fade-in, .scale-in');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── Stagger children ─────────────────────────
document.querySelectorAll('[data-stagger]').forEach(parent => {
  const children = parent.children;
  Array.from(children).forEach((child, i) => {
    child.dataset.delay = i * 120;
    child.classList.add('fade-up');
    observer.observe(child);
  });
});

// ── Smooth scroll for anchor links ───────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Active nav link highlight ─────────────────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.navbar-nav a[href^="#"]');
if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));
}