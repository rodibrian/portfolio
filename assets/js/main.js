const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
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

function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  const icon = themeToggle?.querySelector("i");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
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
initSkillPercentages();
initReveal();
initActiveNav();
initContactForm();
initGalleryFilters();
initSmoothScroll();
initScrollTopButton();
initCertificationCarousel();
initScrollTopButton();
initCertificationCarousel();
