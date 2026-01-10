// Experience Page JavaScript - No Duplicates
document.addEventListener('DOMContentLoaded', function() {
    // Initialize experience page functionality
    initExperienceFilter();
    initExpandDetails();
    initTimelineAnimations();
    initSkillBars();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// ===== EXPERIENCE FILTER =====
function initExperienceFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            // ===== PROJECTS PAGE =====
            if (projectCards.length > 0) {
                projectCards.forEach(card => {
                    const category = card.dataset.category;

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            // ===== EXPERIENCE / EDUCATION PAGE =====
            if (timelineItems.length > 0) {
                timelineItems.forEach(item => {
                    const category = item.dataset.category;

                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });

                animateFilteredItems();
            }
        });
    });
}



function animateFilteredItems() {
    const visibleItems = document.querySelectorAll('.timeline-item[style*="display: block"]');
    
    visibleItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 100);
    });
}

// ===== EXPAND DETAILS TOGGLE =====
function initExpandDetails() {
    const detailButtons = document.querySelectorAll('.btn-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-expand');
            const detailsSection = document.getElementById(`details-${targetId}`);
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on details section
            detailsSection.classList.toggle('active');
            
            // Change button icon based on state
            const chevron = this.querySelector('i');
            
            if (detailsSection.classList.contains('active')) {
                chevron.className = 'fas fa-chevron-up';
                // Animate the expansion
                detailsSection.style.maxHeight = detailsSection.scrollHeight + 'px';
            } else {
                chevron.className = 'fas fa-chevron-down';
                detailsSection.style.maxHeight = '0';
            }
            
            // Smooth scroll to expanded section
            if (detailsSection.classList.contains('active')) {
                detailsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
}

// ===== TIMELINE ANIMATIONS =====
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Set up intersection observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const levelBar = entry.target.querySelector('.level-bar');
                const width = levelBar.style.width;
                
                // Reset width to 0 for animation
                levelBar.style.width = '0%';
                
                // Animate to actual width
                setTimeout(() => {
                    levelBar.style.transition = 'width 1.5s ease-in-out';
                    levelBar.style.width = width;
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Export functions for use in other modules
window.ExperienceManager = {
    initExperienceFilter,
    initExpandDetails,
    initTimelineAnimations,
    initSkillBars
};