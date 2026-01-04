var typed = new Typed(".text", {
  strings: [
    "IT Support",
    "Network Engineer",
    "Web Developer",
    "Graphic Designer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  cursorChar: "|",
});

const Bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".menu li a");
const sections = document.querySelectorAll("section[id]");

Bars.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }
  activeMenuOnScroll();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    menu.classList.remove("active");
  });
});

function activeMenuOnScroll() {
  const scrollY = window.pageYOffset;
  if (scrollY <= 200) {
    navLinks.forEach((link) => link.classList.remove("active"));
    document
      .querySelector(".menu li a[href*='#home']")
      ?.classList.add("active");
    return;
  }
  sections.forEach((sections) => {
    const sectionTop = sections.offsetTop - 150;
    const sectionHeight = sections.offsetHeight;
    const sectionId = sections.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(".menu li a[href='#" + sectionId + "']")
        ?.classList.add("active");
    }
  });
}

activeMenuOnScroll();

// Portfolio Tabs (Jika Anda ingin mengaktifkan kembali section Portfolio di masa depan)
const tabButtons = document.querySelectorAll(".portfolio-tabs button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Portfolio Filter Cards (Opsional, pastikan element .portfolio-grid ada jika error)
try {
  var mixer = mixitup(".portfolio-grid", {
    selectors: {
      target: ".portfolio-card",
    },
    animation: {
      duration: 300,
    },
  });
} catch (e) {
  // Suppress error jika section portfolio grid dimatikan/diganti
  console.log(
    "MixItUp skipped: Portfolio grid not actively used for filtering."
  );
}

document.addEventListener(
  "click",
  () => {
    const music = document.getElementById("bgMusic");

    music.volume = 0.2; // volume halus
    music.loop = true; // looping terus
    music.play();
  },
  { once: true }
);
