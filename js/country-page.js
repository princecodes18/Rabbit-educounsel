/* ============================================
   COUNTRY PAGE JAVASCRIPT - DYNAMIC VERSION
   Handles dynamic data loading from country-data.js
   ============================================ */

// Global variable to store current country data
console.log("script loaded");

let currentCountryData = null;

document.addEventListener('DOMContentLoaded', function() {
    // Get country from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const countryKey = urlParams.get('country');
    
    if (countryKey && COUNTRY_DATA[countryKey]) {
        currentCountryData = COUNTRY_DATA[countryKey];
        // Breadcrumb update
const breadcrumbCountry = document.getElementById('breadcrumb-country');
if (breadcrumbCountry && currentCountryData) {
  breadcrumbCountry.textContent = currentCountryData.name;
}

        loadCountryPage();
    } else {
        // No country specified → go to all countries page
    window.location.href = "allcountry.html";
    }
    
    // Initialize other features
    initializeModalHandlers();
    initializeScrollAnimations();
});

/* ============================================
   LOAD ENTIRE COUNTRY PAGE
   ============================================ */

function loadCountryPage() {
    if (!currentCountryData) return;
    
    // Update page title
    document.title = currentCountryData.heroTitle + " - Rabbit Educounsel";
    
    // Load all sections
    loadHeroSection();
    loadBenefitsSection();
    loadBackgroundSection();
    loadUniversitiesSection();
    loadEligibilitySection();
    loadDocumentsSection();
    loadAdmissionProcessSection();
    loadFeeComparisonSection();
    loadCTASection();
    
    console.log('Country page loaded for:', currentCountryData.name);
}

/* ============================================
   HERO SECTION
   ============================================ */

function loadHeroSection() {
    document.getElementById('country-flag-img').src = currentCountryData.flag;
    document.getElementById('country-flag-img').alt = currentCountryData.name + " Flag";
    document.getElementById('hero-title').textContent = currentCountryData.heroTitle;
    document.getElementById('hero-description').textContent = currentCountryData.heroDescription;
}

const heroSection = document.querySelector(".country-hero");

heroSection.style.backgroundImage = `
  linear-gradient(135deg, rgba(0,0,0,0.6), rgba(190,47,47,0.6)),
  url('${data.backgroundImage}')
`;

/* ============================================
   BENEFITS SECTION
   ============================================ */

function loadBenefitsSection() {
    document.getElementById('why-study-title').textContent = `Why Study MBBS in ${currentCountryData.name}?`;
    
    const container = document.getElementById('benefits-container');
    container.innerHTML = '';
    
    currentCountryData.benefits.forEach(benefit => {
        const card = document.createElement('div');
        card.className = 'benefit-card';
        card.innerHTML = `
            <h3>${benefit.icon} ${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        container.appendChild(card);
    });
}

/* ============================================
   BACKGROUND IMAGE SECTION
   ============================================ */

function loadBackgroundSection() {
    const section = document.getElementById('country-bg-section');
    section.style.backgroundImage = `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${currentCountryData.backgroundImage}')`;
    
    document.getElementById('bg-title').textContent = currentCountryData.backgroundTitle;
    document.getElementById('bg-description').textContent = currentCountryData.backgroundDescription;
}

/* ============================================
   UNIVERSITIES SECTION
   ============================================ */

function loadUniversitiesSection() {
    document.getElementById('universities-title').textContent = `Top Medical Universities in ${currentCountryData.name}`;
    
    // Load filter buttons
    loadUniversityFilters();
    
    // Load university cards
    loadUniversityCards();
    
    // Load university modals
    loadUniversityModals();
}

function loadUniversityFilters() {
    const filtersContainer = document.getElementById('universityFilters');
    filtersContainer.innerHTML = '';
    
    currentCountryData.universities.forEach(uni => {
        const btn = document.createElement('button');
        btn.className = 'uni-filter-btn';
        btn.textContent = uni.name;
        btn.onclick = () => scrollToUniversity(uni.id, btn);
        filtersContainer.appendChild(btn);
    });
}

function loadUniversityCards() {
    const container = document.getElementById('universities-container');
    container.innerHTML = '';
    
    currentCountryData.universities.forEach((uni, index) => {
        const card = document.createElement('div');
        card.className = 'university-card';
        card.id = uni.id;
        card.innerHTML = `
            <div class="university-header">
                <img src="${uni.logo}" alt="${uni.name}" class="university-logo" onerror="this.src='assets/images/universities/default-logo.png'">
                <h3>${uni.name}</h3>
            </div>
            <div class="university-info">
                <p><strong>📍 Location:</strong> ${uni.location}</p>
                <p><strong>💵 Fees:</strong>${uni.fees}</p>
                <p><strong>⏱️ Duration:</strong> ${uni.duration}</p>
                <p><strong>🌐 Recognition:</strong> ${uni.recognition}</p>
            </div>
            <div class="university-actions">
                <button class="btn-details" onclick="openModal('modal-${index}')">View Details</button>
                <button class="btn-interest" onclick="openInterestForm('${uni.name}')">Get Free Counselling</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function loadUniversityModals() {
    const container = document.getElementById('modals-container');
    container.innerHTML = '';
    
    currentCountryData.universities.forEach((uni, index) => {
        const modal = document.createElement('div');
        modal.id = `modal-${index}`;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${uni.name}</h2>
                    <button class="close-btn" onclick="closeModal('modal-${index}')">&times;</button>
                </div>
                
                <div class="modal-section">
                    <h3>About University</h3>
                    <p>${uni.about}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Faculty</h3>
                    <p>${uni.faculty}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Campus & Facilities</h3>
                    <p>${uni.campus}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Student Life</h3>
                    <p>${uni.studentLife}</p>
                </div>
                
                <div class="modal-links">
                    <a href="${uni.website}" class="modal-link-btn" target="_blank">Visit Website</a>
                    <a href="${uni.brochure}" class="modal-link-btn" target="_blank">Download Brochure</a>
                </div>
                
                <button class="interest-btn" onclick="openInterestForm('${uni.name}')">Interested? Fill the form</button>
            </div>
        `;
        container.appendChild(modal);
    });
}

/* ============================================
   ELIGIBILITY SECTION
   ============================================ */

function loadEligibilitySection() {
    const list = document.getElementById('eligibility-list');
    list.innerHTML = '';
    
    currentCountryData.eligibility.forEach(item => {
        const li = document.createElement('li');
        li.textContent = '✓ ' + item;
        list.appendChild(li);
    });
}

/* ============================================
   DOCUMENTS SECTION
   ============================================ */

function loadDocumentsSection() {
    const container = document.getElementById('documents-container');
    container.innerHTML = '';
    
    const documentTypes = [
        { key: 'academic', icon: 'fa-graduation-cap', title: 'Academic' },
        { key: 'identity', icon: 'fa-passport', title: 'Identity' },
        { key: 'additional', icon: 'fa-file-alt', title: 'Additional' }
    ];
    
    documentTypes.forEach(type => {
        const card = document.createElement('div');
        card.className = 'document-card';
        
        let docList = '';
        currentCountryData.documents[type.key].forEach(doc => {
            docList += `<li>${doc}</li>`;
        });
        
        card.innerHTML = `
            <i class="fas ${type.icon}"></i>
            <h3>${type.title}</h3>
            <ul>${docList}</ul>
        `;
        container.appendChild(card);
    });
}

/* ============================================
   ADMISSION PROCESS SECTION
   ============================================ */

function loadAdmissionProcessSection() {
    const container = document.getElementById('process-container');
    container.innerHTML = '';
    
    currentCountryData.admissionProcess.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'process-step';
        stepDiv.innerHTML = `
            <div class="step-number">${step.step}</div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        `;
        container.appendChild(stepDiv);
    });
}

/* ============================================
   FEE COMPARISON SECTION
   ============================================ */

function loadFeeComparisonSection() {
    document.getElementById('fee-title').textContent = 'Fee Structure & Comparison';
    document.getElementById('country-column-header').textContent = `MBBS in ${currentCountryData.name}`;
    
    const tbody = document.getElementById('fee-comparison-body');
    tbody.innerHTML = '';
    
    const comparison = currentCountryData.feeComparison;
    
    const rows = [
        { 
            label: 'Total Course Cost', 
            country: `INR ${comparison.totalCost} Lakhs`, 
            india: 'INR 25-100 Lakhs' 
        },
        { 
            label: 'Medium of Teaching', 
            country: comparison.mediumOfTeaching, 
            india: 'English + Regional' 
        },
        { 
            label: 'Practical Training', 
            country: comparison.practicalTraining, 
            india: 'Later in course' 
        },
        { 
            label: 'Living Cost/Month', 
            country: `INR ${comparison.livingCost}`, 
            india: 'INR 10,000-25,000' 
        },
        { 
            label: 'Global Recognition', 
            country: comparison.globalRecognition, 
            india: 'Limited recognition' 
        },
        { 
            label: 'Hostel & Mess', 
            country: comparison.hostelMess, 
            india: 'Varies by college' 
        }
    ];
    
    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.label}</strong></td>
            <td>${row.country}</td>
            <td>${row.india}</td>
        `;
        tbody.appendChild(tr);
    });
}

/* ============================================
   CTA SECTION
   ============================================ */

function loadCTASection() {
    document.getElementById('cta-description').textContent = 
        `Get free expert counseling and begin your path to studying MBBS in ${currentCountryData.name} today`;
}

/* ============================================
   SCROLL TO UNIVERSITY CARD
   ============================================ */

function scrollToUniversity(uniId, btnElement) {
    const uniCard = document.getElementById(uniId);
    
    if (!uniCard) {
        console.warn(`University card with id "${uniId}" not found`);
        return;
    }

    // Get navbar height to account for fixed positioning
    const navbar = document.querySelector('.rabbit-navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    
    // Calculate position
    const cardPosition = uniCard.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = cardPosition - navbarHeight - 20;

    // Smooth scroll to university card
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });

    // Update active button state
    updateActiveFilterButton(btnElement);

    // Add highlight animation to card
    highlightCard(uniCard);
}

/* ============================================
   UPDATE ACTIVE FILTER BUTTON
   ============================================ */

function updateActiveFilterButton(activeBtn) {
    document.querySelectorAll('.uni-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

/* ============================================
   HIGHLIGHT CARD ANIMATION
   ============================================ */

function highlightCard(card) {
    card.style.transform = 'scale(1.03)';
    card.style.boxShadow = '0 12px 30px rgba(33, 128, 141, 0.3)';
    
    setTimeout(() => {
        card.style.transform = '';
        card.style.boxShadow = '';
    }, 600);
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */

function initializeModalHandlers() {
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (!modal) {
        console.warn(`Modal with id "${modalId}" not found`);
        return;
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (!modal) {
        console.warn(`Modal with id "${modalId}" not found`);
        return;
    }

    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('show');
    });
    document.body.style.overflow = 'auto';
}

/* ============================================
   OPEN INTEREST FORM (GOOGLE FORM)
   ============================================ */
function openInterestForm(uniName) {
  const modal = document.getElementById("interestModal");
  modal.classList.add("show");
  document.getElementById("uniField").value = uniName;

  if (typeof gtag !== 'undefined') {
    gtag('event', 'interest_form_click', {
      university_name: uniName,
      country: currentCountryData.name
    });
  }
}

function closeInterestForm() {
  document.getElementById("interestModal").classList.remove("show");
}
document.getElementById("interestModal").addEventListener("click", e => {
  if (e.target.id === "interestModal") closeInterestForm();
});


document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeInterestForm();
});

document.getElementById("interestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = document.getElementById("interestSubmit");
  const success = document.querySelector(".form-success");

  btn.classList.add("loading");
  btn.disabled = true;

  fetch("https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: new FormData(this)
  });

  setTimeout(() => {
    btn.classList.remove("loading");
    success.style.display = "block";
    this.reset();

    setTimeout(() => {
      closeInterestForm();
      success.style.display = "none";
      btn.disabled = false;
    }, 2000);

  }, 1200);
});


/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId + 'Dropdown');
    if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
        
        const header = dropdown.previousElementSibling;
        const caret = header.querySelector('.caret');
        if (caret) {
            caret.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    }
}

/* ============================================
   TABLE RESPONSIVE ENHANCEMENT
   ============================================ */

function setupResponsiveTables() {
    const tables = document.querySelectorAll('.comparison-table');
    
    tables.forEach(table => {
        if (window.innerWidth < 768) {
            const wrapper = table.parentElement;
            wrapper.style.position = 'relative';
            
            const scrollHint = document.createElement('div');
            scrollHint.textContent = '← Scroll to see more →';
            scrollHint.style.cssText = `
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #666;
                background: rgba(33, 128, 141, 0.1);
                border-radius: 5px;
                margin-top: 10px;
            `;
            wrapper.appendChild(scrollHint);
            
            wrapper.addEventListener('scroll', function() {
                scrollHint.style.opacity = '0';
                setTimeout(() => scrollHint.remove(), 300);
            }, { once: true });
        }
    });
}

// Initialize responsive tables after content loads
setTimeout(setupResponsiveTables, 500);


document.addEventListener("DOMContentLoaded", () => {
  const country = window.location.hash.replace("#", "");
  filterStudentsForCountry(country);
});

const clone = card.cloneNode(true);
clone.dataset.clone = "true";
carousel.appendChild(clone);




/* ============================================
   EXPORT FUNCTIONS FOR GLOBAL USE
   ============================================ */

window.scrollToUniversity = scrollToUniversity;
window.openModal = openModal;
window.closeModal = closeModal;
window.openInterestForm = openInterestForm;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleDropdown = toggleDropdown;

console.log('Country page dynamic scripts loaded successfully');



