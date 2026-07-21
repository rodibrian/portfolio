// Main JavaScript File

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize WOW.js (animations on scroll, not on full page load)
    if (typeof WOW !== 'undefined') {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 120,
            mobile: true,
            live: true
        }).init();
    }

    // Initialize all components
    initNavigation();
    initTypewriter();
    initCounters();
    initSkillBars();
    initProjectFilters();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
    initI18n();
    // Prepare project images for lazy-loading (convert src -> data-src)
    prepareProjectImagesForLazy();
    // Activate lazy loading observer
    initLazyLoading();
});

// Convert existing project image `src` to `data-src` and replace with tiny placeholder
function prepareProjectImagesForLazy() {
    const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    document.querySelectorAll('img').forEach(img => {
        try {
            const src = img.getAttribute('src') || '';
            if (src.includes('assets/img/projets/')) {
                // If data-src already set, skip
                if (!img.hasAttribute('data-src')) {
                    img.setAttribute('data-src', src);
                    img.setAttribute('src', placeholder);
                    img.classList.add('lazy');
                    img.setAttribute('loading', 'lazy');
                }
            }
        } catch (_) { /* ignore */ }
    });
}

// --- i18n (FR default) -------------------------------------------------------
let I18N = {
    fr: {
        meta: {
            title: "Rodi Brian | Full-Stack Developer",
            description: "Portfolio de Rodi Brian — Développeur Full-Stack spécialisé dans les applications modernes, l’UI/UX et des solutions évolutives.",
            ogTitle: "Rodi Brian | Full-Stack Developer",
            ogDescription: "Je conçois des applications modernes, scalables et user-friendly. Projets, compétences et contact.",
            twitterTitle: "Rodi Brian | Full-Stack Developer",
            twitterDescription: "Applications modernes, UI/UX, solutions scalables."
        },
        nav: { home: "Accueil", value: "Proposition", skills: "Compétences", experience: "Expérience", projects: "Projets", contact: "Contact" },
        hero: {
            role: "Full-Stack Developer | Web • UI/UX • Desktop (Qt)",
            location: "Freelance à distance",
            subtitle: "Je conçois des applications modernes, performantes et faciles à utiliser — avec une attention forte à l’UI/UX, à la maintenabilité et à l’impact business.",
            ctaProjects: "Voir mes projets",
            ctaCv: "Télécharger CV",
            ctaContact: "Me contacter",
            cvHref: "assets/docs/RODI_BRIAN_CV.pdf",
            typed: ["Full-Stack Developer", "Développeur C++/Qt", "Frontend & UI/UX"]
        },
        value: {
            title: "Proposition de valeur",
            kicker: "Full-Stack • C++/Qt • UI/UX",
            headline: "Je transforme des besoins métiers en produits clairs, robustes et agréables à utiliser.",
            p1: "J’aide les équipes et les clients à livrer des applications web et desktop fiables (C++/Qt, Java, Web), avec une attention forte à l’architecture, la performance et l’expérience utilisateur.",
            p2: "Mon objectif est simple : un produit qui se comprend vite, qui se maintient facilement, et qui apporte un résultat mesurable (gain de temps, réduction d’erreurs, meilleure conversion, meilleure ergonomie).",
            pill1: "Desktop apps (C++/Qt) performantes",
            pill2: "UI modernes & design centré utilisateur",
            pill3: "Frontend moderne (Bootstrap / JS)",
            pill4: "Code propre & maintenable",
            badgeTitle: "Sénior Confirmé",
            badgeSubtitle: "C++/Qt • Frontend • UI/UX",
            ctaWork: "Travaillons ensemble",
            ctaProjects: "Voir mes projets"
        },
        skills: {
            title: "Mes Compétences",
            subtitle: "Une expertise technique et créative pour concevoir des applications et interfaces modernes et performantes",
            featuredTitle: "Technologies principales",
            categories: {
                backend: "C++ / Backend",
                frontend: "Frontend",
                design: "UI/UX & Design",
                tools: "Outils"
            },
            h1: { title: "Frontend", tags: "HTML • CSS • JavaScript • Bootstrap" },
            h2: { title: "Backend", tags: "PHP • APIs • Architecture" },
            h3: { title: "Desktop", tags: "C++ • Qt • SQLite" },
            h4: { title: "Outils", tags: "Git • GitHub • Figma • Office" }
        },
        experience: {
            title: "Mon Parcours",
            subtitle: "Un parcours riche en expériences, apprentissages continus et développement de solutions innovantes",
            since2019: "Depuis 2019",
            ctaTitle: "Prêt pour de nouveaux défis",
            ctaText: "Je recherche constamment des opportunités pour grandir et contribuer à des projets innovants.",
            ctaBtn: "Discutons de votre projet",
            t1: {
                title: "Formation Académique",
                org: "Université de Barikadimy Toamasina",
                text: "Licence en Informatique, suivie de la 2ème année de Master en Génie Informatique. Acquisition de solides compétences en développement logiciel, architecture des applications et design d’interface."
            },
            t2: {
                title: "Développeur Full-Stack",
                org: "DDS (Design and Development Solution)",
                text: "Développement d’applications web modernes avec Bootstrap Studio et intégration responsive. Conception et maintenance d’applications desktop sous Java et Qt C++. Maîtrise de la Suite Office pour les besoins de reporting et documentation."
            },
            t3: {
                title: "Développement Web et Desktop (Indépendant)",
                org: "Freelance",
                text: "Création d’applications desktop et web indépendantes avec Java, C++/Qt et technologies frontend modernes, en mettant l’accent sur l’expérience utilisateur et la performance."
            }
        },
        projects: {
            title: "Mes Projets",
            subtitle: "Une sélection de mes réalisations les plus représentatives",
            filterAll: "Tous les projets",
            filterFeatured: "Projets phares",
            details: "Détails",
            source: "Source",
            badgeFeatured: "Phare",
            items: [
                { desc: "Site vitrine touristique présentant les services, circuits, tarifs et l’équipe de l’agence. Inclut un formulaire de contact et une mise en page responsive." },
                { desc: "Programme en C avec liste chaînée pour gérer les clients d’une banque : ajout, recherche, transactions et statistiques de comptes." },
                { desc: "Application de gestion de livres avec Qt et SQLite : ajout, modification, suppression et affichage des livres enregistrés avec ID automatique." },
                { desc: "Logiciel Qt/SQLite pour gérer une bibliothèque : enregistrement, mise à jour et suppression de livres avec affichage structuré." },
                { desc: "Application Qt permettant la gestion des étudiants, matières et articles. Calcul automatique de moyennes et affichage des notes." },
                { desc: "Une application Qt qui permet de générer une fiche de paie à partir des informations du mois." },
                { desc: "Application Qt pour enregistrer et gérer des contacts, appels et historique. Recherche et mise à jour rapides des informations." },
                { desc: "Logiciel Qt pour gérer les logements étudiants : ajout de chambres, répartition et suivi des étudiants hébergés." },
                { desc: "Application Qt générant un tableau de synthèse bilan (actif/passif) avec calculs et interprétation automatique des résultats." },
                { desc: "Scripts Octave pour manipuler des matrices, résoudre des équations, traiter des signaux et effectuer des transformations de Fourier." },
                { desc: "Modélisation 3D d’une voiture taxi avec OpenSCAD. Projet mettant en valeur la conception paramétrique et le rendu." },
                { desc: "Projet OpenSCAD pour concevoir une maquette 3D et un logo représentant l’association AEMIA." },
                { desc: "Une application qui permet de projeter les informations du serveur vers une vue client, en Java." },
                { desc: "Mini-logiciel Qt permettant la gestion d’un dictionnaire : recherche de mots, traduction et consultation." }
            ]
        },
        stats: {
            s1: "Projets en C++/Qt & Frontend",
            s2: "Interfaces UI/UX conçues",
            s3: "Clients satisfaits",
            s4: "Années d’expérience"
        },
        contact: {
            title: "Contactez-moi",
            subtitle: "Prêt à donner vie à votre projet ? Discutons de vos besoins et créons quelque chose d'exceptionnel ensemble",
            leftTitle: "Parlons de votre projet",
            leftText: "Je suis toujours ouvert aux opportunités de collaboration et aux projets innovants. N'hésitez pas à me contacter pour discuter de vos idées !",
            emailLabel: "Email",
            phoneLabel: "Téléphone",
            locationLabel: "Localisation",
            socialTitle: "Retrouvez-moi sur",
            formTitle: "Envoyez-moi un message",
            successTitle: "Message envoyé !",
            successText: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
            errorTitle: "Envoi échoué",
            errorText: "Une erreur est survenue. Réessayez dans quelques instants.",
            nameLabel: "Nom complet *",
            email2Label: "Email *",
            subjectLabel: "Sujet *",
            messageLabel: "Message *",
            submit: "Envoyer le message"
        },
        footer: {
            tagline: "Développeur passionné créant des expériences web modernes et performantes.",
            navigation: "Navigation",
            contact: "Contact",
            rights: "© 2025 Rodi Brian. Tous droits réservés.",
            madeWith: "Créé avec",
            andBootstrap: "et Bootstrap"
        },
        finalCta: {
            title: "Vous avez un projet en tête ?",
            text: "Construisons quelque chose de propre, rapide et fiable — avec une expérience utilisateur au niveau.",
            button: "Me contacter"
        },
        modal: {
            titlePlaceholder: "Titre du projet",
            descriptionPlaceholder: "Description du projet",
            techUsed: "Technologies utilisées",
            liveDemo: "Live Demo",
            sourceCode: "Code source"
        }
    },
    en: {
        meta: {
            title: "Rodi Brian | Full-Stack Developer",
            description: "Portfolio of Rodi Brian — Full-Stack Developer focused on modern web apps, UI/UX, and scalable solutions.",
            ogTitle: "Rodi Brian | Full-Stack Developer",
            ogDescription: "I build modern, scalable and user-friendly applications. Explore projects, skills and contact.",
            twitterTitle: "Rodi Brian | Full-Stack Developer",
            twitterDescription: "Modern apps, UI/UX, scalable solutions."
        },
        nav: { home: "Home", value: "Value", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
        hero: {
            role: "Full-Stack Developer | Web • UI/UX • Desktop (Qt)",
            location: "Remote freelance",
            subtitle: "I build modern, fast and user-friendly applications — with strong focus on UI/UX, maintainability, and business impact.",
            ctaProjects: "View projects",
            ctaCv: "Download résumé",
            ctaContact: "Contact me",
            cvHref: "assets/docs/RODI_BRIAN_RESUME.pdf",
            typed: ["Full-Stack Developer", "C++/Qt Developer", "Frontend & UI/UX"]
        },
        value: {
            title: "Value proposition",
            kicker: "Full-Stack • C++/Qt • UI/UX",
            headline: "I turn business needs into clear, robust and delightful products.",
            p1: "I help teams and clients deliver reliable web and desktop applications (C++/Qt, Java, Web), with strong attention to architecture, performance, and user experience.",
            p2: "My goal is simple: a product that’s easy to understand, easy to maintain, and delivers measurable outcomes (time saved, fewer errors, better conversion, better usability).",
            pill1: "High-performance desktop apps (C++/Qt)",
            pill2: "Modern UI & user-centered design",
            pill3: "Modern frontend (Bootstrap / JS)",
            pill4: "Clean, maintainable code",
            badgeTitle: "Senior level",
            badgeSubtitle: "C++/Qt • Frontend • UI/UX",
            ctaWork: "Let’s work together",
            ctaProjects: "View projects"
        },
        skills: {
            title: "Skills",
            subtitle: "Technical and creative expertise to build modern, high-performance applications and interfaces",
            featuredTitle: "Core technologies",
            categories: {
                backend: "C++ / Backend",
                frontend: "Frontend",
                design: "UI/UX & Design",
                tools: "Tools"
            },
            h1: { title: "Frontend", tags: "HTML • CSS • JavaScript • Bootstrap" },
            h2: { title: "Backend", tags: "PHP • APIs • Architecture" },
            h3: { title: "Desktop", tags: "C++ • Qt • SQLite" },
            h4: { title: "Tools", tags: "Git • GitHub • Figma • Office" }
        },
        experience: {
            title: "Experience",
            subtitle: "A journey built on hands-on projects, continuous learning, and delivering practical solutions",
            since2019: "Since 2019",
            ctaTitle: "Ready for new challenges",
            ctaText: "I’m always open to opportunities to grow and contribute to impactful projects.",
            ctaBtn: "Let’s talk",
            t1: {
                title: "Education",
                org: "Université de Barikadimy Toamasina",
                text: "BSc in Computer Science, followed by the 2nd year of a Master’s in Software Engineering. Built strong fundamentals in software development, application architecture, and interface design."
            },
            t2: {
                title: "Full-Stack Developer",
                org: "DDS (Design and Development Solution)",
                text: "Built modern web applications using Bootstrap Studio with responsive integration. Designed and maintained desktop applications with Java and Qt/C++. Used Office Suite for reporting and documentation."
            },
            t3: {
                title: "Web & Desktop Development (Freelance)",
                org: "Freelance",
                text: "Built independent desktop and web applications with Java, C++/Qt, and modern frontend technologies, with a focus on UX and performance."
            }
        },
        projects: {
            title: "Projects",
            subtitle: "A selection of my most representative work",
            filterAll: "All projects",
            filterFeatured: "Featured",
            details: "Details",
            source: "Source",
            badgeFeatured: "Featured",
            items: [
                { desc: "Tourism landing website showcasing services, tours, pricing, and the team. Includes a contact form and a responsive layout." },
                { desc: "C console program using linked lists to manage bank customers: add/search, transactions, and account statistics." },
                { desc: "Qt + SQLite book management app: add, edit, delete, and list books with auto-generated IDs." },
                { desc: "Qt + SQLite library management software: register, update, delete, and display books in a structured UI." },
                { desc: "Qt app to manage students, subjects, and articles, with automatic averages calculation and grades display." },
                { desc: "Qt app that generates a payslip from monthly inputs." },
                { desc: "Qt contacts and calls manager with history, search, and quick updates." },
                { desc: "Qt software to manage student housing: add rooms, assign students, and track occupancy." },
                { desc: "Qt app generating a balance summary table (assets/liabilities) with calculations and result interpretation." },
                { desc: "Octave scripts for matrix operations, equation solving, signal processing, and Fourier transforms." },
                { desc: "3D taxi car model built with OpenSCAD, highlighting parametric design and rendering." },
                { desc: "OpenSCAD project creating a 3D mockup and logo for the AEMIA association." },
                { desc: "Client/server projector app to display server information in a client view (Java)." },
                { desc: "Qt mini software to manage a dictionary: word search, translation, and browsing." }
            ]
        },
        stats: {
            s1: "C++/Qt & Frontend projects",
            s2: "UI/UX interfaces designed",
            s3: "Happy clients",
            s4: "Years of experience"
        },
        contact: {
            title: "Get in touch",
            subtitle: "Ready to bring your idea to life? Let’s discuss your needs and build something great together.",
            leftTitle: "Let’s talk about your project",
            leftText: "I’m always open to collaboration opportunities and innovative projects. Feel free to reach out to discuss your ideas!",
            emailLabel: "Email",
            phoneLabel: "Phone",
            locationLabel: "Location",
            socialTitle: "Find me on",
            formTitle: "Send me a message",
            successTitle: "Message sent!",
            successText: "Thanks for your message. I’ll get back to you as soon as possible.",
            errorTitle: "Sending failed",
            errorText: "Something went wrong. Please try again in a moment.",
            nameLabel: "Full name *",
            email2Label: "Email *",
            subjectLabel: "Subject *",
            messageLabel: "Message *",
            submit: "Send message"
        },
        footer: {
            tagline: "Passionate developer building modern, high-performance web experiences.",
            navigation: "Navigation",
            contact: "Contact",
            rights: "© 2025 Rodi Brian. All rights reserved.",
            madeWith: "Made with",
            andBootstrap: "and Bootstrap"
        },
        finalCta: {
            title: "Have a project in mind?",
            text: "Let’s build something clean, fast, and reliable — with a great user experience.",
            button: "Contact me"
        },
        modal: {
            titlePlaceholder: "Project title",
            descriptionPlaceholder: "Project description",
            techUsed: "Technologies used",
            liveDemo: "Live demo",
            sourceCode: "Source code"
        }
    }
};

function getI18nValue(dict, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), dict);
}

function applyI18n(lang) {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.dataset && el.dataset.i18nDynamic === "true") return;
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr');
        const value = getI18nValue(dict, key);
        if (value == null) return;
        if (attr) {
            el.setAttribute(attr, String(value));
        } else {
            el.textContent = String(value);
        }
    });

    // Switch active state
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Typed strings (re-init)
    try {
        const strings = dict.hero?.typed || I18N.fr.hero.typed;
        const typeEl = document.getElementById('typewriter');
        if (typeEl) typeEl.textContent = "";
        if (typeof Typed !== 'undefined') {
            if (window.__typedInstance && typeof window.__typedInstance.destroy === 'function') {
                window.__typedInstance.destroy();
            }
            window.__typedInstance = new Typed('#typewriter', {
                strings,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    } catch (_) {
        // ignore typed re-init errors
    }
}

function initI18n() {
    const defaultLang = document.documentElement.getAttribute('data-default-lang') || 'fr';
    const saved = localStorage.getItem('lang');
    const initial = saved || defaultLang;

    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (!lang) return;
            localStorage.setItem('lang', lang);
            applyI18n(lang);
        });
    });

    applyI18n(initial);
}

// Enhanced initI18n: attempt to load external i18n JSON and merge with embedded I18N
function initI18n() {
    const defaultLang = document.documentElement.getAttribute('data-default-lang') || 'fr';
    const saved = localStorage.getItem('lang');
    const initial = saved || defaultLang;

    // Merge external i18n if present
    fetch('assets/i18n.json', { cache: 'no-cache' })
        .then(res => {
            if (!res.ok) throw new Error('no external i18n');
            return res.json();
        })
        .then(data => {
            // shallow merge top-level locales
            Object.keys(data).forEach(locale => {
                I18N[locale] = Object.assign({}, I18N[locale] || {}, data[locale]);
            });
        })
        .catch(() => {
            // ignore and continue with embedded I18N
        })
        .finally(() => {
            document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (!lang) return;
                    localStorage.setItem('lang', lang);
                    applyI18n(lang);
                });
            });

            applyI18n(initial);
        });
}

// EmailJS configuration (fill these values)
// Create an EmailJS account, add an Email Service + Email Template, then paste IDs below.
const EMAILJS_CONFIG = {
    publicKey: "YX4PR5z1IhqV01ii1",
    serviceId: "rodibrian_gmailjs",
    templateId: "template_6vsrdho"
};

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'fr';
    const titles = (I18N[saved] && I18N[saved].hero && I18N[saved].hero.typed) ? I18N[saved].hero.typed : I18N.fr.hero.typed;

    if (typeof Typed !== 'undefined') {
        window.__typedInstance = new Typed('#typewriter', {
            strings: titles,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    } else {
        // Fallback typewriter effect
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.getElementById('typewriter');

        function typeWriter() {
            const currentTitle = titles[titleIndex];
            
            if (!isDeleting) {
                typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentTitle.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 2000);
                    return;
                }
            } else {
                typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                }
            }
            
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }

        typeWriter();
    }
}

// Counter animation
function initCounters() {
    // Kept for backward compatibility; actual triggering is synced with skill bars below.
    initStatsAndSkillsSync();
}

// Skill bars animation
function initSkillBars() {
    // Kept for backward compatibility; actual triggering is synced with counters above.
    initStatsAndSkillsSync();
}

// Sync counters (CountUp.js) + skill bars together
let __statsSkillsSyncInited = false;
function initStatsAndSkillsSync() {
    if (__statsSkillsSyncInited) return;
    __statsSkillsSyncInited = true;

    const sections = [
        document.getElementById('about'),
        document.getElementById('skills')
    ].filter(Boolean);

    // Ensure progress bars start at 0 so animation is visible
    document.querySelectorAll('.progress-bar[data-width]').forEach(bar => {
        if (!bar.style.width) bar.style.width = '0%';
    });

    const animateCountersIn = (root) => {
        const counters = root.querySelectorAll('.counter[data-target]');
        counters.forEach(counter => {
            const target = Number(counter.getAttribute('data-target') || 0);
            const duration = 1.8;

            // If CountUp.js is present, use it
            const CountUpCtor =
                (typeof window !== 'undefined' && window.CountUp) ||
                (typeof window !== 'undefined' && window.countUp && window.countUp.CountUp) ||
                (typeof CountUp !== 'undefined' && CountUp);

            if (CountUpCtor) {
                const cu = new CountUpCtor(counter, target, {
                    duration,
                    startVal: 0,
                    useEasing: true,
                    useGrouping: true
                });
                cu.start();
            } else {
                // Fallback (simple increment)
                counter.textContent = String(target);
            }
        });
    };

    const animateBarsIn = (root) => {
        const bars = root.querySelectorAll('.progress-bar[data-width]');
        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            // Match the counter duration for visual sync
            bar.style.transitionDuration = '1.8s';
            requestAnimationFrame(() => {
                bar.style.width = width + '%';
            });
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const section = entry.target;
            // Trigger both animations at the same time for this section
            animateCountersIn(section);
            animateBarsIn(section);

            observer.unobserve(section);
        });
    }, { threshold: 0.35 });

    sections.forEach(section => observer.observe(section));
}

// Project filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Project modal
const projects = [
    {
        title: "Betsimisaraka Tours",
        image: "assets/img/projets/betsimisaraka.png",
        description: "Site vitrine touristique présentant les services, circuits, tarifs et l’équipe de l’agence. Inclut un formulaire de contact et une mise en page responsive.",
        technologies: ["HTML", "CSS", "PHP"],
        github: "https://github.com/rodibrian/betsimisaraka-tours",
        demo: ""
    },
    {
        title: "Gestion des Clients",
        image: "assets/img/projets/gestion-client.png",
        description: "Programme en C avec liste chaînée pour gérer les clients d’une banque : ajout, recherche, transactions et statistiques de comptes.",
        technologies: ["C", "Console"],
        github: "https://github.com/rodibrian/gestion-clients",
        demo: ""
    },
    {
        title: "Gestion de Livres",
        image: "assets/img/projets/gestion-livres.png",
        description: "Application de gestion de livres avec Qt et SQLite : ajout, modification, suppression et affichage des livres enregistrés avec ID automatique.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/gestion-livres",
        demo: ""
    },
    {
        title: "Gestion de Bibliothèque",
        image: "assets/img/projets/gestion-bibliotheque.png",
        description: "Logiciel Qt/SQLite pour gérer une bibliothèque : enregistrement, mise à jour et suppression de livres avec affichage structuré.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/bibliotheque",
        demo: ""
    },
    {
        title: "Gestion Étudiants & Articles",
         image: "assets/img/projets/gestion-etudiants.png",
        description: "Application Qt permettant la gestion des étudiants, matières et articles. Calcul automatique de moyennes et affichage des notes.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/gestion-etudiants",
        demo: ""
    },
    {
        title: "Fiche de paie",
         image: "assets/img/projets/fiche-de-paie.png",
        description: "Une application Qt qui permet de générer une fiche de paie à partir des informations du mois.",
        technologies: ["Qt Designer", "C++", "Maths"],
        github: "https://github.com/rodibrian/fiche-de-paie",
        demo: ""
    },
    {
        title: "Gestion Contacts et Appels",
         image: "assets/img/projets/gestion-contact.png",
        description: "Application Qt pour enregistrer et gérer des contacts, appels et historique. Recherche et mise à jour rapides des informations.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/gestion-contact",
        demo: ""
    },
    {
        title: "Gestion de Logements",
         image: "assets/img/projets/gestion-logements.png",
        description: "Logiciel Qt pour gérer les logements étudiants : ajout de chambres, répartition et suivi des étudiants hébergés.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/gestion-logements",
        demo: ""
    },
    {
        title: "Tableau de Synthèse Bilan",
         image: "assets/img/projets/tableau-synthese.png",
        description: "Application Qt générant un tableau de synthèse bilan (actif/passif) avec calculs et interprétation automatique des résultats.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/bilan-fonctionnel",
        demo: ""
    },
    {
        title: "Outils de Traitement Octave",
         image: "assets/img/projets/outils-octave.png",
        description: "Scripts Octave pour manipuler des matrices, résoudre des équations, traiter des signaux et effectuer des transformations de Fourier.",
        technologies: ["Octave", "Maths"],
        github: "https://github.com/rodibrian/outils-traitement",
        demo: ""
    },
    {
        title: "Voiture Taxi 3D",
         image: "assets/img/projets/voiture-taxi.png",
        description: "Modélisation 3D d’une voiture taxi avec OpenSCAD. Projet mettant en valeur la conception paramétrique et le rendu.",
        technologies: ["OpenSCAD", "3D"],
        github: "https://github.com/rodibrian/openScad-design",
        demo: ""
    },
    {
        title: "Logo / Maquette AEMIA",
         image: "assets/img/projets/logo-aemia.png",
        description: "Projet OpenSCAD pour concevoir une maquette 3D et un logo représentant l’association AEMIA.",
        technologies: ["OpenSCAD", "3D", "Design"],
        github: "https://github.com/rodibrian/openScad-design",
        demo: ""
    },
    {
        title: "Projecteur Serveur/Client",
         image: "assets/img/projets/projecteur.png",
        description: "Une application qui permet de projeter les informations du serveur vers une vue client (Java).",
        technologies: ["Java SE", "Design"],
        github: "https://github.com/rodibrian/projecteur-serveur_client",
        demo: ""
    },
    {
        title: "Dictionnaire Qt",
         image: "assets/img/projets/dictionnaire.png",
        description: "Mini-logiciel Qt permettant la gestion d’un dictionnaire : recherche de mots, traduction et consultation.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/dictionnaire",
        demo: ""
    }
];


function openProjectModal(index) {
    const project = projects[index];
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    // Update modal content
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.textContent = project.title;
        modalTitle.dataset.i18nDynamic = "true";
    }
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    const modalDesc = document.getElementById('modalDescription');
    if (modalDesc) {
        modalDesc.textContent = project.description;
        modalDesc.dataset.i18nDynamic = "true";
    }
    
    // Update technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'badge bg-primary me-1 mb-1';
        badge.textContent = tech;
        techContainer.appendChild(badge);
    });
    
    // Update links
    document.getElementById('modalGithub').href = project.github;

    const demoBtn = document.getElementById('modalDemo');
    const demoUrl = (project.demo || "").trim();
    if (demoBtn) {
        if (demoUrl) {
            demoBtn.href = demoUrl;
            demoBtn.classList.remove('d-none');
        } else {
            demoBtn.href = "#";
            demoBtn.classList.add('d-none');
        }
    }
    
    modal.show();
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('contactSuccess');
    const errorAlert = document.getElementById('contactError');

    if (!form) return;

    const canUseEmailJs =
        typeof emailjs !== 'undefined' &&
        EMAILJS_CONFIG.publicKey &&
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        !String(EMAILJS_CONFIG.publicKey).includes("YOUR_") &&
        !String(EMAILJS_CONFIG.serviceId).includes("YOUR_") &&
        !String(EMAILJS_CONFIG.templateId).includes("YOUR_");

    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey && !String(EMAILJS_CONFIG.publicKey).includes("YOUR_")) {
        try {
            emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
        } catch (_) {
            // ignore init failure and handle at submit time
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Envoi en cours...';
        submitBtn.disabled = true;
        
        successAlert?.classList.add('d-none');
        errorAlert?.classList.add('d-none');

        const templateParams = {
            // Template expects these exact keys
            title: data.subject,
            name: data.name,
            email_guest: data.email,
            message: data.message,

            // Optional extras (safe to ignore in template)
            to_email: "embony.rodibrian@gmail.com",
            from_name: data.name,
            from_email: data.email
        };

        const onSuccess = () => {
            form.style.display = 'none';
            successAlert?.classList.remove('d-none');

            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successAlert?.classList.add('d-none');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        };

        const onError = () => {
            errorAlert?.classList.remove('d-none');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        };

        if (!canUseEmailJs) {
            onError();
            return;
        }

        emailjs
            .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
            .then(onSuccess)
            .catch(onError);
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedScroll = debounce(() => {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you have a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

