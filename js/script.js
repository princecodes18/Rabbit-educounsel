/* ============================================
   ALPHA EDUWORLD - MAIN JAVASCRIPT
   Core functionality and interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeHamburgerMenu();
    initializeSmoothScroll();
    initializeLazyLoad();
    initializeScrollAnimations();
    initializeFormListeners();
});

/* ============================================
   1. HAMBURGER MENU FUNCTIONALITY
   ============================================ */

function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when nav link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

/* ============================================
   2. SMOOTH SCROLL BEHAVIOR
   ============================================ */

function initializeSmoothScroll() {
    // Already enabled via CSS scroll-behavior: smooth
    // This function enhances it with custom handling if needed
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Get navbar height to offset scroll position
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                const targetPosition = target.offsetTop - navbarHeight;
                
                // Use window.scrollTo for better control
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   3. LAZY LOADING IMAGES
   ============================================ */

function initializeLazyLoad() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Check if img has data-src attribute
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Stop observing this image
                    observer.unobserve(img);
                }
            });
        });

        // Observe all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/* ============================================
   4. SCROLL ANIMATIONS
   ============================================ */

function initializeScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        return;
    }

    const scrollElements = document.querySelectorAll(
        '.destination-card, .service-card, .form-group'
    );

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElements = () => {
        scrollElements.forEach((element) => {
            if (elementInView(element, 1.25)) {
                element.classList.add('animate-in');
                // Remove class to allow re-animation if scrolling back
                // Or keep it for one-time animation
            }
        });
    };

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    scrollElements.forEach(el => observer.observe(el));

    // Fallback for browsers without IntersectionObserver
    window.addEventListener('scroll', displayScrollElements);
}

/* ============================================
   5. FORM FUNCTIONALITY
   ============================================ */

function initializeFormListeners() {
    const form = document.getElementById('counsellingForm');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Add real-time validation
    const inputs = document.querySelectorAll('.form-group input, .form-group select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('change', validateField);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        console.log('Form validation failed');
        return;
    }

    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name') || document.querySelector('input[placeholder="Full Name"]').value,
        email: formData.get('email') || document.querySelector('input[placeholder="Email Address"]').value,
        phone: formData.get('phone') || document.querySelector('input[placeholder="Phone Number"]').value,
        country: formData.get('country') || document.querySelector('select').value,
        submittedAt: new Date().toISOString()
    };

    // Log form data (in production, send to server)
    console.log('Form submitted:', data);

    // Show success message
    showNotification('Thank you! We will contact you soon.', 'success');

    // Reset form
    this.reset();

    // Optional: Send to server
    // sendFormToServer(data);
}

function validateForm() {
    const form = document.getElementById('counsellingForm');
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;

    // Remove previous error state
    field.classList.remove('error');

    // Validation rules
    if (field.placeholder.includes('Full Name')) {
        isValid = value.length >= 3 && /^[a-zA-Z\s]+$/.test(value);
    } else if (field.placeholder.includes('Email')) {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (field.placeholder.includes('Phone')) {
        isValid = /^\d{10,}$/.test(value.replace(/[^0-9]/g, ''));
    } else if (field.tagName === 'SELECT') {
        isValid = value !== '';
    }

    // Set error state if validation fails
    if (!isValid && value) {
        field.classList.add('error');
        // Optionally show error message
        const errorMsg = createErrorMessage(field);
        if (errorMsg && !field.nextElementSibling?.classList.contains('error-message')) {
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
        }
    }

    return isValid;
}

function createErrorMessage(field) {
    let message = '';

    if (field.placeholder.includes('Full Name')) {
        message = 'Please enter a valid name (at least 3 characters)';
    } else if (field.placeholder.includes('Email')) {
        message = 'Please enter a valid email address';
    } else if (field.placeholder.includes('Phone')) {
        message = 'Please enter a valid phone number (at least 10 digits)';
    } else if (field.tagName === 'SELECT') {
        message = 'Please select a country';
    }

    if (message) {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        errorEl.style.cssText = `
            color: var(--danger-color);
            font-size: 0.85rem;
            margin-top: 0.25rem;
        `;
        return errorEl;
    }

    return null;
}

/* ============================================
   6. NOTIFICATIONS
   ============================================ */

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? 'var(--success-color)' : 'var(--primary-color)'};
        color: white;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
    `;
    closeBtn.onclick = () => removeNotification(notification);

    notification.appendChild(closeBtn);

    // Add to DOM
    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
}

/* ============================================
   7. CTA BUTTON HANDLERS
   ============================================ */

function initializeCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('data-href');
            
            if (href) {
                window.location.href = href;
            } else {
                // Scroll to counselling form
                const counsellingSection = document.getElementById('counselling');
                if (counsellingSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    window.scrollTo({
                        top: counsellingSection.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ============================================
   8. UTILITY FUNCTIONS
   ============================================ */

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

/* ============================================
   9. ANALYTICS (Optional)
   ============================================ */

function trackEvent(eventName, eventData = {}) {
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Event:', eventName, eventData);
    }

    // Send to analytics service (e.g., Google Analytics)
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track form submissions
document.getElementById('counsellingForm')?.addEventListener('submit', function() {
    trackEvent('form_submission', {
        form_type: 'counselling',
        timestamp: new Date().toISOString()
    });
});

/* ============================================
   10. PERFORMANCE OPTIMIZATION
   ============================================ */

// Preload critical resources
window.addEventListener('load', function() {
    // Add any post-load optimizations
    console.log('Page loaded successfully');
});



document.addEventListener('DOMContentLoaded', function () {
    const viewAllBtn = document.getElementById('viewAllCountriesBtn');
    const hiddenCountries = document.querySelectorAll('.hidden-country');

    if (viewAllBtn && hiddenCountries.length) {
        viewAllBtn.addEventListener('click', function () {
            hiddenCountries.forEach(card => card.classList.toggle('show-country'));
            const expanded = hiddenCountries[0].classList.contains('show-country');
            viewAllBtn.textContent = expanded ? 'Show Less Countries' : 'View All Countries';
        });
    }
});


// Monitor web vitals
if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log('Web Vital:', entry);
            }
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
        console.log('Web Vitals monitoring not available');
    }
}

// Show More Offers Button Functionality
const showMoreOffersBtn = document.querySelector('.show-more-offers-btn');
const hiddenOffers = document.querySelectorAll('.offer-card.hidden-offer');

if (showMoreOffersBtn && hiddenOffers.length > 0) {
  showMoreOffersBtn.addEventListener('click', function() {
    hiddenOffers.forEach(card => {
      card.classList.toggle('show-offer');
    });
    
    showMoreOffersBtn.classList.toggle('expanded');
    showMoreOffersBtn.textContent = showMoreOffersBtn.classList.contains('expanded') 
      ? 'Show Less ▲' 
      : 'Show More ▼';
  });
}

// Meet Our Stars - Filter Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const studentCards = document.querySelectorAll('.student-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    tabBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');

    // Show/hide cards based on filter
    studentCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        if (card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  });
});
