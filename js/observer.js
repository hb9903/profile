document.addEventListener("DOMContentLoaded", () => {
    // 선택한 태그가 화면에 들어오고 나가는 것을 감지하여
    // 화면에 들어오면 보이게 하고, 화면 밖으로 나가면 안 보이게 하는 코드
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 태그가 화면에 들어왔을 때
                entry.target.classList.add("on");
            } else {
                // 태그가 화면 밖으로 나갔을 때
                entry.target.classList.remove("on");
            }
        });
    }, {
        threshold: 1 // 태그가 화면에 10% 이상 보일 때
    });

    // .ltr 클래스를 가진 모든 요소 감시 시작
    document.querySelectorAll(".ltr").forEach(tag => observer.observe(tag));
    
});