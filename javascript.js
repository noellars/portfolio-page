// ===== Aktuelles Jahr im Footer =====
const jahr = document.getElementById("jahr");
if (jahr) {
  jahr.textContent = new Date().getFullYear();
}

// ===== Mobiles Menü öffnen/schliessen =====
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("hauptmenue");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const offen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!offen));
    menu.classList.toggle("offen");
  });

  // Menü schliessen, wenn ein Link angeklickt wird
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("offen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Aktiven Menüpunkt beim Scrollen hervorheben =====
const navLinks = document.querySelectorAll("#hauptmenue a");
const sections = document.querySelectorAll("main section[id]");

const beobachter = new IntersectionObserver(
  (eintraege) => {
    eintraege.forEach((eintrag) => {
      if (eintrag.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "aktiv",
            link.getAttribute("href") === "#" + eintrag.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => beobachter.observe(section));