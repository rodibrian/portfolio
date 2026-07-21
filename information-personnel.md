# PROMPT — Refonte moderne du portfolio GitHub de Rodi Brian Embony

> Ce fichier est un **prompt prêt à l'emploi** à copier-coller dans un outil IA de développement (Claude Code, Cursor, Lovable, v0, etc.) pour reconstruire/moderniser le portfolio `rodibrian.github.io/portfolio/`. Il contient le contenu réel à intégrer, organisé section par section, ainsi que des placeholders d'images à remplacer plus tard.

---

## 🎯 OBJECTIF GÉNÉRAL

Refondre mon portfolio GitHub (`https://rodibrian.github.io/portfolio/`) avec un design **moderne, sobre et professionnel**, orienté **développeur Web/Desktop + fondateur de startup (Baia Creative Solutions)**. Le site doit être responsive (mobile/tablette/desktop), rapide, en **mode clair + sombre**, et structuré en sections claires avec navigation fluide (scroll + menu sticky).

**Stack suggérée** (à adapter selon l'outil utilisé) : HTML5 / CSS3 / JavaScript (ou React + Tailwind), déploiement GitHub Pages. Garder une structure simple à maintenir (un développeur qui gère seul son portfolio).

**Ton du contenu** : professionnel, direct, orienté résultats — sans être froid. Le portfolio doit refléter à la fois l'expertise technique et le parcours humain (mission internationale, entrepreneuriat).

---

## 🖼️ RÈGLE GÉNÉRALE POUR LES IMAGES

Pour **chaque** emplacement image, utiliser un placeholder de ce type (à remplacer plus tard par mes vraies images) :

```html
<img src="assets/images/placeholder-[nom-section].png" alt="[description à définir]" class="placeholder-img" />
```

Ou en CSS pur (bloc coloré avec icône) si tu préfères un rendu plus propre en attendant :

```html
<div class="img-placeholder" data-label="Photo de profil"></div>
```

Prévoir dans le CSS un style `.img-placeholder` avec fond gris clair/dégradé, bordure en pointillés, et le texte du `data-label` centré — pour que je repère facilement où glisser mes futures images.

Liste des images à prévoir (voir détail par section plus bas) :
1. Photo de profil (Hero + About)
2. Logo Baia Creative Solutions
3. Captures d'écran IjeeryApp (3-4 images : dashboard, module stock, module caisse)
4. Captures d'écran Sub-M
5. Captures d'écran projets Kalia Perspective (sites livrés)
6. Photo mission internationale Bénin/Togo (optionnel, section bénévolat)
7. Logos entreprises/organisations (Kalia Perspective, DDS, ISKI Solutions, Université de Toamasina, BYU)
8. Icônes technologiques (peuvent être des SVG de librairies type devicon/simple-icons, pas des placeholders)

---

## 📐 STRUCTURE DES SECTIONS DU SITE

```
1. Hero / En-tête
2. À propos (Résumé + Présentation personnelle)
3. Compétences (techniques + soft skills)
4. Expériences professionnelles
5. Projets phares
6. Formation
7. Certifications
8. Bénévolat & engagement communautaire
9. Réalisations importantes
10. Langues
11. Contact / Réseaux
```

---

## 1. HERO / EN-TÊTE

**Placeholder image** : photo de profil circulaire, `placeholder-profile.png`.

**Contenu à intégrer** :
- Nom affiché : **Rodi Brian Embony**
- Titre / accroche : *Développeur Web & Desktop | Fondateur de Baia Creative Solutions*
- Sous-titre court : *Genie informatique — Applications Web, Desktop et solutions numériques sur mesure*
- Localisation : Toamasina, Madagascar (remote-friendly)
- Boutons d'action : "Voir mes projets", "Me contacter", "Télécharger mon CV" (lien PDF à ajouter plus tard)
- Icônes réseaux sociaux (liens réels) :
  - LinkedIn : https://www.linkedin.com/in/rodibrian-embony/
  - GitHub : https://github.com/rodibrian/
  - Facebook : https://www.facebook.com/embony.rodibrian
  - X (Twitter) : https://x.com/e_rodibrian
  - Email : embony.rodibrian@gmail.com

---

## 2. À PROPOS

**Placeholder image** : photo plus grande/lifestyle, `placeholder-about.png` (à côté du texte, disposition 2 colonnes sur desktop).

**Texte à intégrer** (reformulation courte pour le web, garder le sens) :

> Spécialisé en génie informatique, je développe des applications Web et Desktop depuis 2017 — d'abord à travers des projets universitaires (HTML5, CSS3, JS, Bootstrap, PHP, C/Gtk, Java, C++/Qt), puis en entreprise chez DDS, où j'ai renforcé mon expérience en Java SE et Spring Boot.
>
> Je suis aussi à l'aise avec les outils de design graphique (Canva, Figma), ce qui renforce mon approche Front-End. Aujourd'hui, je suis fondateur et CEO de **Baia Creative Solutions**, une structure de services numériques (sites vitrines, applications Desktop, assistance digitale).
>
> Calme et travailleur, j'aime autant travailler en autonomie qu'en équipe, et je reste constamment en apprentissage. Entre 2023 et 2025, j'ai également effectué une mission internationale de service bénévole au Bénin et au Togo — une expérience qui a renforcé ma capacité d'adaptation, mon leadership et ma communication interculturelle.

**Bloc "Ce que je recherche"** (mettre en avant, style carte) :
> De nouveaux défis professionnels me permettant de progresser dans mon domaine tout en découvrant de nouveaux secteurs — en priorité en télétravail, ouvert à l'hybride.

---

## 3. COMPÉTENCES

Afficher en **grille de cartes** ou **barres de progression discrètes** (éviter les barres de pourcentage arbitraires — préférer un badge de niveau : Junior / Intermédiaire / Avancé / Expert).

### Langages de programmation
| Langage | Niveau | Depuis |
|---|---|---|
| C | Avancé | 2018 |
| C++ | Avancé | 2019 |
| Java SE | Avancé | 2019 |
| JavaScript | Avancé | 2018 |
| SQL | Avancé | 2019 |
| HTML | Avancé | 2018 |
| CSS | Avancé | 2018 |
| Bootstrap | Expert | 2018 |
| Python | Intermédiaire | 2024 |
| PHP | Intermédiaire | 2019 |
| Octave | Junior | 2019 |

### Frameworks & bases de données
Qt, Bootstrap · MySQL, SQLite, PostgreSQL

### Outils
VS Code, Qt Creator, Git, GitHub, Cursor, Figma, Canva, Office, Wondershare Filmora

### Systèmes
Windows, Linux (Ubuntu, Debian), Android

### Soft skills (afficher en tags/pills)
Organisation, Leadership, Autonomie, Créativité, Patience, Esprit critique, Capacité d'apprentissage, Gestion du temps, Adaptabilité, Communication, Gestion du stress, Empathie

**Note technique** : utiliser des icônes officielles (devicon.dev ou simple-icons) pour chaque techno plutôt que des placeholders image.

---

## 4. EXPÉRIENCES PROFESSIONNELLES

Afficher en **timeline verticale** (du plus récent au plus ancien) avec logo entreprise en placeholder à gauche de chaque bloc : `placeholder-logo-[entreprise].png`.

### 🟢 Fondateur • CEO • Développeur — Baia Creative Solutions
**2026 – Aujourd'hui**
- Développement Web et Desktop, design graphique
- Création de sites vitrines et portfolios, identité visuelle
- Assistance numérique, impression et conception graphique
- Stack : HTML, CSS, JS, Bootstrap, PHP, C++, Qt, Python, PostgreSQL, Git, Canva, Figma
- Compétences développées : entrepreneuriat, gestion de projet/clients, leadership, gestion financière

### 🌍 Mission internationale de service bénévole — Bénin, Togo
**2023 – 2025**
- Communication interculturelle quotidienne, organisation d'activités
- Gestion autonome du planning, accompagnement des personnes
- Compétences développées : leadership, adaptabilité, planification

### 💻 Développeur Full-Stack — DDS (Development and Design Solution)
**2021**
- Analyse des besoins, développement d'applications
- Conception des interfaces, Front-End, participation Back-End
- Stack : Java, Spring Boot, HTML, CSS, JavaScript, SQL, Git

### 🎨 Front-End Web Designer / Developer — Kalia Perspective (Toamasina)
**Fin 2019 – 2023**
- Création d'interfaces web modernes (HTML/CSS/JavaScript)
- Intégration Bootstrap, jQuery, Responsive Design
- Optimisation UX, correction de bugs, maintenance, tests et collaboration client
- Outils : VS Code, Git, GitHub, Canva, Chrome DevTools

---

## 5. PROJETS PHARES

Afficher en **grille de cartes projet** (image en haut, contenu en dessous, bouton "Voir le détail" si page dédiée).

### 🗂️ IjeeryApp — ERP de gestion commerciale et administrative
**Placeholders images** : `placeholder-ijeeryapp-dashboard.png`, `placeholder-ijeeryapp-stock.png`, `placeholder-ijeeryapp-caisse.png`

- **Client** : ISKI Solutions (Antalaha, Madagascar) — activité de grossiste Sarah-Gros
- **Développement** : 2025 · **Déploiement** : 2026
- **Description** : Application ERP Desktop pour automatiser et centraliser les opérations d'un grossiste.
- **Modules** : Articles/produits, stock, ventes, clients, fournisseurs, livraisons, caisse, utilisateurs, RH, reporting
- **Architecture** : Python + PostgreSQL, architecture modulaire (interface → logique métier → accès données → BDD)
- **Rôle** : Développeur principal / concepteur logiciel (analyse, architecture, développement complet, modélisation BDD, tests, installation client, maintenance)
- **Résultats** : Application adaptée aux besoins du client, meilleure organisation des opérations, solution évolutive
- Tags : `Python` `PostgreSQL` `ERP` `Desktop` `Freelance`

### 💧 Sub-M — Subscribe Management
**Placeholder image** : `placeholder-subm.png`

- **Client** : DDS – Development and Design Solution
- **Année** : 2020
- **Description** : Application de gestion d'un service de distribution d'eau potable (abonnés, informations clients, suivi des opérations)
- **Rôle** : Développeur Java — fonctionnalités, interfaces, logique métier, analyse des besoins, tests
- **Résultats** : Outil numérique de gestion, meilleur suivi des abonnés
- Tags : `Java SE` `Desktop`

> 💡 Prévoir une **3ᵉ carte "Projet à venir"** en style discret (opacité réduite / badge "bientôt") pour un futur projet (ex. l'application de gestion de restaurant mentionnée dans mes projets futurs), afin de montrer une dynamique active.

---

## 6. FORMATION

Afficher en **liste chronologique inversée** avec petit logo établissement en placeholder.

### 🎓 Master en Génie Informatique
Université de Toamasina (campus Barikadimy) — 2025
Mémoire : *Développement d'un système de gestion de bankroll intelligent pour les paris sportifs basé sur l'analyse de données*
Technologies : C++, Qt Framework, SQLite, Qt Charts, UML, analyse statistique
Encadreur : Rolin Gabriel Rasoanaivo

### 🎓 Licence en Informatique
Université de Toamasina (campus Barikadimy) — 2019
Programmation C, Java, développement Web (HTML/CSS/JS/PHP), bases de données SQL, réseaux, systèmes d'exploitation, algorithmique

### 🎓 Bachelor Business Management *(en cours)*
BYU Online / BYU-Pathway Worldwide
Gestion d'entreprise, management, communication professionnelle, leadership, finance, marketing

### 📜 Formation missionnaire à temps plein
Centre de Formation Missionnaire, Accra (Ghana) — 2023

### 📜 Stage Maintenance Informatique & Réseaux
L'AMi Informatique (Toamasina) — sept.-nov. 2019

### 📜 Formation environnementale CAMP — Ambassadeur Vert
Madagascar Fauna and Flora Group (MFG) — 2013-2014

### 📜 Master Class RARY ARO MADA
UNESCO Madagascar / OHCHR / Fonds des Nations Unies pour la Consolidation de la Paix — 2022

---

## 7. CERTIFICATIONS

Afficher en petites **cartes/badges** compactes.

- Certificat de fin de mission bénévole à temps plein (mai 2025) — 2 ans, Bénin/Togo
- Attestation de réussite Ambassadeur Vert — MFG, 20 novembre 2014
- Attestation de stage Maintenance Informatique & Réseaux — L'AMi Informatique, 9 décembre 2019
- Certificat Master Class RARY ARO MADA 2022

---

## 8. BÉNÉVOLAT & ENGAGEMENT COMMUNAUTAIRE

**Placeholder image** : `placeholder-benevolat.png` (photo terrain, optionnelle).

### Mission internationale — Service bénévole à plein temps
Mai 2023 – Mai 2025 · Bénin et Togo
Accompagnement de personnes et familles, organisation d'activités, coordination d'actions de terrain.
Compétences : communication interculturelle, leadership de service, gestion autonome, planification, écoute et empathie.

### Service communautaire local
Depuis décembre 2025
Accompagnement et coordination bénévoles au sein d'un conseil communautaire local.

---

## 9. RÉALISATIONS IMPORTANTES

Afficher en **4 cartes highlight** (icône + titre + court texte) :

1. **Mission internationale accomplie avec honneur** (2023-2025) — Maturité personnelle et interculturelle, leadership, résilience.
2. **Master en Génie Informatique** (2025) — Mémoire sur un système intelligent de gestion de bankroll (C++/Qt, SQLite).
3. **Expertise polyvalente en informatique** — Développement logiciel, Web, design numérique et analyse de données depuis 2017.
4. **Création de Baia Creative Solutions** (2026) — Lancement de ma propre structure de services numériques.

---

## 10. LANGUES

Afficher en barres ou badges de niveau (CECRL) :

- 🇲🇬 **Malagasy** — Langue maternelle
- 🇫🇷 **Français** — C1 (avancé)
- 🇬🇧 **Anglais** — B1 (intermédiaire)

---

## 11. CONTACT / RÉSEAUX

**Placeholder** : illustration ou icône (pas de photo nécessaire ici).

- Formulaire de contact simple (nom, email, message) — ou lien mailto: si pas de backend
- Email : embony.rodibrian@gmail.com
- Téléphone/WhatsApp : +261 34 26 331 32
- Localisation : Toamasina, Madagascar
- Disponibilité : *Missions freelance, collaborations à distance, projets courts/moyens termes, ouvert aux missions internationales*
- Rappel des réseaux sociaux (mêmes liens que le Hero)

---

## ⚙️ INSTRUCTIONS TECHNIQUES POUR L'OUTIL IA

1. Générer une structure de fichiers claire (`index.html`, `css/style.css`, `js/main.js`, `assets/images/`).
2. Implémenter un **mode sombre/clair** avec toggle (préférence sauvegardée en mémoire JS, pas de localStorage si contrainte d'environnement).
3. Navigation sticky avec liens d'ancrage vers chaque section, menu hamburger sur mobile.
4. Animations légères au scroll (fade-in / slide-up) sans surcharger.
5. Typographie moderne (ex. Inter, Poppins, ou Space Grotesk pour les titres).
6. Palette de couleurs suggérée : base neutre (blanc/gris anthracite) + une couleur d'accent unique (ex. bleu électrique ou vert émeraude) cohérente avec l'identité "Baia Creative Solutions".
7. Toutes les images utilisent le système de placeholder décrit plus haut, avec des noms de fichiers explicites pour que je puisse les remplacer facilement un par un.
8. Rendre le site accessible (contrastes suffisants, alt text sur chaque image/placeholder, navigation clavier).
9. Prévoir un fichier `README.md` à la racine expliquant comment remplacer les images placeholders.

---

## 📝 À COMPLÉTER PLUS TARD (checklist personnelle)

- [ ] Résultats chiffrés Kalia Perspective (ex. nombre de sites livrés)
- [ ] Référence professionnelle Kalia Perspective
- [ ] Premières réalisations concrètes Baia Creative Solutions
- [ ] Lien GitHub / démo IjeeryApp + captures d'écran réelles
- [ ] Lien GitHub / démo Sub-M + captures d'écran réelles
- [ ] CV en PDF à lier au bouton "Télécharger mon CV"
- [ ] Toutes les images réelles pour remplacer les placeholders