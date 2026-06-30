/**
 * lightbox.js — Visionneuse photo accessible (ARIA + focus trap + clavier)
 */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img      = document.getElementById('lightbox-img');
  const closeBtn = lightbox?.querySelector('.lightbox-close');
  if (!lightbox || !img || !closeBtn) return;

  let previousFocus = null;

  /** Ouvre la lightbox avec une image donnée */
  window.openLightbox = function openLightbox(src, alt) {
    previousFocus = document.activeElement;
    img.src = src;
    img.alt = alt ?? '';
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    img.src = '';
    document.body.style.overflow = '';
    previousFocus?.focus();
  }

  // Fermeture
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hasAttribute('hidden')) closeLightbox();
  });

  // Piège le focus dans la lightbox (accessibilité WCAG 2.1)
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
  });
})();
