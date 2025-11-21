document.addEventListener("DOMContentLoaded",()=>{
    let btnAllMenu = document.querySelector(".btn-menu")
    let hiddenLnb = document.querySelector(".header-smart")
    let btnClose = document.querySelector(".close-btn")

    // 전체메뉴 열기
    btnAllMenu.addEventListener("click",()=>{
        hiddenLnb.classList.add("on")
    })
    // 전체메뉴 닫기
    btnClose.addEventListener("click",()=>{
        hiddenLnb.classList.remove("on")
    })

    let mobilelnbli = document.querySelectorAll(".gnb-smart>li")
    mobilelnbli.forEach((li,index) => {
        li.addEventListener("click",()=>{
            li.classList.toggle("on")
        })
    });

 // 마우스 휠을 올리거나 내릴 때 사용하는 소스코드
    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop // 브라우저의 호환성을 생각하여 스크롤바가 내려온 길이를 계산

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 굴렸을 때
            hiddenLnb.classList.remove("on")
        }else{
            // 마우스 휠을 아래로 굴렸을 때
           hiddenLnb.classList.remove("on")
        }
        lastScrollTop = scrollTop
    })


})