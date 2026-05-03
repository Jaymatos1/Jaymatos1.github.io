/* 
   One Minute Minecraft - script.js
   Handles smooth reveal animations and interaction
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    // This looks for elements as you scroll and fades them in smoothly.
    const observerOptions = {
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Apply the reveal effect to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.classList.add('reveal-hidden'); // Initial state
        observer.observe(card);
    });

    // 2. Modrinth Button Interaction
    // Subtle console log or feedback when clicking the download button
    const downloadBtn = document.querySelector('.modrinth-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            console.log("Redirecting to Auto World Backup on Modrinth...");
        });
    }
});
