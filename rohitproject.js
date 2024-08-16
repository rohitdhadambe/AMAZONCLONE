document.addEventListener('DOMContentLoaded', () => {
    // Back to top button animation
    const backToTop = document.querySelector('.back');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navbar sticky effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Fade in boxes on scroll
    const boxes = document.querySelectorAll('.box');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    });

    // Hover animation for product boxes
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hovered');
        });
        box.addEventListener('mouseleave', () => {
            box.classList.remove('hovered');
        });
    });
});
