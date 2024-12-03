// Add smooth scrolling for navigation links and "Shop Now" button
document.querySelectorAll('.nav-links a, .hero .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')
            ? this.getAttribute('href').substring(1)
            : 'shop'; // Default target is "shop" for the button
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth',
            });
        }
    });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Cart button interaction
const cartButtons = document.querySelectorAll('.category-card button');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hoverBtn = button.querySelector('.hover-btn span');
        let count = parseInt(hoverBtn.textContent, 10) || 0;
        count++;
        hoverBtn.textContent = count; // Update the count
        button.classList.add('added');

        setTimeout(() => {
            button.classList.remove('added');
        }, 500);
    });
});

// Floating "Shop Now" button animation
const heroButton = document.querySelector('.hero .btn');

heroButton.addEventListener('mouseover', () => {
    heroButton.style.transform = 'scale(1.1)';
    heroButton.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
});

heroButton.addEventListener('mouseout', () => {
    heroButton.style.transform = 'scale(1)';
    heroButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});

// Optional: Scroll to top when clicking logo
document.querySelector('.logo img').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
