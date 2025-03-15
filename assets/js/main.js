/*=============== MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

/* Menu show - hidden */

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
/* Variables define */
const styleSwitcher = document.getElementById("style-switcher");
const switcherToggle = document.getElementById("switcher-toggle");
const switcherClose = document.getElementById("switcher-close");

/* Switcher show */
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});
/* Switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});
/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll(".style-switcher-color");
colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");
    document.documentElement.style.setProperty("--hue", activeColor);
  };
});
/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});
