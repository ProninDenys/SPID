// Плавный скролл с учётом хедера
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = document.querySelector('header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Анимация для FAQ
document.querySelectorAll('.faq-item summary').forEach((summary) => {
  summary.addEventListener('click', () => {
    summary.parentElement.classList.toggle('open');
  });
});

// Кнопка "Back to top"
document.querySelectorAll('a[href="#top"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});