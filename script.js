document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in-up');
  elementsToAnimate.forEach(el => observer.observe(el));

  document.querySelectorAll('a[href*="forms.gle"]').forEach(el => {
    el.addEventListener('click', () => {
      gtag('event', 'contact_click', {
        event_category: 'engagement',
        event_label: '問い合わせボタン'
      });
    });
  });
});
