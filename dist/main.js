// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    mobileMenuBtn.setAttribute('aria-label', isHidden ? 'Open mobile menu' : 'Close mobile menu');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
const html = document.documentElement;

// Check for saved preference or system preference
if (localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    document.body.classList.add('bg-gray-900', 'text-white');
    document.body.classList.remove('bg-gray-50', 'text-gray-900');
}

function toggleDarkMode() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');

    if (isDark) {
        document.body.classList.add('bg-gray-900', 'text-white');
        document.body.classList.remove('bg-gray-50', 'text-gray-900');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('bg-gray-900', 'text-white');
        document.body.classList.add('bg-gray-50', 'text-gray-900');
        localStorage.setItem('darkMode', 'false');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);
darkModeToggleMobile.addEventListener('click', toggleDarkMode);
