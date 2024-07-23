function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}



// Event listener to close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu-links');
    var icon = document.querySelector('.hamburger-icon');

    // Check if the click is outside the menu and the hamburger icon
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Select the navbar element
    const navbar = document.querySelector('nav');

    // Add the animation class to the navbar
    navbar.classList.add('navbar-animate');
});

window.addEventListener('DOMContentLoaded', () => {
    const typingEffectDuration = 3000; // Match with your typing effect duration
    const typingEffect = document.querySelector('.typing-effect');
    const title = document.querySelector('.title');

    // Function to detect when typing effect is complete
    const onTypingEffectComplete = () => {
        title.classList.add('visible');
    };

    // Check if typing effect is complete by monitoring text width
    const checkTypingEffectComplete = () => {
        const typingEffectWidth = typingEffect.offsetWidth;
        const typingEffectTextWidth = typingEffect.scrollWidth;

        if (typingEffectWidth >= typingEffectTextWidth) {
            onTypingEffectComplete();
        } else {
            requestAnimationFrame(checkTypingEffectComplete);
        }
    };

    checkTypingEffectComplete();
});

// Variables to handle scroll state
let isScrolling = false;
let isScrollingUp = false;

// Add scroll event listener
window.addEventListener('wheel', function(event) {
    if (isScrolling) return;
    
    // Set scrolling state
    isScrolling = true;

    // Determine direction of scroll
    if (event.deltaY > 0) {
        // Scrolling down
        scrollToNextSection();
    } else {
        // Scrolling up
        scrollToPreviousSection();
    }

    // Allow scrolling again after a short delay
    setTimeout(() => isScrolling = false, 800); // Adjust timing as needed
});





