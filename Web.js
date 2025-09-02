document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Testimonial Carousel Logic
    const carousel = document.getElementById('testimonial-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = testimonials[0].clientWidth;
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Handle window resize
    window.addEventListener('resize', updateCarousel);
    
    // Initial render
    updateCarousel();
    
    // Form submission logic
    const form = document.getElementById('newsletter-form');
    const messageDiv = document.getElementById('newsletter-message');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        messageDiv.textContent = 'Thank you for subscribing to our exclusive offers!';
        form.reset();
    });
});
