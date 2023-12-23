let header = document.querySelector(".header_container");
let originalTop = 10;

document.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > originalTop) {
    header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.padding = "15px 20px";
  } else if (currentScroll < originalTop) {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "transparent";
    header.style.padding = "none";
  }
});
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector("ul");

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("menu-open");
});
