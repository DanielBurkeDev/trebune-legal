// Scroll reveal for the landing page. Content stays visible if this never runs.
(() => {
  if (!('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

  // Each group's children come in one after another.
  document.querySelectorAll('.section-head, .feature, .also, .community .wrap, .cta .wrap').forEach((group) => {
    [...group.children].forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(i, 6) * 0.08}s`);
      io.observe(el);
    });
  });
})();
