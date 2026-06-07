/* ============================================
   CORE+ — Shared JS
   ============================================ */

// ── Navbar scroll ───────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Sidebar mobile menu ─────────────────────
const sidebar    = document.getElementById('sidebar');
const backdrop   = document.getElementById('sidebarBackdrop');
const menuToggle = document.getElementById('menuToggle'); // dùng id, không dùng class
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  backdrop && backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  backdrop && backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

menuToggle   && menuToggle.addEventListener('click', openSidebar);
sidebarClose && sidebarClose.addEventListener('click', closeSidebar);
backdrop     && backdrop.addEventListener('click', closeSidebar);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

// Đóng khi click link trong sidebar
sidebar && sidebar.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    // Chỉ đóng nếu là anchor link (không phải link ngoài)
    closeSidebar();
  });
});

// ── Scroll reveal ───────────────────────────
const revealEls = document.querySelectorAll('.fade-up, .fade-in, .scale-in');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => observer.observe(el));

// ── Stagger children ────────────────────────
document.querySelectorAll('[data-stagger]').forEach(parent => {
  Array.from(parent.children).forEach((child, i) => {
    child.style.opacity    = '0';
    child.style.transform  = 'translateY(40px)';
    child.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;
    observer.observe(child);
  });
});

// ── Smooth scroll ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── Active nav highlight ────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
if (sections.length && navLinks.length) {
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => secObs.observe(s));
}

// ── Counter animation ───────────────────────
function animateCounter(el, target, duration = 2000) {
  const suffix = el.dataset.suffix || '+';
  let startTime = null;
  const step = ts => {
    if (!startTime) startTime = ts;
    const p    = Math.min((ts - startTime) / duration, 1);
    const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    el.textContent = Math.floor(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

const statNum = document.querySelector('.stat-circle-num');
if (statNum) {
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(statNum, parseInt(statNum.dataset.target));
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterObs.observe(statNum);
}