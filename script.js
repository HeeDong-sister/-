document.addEventListener('DOMContentLoaded', () => {
    console.log("지구 지킴이 홈페이지에 오신 것을 환영합니다!");

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add visible class to elements on scroll for fade-in effect (if we added that css)
    // For now, let's just make the logo bounce when clicked
    const logo = document.querySelector('.logo');
    if(logo) {
        logo.addEventListener('click', (e) => {
            // If it's the home page, prevent default and bounce
            if(window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                e.preventDefault();
                logo.style.animation = 'bounceIn 0.5s';
                setTimeout(() => {
                    logo.style.animation = '';
                }, 500);
            }
        });
    }
});
