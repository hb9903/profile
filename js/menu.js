document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector('.btn-menu img');
    const whiteSections = document.querySelectorAll('.hero, .about-me, .poster'); // 흰색 버튼이 필요한 섹션들

    const observer = new IntersectionObserver((entries) => {
        // 현재 버튼이 어느 섹션 위에 있는지 확인
        const btnRect = btnMenu.getBoundingClientRect();
        
        const isOnWhiteSection = Array.from(whiteSections).some(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= btnRect.top && rect.bottom >= btnRect.bottom;
        });

        if (isOnWhiteSection) {
            btnMenu.style.filter = 'invert(0)'; // 흰색
        } else {
            btnMenu.style.filter = 'invert(1)'; // 검은색
        }
    }, { 
        threshold: [0, 0.1, 0.5, 0.9, 1]
    });

    whiteSections.forEach(section => observer.observe(section));

    // 스크롤 시에도 체크
    window.addEventListener('scroll', () => {
        const btnRect = btnMenu.getBoundingClientRect();
        
        const isOnWhiteSection = Array.from(whiteSections).some(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= btnRect.top && rect.bottom >= btnRect.bottom;
        });

        if (isOnWhiteSection) {
            btnMenu.style.filter = 'invert(0)'; // 흰색
        } else {
            btnMenu.style.filter = 'invert(1)'; // 검은색
        }
    });
});