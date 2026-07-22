# Prompt maître réutilisable — Portfolio statique premium bilingue

> **Note d'utilisation :** Pour utiliser ce template, fournis un nouveau cahier des charges avec les informations du nouveau portfolio, puis demande à l'agent de suivre ce prompt en remplaçant les variables de la section 2. Le contenu, les images, les liens et les traductions doivent changer selon le nouveau cahier des charges, tandis que les fondations techniques, le design system et les comportements décrits ici restent la base par défaut.

## 1. Rôle et objectif

Tu es un développeur front-end expert. Génère un portfolio complet en suivant strictement les spécifications ci-dessous, en remplaçant le contenu par les informations fournies dans le cahier des charges joint.

Le résultat doit être un site statique premium, sémantique, accessible, bilingue français/anglais, responsive sur desktop, tablette et mobile, avec thème clair/sombre et interactions en JavaScript natif. Le portfolio doit être directement exploitable, sans étape de build obligatoire.

Ne réutilise jamais les données personnelles, projets, images, liens ou textes de l'ancien portfolio : utilise uniquement les variables et le nouveau cahier des charges fournis.

## 2. Variables à remplir

Remplace les placeholders suivants à chaque nouvelle utilisation :

### Identité et positionnement

- `[NOM_COMPLET]`
- `[NOM_COURT]`
- `[INITIALES]`
- `[TITRE_PROFESSIONNEL]`
- `[SPECIALITE_COURTE]`
- `[ACCROCHE_HERO]`
- `[SOUS_TITRE_HERO]`
- `[BIO_COURTE]`
- `[BIO_LONGUE]`
- `[LOCALISATION]`
- `[DISPONIBILITE]`
- `[STATUT_PROFESSIONNEL]`
- `[URL_CV_FR]`
- `[URL_CV_EN]`

### Contenu des sections

- `[OBJECTIF_CARRIERE]`
- `[PREFERENCES_DE_TRAVAIL]`
- `[LISTE_COMPETENCES_TECHNIQUES]`
- `[LISTE_FRAMEWORKS_ET_BASES]`
- `[LISTE_OUTILS]`
- `[LISTE_SOFT_SKILLS]`
- `[LISTE_COMPETENCES_MANAGEMENT]`
- `[LISTE_EXPERIENCES]`
- `[LISTE_FORMATIONS]`
- `[LISTE_CERTIFICATIONS]`
- `[LISTE_ENGAGEMENTS]`
- `[LISTE_PROJETS]`
- `[LISTE_IMAGES_GALERIE]`
- `[LISTE_RECOMPENSES_OU_REALISATIONS]`
- `[LISTE_LANGUES]`
- `[DESCRIPTION_CONTACT]`

### Liens et contact

- `[EMAIL_CONTACT]`
- `[TELEPHONE_CONTACT]`
- `[URL_LINKEDIN]`
- `[URL_GITHUB]`
- `[URL_FACEBOOK]`
- `[URL_X_OU_TWITTER]`
- `[URL_SITE_OU_DEMO]`
- `[URL_MAP_EMBED]`
- `[EMAILJS_SERVICE_ID]`
- `[EMAILJS_TEMPLATE_ID]`
- `[EMAILJS_PUBLIC_KEY]`

### Images et fichiers

- `[IMAGE_PROFIL]`
- `[IMAGE_A_PROPOS]`
- `[IMAGE_LOGO_PRINCIPAL]`
- `[IMAGES_EXPERIENCES]`
- `[IMAGES_FORMATIONS]`
- `[IMAGES_CERTIFICATIONS]`
- `[IMAGES_PROJETS]`
- `[IMAGES_GALERIE]`
- `[IMAGE_REPLI]`

### Traduction et design

- `[TRADUCTIONS_FR]`
- `[TRADUCTIONS_EN]`
- `[PALETTE_COULEUR_PRINCIPALE]` — valeur par défaut : `#2563eb`
- `[PALETTE_COULEUR_SECONDAIRE]` — valeur par défaut : `#14b8a6`
- `[POLICE_PRINCIPALE]` — valeur par défaut : `Inter`
- `[POIDS_POLICE]` — valeur par défaut : `400, 500, 600, 700, 800`
- `[LANGUE_PAR_DEFAUT]` — valeur par défaut : `en`
- `[COMMANDE_DE_LANCEMENT]` — valeur par défaut : `python -m http.server 8000`

Si une variable n'est pas fournie, utilise une valeur neutre clairement identifiable, jamais une donnée inventée présentée comme réelle.

## 3. Stack technique imposée

Reproduis la stack effectivement auditée :

- HTML5 sémantique natif.
- CSS3 natif avec variables CSS, Grid, Flexbox, media queries, transitions et animations CSS.
- JavaScript natif moderne, sans framework.
- Aucun `package.json` n'est présent dans le projet de référence.
- Aucun script npm, bundler ou étape de compilation n'est présent.
- Aucun framework React, Vue, Angular, Svelte ou autre n'est présent.
- Aucun utilitaire Tailwind, Bootstrap ou jQuery n'est utilisé par la page active.
- Font Awesome `6.4.0` est chargé depuis cdnjs.
- Devicon `latest` est chargé depuis jsDelivr ; cette dépendance n'a pas de numéro figé dans le HTML.
- Google Fonts charge `Inter` avec les poids `400, 500, 600, 700, 800`.
- EmailJS Browser `4` est chargé depuis jsDelivr pour le formulaire de contact.
- IntersectionObserver, `localStorage`, `sessionStorage`, `requestAnimationFrame` et les APIs DOM natives sont utilisés côté JavaScript.

Ne change pas cette stack, sauf demande explicite dans le nouveau cahier des charges.

## 4. Structure de fichiers imposée

Reproduis cette structure fonctionnelle à la racine :

```text
index.html                    # page HTML principale active
index.backup.html             # ancienne version conservée comme sauvegarde, non chargée
information-personnel.md      # ancien cahier des charges/contenu, non chargé par la page active
README.md                     # instructions de lancement et de remplacement des images
prompt-portfolio-rodibrian.md # présent prompt maître réutilisable
assets/
  css/
    style.css                 # design system et responsive layout
  js/
    main.js                   # interactions, traductions et logique du site
  i18n.json                   # ancien catalogue de traductions, non utilisé par la page active
  docs/
    README.md                 # note sur les PDFs de CV/résumé
    CV EMBONY_RODI_BRIAN.pdf  # document français actuellement présent
    Resume EMBONY_RODI_BRIAN.pdf # document anglais actuellement présent
  images/
    about.png                 # visuel À propos
    profile.png               # visuel Hero
    _about.png                # variante/asset présent
    placeholder-about.svg     # ancien placeholder
    placeholder-profile.svg   # ancien placeholder
    placeholder-ijeeryapp-dashboard.svg
    placeholder-subm.svg
    certifications/           # images des cinq certifications
    experiences/              # logos et visuels de la timeline/collage
    formations/               # logos d'établissements
    gallerie/                 # images de la galerie principale
    projects/                 # visuels des projets phares
  img/
    profil.png                # ancien asset
    projets/                  # anciens visuels de projets
```

Les dossiers `.git/` et `.venv/` sont des éléments d'environnement/repository détectés pendant l'audit, pas des fichiers à recréer dans le livrable front-end.

Le fichier `assets/i18n.json` et `information-personnel.md` existent mais ne doivent pas devenir la source de vérité sans demande explicite : la page active utilise le dictionnaire inline de `assets/js/main.js`.

## 5. Design system imposé

### Couleurs

Utilise ces variables CSS par défaut :

```css
:root {
  --bg: #f4f7fb;
  --surface: #ffffff;
  --surface-alt: #eef4ff;
  --border: #d7e1eb;
  --text: #102235;
  --muted: #5e6d7e;
  --accent: #2563eb;
  --accent-2: #14b8a6;
  --shadow: 0 20px 60px rgba(16, 34, 53, 0.12);
  --radius: 24px;
}
```

Le thème sombre doit remplacer les variables avec :

```css
body.dark {
  --bg: #07111f;
  --surface: #0f1b2d;
  --surface-alt: #13253b;
  --border: #213347;
  --text: #f3f7ff;
  --muted: #9daec4;
  --accent: #60a5fa;
  --accent-2: #34d399;
  --shadow: 0 24px 65px rgba(0, 0, 0, 0.35);
}
```

Les couleurs d'accent secondaires utilisées dans les cartes sont notamment `#7c3aed`, `#0f9f86`, `#d97706` et `#c2410c`. Elles servent à différencier les catégories sans transformer l'interface en palette monochrome.

### Typographie et échelle

- Famille principale : `Inter, sans-serif`.
- Poids : `400`, `500`, `600`, `700`, `800`.
- Le titre Hero utilise `clamp(3rem, 6vw, 5.7rem)` avec une ligne compacte.
- Les titres de section utilisent `clamp(1.6rem, 2.4vw, 2.3rem)`.
- Les boutons, badges et labels utilisent une typographie plus compacte, souvent en uppercase avec letter-spacing.
- Ne pas utiliser une taille fluide basée uniquement sur la largeur sans borne `clamp`.

### Grille et espacements

- Conteneur global : `width: min(1120px, calc(100% - 2rem))`.
- Sections : `padding: 5.5rem 0` par défaut.
- Grilles principales en CSS Grid avec `minmax(0, 1fr)` pour éviter les débordements.
- Rayon standard : `24px`, avec variantes de `12px`, `16px`, `18px`, `20px`, `22px`, `28px`, `30px` et `999px` pour les pills.
- Ombres douces basées sur `--shadow` et des variantes colorées avec `color-mix`.
- Les cartes ont une bordure fine `var(--border)`, un fond `var(--surface)` et un accent supérieur ou latéral selon la section.

### Responsive breakpoints

Reproduis les trois niveaux de comportement :

- Desktop : au-delà de `1024px`, grille complète, compétences en composition `7/5` puis cartes `4/12`.
- Tablette : `min-width: 721px` et `max-width: 1024px`, les cartes de compétences passent une par ligne sur toute la largeur pour éviter les colonnes trop étroites ; le carrousel affiche deux cartes.
- Mobile : `max-width: 720px`, toutes les grilles principales passent à une colonne ; chaque carte de compétence doit utiliser `grid-column: 1 / -1` et `width: 100%` ; le carrousel affiche une certification à la fois.
- À `max-width: 920px`, la plupart des grilles passent temporairement en deux colonnes, mais la règle tablette des compétences doit rester prioritaire dans son intervalle.

## 6. Sections du portfolio et ordre imposé

Conserve exactement cet ordre de 11 sections actives :

1. **Hero / profil** : nom, titre, accroche, localisation, disponibilité, actions projets/contact/CV, réseaux, visuel de profil.
2. **À propos** (`#about`) : kicker, titre de proposition de valeur, trois paragraphes, badges de qualités et preuves chiffrées.
3. **Objectif professionnel** (`#career-goal`) : section dédiée à la recherche de nouvelles opportunités, préférences remote/hybride et lien de contact.
4. **Compétences** (`#skills`) : cinq cartes, dans l'ordre langages, frameworks/bases, outils, soft skills, management/entrepreneuriat ; scores et barres de progression uniquement pour les compétences ayant `data-score`.
5. **Expériences** (`#experience`) : timeline verticale avec Baia Creative Solutions, mission internationale et expérience DDS, accompagnée d'un panneau galerie/collage.
6. **Formation** (`#education`) : liste de formations avec logos, dates, détails dépliables et parcours académique/business.
7. **Certifications** (`#certifications`) : cinq cartes dans un carrousel avec image, badge, métadonnées, titre, description et pills.
8. **Bénévolat** (`#volunteer`) : deux cartes pour mission internationale et service communautaire, avec points et badges traduisibles.
9. **Projets phares** (`#projects`) : IjeeryApp, Sub-M et carte de projet à venir ; chaque projet présente un visuel, une stack, une description et éventuellement un lien détail.
10. **Galerie** (`#gallery`) : filtres Tous/Projets/Réalisations/Participation et collage d'images animé.
11. **Contact** (`#contact`) : carte d'informations avec email, téléphone, localisation, structure, réseaux et carte Google ; formulaire à droite sur desktop, empilé sur mobile.

Après les sections, conserve un footer avec marque, disponibilité, liens de navigation, liens utiles, réseaux, partenaire, copyright et lien retour en haut.

Chaque nouvelle section ajoutée par le cahier des charges doit être intégrée dans cet ordre général sans casser les ancres, la navigation active ou la traduction.

## 7. Navbar — spécification comportementale complète

- Utilise un `<header class="site-header">` sticky en haut avec `z-index: 30`, blur et fond semi-transparent.
- La barre de navigation est un conteneur arrondi avec marque, navigation, toggle thème et toggle langue.
- Le menu contient des liens directs À propos, Compétences et Contact.
- Les groupes Parcours et Projets utilisent des boutons `.nav-select-toggle` avec menus déroulants contenant les ancres vers Expérience, Formation, Certifications, Bénévolat, Projets phares et Galerie.
- Le bouton burger `#menuToggle` contrôle `#navMenu`, met à jour `aria-expanded` et devient visible sous `720px`.
- Sur mobile, le menu est positionné sous la navbar, avec opacité et translation contrôlées par `.open`.
- Un clic sur un lien ferme le menu mobile ; un clic hors navigation ferme les sélecteurs ouverts.
- Les sélecteurs ajoutent/enlèvent `.open` et mettent à jour leur `aria-expanded`.
- `initActiveNav()` parcourt les sections `main section[id]`, calcule la section courante avec un offset de `140px` et applique `.active` au lien correspondant.
- La barre ne réduit pas sa hauteur au scroll : aucun comportement shrink n'est présent.
- `initSmoothScroll()` remplace le scroll natif des ancres par une animation `requestAnimationFrame` de `700ms`, easing cubic, offset haut de `92px`, puis met à jour l'URL avec `history.pushState`.

## 8. Animations, transitions et effets JS

Reproduis les effets suivants sans ajouter de librairie d'animation :

- **Révélation au scroll** : les éléments `.reveal` commencent avec opacité `0` et translation verticale de `24px`. Un `IntersectionObserver` avec seuil `0.2` ajoute `.is-visible` une seule fois.
- **Pourcentages de compétences** : `initSkillPercentages()` lit `data-score`, borne la valeur entre `0` et `100`, injecte le pourcentage et anime la largeur de `.skill-progress-bar`.
- **Hover des cartes** : soulèvement, ombres accentuées, changement de bordure et transformation d'icône ; effets CSS uniquement.
- **Hero et About** : cartes inclinées par défaut, redressées au hover, images légèrement mises à l'échelle et désaturées/saturées selon l'état.
- **Objectif professionnel** : atmosphère en arrière-plan, entrée de carte, flottement de l'icône et mouvement décoratif circulaire en CSS.
- **Timeline** : marqueur et logo réagissent au hover/focus de la carte.
- **Galerie collage** : les filtres ajoutent/enlèvent `.is-hidden` et `.is-visible`, avec animation `fadeIn` et délais échelonnés de `index * 60ms`.
- **Carrousel certifications** : `#certificationTrack` est déplacé par `transform: translateX`; navigation précédente/suivante, défilement automatique toutes les `3000ms`, recalcul à la taille de fenêtre et nombre visible `3` desktop, `2` tablette, `1` sous `780px`.
- **Scroll-top** : `#scrollTopBtn` devient visible au-delà de `500px` de scroll et revient en haut avec comportement smooth.
- **Boutons et liens** : transitions de couleur, translation légère et ombres.
- **Réduction des animations** : sous `prefers-reduced-motion: reduce`, neutraliser animations/transitions des cartes, images, révélation et icônes listées par le projet de référence.

N'ajoute pas de parallax, curseur personnalisé, loader, transition de page ou GSAP : ces fonctionnalités sont absentes du projet audité.

## 9. Thème clair/sombre

- Le thème est piloté par la classe `dark` sur `<body>`.
- `initTheme()` lit `sessionStorage.getItem("theme")`.
- Si aucune préférence n'est présente, il consulte `window.matchMedia("(prefers-color-scheme: dark)")`.
- `applyTheme()` bascule `body.dark`, modifie l'icône du bouton thème entre lune et soleil, et utilise les variables CSS du thème sombre.
- Le bouton `#themeToggle` inverse le thème et écrit la valeur dans `sessionStorage`.
- Ne remplace pas ce mécanisme par `localStorage` sans demande explicite.

## 10. Internationalisation FR/EN

- L'anglais est la langue par défaut via `localStorage.getItem("siteLanguage") || "en"`.
- Les dictionnaires `en` et `fr` sont déclarés inline dans `assets/js/main.js` dans `const translations`.
- L'HTML utilise `data-i18n="cle.nom"` pour les textes et `data-i18n-attr='{"attribut":"cle.nom"}'` pour les attributs comme `aria-label`, `alt` ou `placeholder`.
- `applyTranslations()` parcourt les éléments et remplace `textContent`, ou `innerHTML` uniquement si `data-i18n-html="true"` est explicitement présent.
- La fonction met à jour `document.documentElement.lang` et `document.body.dataset.lang`.
- Le bouton `#languageToggle` affiche `FR` lorsque la page est en anglais et `EN` lorsqu'elle est en français ; son aria-label est également actualisé.
- `setLanguage()` persiste le choix dans `localStorage` puis réapplique toutes les chaînes.
- Toute nouvelle chaîne visible, tout texte de badge, tout texte de bouton, tout label de formulaire et tout attribut accessible doit recevoir une clé présente dans **les deux** dictionnaires.
- Vérifie systématiquement que l'ensemble des clés `data-i18n` et `data-i18n-attr` existent dans les deux langues.
- `assets/i18n.json` est détecté mais n'est pas la source active : ne le substitue pas au dictionnaire inline sans refactorisation explicite.

## 11. Formulaire de contact

Reproduis un formulaire avec :

- nom (`input[name="name"]`, requis) ;
- email (`input[name="email"]`, type email, requis) ;
- objet (`input[name="subject"]`, placeholder traduit) ;
- message (`textarea[name="message"]`, requis) ;
- bouton d'envoi traduit ;
- zone `#formStatus` avec `aria-live="polite"`.

Le formulaire utilise EmailJS Browser `4` chargé par CDN :

- initialiser EmailJS avec `[EMAILJS_PUBLIC_KEY]` ;
- envoyer via `emailjs.sendForm([EMAILJS_SERVICE_ID], [EMAILJS_TEMPLATE_ID], contactForm)` ;
- créer le champ caché `email_guest` à partir du champ email avant l'envoi ;
- empêcher le submit HTML par défaut ;
- afficher un état succès ou erreur avec icône Font Awesome et message ;
- réinitialiser le formulaire après succès ;
- afficher une erreur si la librairie n'est pas chargée ou si les identifiants sont des placeholders.

Aucun backend propre, endpoint serveur, Formspree ou validation métier distante n'est présent dans le projet audité. Conserve la validation HTML native et les contrôles EmailJS.

## 12. SEO, accessibilité, performance

### SEO détecté et à reproduire

- `<!DOCTYPE html>`, `<html lang="en">` initialement, puis langue mise à jour par JavaScript.
- `<meta charset="UTF-8">`.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Une meta description et un `<title>`.
- Aucun Open Graph, Twitter Card, canonical, sitemap.xml, robots.txt, manifest PWA ou favicon n'est présent dans la page active.
- Aucun fichier de configuration de déploiement n'est présent.

Pour un nouveau projet, ajoute Open Graph, favicon, canonical, sitemap ou manifest uniquement si le cahier des charges le demande ; ne les prétends pas hérités du projet de référence.

### Accessibilité

- Utiliser les éléments sémantiques `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `form`.
- Maintenir une hiérarchie de titres cohérente avec un H1 Hero puis des H2 de section et des H3 de cartes.
- Conserver `aria-label`, `aria-expanded`, `aria-controls`, `aria-live`, `aria-hidden` et les relations clavier des contrôles.
- Ajouter un `alt` descriptif à chaque image ; traduire les alt via `data-i18n-attr` lorsque leur langue change.
- Garantir le focus clavier sur les liens, boutons, menus, filtres, carrousel et `details`.
- Ne pas utiliser de texte visible ou d'icône seule sans nom accessible lorsque le contrôle n'est pas évident.

### Performance détectée et à reproduire

- Images avec `max-width: 100%` et `display: block`.
- `loading="lazy"` est utilisé pour la carte Google Maps ; les images du portfolio ne sont pas systématiquement lazy-loadées dans la page active.
- Aucune minification, compression automatisée, optimisation d'images ou pipeline de build n'est présent.
- Les CDN externes sont utilisés pour Font Awesome, Devicon, Google Fonts et EmailJS.
- Les animations doivent rester légères et respecter `prefers-reduced-motion`.
- Les assets doivent conserver des dimensions stables pour éviter les décalages de layout.

## 13. Contraintes de qualité et instructions finales

- Code propre, lisible, sémantique et commenté uniquement lorsque le comportement n'est pas évident.
- Responsive mobile-first obligatoire sur mobile, tablette, desktop et large desktop.
- Tester explicitement les largeurs `320px`, `375px`, `480px`, `768px`, `820px`, `1024px`, `1280px` et `1440px`.
- Les cartes de compétences doivent rester séparées, sans chevauchement : une colonne sur mobile et tablette, composition en grille seulement sur desktop large.
- Le carrousel de certifications doit afficher une carte à la fois sous `780px`.
- Le bloc contact doit s'empiler sans débordement sur mobile, avec carte d'informations avant formulaire.
- Ne jamais casser la logique FR/EN ni le thème clair/sombre en ajoutant du contenu.
- Ne jamais laisser un texte visible en dur sans clé de traduction, sauf marque, nom propre, technologie, adresse email ou contenu explicitement invariant.
- Vérifier les clés de traduction après chaque ajout.
- Ne pas inventer une librairie, une plateforme de déploiement, un backend ou une fonctionnalité absente du cahier des charges.
- Conserver la navigation par ancres, le menu mobile, le scroll fluide, les filtres de galerie, le carrousel, EmailJS et le bouton retour en haut.
- Livrer un projet fonctionnel, prêt à lancer avec :

```text
[COMMANDE_DE_LANCEMENT]
```

Valeur par défaut vérifiée pour ce socle :

```bash
python -m http.server 8000
```

Le projet de référence est associé à un remote GitHub `git@github.com:rodibrian/portfolio.git`, mais aucune preuve de configuration GitHub Pages, workflow CI/CD, Vercel ou Netlify n'est présente dans les fichiers audités. Ne présume pas d'un déploiement automatique.

## 14. Résumé technique de référence pour l'agent

- Type : portfolio monopage statique.
- Sections actives : 11.
- Fichiers d'exécution : `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- Langue par défaut : anglais.
- Traductions : dictionnaires inline `en`/`fr` dans `main.js`, sélection persistée dans `localStorage`.
- Thème : classe `body.dark`, préférence persistée dans `sessionStorage`, fallback préférence système.
- Animations principales : IntersectionObserver pour les reveals, CSS hover/transitions, filtres galerie, carrousel automatique, pourcentages de compétences, scroll fluide custom et bouton retour en haut.
- Contact : EmailJS Browser `4` via CDN.
- Dépendances externes : Inter, Font Awesome `6.4.0`, Devicon latest, EmailJS Browser `4`.
- Build/deploiement : aucun système de build ou fichier de plateforme détecté.
