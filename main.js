const burger = document.querySelector(".burger");
const nav = document.querySelector(".flex-nav");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");




burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("showMenu");
    iconBurger.classList.toggle("active"); //tak
    iconX.classList.toggle("active"); //nie
});