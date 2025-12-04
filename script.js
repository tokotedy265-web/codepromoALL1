// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const id = target.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Countdown timer (e.g., 72 hours from now)
(function initCountdown() {
  const now = new Date();
  const deadline = new Date(now.getTime() + 216 * 60 * 60 * 1000);
  const $days = document.getElementById('days');
  const $hours = document.getElementById('hours');
  const $minutes = document.getElementById('minutes');
  const $seconds = document.getElementById('seconds');

  function update() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      $days.textContent = '00';
      $hours.textContent = '00';
      $minutes.textContent = '00';
      $seconds.textContent = '00';
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    $days.textContent = String(d).padStart(2, '0');
    $hours.textContent = String(h).padStart(2, '0');
    $minutes.textContent = String(m).padStart(2, '0');
    $seconds.textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
})();

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  const a = item.querySelector('.faq-answer');
  q.addEventListener('click', () => {
    const isOpen = a.style.display === 'block';
    a.style.display = isOpen ? 'none' : 'block';
  });
});

// Micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  // Hero buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseover', () => btn.classList.add('pulse'));
    btn.addEventListener('mouseout', () => btn.classList.remove('pulse'));
  });

  // Apps hover glow
  document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseover', () => card.style.boxShadow = '0 16px 42px rgba(255,122,0,.25)');
    card.addEventListener('mouseout', () => card.style.boxShadow = 'none');
  });
});