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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── Stagger children ─────────────────────────
document.querySelectorAll('[data-stagger]').forEach(parent => {
  const children = Array.from(parent.children);
  children.forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(40px)';
    child.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;
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

// ── Counter animation ─────────────────────────
function animateCounter(el, target, duration = 2000) {
  const suffix = el.dataset.suffix || '+';
  let startTime = null;

  const step = timestamp => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo — mượt hơn easeOutQuart
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix; // đảm bảo đúng số cuối
  };

  requestAnimationFrame(step);
}

// Trigger khi badge vào viewport
const statNum = document.querySelector('.stat-circle-num');
if (statNum) {
  const target = parseInt(statNum.dataset.target);
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(statNum, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterObserver.observe(statNum);
}