const CORE = {
  slides: [
    {
      tag: 'Dược sĩ · Chuyên gia sức khoẻ & vóc dáng',
      title: 'VŨ QUỲNH\nTRANG',
      desc: 'Dược sĩ Đại học Dược Hà Nội — 18 năm kinh nghiệm. Giúp bạn thay đổi từ tư duy, xây dựng thói quen đúng, cải thiện vóc dáng và kiến tạo sức khỏe bền vững từ gốc.',
      img: './assets/avatar-hero.webp',
      emoji: '🌿'
    },
    {
      tag: 'Diễn giả · Chia sẻ kiến thức sức khoẻ',
      title: 'TRUYỀN\nCẢM HỨNG',
      desc: 'Truyền cảm hứng và dẫn dắt mỗi người biến kiến thức thành hành động — từ thay đổi tư duy đến xây dựng một lối sống khỏe mạnh, chủ động và bền vững.',
      img: './assets/slider2-new.webp',
      emoji: '🎤'
    },
    {
      tag: 'Phương pháp khoa học · Không áp lực',
      title: 'KHOẺ ĐẸP\nTỪ GỐC',
      desc: 'Một lộ trình thay đổi toàn diện: tư duy đúng, thói quen đúng, vóc dáng cân đối và sức khỏe bền vững.',
      img: './assets/slider1.webp',
      emoji: '✨'
    }
  ]
};

// ══════════════════════════════════════════════
//  SLIDER — build slides
// ══════════════════════════════════════════════
let curSlide    = 0;
let isAnimating = false;
const sInner    = document.getElementById('sliderInner');
const sDots     = document.getElementById('sliderDots');
const homeReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

CORE.slides.forEach((s, i) => {
  // Tách title: dòng 1 trắng, dòng 2 đỏ
  const parts     = s.title.split('\n');
  const titleHTML = parts.map((t, idx) =>
    idx === 1
      ? `<span class="slide-title-accent">${t}</span>`
      : `<span class="slide-title-main">${t}</span>`
  ).join('');

  const el = document.createElement('div');
  el.className = 'slide' + (i === 0 ? ' is-active' : '');
  el.innerHTML = `
    <div class="slide-content">
      <p  class="slide-tag">${s.tag}</p>
      <h2 class="slide-title">${titleHTML}</h2>
      <p  class="slide-desc">${s.desc}</p>
      <a  class="slide-cta" href="#contact" data-booking>TƯ VẤN NGAY +</a>
    </div>
    <div class="slide-img-wrap">
      <div class="slide-placeholder">${s.emoji || ''}</div>
    </div>`;

  if (s.img) {
    const img     = document.createElement('img');
    img.alt       = s.tag;
    img.className = 'slide-bg-img';
    img.decoding  = 'async';
    img.loading   = i === 0 ? 'eager' : 'lazy';
    img.fetchPriority = i === 0 ? 'high' : 'low';
    const wrap    = el.querySelector('.slide-img-wrap');
    const placeholder = wrap.querySelector('.slide-placeholder');
    img.onload    = () => {
      img.classList.add('is-loaded');
      placeholder.classList.add('is-hidden');
    };
    img.onerror = () => {
      wrap.classList.add('has-image-error');
      img.remove();
    };
    wrap.appendChild(img);
    img.src = s.img;
  }

  sInner.appendChild(el);

  // Dot
  const d = document.createElement('button');
  d.className = 'slider-dot' + (i === 0 ? ' is-active' : '');
  d.setAttribute('aria-label', `Slide ${i + 1}`);
  d.onclick = () => goSlide(i);
  sDots.appendChild(d);
});

// Ẩn tất cả slide trừ slide 0 ngay từ đầu
document.querySelectorAll('.slide:not(.is-active)').forEach(s => {
  s.style.display = 'none';
});


// ══════════════════════════════════════════════
//  SLIDER — animation helpers
// ══════════════════════════════════════════════
function getEls(slide) {
  return {
    tag:   slide.querySelector('.slide-tag'),
    title: slide.querySelector('.slide-title'),
    desc:  slide.querySelector('.slide-desc'),
    cta:   slide.querySelector('.slide-cta'),
    img:   slide.querySelector('.slide-img-wrap'),
  };
}

function animateSlideIn(slide) {
  const { tag, title, desc, cta, img } = getEls(slide);
  // Reset về trạng thái ẩn
  gsap.set([tag, title, desc, cta], { opacity: 0, y: 50 });
  gsap.set(img, { opacity: 0, scale: 1.15, x: 140 });

  return gsap.timeline()
    // Chữ vào trước — stagger từng phần
    .to(tag,   { opacity: 1, y: 0, duration: 0.5,  ease: 'power3.out' }, 0.05)
    .to(title, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.2)
    .to(desc,  { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 0.38)
    .to(cta,   { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 0.52)
    // Ảnh vào sau — slide từ phải (sau khi chữ xong)
    .to(img,   { opacity: 1, scale: 1, x: 0, duration: 0.95, ease: 'power3.out' }, 0.85);
}

function animateSlideOut(slide) {
  const { tag, title, desc, cta, img } = getEls(slide);

  return gsap.timeline()
    .to([cta, desc, tag], { opacity: 0, y: -24, duration: 0.22, stagger: 0.04, ease: 'power2.in' }, 0)
    .to(title,            { opacity: 0, y: -32, duration: 0.28, ease: 'power2.in' },                0.04)
    .to(img,              { opacity: 0, scale: 1.05, x: -50, duration: 0.38, ease: 'power2.in' },  0);
}


// ══════════════════════════════════════════════
//  SLIDER — navigate
// ══════════════════════════════════════════════
function goSlide(n) {
  if (isAnimating) return;
  const slides = sInner.querySelectorAll('.slide');
  const dots   = sDots.querySelectorAll('.slider-dot');
  const next   = ((n % CORE.slides.length) + CORE.slides.length) % CORE.slides.length;
  if (next === curSlide) return;

  isAnimating = true;
  const prevSlide = slides[curSlide];
  const nextSlide = slides[next];
  curSlide = next;

  dots.forEach((d, i) => d.classList.toggle('is-active', i === curSlide));

  if (homeReduceMotion || typeof gsap === 'undefined') {
    prevSlide.style.display = 'none';
    prevSlide.classList.remove('is-active');
    nextSlide.style.display = 'flex';
    nextSlide.classList.add('is-active');
    isAnimating = false;
    return;
  }

  // Hiện slide mới, đặt z-index
  gsap.set(nextSlide, { display: 'flex', zIndex: 2 });
  gsap.set(prevSlide, { zIndex: 1 });

  gsap.timeline({
    onComplete: () => {
      prevSlide.classList.remove('is-active');
      gsap.set(prevSlide, { display: 'none', zIndex: 1 });
      nextSlide.classList.add('is-active');
      isAnimating = false;
    }
  })
  .add(animateSlideOut(prevSlide), 0)
  .add(animateSlideIn(nextSlide),  0);
}

function changeSlide(d) { goSlide(curSlide + d); }

// Auto-play is disabled when the visitor requests reduced motion.
let autoS;
function startAutoPlay() {
  if (!homeReduceMotion && !autoS) autoS = setInterval(() => changeSlide(1), 5000);
}
function stopAutoPlay() {
  clearInterval(autoS);
  autoS = null;
}
if (!homeReduceMotion) startAutoPlay();
sInner.addEventListener('mouseenter', stopAutoPlay);
sInner.addEventListener('mouseleave', startAutoPlay);
sInner.addEventListener('focusin', stopAutoPlay);
sInner.addEventListener('focusout', e => {
  if (!sInner.contains(e.relatedTarget)) startAutoPlay();
});

// Touch swipe
let touchX = 0;
document.getElementById('sliderOuter').addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;
}, { passive: true });
document.getElementById('sliderOuter').addEventListener('touchend', e => {
  if (Math.abs(touchX - e.changedTouches[0].clientX) > 40)
    changeSlide(touchX > e.changedTouches[0].clientX ? 1 : -1);
});


document.addEventListener('DOMContentLoaded', () => {
  // Wait for GSAP to load
  if (homeReduceMotion || typeof gsap === 'undefined') return;

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

// ── Contact Form ──────────────────────────
lucide.createIcons();
