/**
 * Lpnlanka Nexus - Global Header & Navigation Logic
 * This file handles:
 * 1. Background sliders (if present)
 * 2. Navigation toggles (Main Nav Panel)
 * 3. Property Dropdowns
 * 4. Google Translate Integration & Language Switching
 * 5. Active Link Highlighting
 */

// ===== 1. Background Slider Logic =====
const slides = document.querySelectorAll('.bg-slider .slide, .lux-bg-slider .lux-slide, .ser-slider .ser-slide');
if (slides.length > 0) {
    let currentSlide = 0;
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    // Initialize first slide
    slides[0].classList.add('active');
    setInterval(nextSlide, 5000); // Change image every 5 seconds
}

// ===== 2. Main Nav Toggle =====
function toggleMainNav() {
    const panel = document.getElementById('mainNavPanel');
    const icon = document.getElementById('mainNavIcon');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    if (panel) {
        const isOpen = panel.classList.toggle('open');
        if (icon) icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

        // Sync with navbar mobile button if it exists
        if (openIcon && closeIcon) {
            openIcon.classList.toggle('hidden', isOpen);
            closeIcon.classList.toggle('hidden', !isOpen);
        }
    }
}

// Close panel when clicking outside
document.addEventListener('click', function (e) {
    const panel = document.getElementById('mainNavPanel');
    const toggle = document.getElementById('mainNavToggle');
    const mobileBtn = document.getElementById('mobile-menu-button');

    if (panel && !panel.contains(e.target) &&
        (!toggle || !toggle.contains(e.target)) &&
        (!mobileBtn || !mobileBtn.contains(e.target))) {

        if (panel.classList.contains('open')) {
            toggleMainNav();
        }
    }
});

// ===== 3. Property Dropdown Toggle =====
function togglePropertyMenu(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('propertyDropdown');
    const panelDropdown = document.getElementById('panelPropertyDropdown');
    if (dropdown) dropdown.classList.toggle('show');
    if (panelDropdown) panelDropdown.classList.toggle('show');
}

// ===== 4. Google Translate & Language Switching =====
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ta,si',
        autoDisplay: false
    }, 'google_translate_element');
}

function changeLanguage(langCode) {
    // Set the Google Translate cookie
    var cookieValue = "/en/" + langCode;
    var domain = window.location.hostname;

    // Set cookie for both with and without domain to be safe
    document.cookie = "googtrans=" + cookieValue + "; path=/; expires=Thu, 01 Jan 2099 00:00:00 UTC";
    if (domain !== 'localhost' && !/^(\d+\.){3}\d+$/.test(domain)) {
        document.cookie = "googtrans=" + cookieValue + "; path=/; domain=." + domain + "; expires=Thu, 01 Jan 2099 00:00:00 UTC";
    }

    // Track current language for button visibility
    localStorage.setItem('selectedLang', langCode);

    // Reload to apply translation
    location.reload();
}

function updateLangButtons() {
    var match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    var currentLang = match ? match[1] : localStorage.getItem('selectedLang');

    if (!currentLang) {
        currentLang = 'en';
    }

    var btnEn = document.getElementById('btn-en');
    var btnTa = document.getElementById('btn-ta');
    var btnSi = document.getElementById('btn-si');

    if (btnEn && btnTa && btnSi) {
        btnEn.style.display = (currentLang === 'en') ? 'none' : 'inline-block';
        btnTa.style.display = (currentLang === 'ta') ? 'none' : 'inline-block';
        btnSi.style.display = (currentLang === 'si') ? 'none' : 'inline-block';
    }
}

// ===== 5. Active Link Highlighting =====
function highlightActiveLinks() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .panel-nav-link, .nav-item');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            // For special cases like index.html#something
            if (href && href.startsWith('index.html') && currentPath === 'index.html') {
                if (!href.includes('#')) { // Only highlight the main home link
                    link.classList.add('active');
                }
            } else {
                link.classList.remove('active');
            }
        }
    });
}

// Run functions on load
updateLangButtons();
highlightActiveLinks();

window.addEventListener('load', function () {
    setTimeout(updateLangButtons, 100);
});

// ===== Post Property Modal Logic =====
function openPostModal() {
    const modal = document.getElementById('postPropertyModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePostModal() {
    const modal = document.getElementById('postPropertyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('postPropertyModal');
    if (modal && event.target == modal) {
        closePostModal();
    }
}
