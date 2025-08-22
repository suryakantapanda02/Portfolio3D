// Portfolio Data from provided JSON
const portfolioData = {
  personalInfo: {
    name: "Alex Developer",
    title: "3D Web Developer",
    tagline: "Creating immersive web experiences with cutting-edge animations",
    email: "alex@developer.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  about: {
    description: "I'm a creative full stack developer specializing in 3D web experiences and modern animations. With 5+ years of experience, I blend technical expertise with artistic vision to create engaging digital solutions.",
    highlights: [
      "5+ years in 3D web development",
      "Expert in React, Three.js, and modern animations", 
      "Passionate about immersive user experiences",
      "Specialized in performance-optimized 3D graphics"
    ]
  },
  skills: [
    {
      category: "Frontend & 3D",
      technologies: [
        {"name": "React", "level": 95, "color": "#006BFF"},
        {"name": "Three.js", "level": 90, "color": "#08C2FF"},
        {"name": "CSS 3D", "level": 92, "color": "#FFF100"},
        {"name": "WebGL", "level": 85, "color": "#BCF2F6"},
        {"name": "JavaScript", "level": 98, "color": "#006BFF"}
      ]
    },
    {
      category: "Animation & Design",
      technologies: [
        {"name": "Framer Motion", "level": 88, "color": "#08C2FF"},
        {"name": "GSAP", "level": 85, "color": "#FFF100"},
        {"name": "Blender", "level": 75, "color": "#BCF2F6"},
        {"name": "Figma", "level": 80, "color": "#006BFF"},
        {"name": "After Effects", "level": 70, "color": "#08C2FF"}
      ]
    },
    {
      category: "Backend & Tools",
      technologies: [
        {"name": "Node.js", "level": 90, "color": "#006BFF"},
        {"name": "MongoDB", "level": 85, "color": "#08C2FF"},
        {"name": "AWS", "level": 78, "color": "#FFF100"},
        {"name": "Docker", "level": 82, "color": "#BCF2F6"},
        {"name": "Git", "level": 95, "color": "#006BFF"}
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "3D Product Showcase",
      description: "Interactive 3D product viewer with realistic lighting and animations for e-commerce platform.",
      image: "https://via.placeholder.com/400x300/006BFF/ffffff?text=3D+Product+Showcase",
      technologies: ["Three.js", "React", "WebGL", "Blender"],
      liveUrl: "https://example.com/3d-showcase",
      githubUrl: "https://github.com/alexdev/3d-showcase",
      featured: true,
      color: "#006BFF"
    },
    {
      id: 2,
      title: "VR Portfolio Experience", 
      description: "Immersive virtual reality portfolio experience built with WebXR and Three.js.",
      image: "https://via.placeholder.com/400x300/08C2FF/ffffff?text=VR+Portfolio",
      technologies: ["WebXR", "Three.js", "React", "A-Frame"],
      liveUrl: "https://example.com/vr-portfolio",
      githubUrl: "https://github.com/alexdev/vr-portfolio",
      featured: true,
      color: "#08C2FF"
    },
    {
      id: 3,
      title: "Animated Data Visualization",
      description: "Real-time 3D data visualization dashboard with interactive charts and smooth animations.",
      image: "https://via.placeholder.com/400x300/FFF100/000000?text=Data+Viz+3D",
      technologies: ["D3.js", "Three.js", "React", "WebGL"],
      liveUrl: "https://example.com/data-viz",
      githubUrl: "https://github.com/alexdev/data-viz",
      featured: true,
      color: "#FFF100"
    },
    {
      id: 4,
      title: "Interactive Game Hub",
      description: "Web-based gaming platform with 3D environments and real-time multiplayer features.",
      image: "https://via.placeholder.com/400x300/BCF2F6/000000?text=Game+Hub",
      technologies: ["Three.js", "Socket.io", "React", "Node.js"],
      liveUrl: "https://example.com/game-hub",
      githubUrl: "https://github.com/alexdev/game-hub",
      featured: false,
      color: "#BCF2F6"
    },
    {
      id: 5,
      title: "AR Product Try-On",
      description: "Augmented reality application for virtual product try-on experiences using WebAR.",
      image: "https://via.placeholder.com/400x300/006BFF/ffffff?text=AR+Try-On",
      technologies: ["WebAR", "Three.js", "MediaPipe", "React"],
      liveUrl: "https://example.com/ar-tryon",
      githubUrl: "https://github.com/alexdev/ar-tryon",
      featured: false,
      color: "#006BFF"
    },
    {
      id: 6,
      title: "3D Website Builder",
      description: "Drag-and-drop 3D website builder with real-time preview and export functionality.",
      image: "https://via.placeholder.com/400x300/08C2FF/ffffff?text=3D+Builder",
      technologies: ["Three.js", "React", "Fiber", "MongoDB"],
      liveUrl: "https://example.com/3d-builder",
      githubUrl: "https://github.com/alexdev/3d-builder",
      featured: false,
      color: "#08C2FF"
    }
  ],
  socialLinks: [
    {"name": "GitHub", "url": "https://github.com", "icon": "🔗"},
    {"name": "LinkedIn", "url": "https://linkedin.com", "icon": "💼"},
    {"name": "Dribbble", "url": "https://dribbble.com", "icon": "🎨"},
    {"name": "CodePen", "url": "https://codepen.io", "icon": "✏️"},
    {"name": "Email", "url": "mailto:alex@developer.com", "icon": "✉️"}
  ]
};

// DOM Elements
let navToggle, navMenu, navLinks, contactForm;
let skillsObserver, projectsObserver, aboutObserver;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing 3D Portfolio...');
  initializeElements();
  setupNavigation();
  setupHeroButtons();
  populateSkills();
  populateProjects();
  populateSocialLinks();
  setupContactForm();
  setupScrollEffects();
  setup3DAnimations();
  initializeBackgroundShapes();
  console.log('3D Portfolio initialized successfully!');
});

// Initialize DOM elements
function initializeElements() {
  navToggle = document.getElementById('nav-toggle');
  navMenu = document.getElementById('nav-menu');
  navLinks = document.querySelectorAll('.nav-link');
  contactForm = document.getElementById('contact-form');
  
  console.log('DOM elements initialized:', {
    navToggle: !!navToggle,
    navMenu: !!navMenu,
    navLinks: navLinks.length,
    contactForm: !!contactForm
  });
}

// Initialize floating background shapes
function initializeBackgroundShapes() {
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    // Make shapes more visible
    shape.style.opacity = '0.15';
    shape.style.zIndex = '-1';
    
    // Add random starting positions
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    shape.style.left = `${randomX}%`;
    shape.style.top = `${randomY}%`;
    
    console.log(`Shape ${index + 1} initialized`);
  });
}

// Setup Navigation with improved functionality
function setupNavigation() {
  console.log('Setting up navigation...');
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'rotate(0deg) translate(0px, 0px)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0deg) translate(0px, 0px)';
      }
      
      console.log('Mobile menu toggled');
    });
  }

  // Smooth scroll navigation
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      console.log(`Nav link clicked: ${href}`);
      
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const success = scrollToSection(targetId);
        
        if (success) {
          // Close mobile menu
          navMenu.classList.remove('active');
          resetMobileMenu();
          
          // Update active link
          updateActiveNavLink(this);
          console.log(`Successfully navigated to ${targetId}`);
        }
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', debounce(updateActiveNavOnScroll, 100));
  console.log('Navigation setup complete');
}

// Reset mobile menu animation
function resetMobileMenu() {
  if (navToggle) {
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(0deg) translate(0px, 0px)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0deg) translate(0px, 0px)';
  }
}

// Improved smooth scroll to section
function scrollToSection(targetId) {
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    console.log(`Scrolling to section: ${targetId}`);
    return true;
  } else {
    console.error(`Section not found: ${targetId}`);
    return false;
  }
}

// Setup hero buttons with improved functionality
function setupHeroButtons() {
  const viewWorkBtn = document.querySelector('.hero-buttons a[href="#projects"]');
  const getInTouchBtn = document.querySelector('.hero-buttons a[href="#contact"]');
  
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToSection('projects');
      console.log('View Work button clicked');
    });
  }

  if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToSection('contact');
      console.log('Get In Touch button clicked');
    });
  }
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Update active navigation on scroll
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 150;

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSectionId = sectionId;
    }
  });

  if (currentSectionId) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
}

// Populate skills section with 3D effects
function populateSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) {
    console.error('Skills grid not found');
    return;
  }

  skillsGrid.innerHTML = '';

  portfolioData.skills.forEach((category, categoryIndex) => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'skill-category-3d';
    categoryElement.style.animationDelay = `${categoryIndex * 0.2}s`;
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.category;
    categoryElement.appendChild(categoryTitle);

    category.technologies.forEach((tech, techIndex) => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item-3d';
      skillItem.style.animationDelay = `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`;
      
      const skillHeader = document.createElement('div');
      skillHeader.className = 'skill-header';
      skillHeader.innerHTML = `
        <div class="skill-name">${tech.name}</div>
        <div class="skill-level">${tech.level}%</div>
      `;
      
      const skillBar = document.createElement('div');
      skillBar.className = 'skill-bar-3d';
      
      const skillProgress = document.createElement('div');
      skillProgress.className = 'skill-progress-3d';
      skillProgress.style.width = '0%';
      skillProgress.style.background = `linear-gradient(90deg, ${tech.color}, ${tech.color}aa)`;
      skillProgress.dataset.level = tech.level;
      
      skillBar.appendChild(skillProgress);
      skillItem.appendChild(skillHeader);
      skillItem.appendChild(skillBar);
      categoryElement.appendChild(skillItem);
    });

    skillsGrid.appendChild(categoryElement);
  });
  
  console.log('Skills populated successfully');
}

// Populate projects section with 3D cards and working links
function populateProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) {
    console.error('Projects grid not found');
    return;
  }

  projectsGrid.innerHTML = '';

  portfolioData.projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card-3d';
    projectCard.style.animationDelay = `${index * 0.1}s`;
    
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => 
            `<span class="tech-tag-3d" style="color: ${project.color}; border-color: ${project.color};">${tech}</span>`
          ).join('')}
        </div>
        <div class="project-links">
          <a href="${project.liveUrl}" class="project-link-3d" target="_blank" rel="noopener noreferrer">
            🔗 Live Demo
          </a>
          <a href="${project.githubUrl}" class="project-link-3d" target="_blank" rel="noopener noreferrer">
            📁 View Code
          </a>
        </div>
      </div>
    `;

    // Add 3D hover effects
    projectCard.addEventListener('mouseenter', function() {
      if (window.innerWidth > 768) {
        this.style.transform = 'translateY(-15px) translateZ(30px) rotateX(10deg) rotateY(-5deg)';
        this.style.boxShadow = '0 25px 60px rgba(8, 194, 255, 0.4)';
      }
    });

    projectCard.addEventListener('mouseleave', function() {
      if (window.innerWidth > 768) {
        this.style.transform = '';
        this.style.boxShadow = '';
      }
    });

    // Add click event for mobile 3D effect
    projectCard.addEventListener('click', function(e) {
      // Don't trigger if clicking on a link
      if (!e.target.closest('.project-link-3d') && window.innerWidth <= 768) {
        this.style.transform = 'translateY(-15px) translateZ(30px) rotateX(10deg) rotateY(-5deg)';
        setTimeout(() => {
          this.style.transform = '';
        }, 300);
      }
    });

    projectsGrid.appendChild(projectCard);
  });
  
  console.log('Projects populated successfully with working links');
}

// Populate social links
function populateSocialLinks() {
  const socialLinksContainer = document.getElementById('social-links');
  if (!socialLinksContainer) {
    console.error('Social links container not found');
    return;
  }

  socialLinksContainer.innerHTML = '';

  portfolioData.socialLinks.forEach((link, index) => {
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.className = 'social-link-3d';
    socialLink.target = '_blank';
    socialLink.rel = 'noopener noreferrer';
    socialLink.title = link.name;
    socialLink.textContent = link.icon;
    socialLink.style.animationDelay = `${index * 0.1}s`;

    socialLinksContainer.appendChild(socialLink);
  });
  
  console.log('Social links populated successfully');
}

// Setup contact form with 3D animations and improved feedback
function setupContactForm() {
  if (!contactForm) {
    console.error('Contact form not found');
    return;
  }

  // Add 3D focus effects to form inputs
  const formInputs = contactForm.querySelectorAll('.form-input-3d');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'translateZ(5px)';
      this.style.boxShadow = '0 5px 20px rgba(8, 194, 255, 0.3)';
      console.log('Form input focused with 3D effect');
    });

    input.addEventListener('blur', function() {
      this.style.transform = 'translateZ(0px)';
      this.style.boxShadow = '';
    });
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('Contact form submitted');
    
    // Add 3D submit animation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.style.transform = 'translateY(-5px) translateZ(20px) rotateX(-10deg)';
    submitBtn.textContent = 'Sending...';
    
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Clear previous errors and success messages
    clearFormErrors();
    hideFormSuccess();
    
    // Validate form
    let isValid = true;
    
    if (!name) {
      showFormError('name', 'Name is required');
      isValid = false;
    } else if (name.length < 2) {
      showFormError('name', 'Name must be at least 2 characters long');
      isValid = false;
    }
    
    if (!email) {
      showFormError('email', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFormError('email', 'Please enter a valid email address');
      isValid = false;
    }
    
    if (!message) {
      showFormError('message', 'Message is required');
      isValid = false;
    } else if (message.length < 10) {
      showFormError('message', 'Message must be at least 10 characters long');
      isValid = false;
    }
    
    // Simulate form processing
    setTimeout(() => {
      if (isValid) {
        // Show success with 3D animation
        showFormSuccess();
        contactForm.reset();
        
        // Success animation
        submitBtn.style.background = 'linear-gradient(45deg, #22c55e, #16a34a)';
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.transform = 'translateY(-2px) translateZ(10px)';
        
        console.log('Form submitted successfully');
        
        setTimeout(() => {
          submitBtn.style.background = '';
          submitBtn.textContent = 'Send Message';
          submitBtn.style.transform = '';
          hideFormSuccess();
        }, 3000);
      } else {
        // Reset button on validation error
        submitBtn.style.transform = '';
        submitBtn.textContent = 'Send Message';
        console.log('Form validation failed');
      }
    }, 1000);
  });
  
  console.log('Contact form setup complete');
}

// Form validation helpers
function clearFormErrors() {
  const errorElements = document.querySelectorAll('.form-error');
  errorElements.forEach(element => {
    element.classList.remove('show');
    element.textContent = '';
  });
}

function showFormError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function showFormSuccess() {
  const successElement = document.getElementById('form-success');
  if (successElement) {
    successElement.classList.remove('hidden');
    successElement.style.transform = 'translateZ(10px) scale(1.02)';
    successElement.style.opacity = '1';
  }
}

function hideFormSuccess() {
  const successElement = document.getElementById('form-success');
  if (successElement) {
    successElement.classList.add('hidden');
    successElement.style.transform = '';
    successElement.style.opacity = '0';
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Setup scroll effects and 3D animations
function setupScrollEffects() {
  // Navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
      }
    }
  });

  // Enhanced parallax effect for hero section and background shapes
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const shapes = document.querySelectorAll('.shape');
    
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px) translateZ(0px)`;
    }
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.15;
      const yOffset = scrolled * speed;
      const rotation = scrolled * 0.1;
      shape.style.transform = `translateY(${yOffset}px) rotate(${rotation}deg)`;
    });
  });
  
  console.log('Scroll effects setup complete');
}

// Setup 3D animations with intersection observers
function setup3DAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Skills animation observer
  skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillsSection = entry.target;
        const progressBars = skillsSection.querySelectorAll('.skill-progress-3d');
        const skillCategories = skillsSection.querySelectorAll('.skill-category-3d');
        
        console.log('Skills section animation triggered');
        
        // Animate skill categories
        skillCategories.forEach((category, index) => {
          setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0) translateZ(0) rotateX(0)';
          }, index * 200);
        });
        
        // Animate progress bars
        setTimeout(() => {
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              const level = bar.dataset.level;
              bar.style.width = `${level}%`;
              
              // Add pulse effect when animation completes
              setTimeout(() => {
                bar.style.animation = 'progressShine 2s ease-in-out infinite';
              }, 1000);
            }, index * 100);
          });
        }, 500);
        
        skillsObserver.unobserve(skillsSection);
      }
    });
  }, observerOptions);

  // Projects animation observer
  projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const projectsSection = entry.target;
        const projectCards = projectsSection.querySelectorAll('.project-card-3d');
        
        console.log('Projects section animation triggered');
        
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) translateZ(0) rotateX(0)';
          }, index * 150);
        });
        
        projectsObserver.unobserve(projectsSection);
      }
    });
  }, observerOptions);

  // About section observer
  aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const aboutSection = entry.target;
        const aboutCard = aboutSection.querySelector('.about-card-3d');
        const highlightItems = aboutSection.querySelectorAll('.highlight-item-3d');
        
        console.log('About section animation triggered');
        
        if (aboutCard) {
          aboutCard.style.opacity = '1';
          aboutCard.style.transform = 'translateY(0) translateZ(0) rotateX(0)';
        }
        
        highlightItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) translateZ(0) rotateY(0)';
          }, (index * 150) + 300);
        });
        
        aboutObserver.unobserve(aboutSection);
      }
    });
  }, observerOptions);

  // Contact section observer
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const contactSection = entry.target;
        const contactItems = contactSection.querySelectorAll('.contact-item-3d');
        const contactFormEl = contactSection.querySelector('.contact-form-3d');
        
        console.log('Contact section animation triggered');
        
        contactItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) translateZ(0) rotateY(0)';
          }, index * 150);
        });
        
        if (contactFormEl) {
          setTimeout(() => {
            contactFormEl.style.opacity = '1';
            contactFormEl.style.transform = 'translateY(0) translateZ(0)';
          }, 400);
        }
        
        contactObserver.unobserve(contactSection);
      }
    });
  }, observerOptions);

  // Observe sections
  const skillsSection = document.getElementById('skills');
  const projectsSection = document.getElementById('projects');
  const aboutSection = document.getElementById('about');
  const contactSection = document.getElementById('contact');

  if (skillsSection) {
    // Initial setup for skills
    const skillCategories = skillsSection.querySelectorAll('.skill-category-3d');
    skillCategories.forEach(category => {
      category.style.opacity = '0';
      category.style.transform = 'translateY(50px) translateZ(-20px) rotateX(-15deg)';
      category.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    skillsObserver.observe(skillsSection);
  }

  if (projectsSection) {
    // Initial setup for projects
    const projectCards = projectsSection.querySelectorAll('.project-card-3d');
    projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) translateZ(-30px) rotateX(-20deg)';
      card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    projectsObserver.observe(projectsSection);
  }

  if (aboutSection) {
    // Initial setup for about
    const aboutCard = aboutSection.querySelector('.about-card-3d');
    const highlightItems = aboutSection.querySelectorAll('.highlight-item-3d');
    
    if (aboutCard) {
      aboutCard.style.opacity = '0';
      aboutCard.style.transform = 'translateY(40px) translateZ(-20px) rotateX(-10deg)';
      aboutCard.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    highlightItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px) translateZ(-15px) rotateY(-10deg)';
      item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    aboutObserver.observe(aboutSection);
  }

  if (contactSection) {
    // Initial setup for contact
    const contactItems = contactSection.querySelectorAll('.contact-item-3d');
    const contactFormEl = contactSection.querySelector('.contact-form-3d');
    
    contactItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(40px) translateZ(-20px) rotateY(-15deg)';
      item.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    if (contactFormEl) {
      contactFormEl.style.opacity = '0';
      contactFormEl.style.transform = 'translateY(50px) translateZ(-25px)';
      contactFormEl.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    contactObserver.observe(contactSection);
  }
  
  console.log('3D animations setup complete');
}

// Utility function to debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add enhanced mouse movement parallax effect
document.addEventListener('mousemove', function(e) {
  if (window.innerWidth > 768) { // Only on desktop
    const cards = document.querySelectorAll('.project-card-3d, .skill-category-3d, .about-card-3d, .contact-item-3d');
    
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const distanceX = (e.clientX - cardCenterX) / window.innerWidth;
      const distanceY = (e.clientY - cardCenterY) / window.innerHeight;
      
      // Only apply effect if mouse is reasonably close to the card
      if (Math.abs(distanceX) < 0.3 && Math.abs(distanceY) < 0.3) {
        const rotateX = distanceY * 5;
        const rotateY = distanceX * -5;
        
        card.style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
  }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    // Add focus styles for keyboard navigation
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
  document.documentElement.style.setProperty('--animation-duration', '0.1s');
  console.log('Reduced animations for low-end device');
}