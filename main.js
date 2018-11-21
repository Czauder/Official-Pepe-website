const h2Achievements = []
const formErrors = []
const burger = document.querySelector(".burger");
const nav = document.querySelector(".flex-nav");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const h2PlayerTitle = document.querySelector(".player-content h2");
const title = document.querySelector(".title");
const scrollBtn = document.getElementById("scroll-button");
const form = document.querySelector('.menager-contact');
const formName = document.querySelector('input[name="name"]');
const formEmail = document.querySelector('input[name="email"]');
const formArea = document.querySelector('textarea[name="message"]');



// h2 title
animationTitle = () => {
    h2PlayerTitle.classList.add('on')
    // console.log('działa')
}

setTimeout(animationTitle, 3000);



//  burger
const menu = () => {
    burger.classList.toggle("active");
    nav.classList.toggle("showMenu");
    iconBurger.classList.toggle("active");
    iconX.classList.toggle("active");
};

burger.addEventListener("click", menu);

// close menu on body
// const closeMenu = (e) => {
//     e.stopPropagation()
//     if (nav.style.display === "block") {
//         nav.style.display = "none";

//         console.log('powinno się schować')
//     } else {
//         nav.style.display = "block";
//         console.log('działa')
//     }
// }
// document.body.addEventListener('click', closeMenu)


// nav - go to section 
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

// button menager - go to section 
$('.menager').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

// show clubs 
const showClub = () => {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    const $s2 = $('.s2');
    const $club = $('.s1');

    const clubFromTop = $s2.offset().top;

    const clubHeight = $club.height();

    if (scrollValue > clubFromTop + (clubHeight / 2) - windowHeight) {
        $s2.addClass('active');
        // console.log('załączenie animacji op1');
    }
}

$(document).on('scroll', showClub)



// scrollUp button; 
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// form validaion
const formValidator = (e) => {
    e.preventDefault()
    if (formName.value === "") {
        formErrors.push("Write your name.");
        formName.classList.add("invalid");
    } else {
        formName.classList.remove("invalid");
    }

    if (formEmail.value.indexOf('@') === -1) {
        formErrors.push("This e-mail address is not valid.");
        formEmail.classList.add("invalid");
    } else {
        formEmail.classList.remove("invalid");
    }

    if (formArea.value === "") {
        formErrors.push("Add a message.");
        formArea.classList.add("invalid");
    } else {
        formArea.classList.remove("invalid");
    }

}
form.addEventListener('submit', formValidator);