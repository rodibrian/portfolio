const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const body = document.body;
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const galleryFilterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const certificationTrack = document.getElementById("certificationTrack");
const certificationCards = Array.from(document.querySelectorAll(".certification-track .cert-card"));
const certPrevButton = document.getElementById("certPrev");
const certNextButton = document.getElementById("certNext");

const EMAILJS_SERVICE_ID = "rodibrian_gmailjs";
const EMAILJS_TEMPLATE_ID = "template_6vsrdho";
const EMAILJS_PUBLIC_KEY = "YX4PR5z1IhqV01ii1";

const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.journey": "Journey",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.volunteer": "Volunteer",
    "nav.projects": "Projects",
    "nav.featuredProjects": "Featured projects",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "theme.toggle": "Switch theme",
    "lang.toggle": "Switch language",
    "hero.kicker": "Web & Desktop Developer • Founder of Baia Creative Solutions",
    "hero.title": "Rodi Brian Embony",
    "hero.lead": "Computer engineering, tailored web and desktop applications, digital design, and support for concrete projects.",
    "hero.viewProjects": "See my projects",
    "hero.contact": "Contact me",
    "hero.downloadCv": "Download my Resume",
    "hero.location": "Toamasina, Madagascar",
    "hero.availability": "Open to collaborations",
    "hero.kickerText": "Web & Desktop Developer",
    "hero.kickerBrand": "Founder of Baia Creative Solutions",
    "hero.cardCaption": "Create with intention",
    "hero.cardStrong": "Ideas that become useful.",
    "hero.socialLinkedIn": "LinkedIn",
    "hero.socialGitHub": "GitHub",
    "hero.socialFacebook": "Facebook",
    "hero.socialX": "X",
    "about.kicker": "About my journey",
    "about.title": "I design and develop web and desktop applications with a strong product mindset.",
    "about.p1": "It all started at university, where I mastered HTML, CSS, JavaScript, Bootstrap, PHP, C/Gtk, Java, and C++/Qt. That technical foundation was then strengthened in the professional environment at DDS, where I developed business applications with Java SE and Spring Boot—learning to deliver robust solutions in demanding contexts.",
    "about.p2": "Today, I bring that expertise through Baia Creative Solutions, the structure I founded to support clients in building showcases, custom desktop applications, and digital assistance—from need analysis to delivery.",
    "about.p3": "My path is not limited to code: an international service mission in Benin and Togo taught me how to lead, adapt, and communicate effectively in complex intercultural contexts—skills I put to work in every project and every client relationship.",
    "about.badge1": "Autonomy",
    "about.badge2": "Leadership",
    "about.badge3": "Adaptability",
    "about.badge4": "Critical mindset",
    "about.proof1": "2019",
    "about.proof1Sub": "Beginning of the professional path",
    "about.proof2": "Web + Desktop",
    "about.proof2Sub": "Solutions designed for the field",
    "about.proof3": "1 approach",
    "about.proof3Sub": "Clarity, autonomy and useful impact",
    "career.eyebrow": "Next step",
    "career.title": "What I’m looking for",
    "career.text": "New professional challenges that allow me to grow in my field, primarily in remote work, open to hybrid arrangements.",
    "career.link": "Let’s talk about an opportunity",
    "career.asideLabel": "Ideal setting",
    "career.item1": "Remote work priority",
    "career.item2": "Open to hybrid",
    "career.item3": "Projects with real impact",
    "skills.eyebrow": "03 / Skills",
    "skills.title": "A solid technical foundation, completed by a design-oriented and results-driven approach.",
    "skills.languages": "Languages",
    "skills.languagesSubtitle": "Build the foundation",
    "skills.frameworks": "Frameworks & databases",
    "skills.frameworksSubtitle": "Structure the product",
    "skills.tools": "Tools",
    "skills.toolsSubtitle": "Accelerate each step",
    "skills.soft": "Soft skills",
    "skills.softSubtitle": "Move the collective forward",
    "skills.management": "Management & Entrepreneurship",
    "skills.managementSubtitle": "Drive the vision",
    "skills.item.c": "C",
    "skills.item.cpp": "C++",
    "skills.item.java": "Java SE",
    "skills.item.js": "JavaScript",
    "skills.item.python": "Python",
    "skills.item.php": "PHP",
    "skills.item.qt": "Qt",
    "skills.item.bootstrap": "Bootstrap",
    "skills.item.spring": "Spring Boot",
    "skills.item.mysql": "MySQL",
    "skills.item.sqlite": "SQLite",
    "skills.item.postgres": "PostgreSQL",
    "skills.item.project": "Project management",
    "skills.item.client": "Client relations",
    "skills.item.analysis": "Needs analysis",
    "skills.item.direction": "Business direction",
    "skills.soft.org": "Organization",
    "skills.soft.lead": "Leadership",
    "skills.soft.autonomy": "Autonomy",
    "skills.soft.creativity": "Creativity",
    "skills.soft.patience": "Patience",
    "skills.soft.communication": "Communication",
    "skills.soft.stress": "Stress management",
    "skills.soft.empathy": "Empathy",
    "experience.eyebrow": "Experience",
    "experience.title": "A path built around product, fieldwork and continuous learning.",
    "experience.bcsTitle": "Founder • CEO • Developer — Baia Creative Solutions",
    "experience.bcsDate": "2026 – Today",
    "experience.bcsTag": "Startup",
    "experience.bcsText": "Creation of a digital services structure focused on web and desktop development, design, and client support.",
    "experience.bcsPoint1": "Design of showcase websites, portfolios, and modern interfaces thought through real client needs.",
    "experience.bcsPoint2": "Development of custom desktop applications and digital support with a results-oriented approach.",
    "experience.bcsPoint3": "Project management, client relations, visual identity, communication, and strategic support.",
    "experience.bcsLink1": "See the projects",
    "experience.bcsLink2": "Get in touch",
    "experience.galleryTitle": "Photo gallery & collage",
    "experience.galleryText": "A visual overview of the evolution of my journey, the projects, and the experiences that shaped my approach.",
    "experience.galleryCard1Title": "Presentation of Baia Creative Solutions",
    "experience.galleryCard1Text": "Official launch of Baia Creative Solutions on social media",
    "experience.galleryCard1Alt": "Illustration of the Baia Creative Solutions project",
    "experience.galleryCard2Title": "Mission & leadership",
    "experience.galleryCard2Text": "A journey enriched by commitment, adaptability, and listening.",
    "experience.galleryCard2Alt": "Illustration of the professional journey",
    "experience.galleryCard3Title": "ERP & business solutions",
    "experience.galleryCard3Text": "Applications designed for productivity, traceability, and operational clarity.",
    "experience.galleryCard3Alt": "Illustration of the IjeeryApp project",
    "experience.missionTitle": "International service mission — Benin & Togo",
    "experience.missionDate": "2023 – 2025",
    "experience.ddsText": "Development of technical applications and participation in interface design, front-end work, and business logic within a professional environment.",
    "experience.ddsPoint1": "Analysis of client needs and translation into functional, clear, and actionable solutions.",
    "experience.ddsPoint2": "Development with Java, Spring Boot, HTML, CSS, and JavaScript, with attention to code quality.",
    "experience.ddsPoint3": "Teamwork with a more product-oriented approach focused on performance and maintainability.",
    "experience.missionTag": "Mission",
    "experience.missionText": "Contribution to service actions in multicultural contexts with a strong human, social, and organizational dimension.",
    "experience.missionPoint1": "Support for people and families in sensitive situations with empathy and responsiveness.",
    "experience.missionPoint2": "Coordination of field activities and local organization to keep actions running smoothly.",
    "experience.missionPoint3": "Strengthening intercultural communication, resilience, and service mindset for the collective.",
    "education.eyebrow": "Education",
    "education.title": "A strong academic foundation, enriched by practical and entrepreneurial experience.",
    "education.infoTitle": "Bachelor in Computer Engineering",
    "education.infoInstitution": "University of Toamasina / Madagascar",
    "education.infoYear": "2022 – 2025",
    "education.infoText": "Training focused on software development, systems, databases, networking, and user-centered designing.",
    "education.infoDetails": "Programming in C, Java, and PHP; web development; databases and systems; algorithms and software engineering.",
    "education.businessTitle": "Bachelor Business Management",
    "education.businessInstitution": "BYU Online / BYU-Pathway",
    "education.businessYear": "In progress",
    "education.businessText": "Complementary training in business management, professional communication, leadership, finance, and marketing to reinforce the entrepreneurial aspect of my journey.",
    "education.businessDetails": "Business strategy, professional communication, leadership, finance, marketing, and entrepreneurial development.",
    "certifications.eyebrow": "Certifications",
    "certifications.title": "Concrete proof of experience, rigor, and engagement, presented with a stronger visual identity.",
    "certifications.card1Title": "Volunteer mission completion certificate",
    "certifications.card1Badge": "Mission evidence",
    "certifications.card1Label": "Attestation",
    "certifications.card1Date": "2023–2025",
    "certifications.card1Text": "Certificate of a full-time mission carried out in Benin and Togo, highlighting commitment, responsibility, and international cooperation.",
    "certifications.card2Title": "Green Ambassador Attestation",
    "certifications.card2Badge": "Civic training",
    "certifications.card2Label": "Recognition",
    "certifications.card2Date": "Education",
    "certifications.card2Text": "Recognition for environmental awareness training and participation in actions related to environmental protection.",
    "certifications.card3Title": "Internship Attestation in Computer Maintenance & Networks",
    "certifications.card3Badge": "Practical internship",
    "certifications.card3Label": "Experience",
    "certifications.card3Date": "Technical",
    "certifications.card3Text": "Proof of a hands-on internship in computer maintenance, troubleshooting, and network support, enriching the technical and professional experience.",
    "certifications.card4Title": "Master Class Certificate — RARY ARO MADA",
    "certifications.card4Badge": "Leadership",
    "certifications.card4Label": "Training",
    "certifications.card4Date": "Civic",
    "certifications.card4Text": "Certification related to training in civic awareness and leadership, marked by engagement in peace, dialogue, and education initiatives.",
    "certifications.card5Title": "Mikrotik Workshop at Bridge",
    "certifications.card5Badge": "Network workshop",
    "certifications.card5Label": "Skill",
    "certifications.card5Date": "Dec. 2025",
    "certifications.card5Text": "Practical training on the basics of network configuration, including server, access point, bridge, and network administration concepts.",
    "volunteer.eyebrow": "Volunteer work",
    "volunteer.title": "A commitment that strengthened my adaptability, listening, coordination, and leadership.",
    "volunteer.internationalTitle": "International mission — Benin and Togo",
    "volunteer.internationalKicker": "International engagement",
    "volunteer.internationalText": "May 2023 – May 2025 • Participation in service actions at the heart of multicultural contexts, with a strong human, social, and organizational dimension.",
    "volunteer.internationalPoint1": "Support for people and families in sensitive situations, with empathy, listening, and responsiveness.",
    "volunteer.internationalPoint2": "Coordination of field activities, local organization, and contribution to the fluidity of actions.",
    "volunteer.internationalPoint3": "Strengthening intercultural communication, resilience, and service mindset for the collective.",
    "volunteer.communityTitle": "Local community service",
    "volunteer.communityKicker": "Community engagement",
    "volunteer.communityText": "Since December 2025 • Support for volunteer coordination within a community council in a context of proximity and collective engagement.",
    "volunteer.communityPoint1": "Support and mobilization of volunteers around concrete and useful actions for the community.",
    "volunteer.tagService": "Service",
    "volunteer.tagListening": "Listening",
    "volunteer.tagCoordination": "Coordination",
    "volunteer.tagLeadership": "Leadership",
    "volunteer.tagCommunity": "Community",
    "volunteer.tagOrganization": "Organization",
    "volunteer.tagSolidarity": "Solidarity",
    "volunteer.tagExchange": "Exchange",
    "volunteer.communityPoint2": "Contribution to priority setting, internal communication, and the animation of initiatives.",
    "volunteer.communityPoint3": "Development of solidarity, organization, and responsibility within the group.",
    "projects.eyebrow": "Featured projects",
    "projects.title": "Solutions designed for real needs, with a strong focus on clarity and usability.",
    "projects.ijeeryTitle": "IjeeryApp",
    "projects.ijeeryText": "Desktop ERP to automate and centralize the operations of a wholesaler, with inventory, sales, cash register, and reporting modules.",
    "projects.submTitle": "Sub-M",
    "projects.submText": "Water distribution management application with subscriber and operations tracking.",
    "projects.upcomingTitle": "Upcoming project",
    "projects.upcomingText": "A restaurant management application under development, with business logic designed for operational teams.",
    "projects.details": "View details",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "A view of my projects, achievements, and participations, presented as a genuine portfolio showcase.",
    "gallery.filterAll": "All",
    "gallery.filterProjects": "Projects",
    "gallery.filterAchievements": "Achievements",
    "gallery.filterParticipation": "Participations",
    "gallery.item1Title": "Strategic project",
    "gallery.item1Text": "A major achievement in the professional journey.",
    "gallery.item2Title": "Digital innovation",
    "gallery.item2Text": "Design and implementation of an innovative solution.",
    "gallery.item3Title": "IjeeryApp",
    "gallery.item3Text": "ERP desktop to automate operations.",
    "gallery.item4Title": "Mada decoration service",
    "gallery.item4Text": "Decoration service for wall and ceiling projects.",
    "gallery.item5Title": "Digital library",
    "gallery.item5Text": "Mini-library management application.",
    "gallery.item6Title": "Housing management",
    "gallery.item6Text": "University housing management application.",
    "gallery.item7Title": "International mission",
    "gallery.item7Text": "Field engagement and human support.",
    "gallery.item8Title": "Community service",
    "gallery.item8Text": "Volunteer coordination and mobilization.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s discuss your project.",
    "contact.intro": "Available for freelance missions, remote collaborations, and medium-term projects. I also work through Baia Creative Solutions to support clients in their digital needs.",
    "contact.pill": "Available",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.locationLabel": "Location",
    "contact.structureLabel": "Structure",
    "contact.submit": "Send",
    "contact.formName": "Name",
    "contact.formEmail": "Email",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Message",
    "contact.formPlaceholder": "E.g. Web project, desktop app, collaboration",
    "footer.brandText": "Web & Desktop Developer, I design useful, clear, and tailored digital solutions for each project.",
    "footer.availability": "Available for new projects",
    "footer.linksNav": "Navigation",
    "footer.linksAbout": "About",
    "footer.linksSkills": "Skills",
    "footer.linksExperience": "Experience",
    "footer.linksEducation": "Education",
    "footer.linksProjects": "Projects",
    "footer.linksContact": "Contact",
    "footer.socials": "Socials",
    "footer.partners": "Partners",
    "footer.partnerText": "Design, development, and digital strategy support.",
    "footer.copy": "© 2026 Rodi Brian Embony. All rights reserved.",
    "footer.cta": "Let’s talk"
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.journey": "Parcours",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.certifications": "Certifications",
    "nav.volunteer": "Bénévolat",
    "nav.projects": "Projets",
    "nav.featuredProjects": "Projets phares",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "theme.toggle": "Basculer le thème",
    "lang.toggle": "Changer la langue",
    "hero.kicker": "Développeur Web & Desktop • Fondateur de Baia Creative Solutions",
    "hero.title": "Rodi Brian Embony",
    "hero.lead": "Génie informatique, applications web et desktop sur mesure, design numérique et accompagnement de projets concrets.",
    "hero.viewProjects": "Voir mes projets",
    "hero.contact": "Me contacter",
    "hero.downloadCv": "Télécharger mon CV",
    "hero.location": "Toamasina, Madagascar",
    "hero.availability": "Ouvert aux collaborations",
    "hero.kickerText": "Développeur Web & Desktop",
    "hero.kickerBrand": "Fondateur de Baia Creative Solutions",
    "hero.cardCaption": "Créer avec intention",
    "hero.cardStrong": "Des idées qui deviennent utiles.",
    "hero.socialLinkedIn": "LinkedIn",
    "hero.socialGitHub": "GitHub",
    "hero.socialFacebook": "Facebook",
    "hero.socialX": "X",
    "about.kicker": "À propos de mon parcours",
    "about.title": "Ingénieur en informatique, je conçois et développe des applications web et desktop depuis 2019",
    "about.p1": "Tout a commencé sur les bancs de l'université, où j'ai maîtrisé HTML, CSS, JavaScript, Bootstrap, PHP, C/Gtk, Java et C++/Qt. Cette base technique s'est ensuite solidifiée en entreprise chez DDS, où j'ai développé des applications métier avec Java SE et Spring Boot — apprenant à livrer des solutions robustes dans des contextes professionnels exigeants.",
    "about.p2": "Aujourd'hui, je porte cette expertise à travers Baia Creative Solutions, la structure que j'ai fondée pour accompagner mes clients dans la création de sites vitrines, d'applications desktop sur mesure et d'assistance digitale — de l'analyse du besoin jusqu'à la livraison.",
    "about.p3": "Mon parcours ne se limite pas au code : une mission internationale de service bénévole au Bénin et au Togo m'a appris à diriger, m'adapter et communiquer efficacement dans des contextes interculturels complexes — des compétences que je mobilise aujourd'hui dans chaque projet et chaque relation client.",
    "about.badge1": "Autonomie",
    "about.badge2": "Leadership",
    "about.badge3": "Adaptabilité",
    "about.badge4": "Esprit critique",
    "about.proof1": "2019",
    "about.proof1Sub": "Début du parcours professionnel",
    "about.proof2": "Web + Desktop",
    "about.proof2Sub": "Des solutions pensées pour le terrain",
    "about.proof3": "1 approche",
    "about.proof3Sub": "Clarté, autonomie et impact utile",
    "career.eyebrow": "Prochaine étape",
    "career.title": "Ce que je recherche",
    "career.text": "De nouveaux défis professionnels me permettant de progresser dans mon domaine, en priorité en télétravail, ouvert à l’hybride.",
    "career.link": "Échangeons sur une opportunité",
    "career.asideLabel": "Cadre idéal",
    "career.item1": "Télétravail prioritaire",
    "career.item2": "Ouvert à l’hybride",
    "career.item3": "Projets à impact concret",
    "skills.eyebrow": "03 / Compétences",
    "skills.title": "Un socle technique solide, complété par une approche design et orientée résultats.",
    "skills.languages": "Langages",
    "skills.languagesSubtitle": "Construire la base",
    "skills.frameworks": "Frameworks & bases de données",
    "skills.frameworksSubtitle": "Structurer le produit",
    "skills.tools": "Outils",
    "skills.toolsSubtitle": "Accélérer chaque étape",
    "skills.soft": "Soft skills",
    "skills.softSubtitle": "Faire avancer le collectif",
    "skills.management": "Gestion & Entrepreneuriat",
    "skills.managementSubtitle": "Piloter la vision",
    "skills.item.c": "C",
    "skills.item.cpp": "C++",
    "skills.item.java": "Java SE",
    "skills.item.js": "JavaScript",
    "skills.item.python": "Python",
    "skills.item.php": "PHP",
    "skills.item.qt": "Qt",
    "skills.item.bootstrap": "Bootstrap",
    "skills.item.spring": "Spring Boot",
    "skills.item.mysql": "MySQL",
    "skills.item.sqlite": "SQLite",
    "skills.item.postgres": "PostgreSQL",
    "skills.item.project": "Gestion de projet",
    "skills.item.client": "Relation client",
    "skills.item.analysis": "Analyse des besoins",
    "skills.item.direction": "Direction d’entreprise",
    "skills.soft.org": "Organisation",
    "skills.soft.lead": "Leadership",
    "skills.soft.autonomy": "Autonomie",
    "skills.soft.creativity": "Créativité",
    "skills.soft.patience": "Patience",
    "skills.soft.communication": "Communication",
    "skills.soft.stress": "Gestion du stress",
    "skills.soft.empathy": "Empathie",
    "experience.eyebrow": "Expériences",
    "experience.title": "Un parcours construit autour du produit, du terrain et de l’apprentissage continu.",
    "experience.bcsTitle": "Fondateur • CEO • Développeur — Baia Creative Solutions",
    "experience.bcsDate": "2026 – Aujourd’hui",
    "experience.bcsTag": "Startup",
    "experience.bcsText": "Création d’une structure de services numériques axée sur le développement web, desktop, design et accompagnement de clients.",
    "experience.bcsPoint1": "Conception de sites vitrines, portfolios et interfaces modernes pensées pour les besoins réels des clients.",
    "experience.bcsPoint2": "Développement d’applications desktop et support numérique sur mesure, avec une approche orientée résultat.",
    "experience.bcsPoint3": "Gestion de projet, relation client, identité visuelle, communication et accompagnement stratégique.",
    "experience.bcsLink1": "Voir les projets",
    "experience.bcsLink2": "Prendre contact",
    "experience.galleryTitle": "Galerie photo & collage",
    "experience.galleryText": "Un aperçu visuel de l’évolution de mon parcours, des projets et des expériences qui ont façonné mon approche.",
    "experience.galleryCard1Title": "Présentation de Baia Creative Solutions",
    "experience.galleryCard1Text": "Lancement officiel de Baia Creative Solutions sur les réseaux",
    "experience.galleryCard1Alt": "Illustration du projet Baia Creative Solutions",
    "experience.galleryCard2Title": "Mission & leadership",
    "experience.galleryCard2Text": "Un parcours enrichi par l’engagement, l’adaptation et l’écoute.",
    "experience.galleryCard2Alt": "Illustration du parcours professionnel",
    "experience.galleryCard3Title": "ERP & solutions métiers",
    "experience.galleryCard3Text": "Applications pensées pour la productivité, la traçabilité et la clarté des opérations.",
    "experience.galleryCard3Alt": "Illustration du projet IjeeryApp",
    "experience.missionTitle": "Mission internationale — Bénin et Togo",
    "experience.missionDate": "2023 – 2025",
    "experience.ddsText": "Développement d’applications techniques et participations à la conception d’interface, au front-end et à la logique métier au sein d’un environnement professionnel.",
    "experience.ddsPoint1": "Analyse des besoins clients et traduction en solutions fonctionnelles, claires et exploitable.",
    "experience.ddsPoint2": "Développement avec Java, Spring Boot, HTML, CSS et JavaScript, avec une attention à la qualité du code.",
    "experience.ddsPoint3": "Travail en équipe avec une approche plus orientée produit, performance et maintenabilité.",
    "experience.missionTag": "Mission",
    "experience.missionText": "Contribution à des actions de service dans des contextes multiculturels, avec une forte dimension humaine, sociale et organisationnelle.",
    "experience.missionPoint1": "Accompagnement de personnes et de familles dans des situations sensibles, avec écoute, empathie et réactivité.",
    "experience.missionPoint2": "Coordination d’activités terrain et organisation locale pour fluidifier les actions.",
    "experience.missionPoint3": "Renforcement de la communication interculturelle, de la résilience et du sens du service au profit du collectif.",
    "education.eyebrow": "Formation",
    "education.title": "Une base académique solide, enrichie par une expérience pratique et entrepreneuriale.",
    "education.infoTitle": "Bachelor en ingénierie informatique",
    "education.infoInstitution": "Université de Toamasina / Madagascar",
    "education.infoYear": "2022 – 2025",
    "education.infoText": "Formation centrée sur le développement logiciel, les systèmes, les bases de données, les réseaux et la conception orientée utilisateur.",
    "education.infoDetails": "Programmation en C, Java et PHP ; développement web ; bases de données et systèmes ; algorithmes et ingénierie logicielle.",
    "education.businessTitle": "Bachelor Business Management",
    "education.businessInstitution": "BYU Online / BYU-Pathway",
    "education.businessYear": "En cours",
    "education.businessText": "Formation complémentaire en gestion d’entreprise, communication professionnelle, leadership, finance et marketing, pour renforcer l’aspect entrepreneurial de mon parcours.",
    "education.businessDetails": "Gestion d’entreprise, communication professionnelle, leadership, finance, marketing et développement entrepreneurial.",
    "certifications.eyebrow": "Certifications",
    "certifications.title": "Des preuves concrètes d’expérience, de rigueur et d’engagement, présentées avec une identité visuelle plus forte.",
    "certifications.card1Title": "Certificat de fin de mission bénévole",
    "certifications.card1Badge": "Preuve de mission",
    "certifications.card1Label": "Attestation",
    "certifications.card1Date": "2023–2025",
    "certifications.card1Text": "Attestation d’une mission à temps plein réalisée au Bénin et au Togo, valorisant l’engagement, la responsabilité et la coopération internationale.",
    "certifications.card2Title": "Attestation Ambassadeur Vert",
    "certifications.card2Badge": "Formation citoyenne",
    "certifications.card2Label": "Reconnaissance",
    "certifications.card2Date": "Éducation",
    "certifications.card2Text": "Reconnaissance de la participation à une formation environnementale et de sensibilisation, avec une implication dans les actions liées à la protection de l’environnement.",
    "certifications.card3Title": "Attestation de stage Maintenance Informatique & Réseaux",
    "certifications.card3Badge": "Stage pratique",
    "certifications.card3Label": "Expérience",
    "certifications.card3Date": "Technique",
    "certifications.card3Text": "Preuve d’un stage pratique en maintenance informatique, dépannage et support réseau, enrichissant l’expérience technique et professionnelle.",
    "certifications.card4Title": "Certificat Master Class RARY ARO MADA",
    "certifications.card4Badge": "Leadership",
    "certifications.card4Label": "Formation",
    "certifications.card4Date": "Civic",
    "certifications.card4Text": "Certification liée à une formation de sensibilisation et de leadership civic, marquée par un engagement dans des initiatives de paix, de dialogue et d’éducation.",
    "certifications.card5Title": "Atelier Mikrotik chez Bridge",
    "certifications.card5Badge": "Atelier réseau",
    "certifications.card5Label": "Compétence",
    "certifications.card5Date": "Déc. 2025",
    "certifications.card5Text": "Formation pratique sur les bases de configuration réseau, notamment les notions de serveur, point d’accès, bridge et administration de réseau.",
    "volunteer.eyebrow": "Bénévolat",
    "volunteer.title": "Un engagement qui a renforcé ma capacité d’adaptation, d’écoute, de coordination et de leadership.",
    "volunteer.internationalTitle": "Mission internationale — Bénin et Togo",
    "volunteer.internationalKicker": "Engagement international",
    "volunteer.internationalText": "Mai 2023 – Mai 2025 • Participation à des actions de service au cœur de contextes multiculturels, avec une forte dimension humaine, sociale et organisationnelle.",
    "volunteer.internationalPoint1": "Accompagnement de personnes et de familles dans des situations sensibles, avec écoute, empathie et réactivité.",
    "volunteer.internationalPoint2": "Coordination d’activités terrain, gestion de l’organisation locale et contribution à la fluidité des actions menées.",
    "volunteer.internationalPoint3": "Renforcement de la communication interculturelle, de la résilience et du sens du service au profit du collectif.",
    "volunteer.communityTitle": "Service communautaire local",
    "volunteer.communityKicker": "Engagement de proximité",
    "volunteer.communityText": "Depuis décembre 2025 • Appui à la coordination de bénévoles au sein d’un conseil communautaire, dans un cadre de proximité et d’engagement collectif.",
    "volunteer.communityPoint1": "Accompagnement et mobilisation d’acteurs bénévoles autour d’actions concrètes et utiles pour la communauté.",
    "volunteer.tagService": "Service",
    "volunteer.tagListening": "Écoute",
    "volunteer.tagCoordination": "Coordination",
    "volunteer.tagLeadership": "Leadership",
    "volunteer.tagCommunity": "Communauté",
    "volunteer.tagOrganization": "Organisation",
    "volunteer.tagSolidarity": "Solidarité",
    "volunteer.tagExchange": "Échange",
    "volunteer.communityPoint2": "Contribution à la mise en ordre des priorités, à la communication interne et à l’animation des initiatives.",
    "volunteer.communityPoint3": "Développement d’un esprit de solidarité, d’organisation et de responsabilisation au sein du groupe.",
    "projects.eyebrow": "Projets phares",
    "projects.title": "Des solutions pensées pour des besoins réels, avec une forte attention à la clarté et à l’usage.",
    "projects.ijeeryTitle": "IjeeryApp",
    "projects.ijeeryText": "ERP desktop pour automatiser et centraliser les opérations d’un grossiste, avec modules stock, ventes, caisse et reporting.",
    "projects.submTitle": "Sub-M",
    "projects.submText": "Application de gestion de service de distribution d’eau potable avec suivi des abonnés et des opérations.",
    "projects.upcomingTitle": "Projet à venir",
    "projects.upcomingText": "Application de gestion de restaurant à venir, avec une logique métier pensée pour les équipes opérationnelles.",
    "projects.details": "Voir le détail",
    "gallery.eyebrow": "Galerie",
    "gallery.title": "Un aperçu de mes projets, réalisations et participations, présenté comme une vraie vitrine de portfolio.",
    "gallery.filterAll": "Tous",
    "gallery.filterProjects": "Projets",
    "gallery.filterAchievements": "Réalisations",
    "gallery.filterParticipation": "Participation",
    "gallery.item1Title": "Projet stratégique",
    "gallery.item1Text": "Une réalisation majeure dans le parcours professionnel.",
    "gallery.item2Title": "Innovation digitale",
    "gallery.item2Text": "Conception et mise en œuvre d’une solution innovante.",
    "gallery.item3Title": "IjeeryApp",
    "gallery.item3Text": "ERP desktop pour automatiser les opérations.",
    "gallery.item4Title": "Service décoration Mada",
    "gallery.item4Text": "Service de décoration pour les plafonds muraux.",
    "gallery.item5Title": "Bibliothèque numérique",
    "gallery.item5Text": "Mini-application de gestion de bibliothèque.",
    "gallery.item6Title": "Gestion logement",
    "gallery.item6Text": "Mini-application universitaire de gestion des logements.",
    "gallery.item7Title": "Mission internationale",
    "gallery.item7Text": "Engagement terrain et accompagnement humain.",
    "gallery.item8Title": "Service communautaire",
    "gallery.item8Text": "Coordination et mobilisation bénévole.",
    "contact.eyebrow": "Contact",
    "contact.title": "Discutons de votre projet.",
    "contact.intro": "Disponible pour des missions freelance, des collaborations à distance et des projets à moyen terme. Je travaille aussi à travers Baia Creative Solutions pour accompagner les clients dans leurs besoins numériques.",
    "contact.pill": "Disponible",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Téléphone",
    "contact.locationLabel": "Localisation",
    "contact.structureLabel": "Structure",
    "contact.submit": "Envoyer",
    "contact.formName": "Nom",
    "contact.formEmail": "Email",
    "contact.formSubject": "Objet",
    "contact.formMessage": "Message",
    "contact.formPlaceholder": "Ex. Projet web, application desktop, collaboration",
    "footer.brandText": "Développeur Web & Desktop, je conçois des solutions numériques utiles, claires et adaptées aux réalités de chaque projet.",
    "footer.availability": "Disponible pour de nouveaux projets",
    "footer.linksNav": "Navigation",
    "footer.linksAbout": "À propos",
    "footer.linksSkills": "Compétences",
    "footer.linksExperience": "Expérience",
    "footer.linksEducation": "Formation",
    "footer.linksProjects": "Projets",
    "footer.linksContact": "Contact",
    "footer.socials": "Réseaux",
    "footer.partners": "Partenaires",
    "footer.partnerText": "Design, développement et accompagnement stratégique digital.",
    "footer.copy": "© 2026 Rodi Brian Embony. Tous droits réservés.",
    "footer.cta": "Échangeons"
  }
};

let currentLanguage = localStorage.getItem("siteLanguage") || "en";

function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  const icon = themeToggle?.querySelector("i");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

function applyTranslations(language = currentLanguage) {
  currentLanguage = language;
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.body.dataset.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = dictionary[key];
    if (value !== undefined) {
      if (element.dataset.i18nHtml === "true") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const attrMap = JSON.parse(element.getAttribute("data-i18n-attr") || "{}");
    Object.entries(attrMap).forEach(([attributeName, key]) => {
      const value = dictionary[key];
      if (value !== undefined) {
        element.setAttribute(attributeName, value);
      }
    });
  });

  const languageLabel = languageToggle?.querySelector("span");
  if (languageLabel) {
    languageLabel.textContent = language === "en" ? "FR" : "EN";
  }
  languageToggle?.setAttribute("aria-label", language === "en" ? "Passer en français" : "Switch to English");
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("siteLanguage", language);
  applyTranslations(language);
}

function initTheme() {
  const saved = window.sessionStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (systemPrefersDark ? "dark" : "light");
  applyTheme(theme);
}

function initMenu() {
  menuToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu?.querySelectorAll("a, .nav-select-toggle").forEach((element) => {
    element.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu?.contains(event.target)) {
      navMenu?.querySelectorAll(".nav-select").forEach((select) => select.classList.remove("open"));
    }
  });

  navMenu?.querySelectorAll(".nav-select-toggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const select = button.closest(".nav-select");
      const isOpen = select.classList.contains("open");

      navMenu.querySelectorAll(".nav-select").forEach((item) => item.classList.remove("open"));
      if (!isOpen) select.classList.add("open");
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function initThemeToggle() {
  themeToggle?.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark") ? "light" : "dark";
    window.sessionStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
}

function initLanguageToggle() {
  languageToggle?.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "fr" : "en";
    setLanguage(nextLanguage);
  });
}

function initSkillPercentages() {
  document.querySelectorAll(".skill-list li[data-score]").forEach((item) => {
    const scoreEl = item.querySelector(".skill-score");
    const progressBar = item.querySelector(".skill-progress-bar");
    if (!scoreEl) return;

    const score = Number(item.dataset.score);
    if (!Number.isFinite(score)) return;

    const normalizedScore = Math.max(0, Math.min(100, score));
    scoreEl.textContent = `${normalizedScore}%`;

    if (progressBar) {
      progressBar.style.width = `${normalizedScore}%`;
    }
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealItems.forEach((item) => observer.observe(item));
}

function initActiveNav() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const links = Array.from(document.querySelectorAll(".nav-links a"));

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 140;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
    });
  });
}

function updateFormStatus(message, type = "success") {
  if (!formStatus) return;
  formStatus.classList.remove("success", "error");
  formStatus.classList.add(type);
  formStatus.innerHTML = `
    <i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-triangle-exclamation"}"></i>
    <span>${message}</span>
  `;
}

function initEmailJS() {
  if (!window.emailjs) return false;
  if (EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) return false;
  emailjs.init(EMAILJS_PUBLIC_KEY);
  return true;
}

function initContactForm() {
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!window.emailjs) {
      updateFormStatus("Le service d'envoi n'est pas chargé. Vérifiez EmailJS.", "error");
      return;
    }

    if (EMAILJS_SERVICE_ID.startsWith("YOUR_") || EMAILJS_TEMPLATE_ID.startsWith("YOUR_") || EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) {
      updateFormStatus("Configuration EmailJS incomplète. Merci de renseigner vos identifiants.", "error");
      return;
    }

    if (!initEmailJS()) {
      updateFormStatus("Impossible d'initialiser EmailJS.", "error");
      return;
    }

    const email_guest = contactForm.querySelector('input[name="email"]')?.value.trim() || "";
    let emailGuestInput = contactForm.querySelector('input[name="email_guest"]');
    if (!emailGuestInput) {
      emailGuestInput = document.createElement("input");
      emailGuestInput.type = "hidden";
      emailGuestInput.name = "email_guest";
      contactForm.appendChild(emailGuestInput);
    }
    emailGuestInput.value = email_guest;

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
      .then(() => {
        updateFormStatus("Merci pour votre message. Je vous répondrai rapidement.", "success");
        contactForm.reset();
      })
      .catch(() => {
        updateFormStatus("L'envoi a échoué. Veuillez réessayer plus tard.", "error");
      });
  });
}

function initGalleryFilters() {
  if (!galleryFilterButtons.length || !galleryItems.length) return;

  galleryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      // Mettre à jour l'état actif des boutons
      galleryFilterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));

      // Animer les items avec des délais échelonnés
      const itemsToShow = [];
      const itemsToHide = [];

      galleryItems.forEach((item, index) => {
        const matches = filter === "all" || item.dataset.category === filter;
        if (matches) {
          itemsToShow.push({ item, index });
        } else {
          itemsToHide.push({ item, index });
        }
      });

      // Masquer les items avec délai
      itemsToHide.forEach(({ item }) => {
        item.classList.add("is-hidden");
        item.classList.remove("is-visible");
      });

      // Afficher les items avec délai échelonné
      itemsToShow.forEach(({ item, index }) => {
        item.classList.remove("is-hidden");
        setTimeout(() => {
          item.classList.add("is-visible");
        }, index * 60);
      });
    });
  });
}


function initSmoothScroll() {
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  document.querySelectorAll('a[href^="#"], button[data-scroll-target]').forEach((element) => {
    element.addEventListener("click", (event) => {
      const targetId = element.getAttribute("href") || element.getAttribute("data-scroll-target");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const topOffset = target.getBoundingClientRect().top + window.scrollY - 92;
      smoothScrollTo(topOffset, 700);

      window.setTimeout(() => {
        history.pushState(null, "", targetId);
      }, 120);
    });
  });
}

function initScrollTopButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (!scrollTopBtn) return;

  const toggleVisibility = () => {
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 500);
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
}

function initCertificationCarousel() {
  if (!certificationTrack || !certificationCards.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  const getVisibleCount = () => {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };
  const getMaxIndex = () => Math.max(0, certificationCards.length - getVisibleCount());

  const getSlideOffset = () => {
    const carousel = certificationTrack.closest(".certification-carousel");
    if (!carousel) return 0;

    const trackStyle = window.getComputedStyle(certificationTrack);
    const gap = parseFloat(trackStyle.gap || trackStyle.columnGap || "16") || 16;
    const visibleCount = getVisibleCount();
    const cardWidth = (carousel.clientWidth - gap * (visibleCount - 1)) / visibleCount;
    return cardWidth + gap;
  };

  const updateCarousel = () => {
    certificationTrack.style.transform = `translateX(-${currentIndex * getSlideOffset()}px)`;
  };

  const nextSlide = () => {
    if (currentIndex >= getMaxIndex()) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    updateCarousel();
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      currentIndex = getMaxIndex();
    } else {
      currentIndex -= 1;
    }
    updateCarousel();
  };

  const startAutoSlide = () => {
    if (autoSlideTimer) window.clearInterval(autoSlideTimer);
    autoSlideTimer = window.setInterval(nextSlide, 3000);
  };

  certPrevButton?.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
  });

  certNextButton?.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
  });

  window.addEventListener("resize", () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    updateCarousel();
  });

  startAutoSlide();
  updateCarousel();
}

initTheme();
initMenu();
initThemeToggle();
initLanguageToggle();
applyTranslations(currentLanguage);
initSkillPercentages();
initReveal();
initActiveNav();
initContactForm();
initGalleryFilters();
initSmoothScroll();
initScrollTopButton();
initCertificationCarousel();
