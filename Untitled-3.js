document.addEventListener('DOMContentLoaded', () => {
    // Toggle dark mode
    const themeToggle = document.querySelector('[data-bs-theme]');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let currentTheme = document.body.getAttribute('data-bs-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme); // Save theme preference in local storage
        });
    }
    // Restore theme from local storage on page load
    let savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', savedTheme);
});
// JavaScript Document