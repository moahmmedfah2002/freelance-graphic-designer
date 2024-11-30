// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.querySelector('.close-modal');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show the success message
    
    successModal.classList.add('active');
    contactForm.reset();
});

closeModal.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// Form field animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});
// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-links li');

    // Toggle menu
    mobileMenu.addEventListener('click', function() {
        // Toggle menu visibility
        navLinks.classList.toggle('show');
        
        // Toggle hamburger/close icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // Add animation to nav items
        if (navLinks.classList.contains('show')) {
            navItems.forEach((item, index) => {
                item.style.animation = `slideIn 0.5s ease forwards ${index * 0.1}s`;
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = '';
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('show');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Add slide-in animation
const slideIn = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add animation styles to document
const style = document.createElement('style');
style.textContent = slideIn;
document.head.appendChild(style);