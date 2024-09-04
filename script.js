function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  menuLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.addEventListener("click", toggleMenu);

  const menuLinks = document.querySelectorAll(".menu-links li a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
