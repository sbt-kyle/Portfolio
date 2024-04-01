// TEXT AREA
document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.getElementById("message");
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

// TOGGLE MENU
const burgerIcon = document.getElementById("burger-icon");
const navLinks = document.getElementById("nav-links");

function toggleNavLinks() {
  if (window.innerWidth <= 834) {
    if (navLinks.style.display !== "block") {
      navLinks.style.display = "block";
    } else {
      navLinks.style.display = "none";
    }
  }
}

burgerIcon.addEventListener("click", function () {
  toggleNavLinks();
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 834) {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});

// Set initial display style of nav links based on window width
if (window.innerWidth <= 834) {
  navLinks.style.display = "none";
} else {
  navLinks.style.display = "block";
}
