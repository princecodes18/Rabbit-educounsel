/* ============================================
   ALPHA EDUWORLD - ANIMATIONS
   Scroll animations and interactive effects
   ============================================ */

/* ============================================
   1. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ============================================ */

const animationConfig = {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '0px 0px -100px 0px'
};

// Elements to animate on scroll
const elementsToAnimate = [
    '.destination-card',
    '.service-card',
    '.counselling-form',
    '.stats',
    '.hero-content'
];

// Initialize scroll animations
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        console.log('IntersectionObserver not supported, using fallback');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate-in', 'fade-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.destination-card, .service-card, .stat-item');
                children.forEach((child, index) => {
                    child.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
                });

                // Unobserve after animation (optional)
                // observer.unobserve(entry.target);
            }
        });
    }, animationConfig);

    // Observe all elements
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));
    });

    return observer;
}

/* ============================================
   2. PARALLAX SCROLL EFFECT
   ============================================ */

function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', throttle(() => {
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = window.scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

/* ============================================
   3. SCROLL PROGRESS BAR
   ============================================ */

function initScrollProgressBar() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    if (!progressBar) {
        // Create progress bar
        const bar = document.createElement('div');
        bar.className = 'scroll-progress-bar';
        bar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 2px;
            background: linear-gradient(75deg, #f31c15 0%, #1e40af 100%);
            z-index: 10000;
            width: 0%;
            transition: width 0.1s ease-out;
        `;
        document.body.insertBefore(bar, document.body.firstChild);
    }

    window.addEventListener('scroll', throttle(() => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        const bar = document.querySelector('.scroll-progress-bar');
        if (bar) {
            bar.style.width = scrolled + '%';
        }
    }, 16));
}

/* ============================================
   4. HOVER EFFECTS FOR CARDS
   ============================================ */

function initCardHoverEffects() {
    const cards = document.querySelectorAll('.destination-card, .service-card');

    cards.forEach(card => {
        // Add 3D perspective effect on hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Calculate rotation
            const rotateX = (yPercent - 50) * 0.1;
            const rotateY = (xPercent - 50) * -0.1;

            this.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;

            // Add subtle shadow effect
            const shadowX = (xPercent - 50) * 0.1;
            const shadowY = (yPercent - 50) * 0.1;
            this.style.boxShadow = `
                ${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.15)
            `;
        });

        // Reset on mouse leave
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
    });
}

/* ============================================
   5. BUTTON RIPPLE EFFECT
   ============================================ */

function initButtonRippleEffect() {
    const buttons = document.querySelectorAll('button, .view-all-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: ripple-animation 0.6s ease-out;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

/* ============================================
   6. NUMBER COUNTER ANIMATION
   ============================================ */

function initNumberCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const startCounting = (element) => {
        const target = parseInt(element.textContent);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };

    // Only start counting when stats section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.classList.contains('counted')) {
                    startCounting(counter);
                    counter.classList.add('counted');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => observer.observe(item));
}

/* ============================================
   7. TYPED ANIMATION (Text Typing Effect)
   ============================================ */

function initTypedAnimation() {
    const typedElements = document.querySelectorAll('[data-typed]');

    typedElements.forEach(element => {
        const text = element.dataset.typed;
        const speed = parseInt(element.dataset.speed) || 50;
        let index = 0;

        element.textContent = ''; // Clear original text

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        };

        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && index === 0) {
                    type();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(element);
    });
}

/* ============================================
   8. SLIDESHOW / CAROUSEL
   ============================================ */

class SimpleCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.items = this.container.querySelectorAll('[data-slide]');
        this.currentIndex = 0;
        this.autoplayInterval = null;

        this.init();
    }

    init() {
        // Hide all items except first
        this.items.forEach((item, index) => {
            item.style.display = index === 0 ? 'block' : 'none';
        });

        // Add navigation if needed
        this.addNavigation();

        // Auto-play if specified
        if (this.container.dataset.autoplay !== 'false') {
            this.startAutoplay();
        }
    }

    addNavigation() {
        const navContainer = document.createElement('div');
        navContainer.className = 'carousel-nav';
        navContainer.style.cssText = 'text-align: center; margin-top: 1rem;';

        this.items.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: none;
                background: ${index === 0 ? '#1e40af' : '#e2e8f0'};
                margin: 0 0.5rem;
                cursor: pointer;
                transition: background 0.3s ease;
            `;
            dot.onclick = () => this.goToSlide(index);
            navContainer.appendChild(dot);
        });

        this.container.parentNode.insertBefore(navContainer, this.container.nextSibling);
    }

    goToSlide(index) {
        this.items.forEach(item => item.style.display = 'none');
        this.currentIndex = index;
        this.items[index].style.display = 'block';
        this.items[index].style.animation = 'fadeIn 0.5s ease-in';

        // Update dots
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.style.background = i === index ? '#1e40af' : '#e2e8f0';
        });
    }

    nextSlide() {
        this.goToSlide((this.currentIndex + 1) % this.items.length);
    }

    previousSlide() {
        this.goToSlide((this.currentIndex - 1 + this.items.length) % this.items.length);
    }

    startAutoplay(interval = 5000) {
        this.autoplayInterval = setInterval(() => this.nextSlide(), interval);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

/* ============================================
   9. TOAST NOTIFICATIONS ANIMATION
   ============================================ */

function showAnimatedToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    const bgColor = {
        'success': '#16a34a',
        'error': '#dc2626',
        'warning': '#f97316',
        'info': '#1e40af'
    }[type] || '#1e40af';

    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInUp 0.3s ease-out;
        max-width: 400px;
    `;

    document.body.appendChild(toast);

    // Auto-remove
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/* ============================================
   10. UTILITY FUNCTIONS
   ============================================ */

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

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

/* ============================================
   11. ADD KEYFRAME ANIMATIONS TO DOCUMENT
   ============================================ */

function injectAnimationStyles() {
    if (document.getElementById('animation-styles')) return;

    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
        @keyframes ripple-animation {
            from {
                width: 20px;
                height: 20px;
                opacity: 1;
            }
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideOutUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-30px);
            }
        }

        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(30px);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(30px);
            }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .animate-in {
            animation: fadeIn 0.5s ease-out;
        }

        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }
    `;

    document.head.appendChild(style);
}

/* ============================================
   12. INITIALIZE ALL ANIMATIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Inject animation styles
    injectAnimationStyles();

    // Initialize all animations
    initScrollAnimations();
    initParallaxEffect();
    initScrollProgressBar();
    initCardHoverEffects();
    initButtonRippleEffect();
    initNumberCounters();
    initTypedAnimation();

    console.log('Animations initialized successfully');
});

// Expose functions globally for manual use
window.showAnimatedToast = showAnimatedToast;
window.SimpleCarousel = SimpleCarousel;
window.throttle = throttle;
window.debounce = debounce;
