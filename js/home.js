/* ============================================
   CORE+ — Home GSAP Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Wait for GSAP to load
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // ── Hero entrance ─────────────────────────
  const heroTl = gsap.timeline({ delay: 0.2 });

  heroTl
    .from('.hero-badge', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
    })
    .from('#heroLine1', {
      opacity: 0, y: 60, duration: 0.9, ease: 'power3.out'
    }, '-=0.2')
    .from('#heroLine2', {
      opacity: 0, y: 60, duration: 0.9, ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-desc', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-actions', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
    }, '-=0.3')
    .from('.hero-stats .stat', {
      opacity: 0, y: 20, duration: 0.5, stagger: 0.12, ease: 'power2.out'
    }, '-=0.2')
    .from('.hero-visual', {
      opacity: 0, x: 40, duration: 1, ease: 'power2.out'
    }, '-=1')
    .from('.hero-card-float', {
      opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.3, ease: 'back.out(1.5)'
    }, '-=0.5');

  // ── Hero background parallax ──────────────
  gsap.to('.hero-orb-1', {
    y: -80,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    }
  });
  gsap.to('.hero-orb-2', {
    y: -50,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2
    }
  });

  // ── Trust bar slide in ────────────────────
  gsap.from('.trust-item', {
    opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.trust-bar',
      start: 'top 90%'
    }
  });

  // ── About section ─────────────────────────
  gsap.from('.about-img-main', {
    opacity: 0, x: -60, duration: 1, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%'
    }
  });
  gsap.from('.about-badge-stat', {
    opacity: 0, scale: 0.7, duration: 0.8, delay: 0.4, ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%'
    }
  });

  // ── Products stagger ──────────────────────
  gsap.from('.product-card', {
    opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.products-grid',
      start: 'top 80%'
    }
  });

  // ── Story cards ───────────────────────────
  gsap.from('.story-card', {
    opacity: 0, y: 40, stagger: 0.15, duration: 0.7, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stories-grid',
      start: 'top 80%'
    }
  });

  // ── CTA banner ────────────────────────────
  gsap.from('.cta-content > *', {
    opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.cta-banner',
      start: 'top 75%'
    }
  });

  // ── Number counter animation ──────────────
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const text = counter.textContent;
    const num = parseInt(text);
    if (isNaN(num)) return;
    const suffix = text.replace(/[0-9]/g, '');

    gsap.fromTo(counter, { innerText: 0 }, {
      innerText: num,
      duration: 1.5,
      ease: 'power2.out',
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%'
      },
      onUpdate() {
        counter.textContent = Math.round(this.targets()[0].innerText) + suffix;
      }
    });
  });
});