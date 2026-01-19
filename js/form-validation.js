/* ============================================
   ALPHA EDUWORLD - FORM VALIDATION
   Advanced form handling and validation
   ============================================ */

/* ============================================
   1. FORM VALIDATION RULES
   ============================================ */

const ValidationRules = {
    name: {
        required: true,
        minLength: 3,
        pattern: /^[a-zA-Z\s'-]+$/,
        message: 'Please enter a valid name (3+ characters, letters only)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: true,
        minLength: 10,
        pattern: /^\+?[\d\s\-()]+$/,
        message: 'Please enter a valid phone number (10+ digits)'
    },
    country: {
        required: true,
        message: 'Please select a country'
    }
};

/* ============================================
   2. FORM VALIDATOR CLASS
   ============================================ */

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.isValid = false;

        if (this.form) {
            this.initializeValidation();
        }
    }

    initializeValidation() {
        // Real-time validation on blur
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateField(e.target));
            input.addEventListener('change', (e) => this.validateField(e.target));
            input.addEventListener('input', debounce((e) => this.validateField(e.target), 500));
        });

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(field) {
        const fieldName = field.name || field.getAttribute('placeholder')?.toLowerCase().replace(' ', '_');
        const value = field.value.trim();
        const rules = this.getFieldRules(fieldName);

        if (!rules) return true;

        // Reset previous error state
        this.clearFieldError(field);

        // Check required
        if (rules.required && !value) {
            this.setFieldError(field, rules.message || 'This field is required');
            return false;
        }

        if (!value) return true; // Optional field and empty

        // Check minLength
        if (rules.minLength && value.length < rules.minLength) {
            this.setFieldError(field, rules.message || `Minimum ${rules.minLength} characters required`);
            return false;
        }

        // Check maxLength
        if (rules.maxLength && value.length > rules.maxLength) {
            this.setFieldError(field, rules.message || `Maximum ${rules.maxLength} characters allowed`);
            return false;
        }

        // Check pattern
        if (rules.pattern && !rules.pattern.test(value)) {
            this.setFieldError(field, rules.message || 'Invalid format');
            return false;
        }

        return true;
    }

    getFieldRules(fieldName) {
        // Map field names to validation rules
        if (fieldName.includes('name')) return ValidationRules.name;
        if (fieldName.includes('email')) return ValidationRules.email;
        if (fieldName.includes('phone')) return ValidationRules.phone;
        if (fieldName.includes('country') || fieldName === 'select') return ValidationRules.country;
        return null;
    }

    setFieldError(field, message) {
        field.classList.add('field-error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create and insert error message
        const errorEl = document.createElement('div');
        errorEl.className = 'field-error-message';
        errorEl.setAttribute('role', 'alert');
        errorEl.textContent = message;
        errorEl.style.cssText = `
            color: #dc2626;
            font-size: 0.85rem;
            margin-top: 0.25rem;
            display: block;
            animation: slideInDown 0.3s ease-out;
        `;

        field.parentNode.insertBefore(errorEl, field.nextSibling);

        this.errors[field.name || field.id] = message;
    }

    clearFieldError(field) {
        field.classList.remove('field-error');
        
        const errorEl = field.parentNode.querySelector('.field-error-message');
        if (errorEl) {
            errorEl.remove();
        }

        delete this.errors[field.name || field.id];
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            this.showFormError('Please fix the errors above before submitting.');
            return;
        }

        // All validation passed
        this.submitForm();
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name') || this.getFieldValue('name'),
            email: formData.get('email') || this.getFieldValue('email'),
            phone: formData.get('phone') || this.getFieldValue('phone'),
            country: formData.get('country') || this.getFieldValue('country'),
            submittedAt: new Date().toISOString()
        };

        // Log form data (in production, send to server)
        console.log('Form data:', data);

        // Show success message
        this.showSuccessMessage();

        // Reset form
        this.form.reset();

        // Optional: Disable submit button briefly
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitted!';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Get Free Counselling';
            }, 3000);
        }

        // Send to server (commented out - implement as needed)
        // this.sendToServer(data);
    }

    getFieldValue(fieldName) {
        const field = this.form.querySelector(`input[name="${fieldName}"], select[name="${fieldName}"]`);
        return field ? field.value : '';
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.setAttribute('role', 'status');
        successDiv.innerHTML = `
            <div style="
                background-color: #16a34a;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                animation: slideInDown 0.3s ease-out;
            ">
                <span style="font-size: 1.25rem;">✓</span>
                <div>
                    <strong>Success!</strong>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem;">Thank you for your interest. Our team will contact you shortly.</p>
                </div>
            </div>
        `;

        this.form.insertBefore(successDiv, this.form.firstChild);

        // Auto-remove success message after 5 seconds
        setTimeout(() => {
            successDiv.style.animation = 'slideOutUp 0.3s ease-out';
            setTimeout(() => successDiv.remove(), 300);
        }, 5000);
    }

    showFormError(message) {
        // Show a general form error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.setAttribute('role', 'alert');
        errorDiv.innerHTML = `
            <div style="
                background-color: #fecaca;
                color: #991b1b;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                margin-bottom: 1.5rem;
                border-left: 4px solid #dc2626;
                animation: slideInDown 0.3s ease-out;
            ">
                <strong>Error:</strong> ${message}
            </div>
        `;

        this.form.insertBefore(errorDiv, this.form.firstChild);

        // Auto-remove error message after 5 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'slideOutUp 0.3s ease-out';
            setTimeout(() => errorDiv.remove(), 300);
        }, 5000);
    }

    // Optional: Send form data to server
    async sendToServer(data) {
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Server response:', result);

            return result;
        } catch (error) {
            console.error('Form submission error:', error);
            this.showFormError('An error occurred while submitting the form. Please try again.');
            throw error;
        }
    }
}

/* ============================================
   3. UTILITY FUNCTIONS
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

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

/* ============================================
   4. INITIALIZE ON LOAD
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize form validator
    const counsellingForm = new FormValidator('counsellingForm');
    
    // Make available globally for debugging
    window.formValidator = counsellingForm;

    // Add custom validation if needed
    const countrySelect = document.querySelector('select');
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            counsellingForm.validateField(this);
        });
    }
});

/* ============================================
   5. ADDITIONAL FORM FEATURES
   ============================================ */

// Auto-format phone number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (!match) return phone;

    const [, area, prefix, line] = match;
    if (line) return `${area && area !== '' ? '+' : ''}${area} ${prefix} ${line}`.trim();
    if (prefix) return `${area && area !== '' ? '+' : ''}${area} ${prefix}`.trim();
    if (area) return area;
    return '';
}

// Apply phone formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[placeholder*="Phone"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = formatPhoneNumber(this.value);
        });
    });
});

/* ============================================
   6. ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Improve form accessibility
document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        const input = group.querySelector('input, select, textarea');
        const placeholder = input?.getAttribute('placeholder');
        
        if (placeholder && !input.hasAttribute('aria-label')) {
            input.setAttribute('aria-label', placeholder);
        }

        // Create and associate label if needed
        if (placeholder && !group.querySelector('label')) {
            const label = document.createElement('label');
            label.setAttribute('for', input.id || `field-${index}`);
            label.className = 'sr-only'; // Screen reader only
            label.textContent = placeholder;
            input.id = input.id || `field-${index}`;
            group.insertBefore(label, input);
        }
    });

    // Add aria-required to required fields
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        field.setAttribute('aria-required', 'true');
    });
});

/* ============================================
   7. ERROR TRACKING & LOGGING
   ============================================ */

function logFormError(error, context = {}) {
    const errorLog = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        context: context,
        userAgent: navigator.userAgent
    };

    console.error('Form Error:', errorLog);

    // Send to server for logging (optional)
    // fetch('/api/log-error', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(errorLog)
    // });
}
