// Mobile nav toggle
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (nav.classList.contains("isOpen")) {
        nav.classList.remove("isOpen");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
