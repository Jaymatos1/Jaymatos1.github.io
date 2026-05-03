document.addEventListener('DOMContentLoaded', () => {
    console.log("Auto World Backup Website loaded successfully!");

    // 1. Donation Button Listener
    const donateButtons = document.querySelectorAll('.donate-btn');
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const coin = this.getAttribute('data-coin');
            alert(`You selected ${coin}. Please ensure your payment method is ready to copy the address and complete your donation using NOWPayments.`);

            // Scroll smoothly down to the form area for action
            document.getElementById('nowpayments-form-area').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Simple Header Effect (Optional)
    const header = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }
    });

});

// NOTE: In a real deployment, the actual NOWPayments widget script (usually provided by them)
// would be placed here or within the HTML to make it interactive.
