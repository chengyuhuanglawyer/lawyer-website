// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  }
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle current
    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Scroll fade-in animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll(
  '.service-card, .testimonial-card, .faq-item, .team-card, .case-card, .section-header, .pricing-step, .consultant-card, .stat-item, .about-block, .timeline-item, .quote-card, .news-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// LINE QR Code Modal
const lineBtn = document.getElementById('lineBtn');
const lineModal = document.getElementById('lineModal');
const lineModalClose = document.getElementById('lineModalClose');

lineBtn.addEventListener('click', () => {
  lineModal.classList.add('active');
});

// All .line-trigger links also open the modal
document.querySelectorAll('.line-trigger').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    lineModal.classList.add('active');
  });
});

lineModalClose.addEventListener('click', () => {
  lineModal.classList.remove('active');
});

lineModal.addEventListener('click', (e) => {
  if (e.target === lineModal) {
    lineModal.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lineModal.classList.remove('active');
  }
});

// Floating LINE button opens same modal
const fabLine = document.getElementById('fabLine');
fabLine.addEventListener('click', () => {
  lineModal.classList.add('active');
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Number counter animation for about stats
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * eased).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(update);
  });
}

// Trigger counter when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
  statsObserver.observe(aboutStats);
}

// Contact form - send via Formspree (dual endpoints)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.textContent = '送出中...';
  submitBtn.disabled = true;

  // Create separate FormData for each request
  const formData1 = new FormData(contactForm);
  const formData2 = new FormData(contactForm);

  // Send to both Formspree endpoints simultaneously
  const primary = fetch('https://formspree.io/f/xdawnqpa', {
    method: 'POST',
    body: formData1,
    headers: { 'Accept': 'application/json' }
  });
  const secondary = fetch('https://formspree.io/f/xeerjyvr', {
    method: 'POST',
    body: formData2,
    headers: { 'Accept': 'application/json' }
  });

  Promise.all([primary, secondary]).then(([res1, res2]) => {
    if (res1.ok || res2.ok) {
      contactForm.innerHTML = '<div class="form-success"><p>✅ 感謝您的諮詢！我們將盡快與您聯繫。</p></div>';
    } else {
      submitBtn.textContent = '送出諮詢';
      submitBtn.disabled = false;
      alert('送出失敗，請稍後再試或直接撥打電話聯繫。');
    }
  }).catch(() => {
    submitBtn.textContent = '送出諮詢';
    submitBtn.disabled = false;
    alert('網路錯誤，請稍後再試。');
  });
});

// Smooth scroll for anchor links only (not mailto links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
