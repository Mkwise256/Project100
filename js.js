document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('#phone');
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: 'ug', // Set the initial country to Uganda
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Example of a simple client-side form validation
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const interests = document.querySelector('textarea[name="interests"]').value;

        if (!name || !email || !interests) {
            alert('Please fill in all required fields.');
            event.preventDefault();
        }
    
    // Validate the word count for the textarea
        const wordCount = interests.trim().split(/\s+/).length;

        if (wordCount < 50 || wordCount > 250) {
            alert('The textarea must contain between 100 and 500 words.');
            event.preventDefault();
        }
    });
});

