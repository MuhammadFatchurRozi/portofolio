function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to handle changes in color scheme
function handleColorSchemeChange(event) {
  const favicon = document.querySelector("#favicon");
  if (event.matches) {
    favicon.href = "./assets/images/LogoR-White.png";
  }
}

// Add event listener for changes in color scheme
const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);

// Initial check for the color scheme
handleColorSchemeChange(colorSchemeMediaQuery);
