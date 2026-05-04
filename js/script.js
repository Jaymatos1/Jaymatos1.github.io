document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Reveal Animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card, .showcase-content, .donation-section');
    cards.forEach(card => {
        card.classList.add('reveal-hidden');
        observer.observe(card);
    });

    // Dark/Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
    });

    // Modrinth Button Interaction
    const downloadBtn = document.querySelector('.modrinth-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            console.log("Redirecting to Auto World Backup on Modrinth...");
        });
    }
});
