/**
 * contact.js — Génère les cartes de contact depuis SITE_CONFIG
 * Aucun lien en dur dans le HTML : tout vient de config.js.
 */
(function renderContactMethods() {
  const container = document.getElementById('contact-methods');
  if (!container || !window.SITE_CONFIG) return;

  const { telegram, contact } = SITE_CONFIG;

  const methods = [
    {
      isLink:    true,
      href:      telegram.url,
      target:    '_blank',
      rel:       'noopener noreferrer',
      iconClass: 'icon-telegram',
      icon:      '📱',
      label:     'Telegram (principal)',
      value:     `@${telegram.username}`,
    },
    {
      isLink:    false,
      iconClass: 'icon-location',
      icon:      '📍',
      label:     'Adresse',
      value:     contact.address,
    },
    {
      isLink:    false,
      iconClass: 'icon-hours',
      icon:      '🕐',
      label:     'Disponibilité',
      value:     contact.hours,
    },
  ];

  const fragment = document.createDocumentFragment();

  methods.forEach(({ isLink, href, target, rel, iconClass, icon, label, value }) => {
    const el = document.createElement(isLink ? 'a' : 'div');
    el.className = 'contact-card';
    if (isLink) {
      el.href   = href;
      el.target = target;
      el.rel    = rel;
    }

    // Utilise textContent pour éviter toute injection XSS
    const iconEl  = document.createElement('div');
    iconEl.className = `contact-card-icon ${iconClass}`;
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.textContent = icon;

    const info      = document.createElement('div');
    const labelEl   = document.createElement('div');
    labelEl.className   = 'contact-card-label';
    labelEl.textContent = label;
    const valueEl   = document.createElement('div');
    valueEl.className   = 'contact-card-value';
    valueEl.textContent = value;

    info.appendChild(labelEl);
    info.appendChild(valueEl);
    el.appendChild(iconEl);
    el.appendChild(info);
    fragment.appendChild(el);
  });

  container.appendChild(fragment);

  // Met à jour aussi le lien Telegram dans le bloc highlight
  const telegramLink = document.querySelector('.telegram-btn');
  if (telegramLink) {
    telegramLink.href = telegram.url;
  }
})();
