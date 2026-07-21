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

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
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

function initContactForm() {
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Merci pour votre message. Je vous répondrai rapidement.";
    contactForm.reset();
  });
}

function initGalleryFilters() {
  if (!galleryFilterButtons.length || !galleryItems.length) return;

  galleryFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      galleryFilterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));

      galleryItems.forEach((item) => {
        const matches = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

function initCertificationCarousel() {
  if (!certificationTrack || !certificationCards.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  const getVisibleCount = () => (window.innerWidth <= 720 ? 1 : 2);
  const getMaxIndex = () => Math.max(0, certificationCards.length - getVisibleCount());

  const getSlideOffset = () => {
    const carousel = certificationTrack.closest(".certification-carousel");
    if (!carousel) return 0;

    const trackStyle = window.getComputedStyle(certificationTrack);
    const gap = parseFloat(trackStyle.gap || trackStyle.columnGap || "20") || 20;
    const cardWidth = carousel.clientWidth * 0.5 - gap / 2;
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
initReveal();
initActiveNav();
initContactForm();
initGalleryFilters();
initCertificationCarousel();
