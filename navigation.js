// Mobile Navigation Handler
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Toggle menu
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        toggleMenu();
    });

    // Function to toggle menu
    function toggleMenu() {
        navLinks.classList.toggle('show');
        mobileMenu.classList.toggle('active');
        
        // Toggle icon
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('show');
            mobileMenu.classList.remove('active');
        }
    });
}); 