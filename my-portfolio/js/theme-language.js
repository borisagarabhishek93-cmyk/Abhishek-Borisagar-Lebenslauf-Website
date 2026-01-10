
// ===== THEME AND LANGUAGE MANAGER - COMPLETE SOLUTION =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Theme & Language Manager Initializing...');
    
    // Initialize everything
    initTheme();
    initLanguage();
    initThemeButtons();
    initLanguageButtons();
    initTypewriter();
    initCurrentYear();
    
    // Update nav active state
    updateNavActiveState();
});

// ===== THEME FUNCTIONS =====
function initTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    const defaultTheme = 'light';
    const theme = savedTheme || defaultTheme;
    
    console.log(`🌗 Setting theme: ${theme}`);
    setTheme(theme);
}

function setTheme(theme) {
    // Set data-theme attribute on body
    document.body.setAttribute('data-theme', theme);
    
    // Update all theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === theme) {
            btn.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('preferredTheme', theme);
    
    // Dispatch event for other scripts
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    
    console.log(`✅ Theme set to: ${theme}`);
}

function initThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const theme = this.getAttribute('data-theme');
            console.log(`🔄 Switching to ${theme} theme`);
            setTheme(theme);
        });
    });
}

// ===== LANGUAGE FUNCTIONS =====
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language || navigator.userLanguage;
    const defaultLang = browserLang.startsWith('de') ? 'de' : 'en';
    const lang = savedLang || defaultLang;
    
    console.log(`🌍 Setting language: ${lang}`);
    setLanguage(lang);
}

function setLanguage(lang) {
    // Set lang attribute on html and body
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('lang', lang);
    
    // Show/hide language-specific elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        const elementLang = element.getAttribute('data-lang');
        
        // Check if this is a button (should always be visible)
        if (element.classList.contains('lang-btn')) {
            element.classList.toggle('active', elementLang === lang);
            return;
        }
        
        // Handle display based on element type
        if (elementLang === lang) {
            element.classList.add('active');
            
            // Determine display style based on element type
            const tag = element.tagName.toLowerCase();
            const isBlock = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'ul', 'ol', 'section', 'article', 'header', 'footer'].includes(tag);
            
            element.style.display = isBlock ? 'block' : 'inline';
            
            // Special handling for spans that should be block
            if (tag === 'span' && (element.classList.contains('block') || element.parentElement.classList.contains('block-container'))) {
                element.style.display = 'block';
                element.classList.add('block');
            }
        } else {
            element.classList.remove('active');
            element.style.display = 'none';
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Dispatch event for other scripts
    document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
    
    // Update typewriter for new language
    updateTypewriterForLanguage(lang);
    
    console.log(`✅ Language set to: ${lang}`);
}

function initLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = this.getAttribute('data-lang');
            console.log(`🔄 Switching to ${lang} language`);
            setLanguage(lang);
        });
    });
}

// ===== TYPEWRITER EFFECT =====
function initTypewriter() {
    const typewriterContainer = document.querySelector('.typewriter-container');
    if (!typewriterContainer) return;
    
    // Start typewriter effect
    startTypewriter();
}

function startTypewriter() {
    const container = document.querySelector('.typewriter-container .typewriter-text');
    if (!container) return;
    
    const currentLang = document.body.getAttribute('lang') || 'en';
    const texts = Array.from(container.querySelectorAll(`[data-lang="${currentLang}"]`));
    
    if (texts.length === 0) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[currentIndex].textContent;
        
        if (isDeleting) {
            // Deleting text
            text = currentText.substring(0, text.length - 1);
            typingSpeed = 50;
        } else {
            // Adding text
            text = currentText.substring(0, text.length + 1);
            typingSpeed = 100;
        }
        
        // Update display
        container.innerHTML = `<span data-lang="${currentLang}" style="display: inline;">${text}</span>`;
        
        if (!isDeleting && text === currentText) {
            // Pause at end
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && text === '') {
            // Move to next text
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing
    setTimeout(type, 1000);
}

function updateTypewriterForLanguage(lang) {
    // Clear any existing typewriter
    const container = document.querySelector('.typewriter-container .typewriter-text');
    if (container) {
        container.innerHTML = '';
    }
    
    // Restart typewriter with new language
    setTimeout(startTypewriter, 100);
}

// ===== NAVIGATION =====
function updateNavActiveState() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page
    document.querySelectorAll(`.nav-link[href="${currentPage}"]`).forEach(link => {
        link.classList.add('active');
    });
    
    // Special handling for language-specific nav links
    const currentLang = document.body.getAttribute('lang') || 'en';
    document.querySelectorAll(`.nav-link[href="${currentPage}"][data-lang="${currentLang}"]`).forEach(link => {
        link.classList.add('active');
    });
}

// ===== UTILITY FUNCTIONS =====
function initCurrentYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    if (yearElements.length > 0) {
        const year = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = year;
        });
    }
}

// ===== EVENT LISTENERS =====

// Listen for language changes from other scripts
document.addEventListener('languageChange', function(e) {
    console.log('📢 Language changed event received:', e.detail.lang);
    // Update any components that need to refresh on language change
});

// Listen for theme changes from other scripts
document.addEventListener('themeChange', function(e) {
    console.log('📢 Theme changed event received:', e.detail.theme);
    // Update any components that need to refresh on theme change
});

// ===== EXPORT FUNCTIONS =====
window.ThemeLanguageManager = {
    setTheme,
    setLanguage,
    updateNavActiveState,
    startTypewriter
};

console.log('✅ Theme & Language Manager Ready!');
