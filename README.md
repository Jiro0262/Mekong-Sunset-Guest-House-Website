# 🪷 Mekong Sunset Guest House — Site Maison d'Hôtes Cambodge

Site statique HTML/CSS/JS — aucune dépendance, aucun build requis.

## Personnalisation rapide

**1. Modifier vos infos de contact**
→ Éditez `public/assets/js/config.js`

**2. Remplacer les photos**
→ Déposez vos images dans `public/assets/images/`
→ Mettez à jour les noms dans `config.js`

**3. Votre domaine**
→ Remplacez `lotushouse-cambodia.com` dans `public/sitemap.xml` et `.htaccess`

## Déploiement

Uploadez le contenu de `public/` à la racine de votre hébergeur via FTP/SFTP.
Le fichier `.htaccess` est pré-configuré pour Apache (OVH, Infomaniak, etc.).

## Sécurité

- CSP défini dans `.htaccess` et dans la balise `<meta>` de `index.html`
- Aucune donnée personnelle collectée, aucun cookie
- Toutes les redirections vers Telegram utilisent `rel="noopener noreferrer"`

## Structure
```
public/
├── index.html              ← Page principale
├── .htaccess               ← Sécurité & cache (Apache)
├── robots.txt / sitemap.xml
├── pages/404.html
└── assets/
    ├── css/                ← Styles modulaires
    ├── js/                 ← Scripts modulaires
    └── images/             ← Vos photos ici
```
