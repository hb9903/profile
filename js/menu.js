document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector('.btn-menu img');
    
    function updateButtonColor() {
        const btnRect = btnMenu.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        
        // 768px 이하일 때는 hero를 제외, 초과일 때는 hero 포함
        const whiteSections = isMobile 
            ? document.querySelectorAll('.about-me, .poster')  // 모바일: hero 제외
            : document.querySelectorAll('.hero, .about-me, .poster');  // PC: hero 포함
        
        const isOnWhiteSection = Array.from(whiteSections).some(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= btnRect.top && rect.bottom >= btnRect.bottom;
        });

        if (isOnWhiteSection) {
            btnMenu.style.filter = 'invert(0)'; // 흰색
        } else {
            btnMenu.style.filter = 'invert(1)'; // 검은색
        }
    }

    const observer = new IntersectionObserver(() => {
        updateButtonColor();
    }, { 
        threshold: [0, 0.1, 0.5, 0.9, 1]
    });

    // 모든 가능한 섹션 observe
    document.querySelectorAll('.hero, .about-me, .poster').forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', updateButtonColor);
    window.addEventListener('resize', updateButtonColor);
});