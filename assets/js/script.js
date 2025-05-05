const scrollTopBtn = document.querySelector("[data-js-top]");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 800);
});


ScrollReveal().reveal(".text-group ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".intro__img, .form__contact, .footer", {
  origin: "right",
  duration: 1000,
  distance: "50px",
  reset: true,
});

const sr = ScrollReveal({
  disable: true
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  ScrollReveal().destroy();
} else {
  ScrollReveal().reveal(".text-group, .intro__img , .form__contact, .footer",);
}