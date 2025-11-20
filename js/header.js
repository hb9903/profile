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
})