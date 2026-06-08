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
  try { console.debug('openSidebar() called'); } catch (e) {}
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  backdrop && backdrop.classList.remove('open');
  document.body.style.overflow = '';
  try { console.debug('closeSidebar() called'); } catch (e) {}
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

// Fallback: use event delegation so clicks still close sidebar even if elements
// are re-rendered or IDs duplicate. Also helpful while debugging.
document.addEventListener('click', (e) => {
  if (e.target.closest && e.target.closest('.sidebar-close')) {
    closeSidebar();
  }
  if (e.target.closest && e.target.closest('.sidebar-backdrop')) {
    closeSidebar();
  }
});

// Also handle touchstart for mobile taps
document.addEventListener('touchstart', (e) => {
  if (e.target.closest && e.target.closest('.sidebar-close')) {
    closeSidebar();
  }
  if (e.target.closest && e.target.closest('.sidebar-backdrop')) {
    closeSidebar();
  }
}, { passive: true });

// Debug info to help track down attach failures in devtools
try {
  console.debug('SIDEBAR:', { sidebar: !!sidebar, backdrop: !!backdrop, menuToggle: !!menuToggle, sidebarClose: !!sidebarClose });
} catch (err) {}

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

// ── FAB (Zalo + Phone) behavior — appended at end
(function(){
  try {
    const fab = document.createElement('div');
    fab.id = 'fab'; fab.className = 'fab';

    const zalo = document.createElement('a');
    zalo.href = 'https://zalo.me/0983068530';
    zalo.target = '_blank'; zalo.rel = 'noopener';
    zalo.className = 'fab-btn fab-sub fab-zalo';
    zalo.id = 'fabZalo';
    zalo.innerHTML = '<img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" width="24" height="24" alt="Zalo">';

    const phone = document.createElement('a');
    phone.href = 'tel:0983068530';
    phone.className = 'fab-btn fab-sub fab-phone';
    phone.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.37 2.39.73 3.52a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l1.56-1.31a2 2 0 0 1 2.11-.45c1.13.36 2.31.61 3.52.73A2 2 0 0 1 22 16.92z" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const main = document.createElement('button');
    main.type = 'button'; main.id = 'fabMain'; main.className = 'fab-btn fab-main';
    main.setAttribute('aria-label','Liên hệ nhanh');
    // closed icon (three dots style provided earlier)
    const closedSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/></svg>';
    // open icon (X)
    const openSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    main.innerHTML = closedSvg;

    fab.appendChild(zalo);
    fab.appendChild(phone);
    fab.appendChild(main);
    document.body.appendChild(fab);

    function toggleFab(e){
      e && e.stopPropagation();
      const open = fab.classList.toggle('open');
      // swap icon
      try { main.innerHTML = open ? openSvg : closedSvg; } catch (err) {}
      main.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    main.addEventListener('click', toggleFab);

    document.addEventListener('click', (e)=>{
      if (!fab.contains(e.target) && fab.classList.contains('open')) fab.classList.remove('open');
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') fab.classList.remove('open'); });
  } catch (err) { console.error('FAB init error', err); }
})();