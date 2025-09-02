document.addEventListener('DOMContentLoaded', () => {
    // === Scroll-triggered Fade-In Effect ===
    // This section uses the Intersection Observer API to smoothly fade in elements
    // as they enter the user's viewport, creating a dynamic loading experience.
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        // The element will "appear" when any part of it is in the viewport (threshold: 0)
        // with an additional margin of 100px from the bottom to make it trigger a bit earlier.
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Check if the element is currently intersecting (visible)
            if (!entry.isIntersecting) {
                return;
            }
            // If it is, add the 'is-visible' class to trigger the CSS transition
            entry.target.classList.add('is-visible');
            // Stop observing the element since it has already faded in
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    // Apply the observer to all elements with the 'fade-in' class
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    // === Testimonial Carousel Functionality ===
    // This script manages the a simple, manually controlled carousel
    // for the testimonial section, allowing users to cycle through quotes.
    const carousel = document.getElementById('testimonial-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const items = carousel.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    const totalItems = items.length;

    // Function to show the testimonial at the given index
    function showTestimonial(index) {
        items.forEach((item, i) => {
            if (i === index) {
                // Show the selected testimonial
                item.style.display = 'block';
            } else {
                // Hide all other testimonials
                item.style.display = 'none';
            }
        });
    }

    // Event listener for the previous button
    prevBtn.addEventListener('click', () => {
        // Decrement the index, wrapping around to the end if necessary
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showTestimonial(currentIndex);
    });

    // Event listener for the next button
    nextBtn.addEventListener('click', () => {
        // Increment the index, wrapping around to the beginning if necessary
        currentIndex = (currentIndex + 1) % totalItems;
        showTestimonial(currentIndex);
    });

    // Initialize the carousel by showing the first testimonial
    showTestimonial(currentIndex);


    // === Newsletter Form Handling ===
    // This script prevents the default form submission and provides a
    // custom message to the user after they submit their email.
    const form = document.getElementById('newsletter-form');
    const messageDiv = document.getElementById('newsletter-message');
    const emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', (e) => {
        // Prevent the page from reloading
        e.preventDefault();

        // Display a success message
        messageDiv.textContent = 'Thank you for subscribing! You will receive our latest updates shortly.';

        // Clear the input field
        emailInput.value = '';
    });

});
