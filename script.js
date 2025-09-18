// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// If button exists
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });

  // Set icon on load
  themeToggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
}

// ===== ACTIVE NAV LINK =====
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("text-blue-600", "dark:text-blue-400", "font-semibold");
    }
  });
});
