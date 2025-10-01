// Main JavaScript File

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize all components
    initNavigation();
    initTypewriter();
    initCounters();
    initSkillBars();
    initProjectFilters();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
});

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
    const titles = [
        "Développeur C++/Qt",
        "Expert Frontend",
        "UI/UX Designer"
    ];

    if (typeof Typed !== 'undefined') {
        new Typed('#typewriter', {
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
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                countUp(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.7 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
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
        github: "https://github.com/rodibrian/betsimisaraka-tours"
    },
    {
        title: "Gestion des Clients",
        image: "assets/img/projets/gestion-client.png",
        description: "Programme en C avec liste chaînée pour gérer les clients d’une banque : ajout, recherche, transactions et statistiques de comptes.",
        technologies: ["C", "Console"],
        github: "https://github.com/rodibrian/gestion-clients"
    },
    {
        title: "Gestion de Livres",
        image: "assets/img/projets/gestion-livres.png",
        description: "Application de gestion de livres avec Qt et SQLite : ajout, modification, suppression et affichage des livres enregistrés avec ID automatique.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/gestion-livres"
    },
    {
        title: "Gestion de Bibliothèque",
        image: "assets/img/projets/gestion-bibliotheque.png",
        description: "Logiciel Qt/SQLite pour gérer une bibliothèque : enregistrement, mise à jour et suppression de livres avec affichage structuré.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "hgithub.com/rodibrian/bibliotheque"
    },
    {
        title: "Gestion Étudiants & Articles",
         image: "assets/img/projets/gestion-etudiants.png",
        description: "Application Qt permettant la gestion des étudiants, matières et articles. Calcul automatique de moyennes et affichage des notes.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/gestion-etudiants"
    },
    {
        title: "Fiche de paie",
         image: "assets/img/projets/fiche-de-paie.png",
        description: "Une simple application Qt qui permet de génerer un fiche paie à partir des informations du mois",
        technologies: ["Qt Designer", "C++", "Maths"],
        github: "https://github.com/rodibrian/fiche-de-paie"
    },
    {
        title: "Gestion Contacts et Appels",
         image: "assets/img/projets/gestion-contact.png",
        description: "Application Qt pour enregistrer et gérer des contacts, appels et historique. Recherche et mise à jour rapides des informations.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/gestion-contact"
    },
    {
        title: "Gestion de Logements",
         image: "assets/img/projets/gestion-logements.png",
        description: "Logiciel Qt pour gérer les logements étudiants : ajout de chambres, répartition et suivi des étudiants hébergés.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/gestion-logements"
    },
    {
        title: "Tableau de Synthèse Bilan",
         image: "assets/img/projets/tableau-synthese.png",
        description: "Application Qt générant un tableau de synthèse bilan (actif/passif) avec calculs et interprétation automatique des résultats.",
        technologies: ["C++", "Qt"],
        github: "https://github.com/rodibrian/bilan-fonctionnel"
    },
    {
        title: "Outils de Traitement Octave",
         image: "assets/img/projets/outils-octave.png",
        description: "Scripts Octave pour manipuler des matrices, résoudre des équations, traiter des signaux et effectuer des transformations de Fourier.",
        technologies: ["Octave", "Maths"],
        github: "https://github.com/rodibrian/outils-traitement"
    },
    {
        title: "Voiture Taxi 3D",
         image: "assets/img/projets/voiture-taxi.png",
        description: "Modélisation 3D d’une voiture taxi avec OpenSCAD. Projet mettant en valeur la conception paramétrique et le rendu.",
        technologies: ["OpenSCAD", "3D"],
        github: "https://github.com/rodibrian/openScad-design"
    },
    {
        title: "Logo / Maquette AEMIA",
         image: "assets/img/projets/logo-aemia.png",
        description: "Projet OpenSCAD pour concevoir une maquette 3D et un logo représentant l’association AEMIA.",
        technologies: ["OpenSCAD", "3D", "Design"],
        github: "https://github.com/rodibrian/openScad-design"
    },
    {
        title: "Projecteur Serveur/Client",
         image: "assets/img/projets/projecteur.png",
        description: "Une application qui permet de projeter les informations du serveur vers une vue client,en Java Server.",
        technologies: ["Java SE", "Design"],
        github: "https://github.com/rodibrian/projecteur-serveur_client"
    },
    {
        title: "Dictionnaire Qt",
         image: "assets/img/projets/dictionnaire.png",
        description: "Mini-logiciel Qt permettant la gestion d’un dictionnaire : recherche de mots, traduction et consultation.",
        technologies: ["C++", "Qt", "SQLite"],
        github: "https://github.com/rodibrian/dictionnaire"
    }
];


function openProjectModal(index) {
    const project = projects[index];
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
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
    //document.getElementById('modalDemo').href = project.demo;
    document.getElementById('modalGithub').href = project.github;
    
    modal.show();
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('contactSuccess');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = 'none';
            successAlert.classList.remove('d-none');
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successAlert.classList.add('d-none');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        }, 2000);
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

