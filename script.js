// Hamburger Menu Toggle
function toggleMobileMenu() {
    const menu = document.querySelector("#hamburger-nav .mobile-menu-links"); // Corrected selector
    const icon = document.querySelector("#hamburger-nav .hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Theme Toggle
const themeToggleDesktopBtn = document.getElementById('theme-toggle-desktop');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const themeIconDesktop = document.getElementById('theme-icon-desktop');
const themeIconMobile = document.getElementById('theme-icon-mobile');
const body = document.body;
const sunIconPath = './assets/sun.png';
const moonIconPath = './assets/moon.png';

// Function to set theme and save preference
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        if (themeIconDesktop) themeIconDesktop.src = moonIconPath;
        if (themeIconMobile) themeIconMobile.src = moonIconPath;
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        if (themeIconDesktop) themeIconDesktop.src = sunIconPath;
        if (themeIconMobile) themeIconMobile.src = sunIconPath;
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for theme toggle buttons
function handleThemeToggle() {
    if (body.classList.contains('light-theme')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

if (themeToggleDesktopBtn) {
    themeToggleDesktopBtn.addEventListener('click', handleThemeToggle);
}

if (themeToggleMobileBtn) {
    themeToggleMobileBtn.addEventListener('click', () => {
        handleThemeToggle();
        // Close hamburger menu after theme change on mobile if it's open
        const mobileMenu = document.querySelector("#hamburger-nav .mobile-menu-links");
        if (mobileMenu && mobileMenu.classList.contains("open")) {
             toggleMobileMenu();
        }
    });
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    setTheme(savedTheme);

    // Set copyright year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
