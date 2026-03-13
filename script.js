const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when clicking a link
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


// ===============================
// HERO AUTO SLIDER
// ===============================
let slideIndex = 0;
const slides = document.querySelectorAll(".hero .slide");

function showSlides() {

  slides.forEach(slide => slide.classList.remove("active"));

  slides[slideIndex].classList.add("active");

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

if (slides.length > 0) {
  showSlides();
  setInterval(showSlides, 3000);
}

// Make sure first slide is visible on load
slides[0].classList.add("active");

// Auto-switch every 3 seconds
setInterval(showSlides, 3000);

// SCROLL ANIMATION
const aboutBoxes = document.querySelectorAll(".about-box");

function revealAbout() {
  aboutBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealAbout);