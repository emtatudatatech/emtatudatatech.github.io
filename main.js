const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content .socials li", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 5000,
});


// About Section Reveal
ScrollReveal().reveal("#about .section__header", scrollRevealOption);
ScrollReveal().reveal("#about .about__headline", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

// Portfolio Section Reveal
ScrollReveal().reveal("#portfolio .section__header", scrollRevealOption);
ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 200,
});

// Contact Section Reveal
ScrollReveal().reveal("#contact .section__header", scrollRevealOption);
ScrollReveal().reveal("#contact .contact__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".contact__item", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});