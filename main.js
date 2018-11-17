const burger = document.querySelector(".burger");
const nav = document.querySelector(".flex-nav");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");


burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("showMenu");
    iconBurger.classList.toggle("active");
    iconX.classList.toggle("active");
});


// nav jQuery
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})