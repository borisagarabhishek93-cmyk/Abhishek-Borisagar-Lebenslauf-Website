// Projects Data Loader and Filter

document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    initProjectFilter();
    loadExperience();
});

// ===== PROJECTS DATA =====
const projectsData = {
    en: [
        {
            id: 1,
            title: "AI-powered Sustainability KPI Extraction",
            description: "Developed an NLP pipeline for automatic extraction of key performance indicators from unstructured company reports. Achieved 92% accuracy and automated trend analysis.",
            category: "ai",
            technologies: ["Python", "spaCy", "NLP", "Machine Learning"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Real-time Pet Recognition System",
            description: "Cloud-based system for real-time classification of dogs and cats using computer vision algorithms on Raspberry Pi with real-time monitoring dashboard.",
            category: "iot",
            technologies: ["Python", "Raspberry Pi", "Computer Vision", "OpenCV", "Cloud"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Autonomous Line-following Vehicle",
            description: "Developed an autonomous vehicle with IR sensors and PID control for precise navigation in complex environments with obstacle avoidance.",
            category: "embedded",
            technologies: ["C/C++", "Arduino", "Embedded Systems", "PID Control", "Robotics"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Ventilator Monitoring Prototype",
            description: "IoT prototype for real-time monitoring of ventilators with alert system for patient safety and remote monitoring capabilities.",
            category: "iot",
            technologies: ["Python", "IoT", "Real-time Monitoring", "Sensor Networks", "Alert Systems"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 5,
            title: "Ladies Tailor Finder Web Application",
            description: "Java-based platform connecting customers with local tailors featuring search, booking, payment integration, and review system.",
            category: "web",
            technologies: ["Java", "JavaScript", "MySQL", "Spring Boot", "Payment Integration"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 6,
            title: "Cruise Gujarat Tourism Portal",
            description: "Full-stack development of comprehensive tourism portal with multi-tier architecture, real-time data integration, and booking system.",
            category: "web",
            technologies: ["PHP", "MySQL", "JavaScript", "Full-stack", "Real-time Data"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 7,
            title: "Enterprise IoT Platform",
            description: "A comprehensive IoT platform for industrial monitoring and control with real-time analytics and predictive maintenance.",
            category: "iot",
            technologies: ["C#", "Azure IoT", "React", "Python", "Docker"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 8,
            title: "Cybersecurity Dashboard",
            description: "Real-time security monitoring dashboard with threat detection and incident response automation.",
            category: "web",
            technologies: ["Vue.js", "TypeScript", "Node.js", "MongoDB", "Docker"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 9,
            title: "AI-Powered Code Review",
            description: "Machine learning system for automated code review and vulnerability detection using static analysis.",
            category: "ai",
            technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        }
    ],
    de: [
        {
            id: 1,
            title: "KI-gestützte Nachhaltigkeits-KPI-Extraktion",
            description: "Entwicklung einer NLP-Pipeline zur automatischen Extraktion von Schlüsselindikatoren aus unstrukturierten Unternehmensberichten. Erreichte 92% Genauigkeit und automatisierte Trendanalyse.",
            category: "ai",
            technologies: ["Python", "spaCy", "NLP", "Maschinelles Lernen"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Echtzeit-Haustienerkennungssystem",
            description: "Cloud-basiertes System zur Echtzeit-Klassifizierung von Hunden und Katzen mit Computer-Vision-Algorithmen auf Raspberry Pi.",
            category: "iot",
            technologies: ["Python", "Raspberry Pi", "Computer Vision", "OpenCV", "Cloud"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Autonomes Linienfolgefahrzeug",
            description: "Entwicklung eines autonomen Fahrzeugs mit IR-Sensoren und PID-Regelung für präzise Navigation in komplexen Umgebungen.",
            category: "embedded",
            technologies: ["C/C++", "Arduino", "Eingebettete Systeme", "PID-Regelung", "Robotik"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Beatmunungsgerät-Überwachungsprototyp",
            description: "IoT-Prototyp zur Echtzeitüberwachung von Beatmungsgeräten mit Alarmsystem für Patientensicherheit.",
            category: "iot",
            technologies: ["Python", "IoT", "Echtzeitüberwachung", "Sensornetzwerke", "Alarmsysteme"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 5,
            title: "Damen-Schneiderfinder-Webanwendung",
            description: "Java-basierte Plattform zur Verbindung von Kunden mit lokalen Schneidern mit Such-, Buchungs- und Zahlungsintegration.",
            category: "web",
            technologies: ["Java", "JavaScript", "MySQL", "Spring Boot", "Zahlungsintegration"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 6,
            title: "Cruise Gujarat Tourismusportal",
            description: "Full-Stack-Entwicklung eines umfassenden Tourismusportals mit Multi-Tier-Architektur und Echtzeit-Datenintegration.",
            category: "web",
            technologies: ["PHP", "MySQL", "JavaScript", "Full-stack", "Echtzeit-Daten"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 7,
            title: "Enterprise IoT-Plattform",
            description: "Eine umfassende IoT-Plattform für industrielle Überwachung und Steuerung mit Echtzeitanalysen und vorausschauender Wartung.",
            category: "iot",
            technologies: ["C#", "Azure IoT", "React", "Python", "Docker"],
            image: "assets/images/projects/project1.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 8,
            title: "Cybersicherheits-Dashboard",
            description: "Echtzeit-Sicherheitsüberwachungs-Dashboard mit Bedrohungserkennung und Automatisierung der Incident-Response.",
            category: "web",
            technologies: ["Vue.js", "TypeScript", "Node.js", "MongoDB", "Docker"],
            image: "assets/images/projects/project2.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 9,
            title: "KI-gestützte Code-Review",
            description: "Maschinelles Lernsystem für automatisierte Code-Review und Schwachstellenerkennung mittels statischer Analyse.",
            category: "ai",
            technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
            image: "assets/images/projects/project3.jpg",
            demoLink: "#",
            codeLink: "#"
        }
    ]
};

// ===== LOAD PROJECTS =====
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    // Get current language
    const currentLang = document.body.getAttribute('lang') || 'en';
    const projects = projectsData[currentLang] || projectsData.en;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Create project cards
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card animate-on-scroll ${project.category}`;
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <span class="project-category">${project.category.toUpperCase()}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    <span data-lang="en">Live Demo</span>
                    <span data-lang="de">Live Demo</span>
                </a>
                <a href="${project.codeLink}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                    <span data-lang="en">View Code</span>
                    <span data-lang="de">Code ansehen</span>
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!filterButtons.length || !projectsGrid) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    const currentLang = document.body.getAttribute('lang') || 'en';
    const projects = projectsData[currentLang] || projectsData.en;
    
    projectCards.forEach((card, index) => {
        const project = projects[index];
        
        if (filter === 'all' || project.category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// ===== LOAD EXPERIENCE =====
function loadExperience() {
    const experienceTimeline = document.querySelector('.experience-timeline');
    if (!experienceTimeline) return;
    
    // Get current language
    const currentLang = document.body.getAttribute('lang') || 'en';
    const experiences = experienceData[currentLang] || experienceData.en;
    
    // Clear existing content
    experienceTimeline.innerHTML = '';
    
    // Create experience items
    experiences.forEach(experience => {
        const experienceItem = createExperienceItem(experience);
        experienceTimeline.appendChild(experienceItem);
    });
}

function createExperienceItem(experience) {
    const item = document.createElement('div');
    item.className = 'experience-item animate-on-scroll';
    
    item.innerHTML = `
        <div class="experience-date">${experience.date}</div>
        <h3 class="experience-position">${experience.position}</h3>
        <h4 class="experience-company">${experience.company}</h4>
        <ul class="experience-description">
            ${experience.description.map(point => `<li>${point}</li>`).join('')}
        </ul>
    `;
    
    return item;
}

// ===== LANGUAGE CHANGE HANDLER =====
function handleLanguageChange() {
    // Reload projects and experience when language changes
    loadProjects();
    loadExperience();
    
    // Update filter button text
    updateFilterButtons();
}

// Update filter button text based on language
function updateFilterButtons() {
    const currentLang = document.body.getAttribute('lang') || 'en';
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        const filter = button.getAttribute('data-filter');
        const spans = button.querySelectorAll('span[data-lang]');
        
        spans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    });
}

// Listen for language changes
document.addEventListener('languageChange', handleLanguageChange);

// Initialize filter buttons on load
updateFilterButtons();