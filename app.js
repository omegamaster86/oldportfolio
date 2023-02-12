const burger = document.querySelector(".burger");
const nav = document.querySelector(".wrapp");


burger.addEventListener("click",() => {
    nav.classList.toggle("nav-active");
    
    burger.classList.toggle("toggle");
});