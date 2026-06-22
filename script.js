// AOS init
AOS.init({ duration: 800, once: true });

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
}

// Testimonial carousel
const track = document.getElementById('track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
if (track && prevBtn && nextBtn) {
    let index = 0;
    const items = document.querySelectorAll('.testimonial');
    const update = () => track.style.transform = `translateX(-${index * 100}%)`;
    nextBtn.onclick = () => { index = (index + 1) % items.length; update(); };
    prevBtn.onclick = () => { index = (index - 1 + items.length) % items.length; update(); };
}

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you! Your appointment request has been received. We will confirm within 2 hours. ✨');
        bookingForm.reset();
    });
}

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) scrollBtn.style.display = 'flex';
    else scrollBtn.style.display = 'none';
});
if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.style.background = 'rgba(255,249,247,0.98)';
    else navbar.style.background = 'rgba(255,249,247,0.92)';
});
