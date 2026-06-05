const CORE = {
  slides: [
    {
      tag: 'Dinh dưỡng thuần tự nhiên',
      title: 'KHOẺ ĐẸP\nTỪ GỐC',
      desc: 'Hành trình chăm sóc sức khoẻ bắt đầu từ bên trong — với nền tảng dinh dưỡng đúng, bền vững và toàn diện.',
      img: './assets/slider1.png',
      emoji: '🌿'
    },
    {
      tag: 'Chương trình cá nhân hoá',
      title: 'GIẢM CÂN\nBỀN VỮNG',
      desc: 'Không ăn kiêng khắc nghiệt — chỉ cần đúng dinh dưỡng, đúng thời điểm và có người đồng hành.',
      img: './assets/slider2.png',
      emoji: '⚖️'
    },
    {
      tag: '500+ khách hàng hài lòng',
      title: 'TỰ TIN\nMỖI NGÀY',
      desc: 'Vẻ đẹp thực sự đến từ sức khoẻ bên trong — khi cơ thể khoẻ, bạn toả sáng tự nhiên.',
      img: './assets/slider3.png',
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
      <a  class="slide-cta" href="pages/contact.html">TƯ VẤN NGAY +</a>
    </div>
    <div class="slide-img-wrap">
      <div class="slide-placeholder">${s.emoji || ''}</div>
    </div>`;

  if (s.img) {
    const img     = document.createElement('img');
    img.src       = s.img;
    img.alt       = s.tag;
    img.className = 'slide-bg-img';
    const wrap    = el.querySelector('.slide-img-wrap');
    img.onload    = () => {
      wrap.appendChild(img);
      wrap.querySelector('.slide-placeholder').style.display = 'none';
    };
    img.onerror = () => {};
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

// Auto-play
let autoS = setInterval(() => changeSlide(1), 5000);
sInner.addEventListener('mouseenter', () => clearInterval(autoS));
sInner.addEventListener('mouseleave', () => { autoS = setInterval(() => changeSlide(1), 5000); });

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