document.addEventListener('DOMContentLoaded', () => {
    // Change header background color on click
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.classList.toggle('header-active');
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = 'Scroll to Top';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
