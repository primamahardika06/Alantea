document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector('.hamburger i');
    const hamburgerMenu = document.querySelector('.hamburger_menu');

    hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        if (hamburgerMenu.classList.contains('active')) {
            hamburgerIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            hamburgerIcon.classList.replace('bx-x', 'bx-menu');
        }
    });
});


