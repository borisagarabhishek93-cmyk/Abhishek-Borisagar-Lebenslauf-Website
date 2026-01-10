// Advanced Animations and Effects
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM fully loaded');

    initParallaxEffect();
    initHoverEffects();
    initLoadingAnimations();
    initCursorEffects();
    initScrollAnimations();
    initSkillBars();

    document
        .querySelectorAll('.text-reveal-container')
        .forEach(textReveal);
});


// ===== PARALLAX EFFECT =====
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ===== HOVER EFFECTS =====
function initHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.card-hover');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-hover');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
    
    // Staggered animation for elements
    const staggeredElements = document.querySelectorAll('.stagger');
    
    staggeredElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });
}

// ===== CURSOR EFFECTS =====
function initCursorEffects() {
    // Custom cursor (optional - can be enabled/disabled)
    const enableCustomCursor = false;
    
    if (enableCustomCursor && !isTouchDevice()) {
        const cursor = document.createElement('div');
        const cursorFollower = document.createElement('div');
        
        cursor.className = 'custom-cursor';
        cursorFollower.className = 'custom-cursor-follower';
        
        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Add hover effects
        document.querySelectorAll('a, button, .clickable').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== PARTICLE EFFECT (Optional) =====
function createParticleEffect(container) {
    if (!container || isTouchDevice()) return;
    
    const particleCount = 30;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = getRandomNumber(2, 6);
        const posX = getRandomNumber(0, container.offsetWidth);
        const posY = getRandomNumber(0, container.offsetHeight);
        const duration = getRandomNumber(10, 30);
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
        particles.push(particle);
    }
    
    return particles;
}

// ===== TEXT REVEAL ANIMATION =====
function textReveal(element) {
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.05}s`;
        span.classList.add('text-reveal');
        element.appendChild(span);
    }
}
// =========================
// SKILL BAR ANIMATION (FIXED)
// =========================
function initSkillBars() {
    console.log("initSkillBars running");

    const bars = document.querySelectorAll('.skill-level');
    if (!bars.length) return;

    bars.forEach(bar => {
        const level = bar.dataset.level;

        // Force browser paint, then animate
        requestAnimationFrame(() => {
            bar.style.width = level + '%';
        });
    });
}
console.log('animations.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready → calling initSkillBars');
    initSkillBars();
});
