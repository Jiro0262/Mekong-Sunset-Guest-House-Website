/**
 * gallery.js — Génère la galerie photo depuis SITE_CONFIG.gallery
 * Séparation des données (config.js) et du rendu (ici).
 */
(function renderGallery() {
  const container = document.getElementById('gallery');
  if (!container || !window.SITE_CONFIG?.gallery?.length) return;

  const fragment = document.createDocumentFragment();

  SITE_CONFIG.gallery.forEach(({ src, alt, caption }) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Voir en grand : ${caption}`);

    const img = document.createElement('img');
    img.src      = src;
    img.alt      = alt;
    img.loading  = 'lazy';
    img.decoding = 'async';
    img.width    = 800;
    img.height   = 600;

    const cap = document.createElement('div');
    cap.className   = 'gallery-caption';
    cap.textContent = caption;
    cap.setAttribute('aria-hidden', 'true');

    item.appendChild(img);
    item.appendChild(cap);
    fragment.appendChild(item);

    // Ouvre la lightbox (clic ou clavier)
    const openImg = () => window.openLightbox?.(src, alt);
    item.addEventListener('click', openImg);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openImg(); }
    });
  });

  container.appendChild(fragment);
})();
