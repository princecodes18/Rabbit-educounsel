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
                const navbar = document.querySelector('.rabbit-navbar');
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
   4. SCROLL ANIMATIONS (FIXED)
   ============================================ */

function initializeScrollAnimations() {

  const scrollElements = document.querySelectorAll(
    '.destination-card, .service-card, .form-group, .university-card'
  );

  if (!scrollElements.length) return;

  /* Modern browsers: IntersectionObserver */
  if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          obs.unobserve(entry.target); // animate ONCE
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    });

    scrollElements.forEach(el => observer.observe(el));
    return; // IMPORTANT: prevents scroll fallback

  }

  /* Legacy fallback (only if IntersectionObserver not supported) */

  let scrollTicking = false;

  function legacyReveal() {
    scrollElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('animate-in');
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        legacyReveal();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  legacyReveal();
}

/* Initialize once */
document.addEventListener("DOMContentLoaded", initializeScrollAnimations);


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
                    const navbar = document.querySelector('.rabbit-navbar');
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

const tabBtns = document.querySelectorAll(".tab-btn");
const carousel = document.querySelector(".stars-carousel");
const wrapper = document.querySelector(".stars-carousel-wrapper");

let pos = 0;
let raf;
let paused = false;
const speed = 0.6;

function filterStudentsForCountry(country) {
  if (!country || country === "all") return;

  const carousel = document.querySelector(".stars-carousel");
  const cards = Array.from(carousel.children);

  // Remove clones (important)
  cards.forEach(card => {
    if (card.dataset.clone === "true") card.remove();
  });

  // Filter original cards
  cards.forEach(card => {
    if (card.dataset.category !== country) {
      card.remove();
    }
  });

  // Disable infinite animation
  carousel.style.animation = "none";
  carousel.style.justifyContent = "center";
}


// Build infinite carousel from visible cards
function setupCarousel() {
  cancelAnimationFrame(raf);
  pos = 0;

  // Remove old clones
  carousel.querySelectorAll(".clone").forEach(c => c.remove());

  // Get only visible original cards
  const cards = [...carousel.querySelectorAll(".student-card:not(.hidden)")];

  // Clone visible cards
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add("clone");
    carousel.appendChild(clone);
  });

  const resetPoint = carousel.scrollWidth / 2;

  function animate() {
    if (!paused) {
      pos += speed;

      if (pos >= resetPoint) pos = 0;

      carousel.style.transform = `translateX(-${pos}px)`;
    }

    raf = requestAnimationFrame(animate);
  }

  animate();
}

// Initial build
setupCarousel();
const carouselObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    paused = !entry.isIntersecting;
  });
}, { threshold: 0.1 });

carouselObserver.observe(wrapper);


/* Hover pause */
wrapper.addEventListener("mouseenter", () => paused = true);
wrapper.addEventListener("mouseleave", () => paused = false);

/* Filter Tabs */
tabBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    tabBtns.forEach(b => b.classList.remove("active"));
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    carousel.querySelectorAll(".student-card").forEach(card => {
      if (card.classList.contains("clone")) return;

      if (filter === "all") {
        card.classList.remove("hidden");
      } else {
        card.dataset.category === filter
          ? card.classList.remove("hidden")
          : card.classList.add("hidden");
      }
    });

    // Rebuild infinite loop after filtering
    setTimeout(setupCarousel, 50);
  });
});

let isDragging = false;
let startX = 0;
let currentX = 0;
let lastMove = 0;

// Mouse + Touch start
function dragStart(e) {
  isDragging = true;
  paused = true;

  startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  currentX = startX;
  lastMove = 0;

  carousel.style.cursor = "grabbing";
}

// Move
function dragMove(e) {
  if (!isDragging) return;

  const x = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  const delta = x - currentX;

  pos -= delta;
  lastMove = delta;

  carousel.style.transform = `translate3d(-${pos}px,0,0)`;
  currentX = x;
}

// End
function dragEnd() {
  if (!isDragging) return;

  isDragging = false;
  carousel.style.cursor = "grab";

  // small momentum
  pos -= lastMove * 8;

  paused = false;
}

// Events
carousel.style.cursor = "grab";

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragMove);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);

carousel.addEventListener("touchstart", dragStart, { passive: true });
carousel.addEventListener("touchmove", dragMove, { passive: true });
carousel.addEventListener("touchend", dragEnd);




function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        function toggleDropdown(id) {
            const dropdown = document.getElementById(id + 'Dropdown');
            const header = event.currentTarget;
            
            if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                dropdown.style.display = 'block';
                header.classList.add('active');
            } else {
                dropdown.style.display = 'none';
                header.classList.remove('active');
            }
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const navbar = document.querySelector('.rabbit-navbar');
            
            if (menu.classList.contains('active') && !navbar.contains(event.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });

const form = document.querySelector(".contact-form");
const btn = document.getElementById("submitBtn");
const spinner = btn.querySelector(".spinner");
const btnText = btn.querySelector(".btn-text");
const successMsg = document.querySelector(".form-success");

form.addEventListener("submit", () => {

  // Disable button
  btn.disabled = true;

  // Show spinner
  spinner.style.display = "inline-block";
  btnText.textContent = "Submitting...";

  // Show success + WhatsApp after Google submission
  setTimeout(() => {
    spinner.style.display = "none";
    btnText.textContent = "Submitted";

    successMsg.style.display = "block";

    // Auto open WhatsApp
    window.open(
      "https://wa.me/message/TSIR7MA7456RI1"
    );

  }, 1200);
});

document.addEventListener("DOMContentLoaded", () => {
  const studentCards = document.querySelectorAll(".student-card");
  const tabBtns = document.querySelectorAll(".tab-btn");

  // Get country from URL hash
  const countryFromURL = window.location.hash.replace("#", "");

  if (!countryFromURL) return;

  // Activate correct tab if exists
  tabBtns.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.filter === countryFromURL) {
      btn.classList.add("active");
    }
  });

  // Filter cards
  studentCards.forEach(card => {
    const category = card.dataset.category;
    if (category === countryFromURL) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('heroContactForm');
  const submitBtn = document.getElementById('heroSubmitBtn');
  const spinner = submitBtn?.querySelector('.spinner');
  const successMsg = document.querySelector('.form-success');
  const iframe = document.querySelector('iframe[name="hidden_iframe"]');

  if (!form || !submitBtn || !iframe) return;

  let submitting = false;

  /* --------- On Submit --------- */
  form.addEventListener('submit', function () {
    if (submitting) return;
    submitting = true;

    submitBtn.disabled = true;
    form.classList.add('form-disabled');

    const btnText = submitBtn.querySelector('.btn-text');
    if (btnText) btnText.textContent = 'Submitting...';

    if (spinner) spinner.style.display = 'inline-block';
  });

  /* --------- On Successful Google Form Submit --------- */
  iframe.addEventListener('load', function () {
    if (!submitting) return;

    submitting = false;

    // Disable everything permanently
    form.querySelectorAll('input, select, textarea, button')
      .forEach(el => el.disabled = true);

    if (spinner) spinner.style.display = 'none';

    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.textContent = '✅ Thank you! Your form has been submitted successfully.';
    }

    // Store submission state (prevents re-submit on refresh)
    localStorage.setItem('heroFormSubmitted', 'true');
  });

  /* --------- Prevent Refill on Page Reload --------- */
  if (sessionStorage.getItem('heroFormSubmitted') === 'true') {
    form.querySelectorAll('input, select, textarea, button')
      .forEach(el => el.disabled = true);

    form.classList.add('form-disabled');

    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.textContent = '✅ You have already submitted this form.';
    }
  }

});


