// DOM Elements
const searchBtn = document.querySelector('.search-btn');
const contactBtn = document.querySelector('.contact-btn');
const menuLinks = document.querySelectorAll('nav ul li a');

// Search Button Interaction
searchBtn.addEventListener('click', () => {
    alert('Search functionality coming soon!');
});

// Contact Button Interaction
contactBtn.addEventListener('click', () => {
    window.location.href = '#'; // Replace '#' with your contact page URL
});

// Highlight Active Menu Item
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth Scrolling (optional, if you have internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
