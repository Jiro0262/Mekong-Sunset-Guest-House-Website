/**
 * config.js — Configuration centralisée du site
 * ✏️  Modifiez UNIQUEMENT ce fichier pour personnaliser le site.
 */
window.SITE_CONFIG = Object.freeze({

  telegram: {
    username: 'Sopheak Ly',               // ← Remplacez par votre username Telegram
    url:      'https://wa.me/855973744261',  // ← Même chose ici
  },

  contact: {
    address:  'Mekong River Road (Preah Soramarith Quay G268+957, Kratié)',
    hours:    '7d/7 — 5AM to 1AM (UTC+7)',
  },

  gallery: [
    {
      src:     'assets/images/the-house.jpg',
      alt:     'The Mekong Sunset Guest House',
      caption: 'The Guest House',
    },
    {
      src:     'assets/images/chambre-principale.jpg',
      alt:     'Room type',
      caption: 'Room with AC',
    },
    {
      src:     'assets/images/room-with-sunset-view.jpg',
      alt:     'Room with sunset view',
      caption: 'Room with sunset view',
    },
    {
      src:     'assets/images/restaurant.jpg',
      alt:     'Restaurant',
      caption: 'Khmer food restaurant',
    },
    {
      src:     'assets/images/the-mekong.jpg',
      alt:     'The Mekong',
      caption: 'The Mekong',
    },
  ],

});
