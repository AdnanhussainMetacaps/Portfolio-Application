// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                budget: document.getElementById('budget').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // In a real application, you would send this data to a backend
            console.log('Form submitted:', formData);

            // Show success message
            alert('Thank you for your message! We\'ll get back to you soon.');

            // Reset form
            contactForm.reset();
        });

        // Add input animations
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });
    }
});
