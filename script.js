document.addEventListener('DOMContentLoaded', () => {

    // === Scroll-triggered Fade-In Effect ===
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // === Testimonial Carousel Functionality ===
    const carousel = document.getElementById('testimonial-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const items = carousel.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    const totalItems = items.length;

    function showTestimonial(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);

    // === Newsletter Form Handling ===
    const form = document.getElementById('newsletter-form');
    const messageDiv = document.getElementById('newsletter-message');
    const emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        messageDiv.textContent = 'Thank you for subscribing! You will receive our latest updates shortly.';
        emailInput.value = '';
    });
    
    // === Smooth Scrolling for Navigation ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
