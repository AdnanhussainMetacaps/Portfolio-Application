// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add dynamic typing effect to hero title (optional)
const heroHighlight = document.querySelector('.hero-highlight');
if (heroHighlight) {
    const words = ['Complex', 'Modern', 'Innovative', 'Scalable'];
    let wordIndex = 0;
    
    setInterval(() => {
        wordIndex = (wordIndex + 1) % words.length;
        heroHighlight.style.opacity = '0';
        
        setTimeout(() => {
            heroHighlight.textContent = words[wordIndex];
            heroHighlight.style.opacity = '1';
        }, 300);
    }, 3000);
}

// Cursor glow effect (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if (!cursor) {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        glow.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
        `;
        document.body.appendChild(glow);
    }
    
    const glowElement = document.querySelector('.cursor-glow');
    if (glowElement) {
        glowElement.style.left = e.clientX + 'px';
        glowElement.style.top = e.clientY + 'px';
    }
});

// Service cards hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate numbers in features section
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.feature-number');
        
        numbers.forEach(number => {
            const target = parseInt(number.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    number.textContent = Math.floor(current) + (number.textContent.includes('+') ? '+' : '%');
                    requestAnimationFrame(updateNumber);
                } else {
                    number.textContent = target + (number.textContent.includes('+') ? '+' : '%');
                }
            };
            
            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateNumber();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(number);
        });
    };
    
    animateNumbers();
});

// Console welcome message
console.log('%c Welcome to my portfolio! 🚀', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%c Built with ❤️ using modern web technologies', 'color: #00ccff; font-size: 14px;');
