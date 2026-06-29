// Super landing page interactions

(function () {
  // Guarded GSAP animation
  function initAnimations() {
    if (!window.gsap) return;

    gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1.2, ease: 'power3.out' });
    gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.2 });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 1, delay: 0.4 });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
